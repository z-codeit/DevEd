import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./play.css";
import Circle from "./Circle";

const Statistics = ({ total, score, time }) => {
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

const CircleContainer = ({ total, score, setTotal, setScore }) => {
  const handleCircleClick = () => {
    setScore(score + 1);
    setTotal(total + 1);
    return;
  };

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

function Play() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
    }, 1100);
  }, [time]);

  return (
    <div className="container2" onClick={() => setTotal(total + 1)}>
      <CircleContainer
        total={total}
        score={score}
        setTotal={setTotal}
        setScore={setScore}
      />
      <CircleContainer
        total={total}
        score={score}
        setTotal={setTotal}
        setScore={setScore}
      />
      <CircleContainer
        total={total}
        score={score}
        setTotal={setTotal}
        setScore={setScore}
      />
      <CircleContainer
        total={total}
        score={score}
        setTotal={setTotal}
        setScore={setScore}
      />
      <CircleContainer
        total={total}
        score={score}
        setTotal={setTotal}
        setScore={setScore}
      />
      <Statistics total={total} score={score} time={time} />
    </div>
  );
}

export default Play;
