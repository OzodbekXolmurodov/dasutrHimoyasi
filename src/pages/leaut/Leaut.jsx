import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../companents/header/Header";
import Prodacts from "../../companents/prodacts/Prodacts";

const Leaut = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
      {/* <Prodacts /> */}
    </div>
  );
};

export default Leaut;
