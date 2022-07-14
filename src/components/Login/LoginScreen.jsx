import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styleloginscreen.css";
import Form from "./Form";
import UserLogged from "./UserLogged";

const LoginScreen = () => {

  const[token,setToken]=useState('')

  const changedToken = localStorage.getItem('token')

  useEffect(() => {
    setToken(changedToken)
  }, [changedToken])



  return (
    <div>
      <div className="login">
        {
          token ?
          <UserLogged/>
          :
          <Form/>

        }
      </div>
    </div>
  );
};

export default LoginScreen;
