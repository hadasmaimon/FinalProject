import React from 'react';
import ApprovalCard from './newUser';
import { projects } from '../../data/data';
const Approve = () => {
    return (
        <div>
        {projects.map ((project, i) => { return <ApprovalCard key={i} nameOfProject={project.name} kind={project.kindData} dateOfDemand={project.date} /> })}
       </div>
    );
};

export default Approve;