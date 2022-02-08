import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const authConfig = {
  domain: "kk-company.us.auth0.com",
  clientId: "o3CMJLGyozWTImkdXvcRg9A3RWkZP2hf",
  redirectUri: window.location.origin,
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider {...authConfig}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
