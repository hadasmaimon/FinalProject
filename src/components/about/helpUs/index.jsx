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
                            <th style={{color:'red'}}>metirial questions </th>
                            <th style={{color:'blue'}}>personailty quetions</th>
                            <th style={{color:'grey'}}>questions</th>
                            <th style={{color:'green'}}>data questions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {objects.map((object, i) => { return <Row key={i} onCheck={this.onCheck} array={this.state.array} question={object.question} /> })}
                    </tbody>
                </table> <br/>
                <button className='ui container' style={{color: 'green' ,width: '150px' , height: '50px' ,borderColor:'green'}}>
                    send
                </button><br/>
                <div style={{fontFamily:'Times New Roman', fontSize: 30,textAlign: "center" }}>Thank you for you'r cooperation </div>
            </div>
        );
    };
}


// Main.propTypes = {
//     count: PropTypes.number.isRequired,
//     label: PropTypes.string.isRequired
// };

export default HelpUsContainer;
