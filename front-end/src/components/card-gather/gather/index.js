import React from 'react'

class CardGather extends React.Component {

    render() {
        return (
            <div>
                <h3>{this.props.id}</h3>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default CardGather