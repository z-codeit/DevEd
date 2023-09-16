import React, { useState } from "react";
import Circle from "./Circle";
import logo from "./logo.png";
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);
  const [playMode, setPlayMode] = useState(false);

  const leaderboard = ["test1", "test2", "test3"];

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
      {/* Show the landing page only if playMode is false */}
      {!playMode && (
        <div className='test'>
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
              <input value="Enter name here" onSubmit={() => console.log("hello")}></input>
            </form>
          </div>
          <div className="PlayButton">
            {/* Show the "Play" button only if playMode is false */}
            {!playMode && <button type="button" onClick={handlePlayClick}>Play</button>}
          </div>
        </div>
      )}

      {/* Show the circle-related content when playMode is true */}
      {playMode && (
        <>
          <p>Clicks: {clicks}</p>
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
