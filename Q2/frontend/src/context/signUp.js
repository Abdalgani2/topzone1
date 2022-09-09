import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { createContext } from "react";
export const SignUpContext = createContext(' ');

const RegisterProvider = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const state = {
    setName,
    setCountry,
    setEmail,
    setPassword,
    setConfirmPassword,
    addNewUser,
    setMessage,
    message,
    name,
    country,
    email,
    password,
    confirmPassword,
  };

  function addNewUser() {
    console.log(password !== confirmPassword);
    console.log("confirmPassword", confirmPassword);
    if (!email) {
      return setMessage("please enter your e-mail");
    }
    else if (!name) {
      return setMessage("please enter your name");
    } else if (!password) {
      return setMessage("please enter your password");
    }
    else if (password.length < 8) {
      return setMessage("please enter your petter than 8");
    }
    else if (!confirmPassword) {
      return setMessage("please confirm your password here");
    }
    else if (!country) {
      return setMessage("please confirm your country");
    }
    else if (password !== confirmPassword) {
      return setMessage("password does not match");
    }
    else {
      axios
        .post("http://localhost:3001/signUp", {
          name,
          country,
          email,
          password
        })
        .then((result) => {
          if (result.status === 201) {
            setMessage("Your Account Is Ready");
            navigate('/')
            window.location.reload();
          }
          else {
            setMessage(result.data)
          }
        })
        .catch((err) => {
          console.log(err);
        })

    }
  }

  return (
    <SignUpContext.Provider value={state}>
      {props.children}
    </SignUpContext.Provider>
  );
};

export default RegisterProvider;