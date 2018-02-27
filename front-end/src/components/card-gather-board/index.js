import React from 'react'
import GatherList from "../card-gather/gather-list";
import GatherMaker from "../card-gather/gather-maker";

class CardsBoard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gathers: [
                {
                    id: "gather-a",
                    title: "First Gather"
                }
            ]
        }
    }

    render() {
        return(
            <div>
                <GatherList gathers={this.state.gathers} />
                <GatherMaker />
            </div>
        )
    }
}

export default CardsBoard