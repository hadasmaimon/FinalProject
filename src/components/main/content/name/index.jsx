import React from 'react';

const Name = ({ name }) => {
    return (
        <div style={{ cursor: 'pointer' }}
            onClick={() => {
                //function
                alert(name);
            }}
        >
            {name}
        </div>
    );
};

export default Name;



