
import React from 'react';
import Tabs from '../components/about/tab';
import Hello from '../components/first';
import Help from '../components/about';
import Admanister from '../components/admanister';

const Root = () => {
    return (
        <Tabs >
            <div label='HELLO' >
                <Hello />
            </div>
            <div label='HELP' >
                <Help />
            </div>
            <div label='ADMANISTER' >
                <Admanister />
            </div>
        </Tabs>
    );
}

export default Root;


// import React, { Component } from 'react';
// // import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import Start from './components/main/start';
// import Main from './components/main';
// import NewUser from './components/newUser';
// import InputP from './components/input/inputP';
// import Chart from '../src/components/common/chart';
// import * as style from './components/tab/styles.scss';
// import { render } from "react-dom";
// import Tabs from './components/tab/tabs';
// import Videos from './components/videos';


// {/* <InputP color='gray' /> */ }

// function App() {
//   return (<div> <Start color='gray' />
//     <div>
//       {/* <h1>Tabs Demo</h1> */}
//       <Tabs>
//         <div label="MAIN " style={{ cursor: 'pointer' }}>
//           <Main />
//         </div>
//         <div label="REQUEST" style={{ cursor: 'pointer' }}>
//           <NewUser />
//         </div>
//         <div id='chartContainer' label="DIAGRAMS" style={{ alignSelf: 'center', cursor: 'pointer' }}>
//           <Chart names={['Yehuda', 'Shimohon', 'Yoseph']} onClick={() => { alert('hi') }} />
//          
//         </div>
//         <div id='videosContainer' label="VIDEOS" style={{ alignSelf: 'center', cursor: 'pointer' }}>
//           <Videos />
//         </div>
//       </Tabs>

//     </div>
//   </div>
//   );
// }

// const container = document.createElement('div');
// document.body.appendChild(container);
// render(<App />, container);// אם אני רוצה להריץ שוב ושוב

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
//         <div   className ='ui top attached tabular menu'>
//                 <a className ='item active' data-tab='first'>New Projects</a>
//                 <a className ='item ' data-tab='second'>Second</a>
//                 <a className ='item active' data-tab='third'>Third</a>
//             </div>
//             <div  className ='ui bottom attached tab segment active' data-tab='first'>
//             <Main />
//             </div>
//             {/* onClick={() => {
//                 //function
//                 ; */}
//             <div className ='ui bottom attached tab segment active' data-tab='second'>
//             <NewUser />
//             </div>
//             <div className ='ui bottom attached tab segment active' data-tab='third'>
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

