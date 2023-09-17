import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./play.css";
import RandomlyAppearingComponent from "./r";

const Statistics = ({ total, score, time }) => {
  return (
    <div id="stats">{score}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{time} s&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{score / total * 100}%</div>
  );
}

function Play() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(5);
  const [score, setScore] = useState(4);
  const [time, setTime] = useState(114);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
    } , 1000);
  }, [time]);

  return (
    <div className="container2">
      <RandomlyAppearingComponent />
      <Circle />
      <Statistics total={total} score={score} time={time} />
    </div>
  );
}

export default Play;
