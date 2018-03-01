import React, { Component } from 'react';
import './styles.css';

class OrganizationEditModal extends Component{
  render() {

      return(

        <div class='modal'>
          <div class = 'modal-body'>
            <div class="container">
              <span class="close" onClick = {this.props.onHandleEditClose}>&times;</span>
              <form class="form-signin">
                <h2 class="form-signin-heading">Edit</h2>

                <label for="orName" >Organization name</label>
                <input type="text" id="orName" class="form-control"  required="" autofocus="" defaultValue={this.props.name}/>

                <label for="description" >Description</label>
                <input type="text" id="description" class="form-control" defaultValue={this.props.description} required=""/>

                <label for="address" >Address</label>
                <input type="address" id="address" class="form-control" defaultValue={this.props.address} required=""/>

                <label for="phone" >Phone</label>
                <input type="phone" id="phone" class="form-control" defaultValue={this.props.phone} required=""/>

                <button class="btn btn-sm btn-primary btn-block" type="submit" onClick = {this.props.onHandleEditClose}>Save</button>
                <button class="btn btn-sm btn-primary btn-block" type="submit" onClick = {this.props.onHandleEditClose}>Cancel</button>
              </form>
            </div>
          </div>
        </div>

      );


  }
}
export default OrganizationEditModal;
