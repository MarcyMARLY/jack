import React from 'react'
import './style.css'
import CardContainer from "../../card-container";

class CardGather extends React.Component {

    render() {
        return (
            <div className="card-gather container">
                <h1 className="gather-header">{this.props.title}</h1>
                <hr />
                <CardContainer cards={this.props.cards} gatherId={this.props.id} onCreateCard={this.props.onCreateCard} />
            </div>
        )
    }
}

export default CardGather