import React from 'react'
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        width                 : '60%',
        height                : '50%',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class GatherModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ""
        }
    }

    onTitleChange = (event) => {
        let changedTitle = event.target.value;
        this.setState({
            title: changedTitle
        });
    };

    onCloseButtonClick = () => {
        this.props.onModalClose();
    };

    onCreateButtonClick = () => {
        let createdGather = {
            "title": this.state.title
        };
        this.setState({
            title: ""
        });
        this.props.onGatherCreateModalSubmit(createdGather);
        this.props.onModalClose();
    };

    render() {

        return (
            <Modal
                isOpen={this.props.show}
                style={customStyles}
                contentLabel="Gather Card creator">

                <h2>Create Gather</h2>
                <div>Title</div>
                <form>
                    <input value={this.state.title} onChange={this.onTitleChange}/>
                    <button onClick={this.onCreateButtonClick}>Create</button>
                    <button onClick={this.onCloseButtonClick}>Close</button>
                </form>
            </Modal>
        );
    }
}

export default GatherModal