import React from 'react';
import Tabs from '../about/tab';
import Projects from '../about/main';
import Request from '../about/newUser';
import Diagrams from '../common/chart';
import Graph from '../common/graph';

const InputContainer = () => { //הוא מקבל מהאבא מקומפוננטת מאין . לא עובד
    return (
        <div style={{ width: '100%' }}>
            <div style={{ background: '#fff', width: '100%', height: '90%', borderRadius: '6px', border: '1px solid #eeeeee' }}>
                {/* <Styles/> (load) */}
                {/* <Seasons/> */}
                <Tabs>
                    <div label='PROJECTS' >
                        <Projects />
                    </div>
                    <div label='REQUEST'>
                        <Request />
                    </div>
                    <div id='chartContainer' label='DIAGRAMS' >
                        <Diagrams />
                        {/* // make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them. */}

                        <Graph  />
                    </div>
                </Tabs>
            </div>
        </div >
    );
};

export default InputContainer;
