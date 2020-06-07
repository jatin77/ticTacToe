import React from "react";
import "./scoreBoard.style.css";

function ScoreBoard({ xScore, oScore }) {
  return (
    <div className="scoreBoard">
      <p>X</p>
      <div className="score">
        {xScore} - {oScore}
      </div>
      <p>O</p>
    </div>
  );
}

export default ScoreBoard;
