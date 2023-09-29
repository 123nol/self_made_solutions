import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./images/Logo.png";
const NavBar = () => {
  const [clicked, setClick] = useState(false);

  return (
    <div className={clicked ? "bar extend" : "bar"}>
      <div className="banner">
        <NavLink to="/" className="bannerLink links">
          <div className="logoContainer">
            <div className="imageContainer">
              <img src={Logo} />
            </div>

            <p>Selfmade Solutions</p>
          </div>
        </NavLink>
      </div>
      <nav id="nav" className={clicked ? "#nav active" : "#nav"}>
        <NavLink to="/" className="links" onClick={() => setClick(false)}>
          HOME
        </NavLink>

        <NavLink
          to="/services"
          className="links"
          onClick={() => setClick(false)}
        >
          SERVICES
        </NavLink>
        <NavLink
          to="/product"
          className="links"
          onClick={() => setClick(false)}
        >
          PRODUCTS
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
        {clicked ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default NavBar;
