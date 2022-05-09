import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
import Todo from "./components/Todo/Todo";

ReactDOM.render(
  <BrowserRouter>
    <Todo />
  </BrowserRouter>,
  document.getElementById("root")
);
