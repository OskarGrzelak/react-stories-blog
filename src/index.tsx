import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="react-stories-blog-dev.eu.auth0.com"
      clientId="rO1sy0Au9X4BiO9aJq6OR0qKKfcbaMcn"
      redirectUri="http://localhost:3000"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
