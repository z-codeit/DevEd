// src/Circle.jsx
import React, { useState, useEffect } from "react";

const Circle = ({ onClick }) => {
  const circleSize = Math.random() * 70 + 30; // Random size between 30px and 100px

  const [circleStyle, setCircleStyle] = useState({
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    borderRadius: "50%",
    background: "#00EAD3",
    position: "absolute",
    cursor: "pointer",
  });

  const getRandomPosition = () => {
    const maxX = window.innerWidth - circleSize;
    const maxY = window.innerHeight - circleSize;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    return { left: `${randomX}px`, top: `${randomY}px` };
  };

  const handleClick = () => {
    onClick();
    setCircleStyle((prevStyle) => ({
      ...prevStyle,
      ...getRandomPosition(),
    }));
  };

  // Ensure that circles do not overlap initially and after each click.
  useEffect(() => {
    setCircleStyle((prevStyle) => ({
      ...prevStyle,
      ...getRandomPosition(),
    }));
  }, []);

  return (
    <div className="circle" style={circleStyle} onClick={handleClick}></div>
  );
};

export default Circle;
