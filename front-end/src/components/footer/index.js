import React, { Component } from 'react';
import './styles.css';

class Footer extends Component{
  render(){
    return(
      <footer class="pt-4 my-md-3 pt-md-3 ">
        <div class="row">
          <div class="col-12 col-md">
            <small class="d-block mb-3 text-muted">© 2017-2018</small>
          </div>

          <div class="col-6 col-md">
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Android app</a></li>
              <li><a class="text-muted" href="#">IOS app</a></li>

            </ul>
          </div>
          <div class="col-6 col-md">
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><a class="text-muted" href="#">Privacy</a></li>
              <li><a class="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
