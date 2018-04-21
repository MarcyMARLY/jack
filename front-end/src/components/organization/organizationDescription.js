import React, { Component } from 'react';
import './styles.css';
import OrganizationEditModal from './organizationEditModal'
import axios from 'axios';

class organizationDescription extends Component{
  constructor(props) {
        super(props);
        this.state = {
          name:'Organization',
          description:'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
          address:'Seifullin 535 ',
          phone:'34-556-78',
          isEdit:false
        };
    }
  componentDidMount() {
    axios.get('http://127.0.0.1:3001/api/organizations/').then(res =>{

      this.setState({
        name: res.data[0].name,
        description: res.data[0].description,
        address:res.data[0].address,
      });
    })
  }
  handleEditOpen = () =>{
    this.setState({
      isEdit:true
    });
  };
  handleEditClose = () => {
    this.setState({
      isEdit:false
    });
  };

  render(){
    if(this.state.isEdit){
      return(
        <div>
          <OrganizationEditModal onHandleEditClose = {this.handleEditClose}
              name = {this.state.name}
              description = {this.state.description}
              address = {this.state.address}
              phone = {this.state.phone}
              />
          <section class="jumbotron text-center">
            <div class="container">
            <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
              <h1 class="jumbotron-heading">{this.state.name}</h1>
              <p class="lead text-muted">{this.state.description}</p>
              <p>
              <div class = "description-component">
                <label> Address:</label>
                <p class="lead">{this.state.address}</p>
              </div>
              <div class = "description-component">
                <label> Telephone:</label>
                <p class="lead">{this.state.phone}</p>
              </div>
              </p>
              <button class="btn btn-sm btn-primary btn-block " onClick={this.handleEditOpen} type="submit">Edit</button>
            </div>
          </section>
        </div>
      );
    }else{

      return(
        <section class="jumbotron text-center">
          <div class="container">
          <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
            <h1 class="jumbotron-heading">{this.state.name}</h1>
            <p class="lead text-muted">{this.state.description}</p>
            <p>
            <div class = "description-component">
              <label> Address:</label>
              <p class="lead">{this.state.address}</p>
            </div>
            <div class = "description-component">
              <label> Telephone:</label>
              <p class="lead">34-556-78</p>
            </div>
            </p>
            <button class="btn btn-sm btn-primary btn-block " onClick={this.handleEditOpen} type="submit">Edit</button>
          </div>
        </section>
      );
    }
  }
}

export default organizationDescription;
