import React, { Component } from 'react';
import './styles.css';
import Header from '../header/index'
import CardGather from "../card-gather/gather";
import CardsBoard from "../card-gather-board";

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <CardsBoard />
      </div>
    );
  }
}

export default App;
