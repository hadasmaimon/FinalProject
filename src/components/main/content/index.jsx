import React from 'react';
import Name from './name';
import { Button } from 'react-bootstrap';

const Content = ({ userName, id, phoneNumber }) => { //הוא מקבל מהאבא מקומפוננטת מאין
    return (
        <tr style={{ width: '100%', background: '#aeaeae' }} id='content'>
            <td style={{ width: '25%' }}><Name name={userName} /></td>
            <td style={{ width: '25%' }}><Name name={id} /></td>
            <td style={{ width: '25%' }}> <Name name={phoneNumber} /></td>
            <a href='user'>detalis</a>
        </tr>
    );
};

export default Content;
