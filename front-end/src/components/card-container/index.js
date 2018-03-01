import React from 'react'
import './styles.css'
import CardMaker from "../card/card-maker";
import CardView from "../card/card-view/CardView";

class CardContainer extends React.Component {


    render() {
        const cards = this.props.cards.map((card) => (
                <CardView
                    title={card.title}
                    dueDate={card.dueDate} />
            )
        );
        return (
            <div className="card-container">
                { cards }
                <CardMaker gatherId={this.props.gatherId} onCreateCard={this.props.onCreateCard}/>
            </div>
        )
    }
}

export default CardContainer