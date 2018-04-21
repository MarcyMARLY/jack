import React from 'react'
import './style.css'
import CardContainer from "../../card-container";
import {MdDeleteForever} from "react-icons/lib/md/index";

class CardGather extends React.Component {

    deleteGather = () => {
        console.log(this.props.id)
    };

    render() {
        return (
            <div className="card-gather container">
                <h1 className="gather-header">{this.props.title}</h1>
                <div onClick={this.deleteGather} className="gather-delete">
                    <MdDeleteForever size={50}/>
                </div>
                <hr/>
                <CardContainer cards={this.props.cards} gatherId={this.props.id}
                               onCreateCard={this.props.onCreateCard}/>
            </div>
        )
    }
}

export default CardGather