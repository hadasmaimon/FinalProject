import React from 'react';
import Pic from './pic';
import Videos from './videos';
import Translate from './translate';
import Tabs from './tab';
import CommonQuest from './translate';
import HelpUs from './helpUs';
// import Seasons from './seasons/index';
// import Graph from '../common/graph';
// import Checker from './checker';
// import Styles from '../../components/common/loading/load';

const InputContainer = () => { //הוא מקבל מהאבא מקומפוננטת מאין . לא עובד
    return (
        <div style={{ background: '#fff', width: '100%', height: '90%', borderRadius: '6px', border: '1px solid #eeeeee' }}>
            {/* <Styles/> (load) */}
            {/* <Seasons/> */}
            <Tabs>
                {/* <div label='EXPLANATION' >
                    <Explain />
                </div> */}
                <div id='videosContainer' label='VIDEOS' >
                    <Videos />
                </div>
                <div id='picContainer' label='PICTURES' >
                    <Pic />
                </div>
                <div id='translateContainer' label='TRANSLATE' >
                    <Translate />
                </div>
                <div id='QuestionsContainer' label='COMMON QUESTIONS' >
                    <CommonQuest />
                </div>
                <div id='QuestionsContainer' label='HelpUs' >
                    <HelpUs />
                </div>
                {/* <div id='checkerContainer' label='Checker' >
                        <Checker />
                    </div> */}
            </Tabs>
        </div>
    );
};

export default InputContainer;
