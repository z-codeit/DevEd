import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Play() {
  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate('/signup');
  };

  return (
    <div className="container">
        <h1>hi</h1>
    </div>
  );
}

export default Play;
