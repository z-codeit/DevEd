import React, { useState, useEffect } from "react";

function RandomlyAppearingComponent() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 13000); // Adjust the time (in milliseconds) before the component disappears

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) {
    return null; // Component is not rendered when isVisible is false
  }

  const randomPosition = {
    top: Math.random() * (window.innerHeight - 100) + "px",
    left: Math.random() * (window.innerWidth - 100) + "px",
  };

  return (
    <div
      className="random-component"
      style={{
        position: "absolute",
        ...randomPosition,
        backgroundColor: "blue", // Adjust styling as needed
        width: "100px",
        height: "100px",
      }}
    >
      Randomly Appearing Component
    </div>
  );
}

export default RandomlyAppearingComponent;
