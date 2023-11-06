import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Chat from "../components/Chat.jsx";
import { useState } from "react";

const Shared = (props) => {
  const [reach, setReach] = useState(false)
 
  return (
    <div >
      <NavBar order={props.order} change={(order) => props.change(order)} />
      <Outlet />
      <Chat/>
      <Footer />
    </div>
  );
};

export default Shared;
