import React, { Component } from 'react';
import './styles.css';

class CardView extends Component{
  state = {};
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
          <div class = "card-body-name">
            <label>Card</label>
          </div>
          <div class = "card-body-info">
          <label>Due: 12.12.12</label>

          </div>
        </div>
      </div>
    );
  }

}
export default CardView;
