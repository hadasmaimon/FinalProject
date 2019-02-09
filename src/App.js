import React, { Component } from 'react';
import './App.scss';
import NewUser from './components/newUser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewUser />
      </div>
    );
  }
}

export default App;
