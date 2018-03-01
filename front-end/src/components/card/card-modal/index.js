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

class CardModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title:'',
            deadline:''
        }



    }

    handleName = (e) =>{
        this.setState({
            title:e.target.value
        });
    };
    handleDeadline = (e) =>{
        this.setState({
            deadline:e.target.value
        });
    }

    createCard = (e) => {
        e.preventDefault();
        this.props.onCreateCard(this.state.title, this.state.deadline, this.props.gatherId);
    }

    render() {

        return(
            <Modal
                isOpen={this.props.isCreateCard}
                style={customStyles}
                contentLabel="Gather Card creator">

                <h2>Create Card</h2>

                <form>

                    <label for="cardName" >Card name</label>
                    <input type="text" id="cardName" class="form-control" placeholder="Card name" required="" autofocus="" onChange={this.handleName}/>

                    <label for="deadline" >Deadline</label>
                    <input type="text" id="deadline" class="form-control" placeholder="Deadline" required="" onChange={this.handleDeadline}/>

                    <button onClick={this.createCard}>Create</button>
                    <button onClick={this.props.onCloseClicked}>Close</button>
                </form>
            </Modal>
        );

    }


}

export default CardModal;