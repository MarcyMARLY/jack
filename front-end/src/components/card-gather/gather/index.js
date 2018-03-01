import React from 'react'
import './style.css'
import CardContainer from "../../card-container";

class CardGather extends React.Component {

    render() {
        return (
            <div className="card-gather container">
                <h1>{this.props.title}</h1>
                <hr />
                <CardContainer cardList={this.props.cards} />
            </div>
        )
    }
}

export default CardGather