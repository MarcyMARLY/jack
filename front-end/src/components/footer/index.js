import React, { Component } from 'react';
import './styles.css';

class Footer extends Component{
  render(){
    return(
      <footer class = 'jack-footer'>
        <div class = 'jack-footer-body'>
          <div class = 'float-left' >
            <div >
              <label class = 'float-left-element'>Contact:</label>
              <label class = 'float-left-element'>contact dsh</label>
            </div>
            <div>
              <label class = 'float-left-element'>Contact:</label>
              <label class = 'float-left-element'>contact dsh</label>
            </div>


          </div>
        </div>
        <div>
        <div class = 'jack-footer-body'>
          <label class = 'float-left-element'>Android:</label>
          <label class = 'float-left-element'>'some link'</label>
        </div>
        </div>
        <div class = 'jack-footer-body'>
            <p>© Jack 2018</p>
        </div>
      </footer>
    );
  }
}
export default Footer;
