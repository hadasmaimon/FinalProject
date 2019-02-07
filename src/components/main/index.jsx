import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Chart from '../common/chart';
import Content from './content';
//import { Checkbox } from 'semantic-ui-react';
//import semantic-ui;


class Main extends Component {
    clickButton=()=>{
        return (
        <div>{'loading'}}></div>
        
        
        
        )
        ;
        
            
        }
    constructor(props) {
        super(props);

        this.state = {
            doDisplayTable: []
        };
    }

    onClick = (e) => {
        debugger
        this.setState(prevState => ({
            doDisplayTable: [...prevState.doDisplayTable, true]
        }));
    }

    render() {
        const { doDisplayTable } = this.state;
        const names = [
            'Yehuda',
            'yoel',
            'yekutiel',
            'Yochanan',
            'yaakov'
        ];
        const phones = [
            '050-6545677',
            '050-6545677',
            '050-6545677',
            '050-6549997',
            '050-6540677'
        ];

        return (
            <div id='main'>
                <h1 id='title'>Final Project</h1>
                <h3 id='title'>Users</h3>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                {/* <div class="ui checkbox">
  <input type="checkbox">
  <label>Label</label>
</div> */}
                    {/* <Chart names={names} phones={phones} onClick={this.onClick} /> */}
                    {doDisplayTable[0] && <table id='userTable' style={{ width: '100%', background: '#eeeeee', alignContent: 'center', borderRadius: '5' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '25%', height: '50px' }}>User name</th>
                                <th style={{ width: '25%', height: '50px' }}>ID</th>
                                <th style={{ width: '25%', height: '50px' }}>Phone number</th>
                                <th style={{ width: '25%', height: '50px' }}>member date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {names.map((name, i) => { return <Content key={i} userName={name} /> })}
                        </tbody>
                    </table>}

                    {doDisplayTable[1] && <table id='salaryTable' style={{ width: '100%', background: 'orange', alignContent: 'center', borderRadius: '5' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '25%', height: '50px' }}>User name</th>
                                <th style={{ width: '25%', height: '50px' }}>ID</th>
                                <th style={{ width: '25%', height: '50px' }}>Phone number</th>
                                <th style={{ width: '25%', height: '50px' }}>member date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {names.map((name, i) => { return <Content key={i} userName={name} /> })}
                        </tbody>
                    </table>}

                    {doDisplayTable[2] && <table id='phoneTable' Fstyle={{ width: '100%', background: 'red', alignContent: 'center', borderRadius: '5' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '25%', height: '50px' }}>User name</th>
                                <th style={{ width: '25%', height: '50px' }}>ID</th>
                                <th style={{ width: '25%', height: '50px' }}>Phone number</th>
                                <th style={{ width: '25%', height: '50px' }}>member date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {names.map((name, i) => { return <Content key={i} userName={name} /> })}
                        </tbody>
                    </table>}

                    {/* {<Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ask Jerusalem pepole</th>
                                <th>ask Ashdod pepole</th>
                                <th>ask Heifa pepole</th>
                                <th>ask Tel-Aviv pepole</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>  const CheckboxExampleCheckbox = () => <Checkbox label='are you familiar with literary logic ?' /></td>
                                <td> const CheckboxExampleCheckbox = () => <Checkbox label='Prefer logical problems? ?' /></td>
                                <td> const CheckboxExampleCheckbox = () => <Checkbox label='Do you speak business English ?' /></td>
                                <td> const CheckboxExampleCheckbox = () => <Checkbox label='DO You know this programming language for over a year  ?' />
                                </td>
                            </tr>

                        </tbody>
                        </table>}
                         */}
                         
        <button 
        id='btn1' onClick={this.clickButton()} style={{width:'100px' ,height:'100px' ,alignSelf: 'center' }}><h1>add</h1>
        </button>
        
     
  
                </div>
            </div >


        );
    };
}


// Main.propTypes = {
//     count: PropTypes.number.isRequired,
//     label: PropTypes.string.isRequired
// };

export default Main;
