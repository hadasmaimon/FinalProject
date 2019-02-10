import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Start from './components/main/start';
import Main from './components/main';
import NewUser from './components/newUser';

class App extends Component {

  render() {

    return (
      <div id='Main' className="App">
        
        <Start color='gray' />
        <div   class='ui top attached tabular menu'>
                <a class='item active' data-tab='first'>First</a>
                <a class='item' data-tab='second'>Second</a>
                <a class='item' data-tab='third'>Third</a>
            </div>
            <div  class='ui bottom attached tab segment active' data-tab='first'>
            <Main />
            </div>
            <div class='ui bottom attached tab segment' data-tab='second'>
            second
            </div>
            <div class='ui bottom attached tab segment' data-tab='third'>
                Third
            </div>
        {/* <button onClick={() => <Redirect to='/newUser' />} /> */}
        <NewUser />
        

        {/* <div className="row"></div> */}
        {/* <Router>
          <Switch>
            <Route path="/" Component={Main} />
            <Route path="/newUser" Component={NewUser} />
          </Switch>
        </Router> */}
      </div >
    );
  }
}

export default App;
