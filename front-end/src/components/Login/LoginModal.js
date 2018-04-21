import React, { Component } from 'react';
import './styles.css';
import Registration from '../registration/RegistrationModal'
import axios from 'axios';
import { Route, Redirect } from 'react-router'


class LoginModal extends Component{
  constructor(props) {
      super(props);
      this.state = {
          isRegistration: false,
          isLogin: true,
          username:'',
          password:''
      };
  }
  onLoginChange =() =>{

    this.props.onLoginClose;
    this.setState({
        isRegistration: false,
        isLogin: true
    });


  }

  onLogin = (event) => {
    event.preventDefault()
    axios.post('http://127.0.0.1:3001/api/users/checks/',{username: this.state.username,
      password: this.state.password})
    .then(res => {
      if (res.status === 200) {
        console.log('uid' + res.data.userId)
        this.props.userLoged(res.data.userId)
        this.props.update()
      } else {
        alert("User not found")
      }
    });
  }

  handleRegistrationOpen = () => {
      this.setState({
          isRegistration: true,
          isLogin: false
      });
  };

  handleLoginOpen = () => {
      this.setState({
          isRegistration: false,
          isLogin: true
      });
  };

  handleRegistrationClose = () => {
      this.setState({
          isRegistration: false,
          isLogin: true
      });
  };

  handleLoginClose = () => {
      this.setState({
          isRegistration: false,
          isLogin: false
      });
  };
  handleChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  render() {
    if(this.state.isLogin){
      return(

        <div class='modal'>
          <div class = 'modal-content'>
            <div class="modal-header">
            <h4 class="modal-title">Login</h4>
            <button type="button" class="close" data-dismiss="modal" onClick = {this.props.onLoginClose}>&times;</button>
          </div>
            <div class="modal-body">
              <form class="form-signin" onChange={this.handleChange}>

                <label htmlFor="inputEmail" class="sr-only">Username</label>
                <input type="text" name ="username" class = "mb-3" id="inputEmail" class="form-control" placeholder="Username" required="" />

                <label htmlFor="inputPassword" class="sr-only">Password</label>
                <input type="password" name ="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>

                <button class="btn  btn-primary btn-block" type="submit" onClick ={this.onLogin}>Login</button>
                <label >Dont have an account?</label>
                <label><a href="#" onClick = {this.onLoginChange}>Register</a></label>
              </form>
            </div>
          </div>
        </div>


      );
    }else if (this.state.isRegistration){
      return(
        <Registration onRegistrationClose={this.handleRegistrationClose}/>
      );
    }


  }
}
export default LoginModal;
