import React from 'react';
import Start from './start';
// import InputP from './inputP';
const InputContainer = ({ color }) => { //הוא מקבל מהאבא מקומפוננטת מאין . לא עובד
    return (
        <InputP color={color} />
    );
};

export default InputContainer;
