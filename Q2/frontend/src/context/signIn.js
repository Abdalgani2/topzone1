import React, { useState } from "react";
import axios from "axios";
 import { useNavigate } from 'react-router-dom';
import { createContext } from "react";
 export const SignInContext = createContext(' ');

const LoginProvider = (props) => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const state = {
    login,
    setEmail,
    setPassword,
    setMessage,
    email,
    password,
    message
  };

  function login() {
    console.log("login");
    if (!email) {
        return setMessage("please enter your e-mail");
      }
      else if (!password) {
        return setMessage("please enter your password");
      }
      else{
    axios
      .post("http://localhost:3001/signIn", {
        email,
        password
      })
      .then((result) => {
        if (result.status === 200) {
          setMessage("Valid Login");
          navigate('/home')
           window.location.reload();
        }
        else {
            setMessage("the e-mail or password is not correct ");
        }
      })
      .catch((err) => {
        console.log(err);
          setMessage("the e-mail or password is not correct ");
      })
    
    }
  }

  return (
    <SignInContext.Provider value={state}>
      {props.children}
    </SignInContext.Provider>
  );
};

export default LoginProvider;