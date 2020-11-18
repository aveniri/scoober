import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store/Store";
import App from "./App";
import "./assets/styles/normalize.css";
import "./assets/styles/style.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
