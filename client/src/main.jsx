import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Auth0Provider
  domain="dev-pvsrardqsvuuufr5.us.auth0.com"
  clientId="AUVSWUsA9nrL9gAC1AwuGorNr2m32vL3"
  authorizationParams={{
      redirect_uri: "https://final-project-woad-omega.vercel.app/"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"

  >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
