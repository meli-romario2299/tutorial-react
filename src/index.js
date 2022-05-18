import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Contador from "./components/contador/Contador";
// import Todo from "./components/Todo/Todo";
// import App from "./App";
import { Provider } from 'react-redux'
import { store } from "./store/store";


ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
    <Contador />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
