import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { string } from "prop-types"

import { useForm } from "../../hooks/useForm";

import "./Login.css";

const Login = ({ backgroundColor }) => {
  
  console.log('Componente Login Renderizado');
  
  const [form, setForm] = useState({
    email: 'miemail@gmail.com',
    password: '12345'
  })
  
  const { handleSubmit, handleChangeInput } = useForm({ form, setForm });

  let navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/dashboard');
  }

  return (
    <>
      <div id="login" style={{backgroundColor}}>
        View de Login
      </div>
      <form onSubmit={(e) => handleSubmit(e, handleLogin)} >
        <input
          placeholder="Ingrese su email corporativo"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChangeInput}
        />
        <br />
        <input
          placeholder="Ingresa tu password"
          type="text"
          name="password"
          value={form.password}
          onChange={handleChangeInput}
          />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

Login.propTypes = {
  backgroundColor: string.isRequired
};

export default Login;
