// src/components/Circle.js
import React, { useState } from "react";

const Circle = ({ onClick }) => {
  const [position, setPosition] = useState({
    top: Math.random() * 400 + "px",
    left: Math.random() * 400 + "px",
  });

  const handleClick = () => {
    onClick();
    setPosition({
      top: Math.random() * 400 + "px",
      left: Math.random() * 400 + "px",
    });
  };

  return (
    <div
      className="circle"
      style={{
        position: "absolute",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "blue",
        top: position.top,
        left: position.left,
        cursor: "pointer",
      }}
      onClick={handleClick}
    ></div>
  );
};

export default Circle;
