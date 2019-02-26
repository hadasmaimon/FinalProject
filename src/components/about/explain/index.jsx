import React from 'react';
// import video from '../../../../src/assets/video/checkmarx.mp4';

const ExplainContainer = ({ color }) => { //הוא מקבל מהאבא מקומפוננטת מאין . לא עובד
    return (<div>
        <h1 style={{ textAlign: "center" }}>M&O project</h1>
        <p style={{ textself: "center" }}>
        The goal of our project is to provide a solution for programmers who are concerned about whether they have a virus code or anything that could cause a risk in their project
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
            מטרת הפרויקט שלנו זה לתת מענה למתכנתים שחוששים אם יש להם קוד שנתון בו וירוס או כל דבר שיכול לגרום סיכון בפרויקט שלו
        </p>
        <video />
        {/* <player ref="player">
        <source src= ""/>
</player> */}
        <video style={{ width: "400px", width: "400px", textAlign: "center" }} src={require('../../../assets/video/checkmarx.mp4')} controls />
    </div>
    );
};

export default ExplainContainer;
// width: '44px ' ,