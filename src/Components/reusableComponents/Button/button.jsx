import React from 'react';
import './button.css'
const Button = ({content, btnType, onClickFn }) => {
    return (
        <button className={`${btnType} btn`} onClick={onClickFn}>{content}</button>
    );
};




export default Button;

