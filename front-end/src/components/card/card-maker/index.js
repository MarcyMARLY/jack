import React from 'react'
import './styles.css'

class CardMaker extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card-maker">
                <button>Create</button>
            </div>
        )
    }
}

export default CardMaker