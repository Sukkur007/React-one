import React, { useRef, useState } from "react";
import "./Header.css";
import Button from "../reusableComponents/Button";
import Textfield from "../reusableComponents/Textfield";
import Dropdown from "../reusableComponents/Dropdown";
import {manditeray,passManditeray} from "../constants"

const Header = ({ items }) => {
  const [regError, setRegError] = useState(null);
  const [numError, setNumError] = useState(null);
  const textRef = useRef(null);
  const numRef = useRef(null);
  let res = /^[a-zA-Z]+$/;
  let numReg = /^\d+$/;


  const doSubmit = () => {
    if (textRef.current.value === "" || !res.test(textRef.current.value)) {
      if (textRef.current.value === "") {
        setRegError(manditeray)
      } else if (!res.test(textRef.current.value)) {
        setRegError(passManditeray)
      }

    }

    if (numRef.current.value === "" || !numReg.test(numRef.current.value)) {
      if (numRef.current.value === "") {
        setNumError(manditeray)
      } else if (!numReg.test(numRef.current.value)) {
        setNumError(passManditeray)
      }

    }

    if (res.test(textRef.current.value) || numReg.test(numRef.current.value)) {
      if (res.test(textRef.current.value)) {
        setRegError('');
      }

      if (numReg.test(numRef.current.value)) {
        setNumError('')
      }

    }
  };


  const doClick = () => {
    console.log("done");
  };
  const doPush = () => {
    console.log("try");
  };
  const doPull = () => {
    console.log("catch");
  };

  const optionArray = ['html', 'css', 'java', 'python', 'javascript', 'react'];

  const optionArray1 = ['one', 'two', 'three', 'four'];



  const rocky = () => {
    let finalElements = []
    for (let i = 0; i < 10; i++) {
      finalElements.push(<Button content={i+1} key={i+1} />)
    }
    return finalElements;
  }





  return (
    <div className="container">
      
      {
        rocky()
      }
      <Dropdown dropValue= {optionArray}/>
      <Dropdown dropValue= {optionArray1}/>

      <Textfield label="Firstname" textFieldRef={textRef} placeholderText='Enter your name' textType="text" errSms ={regError} />
      <Textfield label="password" textFieldRef={numRef} placeholderText='Enter your number' textType="text" errSms ={numError} />
      <Textfield label="danger" placeholderText='name' textType="color"/>
      {
        optionArray1.map((i, index)=> <Button key={index + 1} content={i} btnType="primary"/>)
      }
      
      <br/>
      <br/>
      <br/>
      
      <Button content="sukkur" btnType="primary" onClickFn={doSubmit} />
      <Button content="alagu" btnType="secondary" onClickFn={doClick} />
      <Button content="singh" btnType="clear" onClickFn={doPush} />
      <Button content="dhara" btnType="danger" onClickFn={doPull} />
      <ul className="container_wrapper">
        {items.map((f, index) => (
          <li key={index + 1}>{f}</li>
        ))}
      </ul>
    </div>
  );
};
export default Header;
