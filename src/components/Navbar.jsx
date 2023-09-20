import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [clicked, setClick] = useState(false);

  return (
    <div className="bar">
      <div className="banner">Self Made Solutions</div>
      <nav id="nav" className={clicked ? "#nav active" : "#nav"}>
        <NavLink to="/" className="links">
          HOME
        </NavLink>
        <NavLink to="/about" className="links">
          ABOUT
        </NavLink>
        <NavLink to="/services" className="links">
          SERVICES
        </NavLink>
        <NavLink to="/projects" className="links">
          PROJECTS
        </NavLink>
        <NavLink to="/contact" className="links">
          CONTACT
        </NavLink>
      </nav>

      <div
        className="burger"
        onClick={() => {
          setClick(!clicked);
        }}
      >
        {clicked ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default NavBar;
