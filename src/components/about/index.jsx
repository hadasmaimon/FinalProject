import React from 'react';
import Chart from '../common/chart';
import Main from './main';
// import Start from './start';
import NewUser from './newUser';
import Pic from './pic';
import Videos from './videos';
import Translate from './translate';
import Tabs from './tab';
// import Checker from './checker';

const InputContainer = () => { //הוא מקבל מהאבא מקומפוננטת מאין . לא עובד
    return (
        <div style={{ width: '100%' }}>
            {/* <Start id='header' color='gray' /> */}
            <div style={{ background: '#fff', width: '100%', height: '90%', borderRadius: '6px', border: '1px solid #eeeeee' }}>
                <Tabs>
                    <div label='MAIN' >
                        <Main /> <em></em>
                    </div>
                    <div label='REQUEST'>
                        <NewUser /> <em></em>
                    </div>
                    <div id='chartContainer' label='DIAGRAMS' >
                        <Chart />
                        <em></em>
                    </div>
                    <div id='videosContainer' label='VIDEOS' >
                        <Videos /> <em></em>
                    </div>
                    <div id='translateContainer' label='TRANSLATE' >
                        <Translate /> <em></em>
                    </div>
                    <div id='picContainer' label='PICTURES' >
                        <Pic /> <em></em>
                    </div>
                    {/* <div id='checkerContainer' label='Checker' >
                        <Checker /> <em></em>
                    </div> */}
                </Tabs>
            </div>
        </div >
    );
};

export default InputContainer;
