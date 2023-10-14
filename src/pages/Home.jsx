import React from "react";
import MiniService from "../components/MiniService";
import Product from "./Product";

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
                <a className="redirectLink" href="#service">
                  <button>View Services</button>
                </a>
              </div>
              <a className="redirectLink" href="#product">
                <button>View Products</button>
              </a>
            </div>
          </div>
          <div className="homeChild imageContainer">
            <a style={{ display: "none" }} href="https://storyset.com/people">
              People illustrations by Storyset
            </a>
            <img src={welcomeGif} alt="welcome" />
          </div>
        </div>
        <MiniService />
        <Product />
      </div>
    </div>
  );
};

export default Home;
