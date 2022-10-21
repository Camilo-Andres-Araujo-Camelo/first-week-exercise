import React from 'react';

const Btn = ({color, changeState }) => {
    return (
        <button className='btn-arrow' style={{background:`${color}`}} onClick={changeState}>
            <i className="fas fa-chevron-right"></i>
        </button>
    );
};

export default Btn;