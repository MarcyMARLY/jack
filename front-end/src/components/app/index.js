import React, { Component } from 'react';
import './styles.css';
import Header from '../header/index'

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <h1>Hello, Jack</h1>
      </div>
    );
  }
}

export default App;
