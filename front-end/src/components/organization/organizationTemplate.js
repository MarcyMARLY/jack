import React, { Component } from 'react';
import './styles.css';
import OrganizationDescription from './organizationDescription';
import OrganozationHeader from './organzationHeader';
import Footer from '../footer/index'

class OrganizationTemplate extends Component{
  render(){
    return(
      <div>
        <OrganozationHeader/>
        <OrganizationDescription/>
        <Footer/>
      </div>
    );
  }
}

export default OrganizationTemplate;
