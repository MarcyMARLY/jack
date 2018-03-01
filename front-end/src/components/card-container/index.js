import React from 'react'
import './styles.css'
import CardMaker from "../card/card-maker";

class CardContainer extends React.Component {

    render() {
        return (
            <div className="card-container">
                <CardMaker />
                <CardMaker />
                <CardMaker />
                <CardMaker />
                <CardMaker />
            </div>
        )
    }
}

export default CardContainer