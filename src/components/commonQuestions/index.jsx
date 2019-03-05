import React from 'react';
import Common from './common';
import { commonQ } from '../../data/data';
import Link from '@material-ui/core/Link';

const sendMail = (value = 'kjhjhjhjkhk') => {
    var link = `mailto:mando@gmail.com`//אימייילל
        + "?" // +"?cc=myCCaddress@example.com"
        + "&subject=" + escape("This is my subject")
        + "&body=" + escape(value)
        ;

    window.location.href = link;
}

const DataOfCommen = () => {
    return (
        <div>
            <div>
                <span id='title' style={{ paddingRight: '10px' }}>have a questions ?</span>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        sendMail();
                    }}
                >
                    <span>mail us</span>
                </Link>
            </div>
            {commonQ.map((project, i) => { return <Common key={i} dataQ={project.question} dataA={project.answer} /> })}
        </div>
    );
};

export default DataOfCommen;