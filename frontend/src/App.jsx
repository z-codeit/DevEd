import React, { useState } from "react";
import Circle from "./Circle";
import logo from "./logo.png";
import "./App.css";
import axios from "axios";

function App() {
  const [clicks, setClicks] = useState(0);
  const leaderboard = ["test1", "test2", "test3"];
  const [name, setName] = useState("");
  const [playMode, setPlayMode] = useState(false);

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

  const handlePlayClick = () => {
    setPlayMode(true);
  };

  return (
    <div className="App">
      <img src={logo} alt="Logo" />
      {/* Show the landing page only if playMode is false */}
      {!playMode && (
        <div className="test">
          <div className="Title">
            <h1>Aim Trainer</h1>
          </div>
          <div className="LeaderboardTitle">
            <h3>Leaderboard</h3>
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
                value={name}
                onChange={handleNameChange}
                placeholder="Enter name here"
                onSubmit={handleSubmit}
              ></input>
            </form>
          </div>
          <div className="PlayButton">
            {/* Show the "Play" button only if playMode is false */}
            {!playMode && (
              <button type="button" onClick={handlePlayClick}>
                Play
              </button>
            )}
          </div>
        </div>
      )}

      {/* Show the circle-related content when playMode is true */}
      {playMode && (
        <>
          <p className="ClickButton">Clicks: {clicks}</p>
          <div className="circle-container">
            {[...Array(10)].map((_, index) => (
              <Circle key={index} onClick={handleCircleClick} />
            ))}
          </div>
          <button onClick={handleResetClick}>Reset Score</button>
        </>
      )}
    </div>
  );
}

export default App;
