import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/Login/Login";

const App = () => {
  const propierties = {
    width: "100%",
    height: "70px",
    backgroundColor: "red",
    textAlign: "center"
  }
  const propierties1 = {
    width: "50%",
    height: "70px",
    backgroundColor: "red",
    textAlign: "center"
  }

  let a = {
    contador: 10
  }

  let b = {...a};
  b.contador = 20;
  // console.log('a: ', a.contador);
  // console.log('b: ', b.contador);


  return (
    <>
      <Routes>
        <Route path="/" element={<Login backgroundColor={propierties.backgroundColor} />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      {/* <div>Hola Mundo Principal!!</div> */}
      {/* <Login {...propierties} />
      <Login {...propierties1} />
      <Login {...propierties} /> */}
    </>
  );
};

export default App;
