import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
const Shared = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Shared;
