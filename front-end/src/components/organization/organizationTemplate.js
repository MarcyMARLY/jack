import React, { Component } from 'react';
import './styles.css';
import OrganizationDescription from './organizationDescription';

class organizationTemplate extends Component{
  render(){
    return(
      <div>
        <OrganizationDescription/>
      </div>
    );
  }
}

export default organizationTemplate;
