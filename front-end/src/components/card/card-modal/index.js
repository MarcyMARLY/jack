import React, {Component} from 'react';
import './styles.css';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: '60%',
        height: '80%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class CardModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            creationDate: '',
            deactivate_at: '',
        }
    }

    handleName = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    createCard = (e) => {
        e.preventDefault();
        this.props.onCreateCard(this.state.title, this.state.deactivate_at, this.state.description, this.props.gatherId);
        this.props.onCloseClicked()
    };

    render() {

        return (
            <Modal
                isOpen={this.props.isCreateCard}
                style={customStyles}
                contentLabel="Gather Card creator">

                <h2>Create new card</h2>
                <div className="modal-flex-container">
                    <div className="modal-form">
                        <form className="card-modal-form">
                            <div class="form-group">
                                <div className="col-sm-8">
                                    <label for="collection name">Card title</label>
                                    <input type="text" value={this.state.title} onChange={this.handleName}
                                           className="form-control" id="collectionName"
                                           placeholder="Enter card title"
                                           name="title"/>
                                    <small class="form-text text-muted">Card name will be displayed on card</small>
                                </div>
                            </div>
                            <div class="form-group">
                                <div className="col-sm-8">
                                    <label for="collectionDescription">Description of card</label>
                                    <textarea className="form-control" name="description" placeholder="Description"
                                              value={this.state.description} onChange={this.handleName}/>
                                    <small className="form-text text-muted">Description of card is optional</small>
                                </div>
                            </div>
                            <div class="form-group">
                                <div className="col-sm-8">
                                    <label for="collectionDescription">Card deactivation time</label>
                                    <input type="date" className="form-control" name="deactivate_at"
                                           value={this.state.deactivate_at} onChange={this.handleName}/>
                                    <small className="form-text text-muted">Date when card will be deactivated</small>
                                </div>
                            </div>
                            <button onClick={this.createCard} type="submit"
                                    class="btn btn-primary gather-modal-button">Create
                            </button>
                            <button onClick={this.props.onCloseClicked} class="btn btn-dark gather-modal-button">Close
                            </button>
                        </form>
                    </div>
                </div>
            </Modal>
        );

    }


}

export default CardModal;