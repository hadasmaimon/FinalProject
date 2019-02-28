import React from 'react';
import Name from './name';
/* eslint-disable jsx-a11y/anchor-is-valid, no-alert */
import Link from '@material-ui/core/Link';

const Content = ({ userName, id, phoneNumber, notes }) => { //הוא מקבל מהאבא מקומפוננטת מאין
  return (
    <tr style={{ width: '100%', background: '#aeaeae' }} id='content'>
      <td style={{ width: '25%' }}><Name name={userName} /></td>
      <td style={{ width: '25%' }}><Name name={id} /></td>
      <td style={{ width: '25%' }}> <Name name={phoneNumber} /></td>
      <td style={{ width: '25%' }}> <Name name={notes} /></td>
      <Link
        component="button"
        variant="body2"
        onClick={() => {
           //לעשות input
        }}
      >
        write a message
    </Link>
    </tr>
  );
};

export default Content;
