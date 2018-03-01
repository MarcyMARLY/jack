import React from 'react'
import GatherModal from "../gather-modal";

class GatherMaker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    handleModalClose = () => {
        this.setState({
            isOpen: false
        });
    };

    handleModalOpen = () => {
        this.setState({
            isOpen: true
        });
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.handleModalOpen}>
                    Open the modal
                </button>

                <GatherModal show={this.state.isOpen}
                             onModalClose={this.handleModalClose}
                             onGatherCreateModalSubmit={this.props.onGatherCreateModalSubmit}>
                </GatherModal>
            </div>
        );
    }
}

export default GatherMaker
