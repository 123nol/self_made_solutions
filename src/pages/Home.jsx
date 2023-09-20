import React from "react";
import { FaPlay } from "react-icons/fa";
const Home = () => {
  return (
    <div className="home" style={{ width: "100vw", height: "100vh" }}>
      <h1>
        Welcome to <span>Self Made Solutions</span>
      </h1>
      <p>Always Striving Excellence</p>
      <p className="faPlay">
        <a href="https://youtube.com">{<FaPlay />}</a>
        <span></span>
      </p>
    </div>
  );
};

export default Home;
