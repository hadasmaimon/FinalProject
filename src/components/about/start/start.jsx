import React from 'react';
import LogoSrc from '../../../assets/images/Logo1.png';

const Start = ({ color }) => {
    return (
        <div>
            <div style={{ background: color }}>
                {/* <h1 >M&O</h1> */}
            </div>
            <img className='ui small image' style={{ width: 1600, height: 100 }} src={LogoSrc} alt='m&o logo' />

        </div>
    );
};

export default Start;