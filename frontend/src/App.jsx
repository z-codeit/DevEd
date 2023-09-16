// src/App.js
import React, { useState } from "react";
import Circle from "./Circle";
import logo from "./logo.png";
import "./App.css";

function App() {
  const [clicks, setClicks] = useState(0);
  const leaderboard = ["test1", "test2", "test3"];
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Hello, ${name}!`);
  };

  const handleCircleClick = () => {
    setClicks((prevClicks) => prevClicks + 1);
  };

  const handleResetClick = () => {
    setClicks(0);
  };

  return (
    <div className="App">
      <img src={logo} alt="Logo" />
      <div className="test">
        <div className="Title">
          <h1>Aim Trainer</h1>
        </div>
        <div className="LeaderboardTitle">
          <h2>Leaderboard</h2>
        </div>
        <div className="Leaderboard">
          <ul>
            {leaderboard.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="NameField">
          <form>
            <input
              type="text"
              value={name} // Bind the input value to the name state
              onChange={handleNameChange} // Add the onChange event handler
              placeholder="Enter name here"
              onSubmit={handleSubmit}
            ></input>
          </form>
        </div>
        <div className="PlayButton">
          <button type="button">Play</button>
        </div>
      </div>
      <p className="ClickButton">Clicks: {clicks}</p>
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
