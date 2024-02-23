import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./store/store";
import ReactDOM from "react-dom/client";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
