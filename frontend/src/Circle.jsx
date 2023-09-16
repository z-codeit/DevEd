// src/Circle.jsx
import React, { useState } from "react";

const Circle = ({ onClick }) => {
  const [circleStyle, setCircleStyle] = useState({
    width: `${Math.random() * 100 + 30}px`,
    height: `${Math.random() * 100 + 30}px`,
    borderRadius: "50%",
    background: "#00EAD3", // Updated color code
    position: "absolute",
    top: `${Math.random() * (window.innerHeight - 100)}px`,
    left: `${Math.random() * (window.innerWidth - 100)}px`,
    cursor: "pointer",
  });

  const handleClick = () => {
    onClick();
    setCircleStyle((prevStyle) => ({
      ...prevStyle,
      top: `${Math.random() * (window.innerHeight - 100)}px`,
      left: `${Math.random() * (window.innerWidth - 100)}px`,
    }));
  };

  return (
    <div
      className="circle"
      style={circleStyle}
      onClick={handleClick}
    ></div>
  );
};

export default Circle;
