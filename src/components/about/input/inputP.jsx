import React from 'react';


const InputP = ({ color }) => {
    return (
        <div>
            <div style={{ background: color }}>
                <h1 >M&O</h1>
                {color? 'nanajj':'kjj'}
            </div>
        </div>
    );
};

export default InputP;