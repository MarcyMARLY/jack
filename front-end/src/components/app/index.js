import React, { Component } from 'react';
import Header from '../header/index'
import CardGather from "../card-gather/gather";
import Landing from "../landing";
import CardsBoard from "../card-gather-board";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import OrganizationTemplate from "../organization/organizationTemplate";
import Home from "../landing/index"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      organizationId: -1
    }
  }

  userLogedIn = (id) => {
    this.setState({
      organizationId: id
    })
    sessionStorage.setItem('organizationId', id)
  }

    render() {
        return (
            <div>
              <Switch>
                <Route exact path="/" component={() => <Landing userLoged={this.userLogedIn} organizationId={this.state.organizationId} />} />
                <Route path="/board" component={() => <CardsBoard organizationId={this.state.organizationId} /> } />
                <Route path="/organization" component={ () => <OrganizationTemplate organizationId={this.state.organizationId} /> } />
                <Route path="/home" component={Home} />
              </Switch>
            </div>
        );
    }
}

export default App;
