import React from 'react'
import Modal from 'react-modal';
import './styles.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: '60%',
        height: '80s%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class GatherModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            cards: []
        }
    }

    onTitleChange = (event) => {
        let changedTitle = event.target.value;

        this.setState({
            [event.target.name]: changedTitle,
        });
    };

    onCloseButtonClick = () => {
        this.props.onModalClose();
    };

    onCreateButtonClick = () => {
        let createdGather = {
            "title": this.state.title,
            "description": this.state.description,
            "cards": []
        };
        this.setState({
            title: "",
            description: "",
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

                <h2>New cards collection</h2>
                <div className="gather-inputs">
                    <form>
                        <div class="form-group">
                            <div className="col-sm-8">
                                <label for="collection name">Collection name</label>
                                <input type="text" value={this.state.title} onChange={this.onTitleChange}
                                       className="form-control" id="collectionName"
                                       placeholder="Enter collection name"
                                       name="title"/>
                                <small class="form-text text-muted">Collection name should be concise and clear</small>
                            </div>
                        </div>
                        <div class="form-group">
                            <div className="col-sm-8">
                                <label for="collectionDescription">Small description</label>
                                <textarea className="form-control" name="description" placeholder="Description"
                                          value={this.state.description} onChange={this.onTitleChange}/>
                                <small className="form-text text-muted">Description is optional</small>
                            </div>
                        </div>
                        <button onClick={this.onCreateButtonClick} type="submit" class="btn btn-primary gather-modal-button">Create</button>
                        <button onClick={this.onCloseButtonClick} class="btn btn-dark gather-modal-button">Close</button>
                    </form>
                </div>
            </Modal>
        );
    }
}

export default GatherModal