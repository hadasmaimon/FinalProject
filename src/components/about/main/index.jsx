import React from 'react';
import Content from './content';
import { projects } from '../../../data/data';

const Main = () => {

    return (
        <div className='ui container'>
            <table id='userTable' style={{ width: '100%', background: '#eeeeee', alignContent: 'center', borderRadius: '5' }}>
                <thead>
                    <tr>
                        <th style={{ width: '25%', height: '50px' }}>User name</th>
                        <th style={{ width: '25%', height: '50px' }}>ID</th>
                        <th style={{ width: '25%', height: '50px' }}>Phone number</th>
                        <th style={{ width: '25%', height: '50px' }}>note </th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((user, i) => { return <Content key={i} userName={user.name} id={user.id} phoneNumber={user.phone} notes={user.note} email={user.email} /> })}
                </tbody>
            </table>
        </div>
    );
};


// Main.propTypes = {
//     count: PropTypes.number.isRequired,
//     label: PropTypes.string.isRequired
// };

export default Main;
