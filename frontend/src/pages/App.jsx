import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import logo from "./assets/logo.png";
import Circle from "./Circle";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


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
    setClicks((prevClicks) => prevClicks + 1);
  };
  
  return (
    <div>
      {[...Array(10)].map((_, index) => (
        <Circle key={index} onClick={handleCircleClick} />
      ))}
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <Title />
      <CircleContainer />
      <Router>
        <Routes>
          <Route path="./pages/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;