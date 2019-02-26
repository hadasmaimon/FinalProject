import React from 'react';
import Name from './name';

const Content = ({ userName, id, phoneNumber,notes }) => { //הוא מקבל מהאבא מקומפוננטת מאין
    return (
        <tr style={{ width: '100%', background: '#aeaeae' }} id='content'>
            <td style={{ width: '25%' }}><Name name={userName} /></td>
            <td style={{ width: '25%' }}><Name name={id} /></td>
            <td style={{ width: '25%' }}> <Name name={phoneNumber} /></td>
            <td style={{ width: '25%' }}> <Name name={notes} /></td>
            <a href='user' >write a message</a> 
        </tr>
    );
};

export default Content;
