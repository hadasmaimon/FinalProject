import React, { Component } from 'react';
import './App.scss';
import Approve from './components/newUser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Approve />
      </div>
    );
  }
}

export default App;
