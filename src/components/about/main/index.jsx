import React from 'react';
import Content from './content';
import { projects } from '../../../data/data';

const Main = () => {

    return (
        <div className='ui container'>
            <table id='userTable' style={{ width: '100%', background: '#eeeeee', alignContent: 'center', borderRadius: '5' }}>
                <thead>
                    <tr>
                        <th style={{ width: '25%', height: '50px' }}>Project name</th>
                        <th style={{ width: '25%', height: '50px' }}>Id</th>
                        <th style={{ width: '25%', height: '50px' }}>Phone number</th>
                        <th style={{ width: '25%', height: '50px' }}>note </th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((user, i) => { return <Content key={i} userName={user.name} id={user.id} phoneNumber={user.phone} notes={user.note} email={user.email} /> })}
                </tbody>
            </table>
            <br/>
            <button  className='ui container' style={{color:'green',width: '150px' , height: '80px' ,borderColor:'green'}}>
             download table data
            </button>
        </div>
    );
};


// Main.propTypes = {
//     count: PropTypes.number.isRequired,
//     label: PropTypes.string.isRequired
// };

export default Main;
