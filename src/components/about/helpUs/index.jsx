import React, { Component } from 'react';
import Row from '../main/row';//!!!!!
import { objects } from '../../../data/data';

class HelpUsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            array: []
        };
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

        return (
            <div className='ui container'>
                <table style={{ textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th>ask Jerusalem pepole </th>
                            <th>ask Ashdod pepole</th>
                            <th>ask Heifa pepole</th>
                            <th>ask Tel-Aviv pepole</th>
                        </tr>
                    </thead>
                    <tbody>
                        {objects.map((object, i) => { return <Row key={i} onCheck={this.onCheck} array={this.state.array} question={object.question} /> })}
                    </tbody>
                </table>
            </div>
        );
    };
}


// Main.propTypes = {
//     count: PropTypes.number.isRequired,
//     label: PropTypes.string.isRequired
// };

export default HelpUsContainer;
