import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Start from './components/main/start';
import Main from './components/main';
import NewUser from './components/newUser';
import InputP from './components/input/inputP';
import Chart from '../src/components/common/chart';
import * as style from './components/tab/styles.scss';
import { render } from "react-dom";
import Tabs from './components/tab/tabs';


{/* <InputP color='gray' /> */}
        
function App() {
  return (<div> <Start color='gray' />
    <div >
     
      {/* <h1>Tabs Demo</h1> */}
     <Tabs>
      <div label="MAIN ">
      <Main /> <em></em>!
      </div>
      <div label="REQUEST">
      <NewUser /> <em>Thats all</em>!
      </div>
      <div label="DIAGRAMS">
        <Chart/> <em>done</em>!
      </div>
    </Tabs>
    </div>
     </div>
  );
}

// const container = document.createElement('div');
// document.body.appendChild(container);
// render(<App />, container);// אם אני רוצה להריץ שוב ושוב

export default App;
// // לעשות שהמסך יהיה בצע בהיר
// // איך עושים און קליק
// // איך שומרים משתנה
// // ואיך עושים גם בצד
// // איך לקחת תוכן
// // ספיננר
// class App extends Component {

//   render() {

//     return (
//       <div id='Main' className="App">
//         <InputP color='gray' />
//         <Start color='gray' />
//         <div   class='ui top attached tabular menu'>
//                 <a class='item active' data-tab='first'>New Projects</a>
//                 <a class='item ' data-tab='second'>Second</a>
//                 <a class='item active' data-tab='third'>Third</a>
//             </div>
//             <div  class='ui bottom attached tab segment active' data-tab='first'>
//             <Main />
//             </div>
//             {/* onClick={() => {
//                 //function
//                 ; */}
//             <div class='ui bottom attached tab segment active' data-tab='second'>
//             <NewUser />
//             </div>
//             <div class='ui bottom attached tab segment active' data-tab='third'>
//                 Third
//             </div>
//         {/* <button onClick={() => <Redirect to='/newUser' />} /> */}
        
        
 
//         <div className="row"></div> }
//         {/* { <Router>
//            <Switch>
//              <Route path="/" Component={Main} />
//              <Route path="/newUser" Component={NewUser} />
//            </Switch>
//          </Router> */}
//         }
//         </div >
//     );
//   }
// }

// export default App;


