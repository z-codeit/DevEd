import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./play.css";
import Circle from "./Circle";
import Form from "react-bootstrap/Form";
import axios from "axios";
import sound from "./lasershot.wav";

const Statistics = ({ total, score, time }) => {
  if (time === 0) {
    return;
  }
  let percentage = parseFloat((score / total) * 100).toFixed(1);
  if (percentage === "NaN" || percentage === "Infinity") {
    percentage = 100;
  }

  return (
    <div id="stats">
      {score}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{time}{" "}
      s&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{percentage}%
    </div>
  );
};

const CircleContainer = ({ total, score, setTotal, setScore, time }) => {
  const play = () => {new Audio(sound).play()}

  const handleCircleClick = () => {
    play();
    setScore(score + 1);
    setTotal(total + 1);
    return;
  };

  if (time === 0) {
    return;
  }
  return (
    <div>
      {[...Array(Math.floor(Math.random() * (1 - 0 + 1) + 0))].map(
        (_, index) => (
          <Circle key={index} onClick={handleCircleClick} />
        )
      )}
    </div>
  );
};

const Result = ({ score, total, time, navigate }) => {
  if (time > 0) {
    return;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById("inputForm").value;
    axios.post("https://aimtrainer.fly.dev/api/users", {
      name: name,
      score: score,
    });
    navigate("/");
  };

  return (
    <div id="result">
      <h1>Game Over</h1>
      <h2>Your Score: {score}</h2>
      <h2>Your Accuracy: {parseFloat((score / total) * 100).toFixed(1)}%</h2>
      <Form id="form" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicInput">
          <Form.Control
            id="inputForm"
            type="text"
            placeholder="Enter your name"
            className="input-box"
          />
        </Form.Group>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

function Play() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);

  useEffect(() => {
    if (time === 0) {
      return;
    }
    setTimeout(() => {
      setTime(time - 1);
    }, 1100);
  }, [time]);

  const handleMissClick = (event) => {
    if (time === 0) {
      return;
    }
    setTotal(total + 1);
  };

  return (
    <div className="container2" onClick={handleMissClick}>
      <Statistics total={total} score={score} time={time} />
      <Result score={score} total={total} time={time} navigate={navigate} />
      <CircleContainer
        total={total}
        score={score}
        setTotal={setTotal}
        setScore={setScore}
        time={time}
      />
      <CircleContainer
        total={total}
        score={score}
        setTotal={setTotal}
        setScore={setScore}
        time={time}
      />
      <CircleContainer
        total={total}
        score={score}
        setTotal={setTotal}
        setScore={setScore}
        time={time}
      />
      <CircleContainer
        total={total}
        score={score}
        setTotal={setTotal}
        setScore={setScore}
        time={time}
      />
      <CircleContainer
        total={total}
        score={score}
        setTotal={setTotal}
        setScore={setScore}
        time={time}
      />
    </div>
  );
}

export default Play;
