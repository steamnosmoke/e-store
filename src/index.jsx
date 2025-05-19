import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import store from "./redux/store";
import { Provider } from "react-redux";

import "./firebase/config"

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
