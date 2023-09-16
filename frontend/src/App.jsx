<<<<<<< HEAD
import { useState } from 'react';
import './App.css';

function App() {
  const leaderboard = ["test1", "test2", "test3"];

  return (
    <>
    <div class="Title">
      <h2> Aim Trainer </h2>
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
=======

    </>
  );
}

export default App;