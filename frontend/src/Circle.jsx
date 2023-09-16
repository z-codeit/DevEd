import React, { useState, useEffect } from "react";

const Circle = ({ onClick, spreadArea }) => {
  const [position, setPosition] = useState({
    top: `${Math.random() * spreadArea}px`,
    left: `${Math.random() * spreadArea}px`,
  });

  const handleClick = () => {
    onClick();
    setPosition({
      top: `${Math.random() * spreadArea}px`,
      left: `${Math.random() * spreadArea}px`,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setPosition({
        top: `${Math.random() * spreadArea}px`,
        left: `${Math.random() * spreadArea}px`,
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [spreadArea]);

  return (
    <div
      className="circle"
      style={{
        position: "absolute",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "green",
        top: position.top,
        left: position.left,
        cursor: "pointer",
      }}
      onClick={handleClick}
    ></div>
  );
};

export default Circle;
