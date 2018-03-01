import React, { Component } from 'react';
import Header from '../header/index'
import CardGather from "../card-gather/gather";
import Landing from "../landing";
import CardsBoard from "../card-gather-board";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

class App extends Component {
    render() {
        return (
            <div>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/board" component={CardsBoard} />
              </Switch>
            </div>
        );
    }
}

export default App;
