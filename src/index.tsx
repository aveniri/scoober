import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store/Store";
import App from "./App";
import "./styles/normalize.css";
import "./styles/app.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("app"),
);
