import React from 'react'
import GatherList from "../card-gather/gather-list";
import GatherMaker from "../card-gather/gather-maker";
import Header from "../header";

class CardsBoard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gathers: [
                {
                    id: 1,
                    title: "First Gather",
                    cards: [
                        {
                            id: "1",
                            title: "Coffee",
                            dueDate: "12.12.12"
                        },
                        {
                            id: "2",
                            title: "Gym",
                            dueDate: "12.12.14"
                        },
                        {
                            id: "3",
                            title: "Салон",
                            dueDate: "12.12.14"
                        }
                    ]
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
            <div>
                <Header />
                <div className="container">
                    <GatherList gathers={this.state.gathers} />
                    <GatherMaker onGatherCreateModalSubmit={this.handleGatherCreation} />
                </div>
            </div>
        )
    }
}

export default CardsBoard