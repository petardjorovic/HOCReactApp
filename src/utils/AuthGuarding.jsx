import React from "react";
import ProductsPage from "../pages/ProductsPage";
import { Navigate } from "react-router-dom";

// High Order Component or HOC
function AuthGuarding({ children }) {
  function checkIsLogged() {
    if (localStorage.hasOwnProperty("vite_user")) {
      return localStorage.getItem("vite_user");
    }
  }
  return checkIsLogged() ? children : <Navigate to={"/login"} />;
}

export default AuthGuarding;
