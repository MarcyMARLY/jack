import React, {Component} from 'react';
import './styles.css';

class CardView extends Component{
  render(){
    return(
      <div class="card-jack" >
        <div class = 'circles-jack'>
          <label class = 'circle'>
          </label>
          <label class = 'circle'>
          </label>
          <label class = 'circle'>
          </label>
          <label class = 'circle'>
          </label>
          <label class = 'circle'>
          </label>
          <label class = 'circle'>
          </label>

        </div>
        <div class="card-body">
          <div class="card-body-name">
            <label>{this.props.title}</label>
          </div>
          <div class="card-body-info">
          <label>{this.props.dueDate}</label>

          </div>
        </div>
      </div>
    );
  }

}
export default CardView;
