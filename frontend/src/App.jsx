import { useState } from "react";
import logo from "./assets/logo.png";
import Circle from "./pages/home/Circle";
import "./App.css";
import Home from "./pages/home/home.jsx";
import Play from "./pages/home/play/play";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
