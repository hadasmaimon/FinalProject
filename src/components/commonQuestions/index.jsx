import React from 'react';
import Common from './common';
import { commonQ } from '../../data/data';

const DataOfCommen = () => {
    return (
        <div>
        {commonQ.map ((project, i) => { return <Common key={i} dataQ={project.question} dataA={project.answer} /> })}
       </div>
    );
};

export default DataOfCommen;