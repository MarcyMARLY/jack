import React from 'react'
import './style.css'

class CardGather extends React.Component {

    render() {
        return (
            <div className="card-gather">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default CardGather