import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Admin.scss";

const Admin = () => {
  return (
    <div className="admin">
      <div className="admin__div">
        <NavLink className={"admin__nav"} to={"/admin/creat"}>
          Creat Prodacts
        </NavLink>
        <NavLink className={"admin__nav"} to={"/admin/moneg"}>
          Creat Prodacts
        </NavLink>
      </div>
      <div className="admin__outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
