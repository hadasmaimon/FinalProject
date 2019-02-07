import React, { Component } from 'react';
import Content from './content';
import Row from './row';//!!!!!
import { users, objects } from '../../data/data';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            first: false,
            second: false,
            array: []
        };
    }

    onFirstClickButton = () => {
        this.setState({ first: !this.state.first });
    }

    onSecondClickButton = () => {
        this.setState({ second: !this.state.second });
    }


    onCheck = (id) => {
        if (!this.state.array.includes(id))
            this.setState(prevState => ({
                array: [...prevState.array, id]
            }));
        else {
            var index = this.state.array.indexOf(id);
            if (index > -1) {
                this.state.array.splice(index, 1);
            }
        }
    }


    render() {
        const { first, second } = this.state;

        return (
            <div id='main'>
                <h1 id='title'>Final Project</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button
                        id='btn1'
                        onClick={this.onFirstClickButton}
                        style={{ width: '100px', height: '100px', alignSelf: 'center', marginRight: '10px' }}
                    >
                        <h1>Users</h1>
                    </button>
                    <button
                        id='btn1'
                        onClick={this.onSecondClickButton}
                        style={{ width: '150px', height: '100px', alignSelf: 'center' }}
                    >
                        <h1>Queastion</h1>
                    </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>

                    {first && <table id='userTable' style={{ width: '100%', background: '#eeeeee', alignContent: 'center', borderRadius: '5' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '25%', height: '50px' }}>User name</th>
                                <th style={{ width: '25%', height: '50px' }}>ID</th>
                                <th style={{ width: '25%', height: '50px' }}>Phone number</th>
                                <th style={{ width: '25%', height: '50px' }}>member date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => { return <Content key={i} userName={user.name} id={user.id} phoneNumber={user.phone} /> })}
                        </tbody>
                    </table>}
                    <br />
                    <br />
                    <br />
                    {second && <table style={{ textAlign: 'left' }}>
                        <thead>
                            <tr>
                                <th>ask Jerusalem pepole</th>
                                <th>ask Ashdod pepole</th>
                                <th>ask Heifa pepole</th>
                                <th>ask Tel-Aviv pepole</th>
                            </tr>
                        </thead>
                        <tbody>
                            {objects.map((object, i) => { return <Row key={i} onCheck={this.onCheck} array={this.state.array} question={object.question} /> })}
                        </tbody>
                    </table>
                    }
                </div>
            </div>
        );
    };
}


// Main.propTypes = {
//     count: PropTypes.number.isRequired,
//     label: PropTypes.string.isRequired
// };

export default Main;
