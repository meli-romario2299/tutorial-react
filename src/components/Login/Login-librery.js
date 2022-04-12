import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";

const Login = ({ backgroundColor }) => {
  console.log('miComponente renderizado');


  const [form, setForm] = useState({
    email: 'miemail@gmail.com',
    password: '12345'
  })

  let navigate = useNavigate();
  const handleLogin = () => {
    navigate('/dashboard');
  }

  const { register, handleSubmit, watch } = useForm();

  const miFuncion = (data) => console.log(data);

  return (
    <>
      <div id="login" style={{backgroundColor}}>
        Login
      </div>
      <form onSubmit={handleSubmit(miFuncion)} >
        <input
          placeholder="Ingresa tu email"
          type="email"
          name="email"
          {...register("email")}
        />
        <br />
        <input
          placeholder="Ingresa tu password"
          type="text"
          name="password"
          {...register("password")}
          />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
