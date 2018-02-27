import React from 'react'
import GatherModal from "../gather-modal";

class GatherMaker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.toggleModal}>
                    Open the modal
                </button>

                <GatherModal show={this.state.isOpen}
                       onClose={this.toggleModal}>
                    `Here's some content for the modal`
                </GatherModal>
            </div>
        );
    }
}

export default GatherMaker
