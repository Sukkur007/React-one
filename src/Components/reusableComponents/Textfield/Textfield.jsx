import React from "react";
import "./Textfield.css";

const Textfield = ({ label, textFieldRef, placeholderText, textType, errSms}) => {
  

  return (
    <div className="textfield_container">
      <div>
        <label>{label}</label>
      </div>
      <input
        type={textType}
        placeholder={placeholderText}
        className={`text_field ${errSms && 'error_border'}`}
        ref={textFieldRef}
      />
      {
        errSms && <div className="err_style">{errSms}</div>
      }
      
    </div>
  );
};

export default Textfield;
