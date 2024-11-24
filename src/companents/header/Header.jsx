import React from "react";
import { NavLink } from "react-router-dom";
import Prodacts from "../prodacts/Prodacts";
import "./Header.scss";

const Header = () => {
  return (
    <div className="conteaner header">
      <div className="div__nav">
        <NavLink className={"navlink"} to={"/admin"}>
          Home
        </NavLink>
        <NavLink className={"navlink"} to={"prodacts"}>
          Prodacts
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
