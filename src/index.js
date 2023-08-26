import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import { DataProvider } from "./context/login.context";
import Cookies from "js-cookie";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(
  function (config) {
    const tokenString = Cookies.get("token");
    if (tokenString) {
      const token = tokenString;
      if (token) config.headers["Authorization"] = `Bearer ${token}`;
    }
    // console.log(token);

    // console.log(config);
    return config;
  },
  function (error) {
    if (error) {
      if (
        error.response.data.message === "Please login." ||
        error.response.data.message === "Unauthorized. Provide the API Key"
      ) {
        Cookies.remove("admin");

        window.location.href = "/login";
      }
    }
    // console.log(error?.response?.data?.message);
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
