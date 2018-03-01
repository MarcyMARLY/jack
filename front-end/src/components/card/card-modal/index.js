import React, { Component } from 'react';
import './styles.css';
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

class CardModal extends Component{
    render() {

        return(
            <Modal
                isOpen={this.props.isCreateCard}
                style={customStyles}
                contentLabel="Gather Card creator">

                <h2>Create Card</h2>

                <form>

                    <label for="cardName" >Card name</label>
                    <input type="text" id="cardName" class="form-control" placeholder="Card name" required="" autofocus=""/>

                    <label for="deadline" >Deadline</label>
                    <input type="text" id="deadline" class="form-control" placeholder="Deadline" required=""/>

                    <button onClick={this.props.onCloseClicked}>Create</button>
                    <button onClick={this.props.onCloseClicked}>Close</button>
                </form>
            </Modal>
        );

    }


}

export default CardModal;