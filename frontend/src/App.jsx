import { useState } from "react";
import "./App.css";
import Home from "./pages/home/home.jsx";
import Play from "./pages/play/play";

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
