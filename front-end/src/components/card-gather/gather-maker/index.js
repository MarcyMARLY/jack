import React from 'react'
import GatherModal from "../gather-modal";
import './styles.css'
import FaPlusSquareO from "react-icons/lib/fa/plus-square-o";

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
            <div>
                <div onClick={this.handleModalOpen} className="gather-maker container">
                    <p>Wanna some card containers ?</p>
                    <FaPlusSquareO size={60}/>
                </div>
                <GatherModal show={this.state.isOpen}
                             onModalClose={this.handleModalClose}
                             onGatherCreateModalSubmit={this.props.onGatherCreateModalSubmit}>
                </GatherModal>
            </div>
        );
    }
}

export default GatherMaker
