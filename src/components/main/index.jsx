import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Chart from '../common/chart';
import Content from './content';

class Main extends Component {

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
            'yossi',
            'yoel',
            'yekutiel',
            'pinhas',
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
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',  }}>
                    <Chart names={names} phones={phones} onClick={this.onClick} />
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
