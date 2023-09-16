// src/App.js
import React, { useState } from "react";
import Circle from "./Circle";
import logo from "./logo.png";
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);
  const leaderboard = ["test1", "test2", "test3"];


  const handleCircleClick = () => {
    setClicks((prevClicks) => prevClicks + 1);
  };

  const handleResetClick = () => {
    setClicks(0);
  };

  return (
    <div className="App">
      <img src={logo} alt="Logo" />
      <div class='test'>
      <div class="Title">
      <h1>Aim Trainer</h1>
      </div>
        <div class="LeaderboardTitle">
        <h3>Leaderboard</h3>
        </div>
        <div class="Leaderboard">
        <ul>
          {leaderboard.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        </div>
        <div class="NameField">
        <form>
          <input value = "Enter name here" onSubmit={() => console.log("hello")}></input>
        </form>
        </div>
        <div class="PlayButton">
        <button type="button">Play</button>
        </div>
      </div>

      <p>Clicks: {clicks}</p>
      <div className="circle-container">
        {[...Array(10)].map((_, index) => (
          <Circle key={index} onClick={handleCircleClick} />
        ))}
      </div>
      <button onClick={handleResetClick}>Reset Score</button>
    </div>
    
  );
}

export default App;
