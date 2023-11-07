import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Chat from "../components/Chat.jsx";
import { useState } from "react";

const Shared = (props) => {
  const[scroll,setScroll]=useState(0)
  const handleScroll = (event) => {
    setScroll(event.currentTarget.scrollTop);
    if (scroll <=400 ) {
      return props.change(1);
    } 
    else if(scroll<=800){
      return props.change(2);

    }
    else if(scroll>=1100){
      return props.change(3);
    }
  };
  return (
    <div  onScroll={handleScroll} >
      <NavBar order={props.order} change={(order) => props.change(order)} />
      <Outlet/>
      <Chat/>
      <Footer />
    </div>
  );
};

export default Shared;
