import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/index';
import CardView from './components/card/card-view/CardView';
import RegistrationModal from './components/registration/RegistrationModal';
import LoginModal from './components/Login/LoginModal';
import OrganizationTemplate from './components/organization/organizationTemplate';
import OrganizationEditModal from './components/organization/organizationEditModal'
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Landing from "./components/landing";

ReactDOM.render(
    <BrowserRouter>
        <OrganizationTemplate/>
    </BrowserRouter>,
    document.getElementById('root'));

