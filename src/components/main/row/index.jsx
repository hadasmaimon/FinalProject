import React from 'react';

const Row = ({ question, onCheck, array }) => { //שם קומוננטה חייב להיות באות גדולה הקומפוננטה הזו היא מציגת הנתונים

    return (
        <tr style={{ width: '100%', background: '#aeaeae' }} id='content'>
            <td><input id={`1${question}`} type='checkbox' onChange={() => onCheck(`1${question}`)} /><label htmlFor={`1${question}`}>{question}</label></td>
            <td><input id={`2${question}`} type='checkbox' onChange={() => onCheck(`2${question}`)} onChange={() => onCheck(`1${question}`)} /><label htmlFor={`2${question}`}>{question}</label></td>
            <td><input id={`3${question}`} type='checkbox' onChange={() => onCheck(`3${question}`)} onChange={() => onCheck(`1${question}`)} /><label htmlFor={`3${question}`}>{question}</label></td>
            <td><input id={`4${question}`} type='checkbox' onChange={() => onCheck(`4${question}`)} onChange={() => onCheck(`1${question}`)} /><label htmlFor={`4${question}`}>{question}</label></td>
        </tr>
    );
};
//checked={array.includes(`4${question}`)}

export default Row;
