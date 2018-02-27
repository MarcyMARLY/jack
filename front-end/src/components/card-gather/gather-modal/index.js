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

    render() {

        if (!this.props.show) return null;

        return (
            <Modal
                isOpen={this.props.show}
                style={customStyles}
                contentLabel="Gather Card creator">

                <h2>Create Gather</h2>
                <div>Will be beautified soon</div>
                <form>
                    <input />
                </form>
            </Modal>
        );
    }
}

export default GatherModal