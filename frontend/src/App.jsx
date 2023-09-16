// src/App.js
import React, { useState } from "react";
import Circle from "./Circle";

function App() {
  const [clicks, setClicks] = useState(0);

  const handleCircleClick = () => {
    setClicks((prevClicks) => prevClicks + 1);
  };

  return (
    <div className="App">
      <h1>Circle Clicker Game</h1>
      <p>Clicks: {clicks}</p>
      <div className="circle-container">
        {[...Array(10)].map((_, index) => (
          <Circle key={index} onClick={handleCircleClick} spreadArea={400} />
        ))}
      </div>
    </div>
  );
}

export default App;
