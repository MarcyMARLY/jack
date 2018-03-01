import React from 'react'
import GatherList from "../card-gather/gather-list";
import GatherMaker from "../card-gather/gather-maker";

class CardsBoard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gathers: [
                {
                    title: "First Gather"
                }
            ]
        }
    }

    handleGatherCreation = (gatherObject) => {
        let gatherListCopy = this.state.gathers.slice();
        gatherListCopy.push(gatherObject);
        this.setState({
            gathers: gatherListCopy
        });
        console.log(this.state.gathers)
    };

    render() {
        return(
            <div className="container">
                <GatherList gathers={this.state.gathers} />
                <GatherMaker onGatherCreateModalSubmit={this.handleGatherCreation} />
            </div>
        )
    }
}

export default CardsBoard