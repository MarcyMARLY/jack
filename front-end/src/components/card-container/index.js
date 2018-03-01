import React from 'react'
import './styles.css'
import CardMaker from "../card/card-maker";
import CardView from "../card/card-view/CardView";

class CardContainer extends React.Component {

    render() {
        return (
            <div className="card-container">
                <CardView />
                <CardMaker />
            </div>
        )
    }
}

export default CardContainer