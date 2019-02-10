import React from 'react';
import Start from './start';

const StartContainer = ({ color }) => { //הוא מקבל מהאבא מקומפוננטת מאין . לא עובד
    return (
        <Start color={color} />
    );
};

export default StartContainer;
