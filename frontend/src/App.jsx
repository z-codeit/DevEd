import { useState } from 'react';
import './App.css';

function App() {
  const leaderboard = ["test1", "test2", "test3"];

  return (
    <>
    <div class="Title">
      <h2> Aim Trainer </h2>
      </div>
      <div class="Leaderboard title">
      <h3>Leaderboard</h3>
      </div>
      <ul>
        {leaderboard.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form>
        <input onSubmit={() => console.log("hello")}></input>
      </form>
      <button type="button">Play</button>
    </>
  );
}

export default App;