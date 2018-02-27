import React from 'react'
import CardGather from "../gather";

class GatherList extends React.Component {

    render() {
        const gathers = this.props.gathers.map((gather) => (
            <CardGather
                key={gather.id}
                id={gather.id}
                title={gather.title} />
            )
        );

        return (
            <div id="gathers">
                {gathers}
            </div>
        )
    }
}

export default GatherList