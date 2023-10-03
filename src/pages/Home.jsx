import React from "react";

import Contact from "./Contact";
import { Link } from "react-router-dom";
import welcomeGif from "../components/images/Welcome_1.gif";

const Home = () => {
  return (
    <div>
      <div className="main">
        <div className="home">
          <div className="homeChild">
            <div>
              <h1>
                Welcome to <span>Selfmade Solutions</span>
              </h1>
              <p>Always Striving Excellence</p>
              <div>
                <Link className="redirectLink" to="/services">
                  <button>View Services</button>
                </Link>
                <Link className="redirectLink" to="/product">
                  <button>View Products</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="homeChild imageContainer">
            <a style={{ display: "none" }} href="https://storyset.com/people">
              People illustrations by Storyset
            </a>
            <img src={welcomeGif} alt="" />
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default Home;
