import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/index';
import CardView from './components/card/card-view/CardView';
import RegistrationModal from './components/Registration/RegistrationModal';
import BrowserRouter from "react-router-dom/es/BrowserRouter";

ReactDOM.render(
    <BrowserRouter>
        <RegistrationModal />
    </BrowserRouter>,
    document.getElementById('root'));
