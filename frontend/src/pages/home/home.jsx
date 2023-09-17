import React, { useState } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Circle from "./Circle";
import axios from "axios";

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
  const [data, setData] = useState([]);

  axios.get("https://aimtrainer.fly.dev/api/users").then((res) => {
    let sorted = res.data.sort((a, b) => b.score - a.score);
    setData(sorted);
  });

  const handleClick = (event) => {
    navigate("/play");
  };

  return (
    <div className="container">
      <Title />
      <CircleContainer />
      <ol>
        {data.map((user, i) => (
          <li key={i}>
            {user.name} - {user.score}
          </li>
        ))}
      </ol>
      <button onClick={handleClick}>Start</button>
    </div>
  );
}

export default Home;
