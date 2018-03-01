import React, { Component } from 'react';
import './styles.css';
import OrganizationDescription from './organizationDescription';
import OrganozationHeader from './organzationHeader';
import Footer from '../footer/index'

class organizationTemplate extends Component{
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

export default organizationTemplate;
