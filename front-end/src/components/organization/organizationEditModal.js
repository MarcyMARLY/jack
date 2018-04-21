import React, { Component } from 'react';
import './styles.css';
import axios from 'axios';

class OrganizationEditModal extends Component{
  constructor(props) {
        super(props);
        this.state = {
          name:this.props.name,
          description:this.props.description,
          address:this.props.address,

        };
    }
    handleChange = (e) =>{
      this.setState({
        [e.target.name]:e.target.value
      });
    }
    onHandleEditSave = (e) =>{

      const organization ={
        name: this.state.name,
        description: this.state.description,
        address: this.state.address
      };
      axios.put('http://127.0.0.1:3001/api/organizations/1/',{name: this.state.name,
      description: this.state.description,
      address: this.state.address})
      .then(res => {
      });
      this.props.onHandleEditClose();
    }
  render() {

      return(

        <div class='modal'>
          <div class = 'modal-body'>
            <div class="container">
              <span class="close" onClick = {this.props.onHandleEditClose}>&times;</span>
              <form class="form-signin" onChange={this.handleChange}>
                <h2 class="form-signin-heading">Edit</h2>

                <label for="orName" >Organization name</label>
                <input type="text"  name= "name" id="orName" class="form-control"  required="" autofocus="" defaultValue={this.props.name}/>

                <label for="description" >Description</label>
                <input type="text" name = "description" id="description" class="form-control" defaultValue={this.props.description} required=""/>

                <label for="address" >Address</label>
                <input type="address"name="address" id="address" class="form-control" defaultValue={this.props.address} required=""/>

                <button class="btn btn-sm btn-primary btn-block" type="submit" onClick = {this.onHandleEditSave}>Save</button>
                <button class="btn btn-sm btn-primary btn-block" type="submit" onClick = {this.props.onHandleEditClose}>Cancel</button>
              </form>
            </div>
          </div>
        </div>

      );


  }
}
export default OrganizationEditModal;
