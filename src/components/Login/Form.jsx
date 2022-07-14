import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const { handleSubmit, reset, register } = useForm();
  const [isErrorLogin, setIsErrorLogin] = useState(false);
  const navigate = useNavigate()

  const submit = (data) => {
    axios
      .post(
        "https://ecommerce-api-react.herokuapp.com/api/v1/users/login",
        data
      )
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        navigate('/')
      })
      .catch((err) => {
        localStorage.setItem("token", "");
        setIsErrorLogin(true);
        setTimeout(() => {
          setIsErrorLogin(false);
        }, 1500);
      })
      reset({
        email:'',
        password:''
      })
  }

  return (
    <div>
      <form className="login__form" onSubmit={handleSubmit(submit)}>
        <ul className="login__test">
          <li className="login__flex">
            <b>Email: </b>  juansdev1234@gmail.com
          </li>
          <li className="login__flex">
            <b>Password: </b>pass1234
          </li>
        </ul>
        <h2 id="login__title">Enter your Information</h2>
        <ul className="login__list">
          <li className="login__item">
            <label htmlFor="login-email" className="login__label">
              Email
            </label>
            <input
              type="email"
              className="login__input"
              id="login-email"
              {...register("email")}
            />
          </li>
          <li className="login__item">
            <label htmlFor="login-pass" className="login__label">
              Password
            </label>
            <input
              type="password"
              className="login__input"
              id="login-pass"
              {...register("password")}
            />
          </li>
        </ul>
        <div className="login__error">
          {isErrorLogin && alert("Invalid Credentials, Try Again...")}
        </div>
        <button className="login__button">Login</button>
      </form>
    </div>
  );
}

export default Form
