import React from "react";
import "./Dropdown.css";

const Dropdown = ({dropValue}) => {
  return (
    <div className="dropdown_container">
      <select name="language" id="language">
        <option value="">select</option>
        {
            dropValue && dropValue.map((data, index) => {
               return  <option value="" key = {index+1}>{data}</option> 
            })

        }
        

      </select>
    </div>
  );
};

export default Dropdown;
