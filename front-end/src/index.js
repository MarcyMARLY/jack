import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/index';
import CardView from './components/card/card-view/CardView';
import BrowserRouter from "react-router-dom/es/BrowserRouter";

ReactDOM.render(
    <BrowserRouter>
        <CardView />
    </BrowserRouter>,
    document.getElementById('root'));
