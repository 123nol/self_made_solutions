import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./images/Logo.png";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [clicked, setClick] = useState(false);
  const [order, setOrder] = useState(1);

  return (
    <div className={clicked ? "bar extend" : "bar"}>
      <div className="banner">
        <NavLink
          to="/"
          className="bannerLink links"
          onClick={() => {
            setOrder(1);
            window.scrollTo(0, 0);
          }}
        >
          <div className="logoContainer">
            <div className="imageContainer">
              <img src={Logo} alt="Selfmade Solutions" />
            </div>

            <p>
              SelfMade <br /> Solutions{" "}
            </p>
          </div>
        </NavLink>
      </div>
      <nav id="nav" className={clicked ? "#nav active" : "#nav"}>
        <NavLink
          to="/"
          className={order === 1 ? "links tap" : "links"}
          onClick={() => {
            setClick(false);
            setOrder(1);
            window.scrollTo(0, 0);
          }}
        >
          HOME
        </NavLink>

        <NavLink
          to="/services"
          className={order === 2 ? "links tap" : "links"}
          onClick={() => {
            setClick(false);
            setOrder(2);
            window.scrollTo(0, 0);
          }}
        >
          SERVICES
        </NavLink>
        <HashLink
          to="/#product"
          className={order === 3 ? "links tap" : "links"}
          onClick={() => {
            setClick(false);
            setOrder(3);
          }}
        >
          PRODUCTS
        </HashLink>
        <NavLink
          to="/project"
          className={order === 4 ? "links tap" : "links"}
          onClick={() => {
            setClick(false);
            setOrder(4);
            window.scrollTo(0, 0);
          }}
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="/contact"
          className={order === 5 ? "links tap" : "links"}
          onClick={() => {
            setClick(false);
            setOrder(5);
            window.scrollTo(0, 0);
          }}
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
