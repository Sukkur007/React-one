import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Textfield from "../reusableComponents/Textfield";
import Button from "../reusableComponents/Button";
import { manditeray, passManditeray } from "../constants";
// import history from "../../history";

const Login = () => {
  const [textError, setTextError] = useState(null);
  const [passError, setPassError] = useState(null);
  const userNameRef = useRef(null);
  const passedRef = useRef(null);
  let usedReg = /^[a-zA-Z]+$/;
  let passedReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const goSubmit = () => {
    if (
      userNameRef.current.value === "" ||
      !usedReg.test(userNameRef.current.value)
    ) {
      if (userNameRef.current.value === "") {
        setTextError(manditeray);
      } else if (!usedReg.test(userNameRef.current.value)) {
        setTextError(passManditeray);
      }
    }

    if (
      passedRef.current.value === "" ||
      !passedReg.test(passedRef.current.value)
    ) {
      if (passedRef.current.value === "") {
        setPassError(manditeray);
      } else if (!passedReg.test(passedRef.current.value)) {
        setPassError(passManditeray);
      }
    }

    if (
      usedReg.test(userNameRef.current.value) ||
      passedReg.test(passedRef.current.value)
    ) {
      if (usedReg.test(userNameRef.current.value)) {
        setTextError(null);
      }

      if (passedReg.test(passedRef.current.value)) {
        setPassError(null);
      }
    }

    if (
      usedReg.test(userNameRef.current.value) &&
      passedReg.test(passedRef.current.value)
    ) {
      // history.push("/Mobile");
    }
  };

  return (
    <>
      <div>
        <Link to="/payments">ghh</Link>
        <div>
          <div>
            <Textfield
              textType="text"
              textFieldRef={userNameRef}
              placeholderText="enter name"
              errSms={textError}
            />
          </div>
          <div>
            <Textfield
              textType="password"
              textFieldRef={passedRef}
              placeholderText="enter password"
              errSms={passError}
            />
          </div>
          <div>
            <Button content="click" onClickFn={goSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
