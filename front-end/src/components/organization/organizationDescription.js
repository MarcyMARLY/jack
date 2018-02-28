import React, { Component } from 'react';
import './styles.css';

class organizationDescription extends Component{
  render(){
    return(
      <section class="jumbotron text-center">
        <div class="container">
        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
          <h1 class="jumbotron-heading">Organization</h1>
          <p class="lead text-muted">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
          <p>
          <div class = "description-component">
            <label> Address:</label>
            <p class="lead">Seifullin 535 </p>
          </div>
          <div class = "description-component">
            <label> Telephone:</label>
            <p class="lead">34-556-78</p>
          </div>
          </p>
        </div>
      </section>
    );
  }
}

export default organizationDescription;
