import React from "react";
import FrontPage from "../assets/homeimage.png";
import "../App.css";

const Home = () => {
  return (
    <>
      <h1 className="home-title">
        Dog Tinder: Where Dogs Rule the Social Media Pack!
      </h1>
      <div className="home-flex">
        <img src={FrontPage} alt="bunch of smiling dogs"  />
      </div>
    </>
  );
};

export default Home;
