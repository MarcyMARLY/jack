import React, { Component } from 'react';
import './styles.css';

class LoginModal extends Component{
  render() {
    //if(this.props.isLogin){
      return(

        <div class='modal'>
          <div class = 'modal-body'>
            <div class="container">
              <span class="close">&times;</span>
              <form class="form-signin">
                <h2 class="form-signin-heading">Login</h2>

                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>

                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>

                <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
              </form>
            </div>
          </div>
        </div>

      );
  /*  } else {
      return null;
    }*/

  }
}
export default LoginModal;
