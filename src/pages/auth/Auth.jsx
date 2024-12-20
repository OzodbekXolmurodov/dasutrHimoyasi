import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Login from "../login/Login";
import { useStateValue } from "../../context";

const Auth = () => {
  const [state, dispatch] = useStateValue();
  const user = state.token;
  return user ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default Auth;

// login ------------------ sophiab

// password --------------- sophiabpass
