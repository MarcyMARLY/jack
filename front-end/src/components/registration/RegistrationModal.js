import React, { Component } from 'react';
import './styles.css';
import axios from 'axios';

class RegistrationModal extends Component{
  constructor(props) {
        super(props);
        this.state = {
          username:'',
          password:'',

        };
    }
  handleChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  register =()=>{
    axios.post('http://127.0.0.1:3001/api/users/',{username: this.state.username,
    password: this.state.password})
    .then(res => {
    });
  }
  render() {
      return(
        <div class='modal'>
          <div class = 'modal-body'>
            <div class="container">
              <span class="close" onClick = {this.props.onRegistrationClose}>&times;</span>
              <form class="form-signin" onChange={this.handleChange}>
                <h2 class="form-signin-heading">Register</h2>

                <label for="inputEmail" class="sr-only">Username</label>
                <input type="text"name="username" id="inputEmail" class="form-control" placeholder="Username" required="" autofocus=""/>

                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>

                <button class="btn btn-lg btn-primary btn-block" type="submit" onClick = {this.register}>Register</button>
              </form>
            </div>
          </div>
        </div>
      );


  }
}
export default RegistrationModal;
