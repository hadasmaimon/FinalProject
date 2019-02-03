import React from 'react';
import Name from './name';
import { Button } from 'react-bootstrap';

const Content = ({ userName }) => {
    return (
        <tr style={{ width: '100%', background: '#ffe' }} id='content'>
            <td style={{ width: '25%' }}><Name name={userName} /></td>
            <td style={{ width: '25%' }}><Name name={'209987654'} /></td>
            <td style={{ width: '25%' }}> <Name name={'0565432334'} /></td>
            <a href='user'>detalis</a>
        </tr>
    );
};

export default Content;
