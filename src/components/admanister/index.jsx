import React from 'react';
import Tabs from '../about/tab';
import Projects from '../about/main';
import Request from '../about/newUser';
// import Graph from '../common/graph'; 
// import ResponsiveBar from '../common/responsiveBar';
// import picTable from '../../assets/images/Logo1.png'
const InputContainer = () => { //הוא מקבל מהאבא מקומפוננטת מאין . לא עובד
    return (
        <div style={{ width: '100%' }}>
            <div style={{ background: '#fff', width: '100%', height: '90%', borderRadius: '6px', border: '1px solid #eeeeee' }}>
                {/* <Styles/> (load) */}
                {/* <Seasons/> */}
                <Tabs>
                    <div label='PROJECTS' >
                        <Projects />
                         {/* <button  > */}
                              {/* style={{left: '40px'}} */}
                             {/* <a href={picTable}  download ="Logo1.png"></a>
                        </button> */}
                    </div>
                    {/* הורדת טבלה למחשב */}
                    <div label='REQUEST'>
                        <Request />
                    </div>
                    <div id='chartContainer' label='DIAGRAMS' >
                        {/* <DiagramStick />
                        <Graph /> */}
                        {/* <ResponsiveBar /> */}
                    </div>
                </Tabs>
            </div>
        </div >
    );
};

export default InputContainer;
