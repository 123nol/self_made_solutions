import React from "react";
import MiniService from "../components/MiniService";
import Product from "./Product";
// import ParticleBackground from "../components/ParticleBackground";
import welcomeGif from "../components/images/Welcome_1.gif";
import { useState } from "react";

const Home = (props) => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = (event) => {
    setScroll(event.currentTarget.scrollTop);
    if (scroll > 120) {
      return props.change(3);
    } else {
      return props.change(1);
    }
  };

  return (
    <div>
      {/* <ParticleBackground /> */}

      <div className="main" onScroll={handleScroll}>
        <div className="home">
          <div className="homeChild">
            <div>
              <h1>
                Welcome to <span>Selfmade Solutions</span>
              </h1>
              <p>Always Striving Excellence</p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a className="redirectLink" href="#service">
                  <button>View Services</button>
                </a>
                <a className="redirectLink" href="#product">
                  <button>View Products</button>
                </a>
              </div>
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
        <div>
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
