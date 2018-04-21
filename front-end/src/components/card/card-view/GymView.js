import React, {Component} from 'react';
import './styles.css';

class GymView extends Component {
    render() {
        return (
            <div class="card-gym">
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
                    </div>
                </div>
            </div>
        );
    }

}

export default GymView;
