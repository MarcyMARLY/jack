import React, { Component } from 'react';
import './styles.css';
import OrganizationDescription from './organizationDescription';
import OrganozationHeader from './organzationHeader';

class organizationTemplate extends Component{
  render(){
    return(
      <div>
        <OrganozationHeader/>
        <OrganizationDescription/>
      </div>
    );
  }
}

export default organizationTemplate;
