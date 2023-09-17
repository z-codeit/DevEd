import React, { useState } from "react";
import "./home.css";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import Circle from "./Circle";

const Title = () => {
  return (
    <div className="title">
      <img src={logo} alt="logo" />
      <h1>Aim Trainer</h1>
    </div>
  );
};

const CircleContainer = () => {
  const handleCircleClick = () => {
    // setClicks((prevClicks) => prevClicks + 1);
    return;
  };

  return (
    <div>
      {[...Array(10)].map((_, index) => (
        <Circle key={index} onClick={handleCircleClick} />
      ))}
    </div>
  );
};

function Home() {
  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate('/play');
  };

  return (
    <div className="container">
      <Title />
      <CircleContainer />
      <button onClick={handleClick}>Start</button>
    </div>
  );
}

export default Home;
