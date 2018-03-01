import React from 'react'
import './styles.css'
import CardModal from '../card-modal/index'

class CardMaker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCreateCard:false
        }
    }

    handleCardModalOpen =() => {
        this.setState({
            isCreateCard:true
        });
    };

    handleCardModalClose =() => {
        this.setState({
            isCreateCard:false
        });
    };

    render() {

            return (
                <div className="card-maker">
                    <button onClick={this.handleCardModalOpen}>Create</button>
                    <CardModal gatherId={this.props.gatherId} isCreateCard = {this.state.isCreateCard} onCloseClicked = {this.handleCardModalClose} onCreateCard = {this.props.onCreateCard}/>
                </div>
            );
    }
}

export default CardMaker