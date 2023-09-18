import React from 'react'
import {NavLink} from "react-router-dom";
import { useState } from 'react';
import {FaBars} from 'react-icons/fa';




const NavBar = () => {

  const [clicked, setClick] = useState(false);
  
 
  return (
    <div className='bar'>
        <div className='banner'>Self Made Solutions</div>
        <nav id='nav' className={clicked ? "#nav active" : "#nav"}>
          <NavLink to="/" className="links">HOME</NavLink>
          <NavLink to="/about" className="links">ABOUT</NavLink>
          <NavLink to="/contacts" className="links">SERVICES</NavLink>
          <NavLink to="/contacts" className="links">PROJECTS</NavLink>
          <NavLink to="/contacts" className="links">CONTACT</NavLink>
          
        </nav>

        <div className='burger' onClick={()=>{setClick(!clicked)}}>
          <FaBars />
        </div>
    </div>
  )
}

export default NavBar