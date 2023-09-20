import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaArrowUp } from "react-icons/fa";

const NavBar = () => {
  const [clicked, setClick] = useState(false);

  return (
    <div className={clicked ? "bar extend" : "bar"}>
      <h1 className="banner">Self Made Solutions</h1>
      <nav id="nav" className={clicked ? "#nav active" : "#nav"}>
        <NavLink to="/" className="links" onClick={() => setClick(false)}>
          HOME
        </NavLink>
        <NavLink to="/about" className="links" onClick={() => setClick(false)}>
          ABOUT
        </NavLink>
        <NavLink
          to="/services"
          className="links"
          onClick={() => setClick(false)}
        >
          SERVICES
        </NavLink>
        <NavLink
          to="/project"
          className="links"
          onClick={() => setClick(false)}
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="/contact"
          className="links"
          onClick={() => setClick(false)}
        >
          CONTACT
        </NavLink>
      </nav>

      <div
        className="burger"
        onClick={() => {
          setClick(!clicked);
        }}
      >
        {clicked ? <FaArrowUp /> : <FaBars />}
      </div>
    </div>
  );
};

export default NavBar;