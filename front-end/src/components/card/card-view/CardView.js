import React, {Component} from 'react';
import './styles.css';
import {MdDeleteForever} from "react-icons/lib/md/index";

class CardView extends Component {

    deleteCard = () => {
        console.log(this.props.id)
    };

    render() {
        return (
            <div class="card-jack">
                <div class='circles-jack'>
                    <label class='circle'>
                    </label>
                    <label class='circle'>
                    </label>
                    <label class='circle'>
                    </label>
                    <label class='circle'>
                    </label>
                    <label class='circle'>
                    </label>
                    <label class='circle'>
                    </label>
                </div>
                <div class="card-body">
                    <div class="card-body-name">
                        <label>{this.props.title}</label>
                    </div>
                    <div class="card-body-info">
                        <label>{this.props.deactivate_at}</label>
                        <div onClick={this.deleteCard} className="delete-button">
                            <MdDeleteForever size={30}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CardView;
