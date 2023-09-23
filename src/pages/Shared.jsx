import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Chat from "../components/Chat.jsx";
const Shared = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Chat/>
      <Footer />
    </>
  );
};

export default Shared;
