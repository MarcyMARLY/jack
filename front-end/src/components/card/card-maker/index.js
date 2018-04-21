import React from 'react'
import './styles.css'
import CardModal from '../card-modal/index'
import FaPlusCircle from "react-icons/lib/fa/plus-square";

class CardMaker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCreateCard: false
        }
    }

    handleCardModalOpen = () => {
        this.setState({
            isCreateCard: true
        });
    };

    handleCardModalClose = () => {
        this.setState({
            isCreateCard: false
        });
    };

    render() {
        return (
            <div>
                <div onClick={this.handleCardModalOpen} className="card-maker">
                    <span><FaPlusCircle size={60}/></span>
                </div>
                <CardModal gatherId={this.props.gatherId} isCreateCard={this.state.isCreateCard}
                           onCloseClicked={this.handleCardModalClose} onCreateCard={this.props.onCreateCard}/>
            </div>
        );
    }
}

export default CardMaker