import React, { Component } from 'react';
import './styles.css';

class LoginModal extends Component{
  render() {

      return(

        <div class='modal'>
          <div class = 'modal-content'>
            <div class="modal-header">
            <h4 class="modal-title">Login</h4>
            <button type="button" class="close" data-dismiss="modal" onClick = {this.props.onLoginClose}>&times;</button>
          </div>
            <div class="modal-body">
              <form class="form-signin">

                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" class = "mb-3" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>

                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>

                <button class="btn  btn-primary btn-block" type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>


      );


  }
}
export default LoginModal;
