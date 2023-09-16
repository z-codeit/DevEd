// src/App.js
import React, { useState } from "react";
import Circle from "./Circle";
import logo from "./logo.png"; // Import the logo image

function App() {
  const [clicks, setClicks] = useState(0);

  const handleCircleClick = () => {
    setClicks((prevClicks) => prevClicks + 1);
  };

  const handleResetClick = () => {
    setClicks(0);
  };

  return (
    <div className="App">
      {/* Display the logo image */}
      <img src={logo} alt="Logo" />
      <h1>Aim Trainer</h1>
      <p>Clicks: {clicks}</p>
      <div className="circle-container">
        {[...Array(10)].map((_, index) => (
          <Circle key={index} onClick={handleCircleClick} spreadArea={400} />
        ))}
      </div>
      <button onClick={handleResetClick}>Reset Score</button>
    </div>
  );
}

export default App;
