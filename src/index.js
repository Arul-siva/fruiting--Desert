import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css/home.css";
import "./css/about.css";
import "./css/products.css";
import "./css/contact.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter , HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
