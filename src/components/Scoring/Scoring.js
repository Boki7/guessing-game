import React from "react";
import Hit from "./Hit/Hit";
import Miss from "./Miss/Miss";
import Left from "./Left/Left";
import './Scoring.css';

const Scoring = () => {
  return (
    <div className="scoring-container">
      <h3 className="scoring-container-header">SCORE</h3>
      <Hit />
      <Miss />
      <Left />
    </div>
  );
};

export default Scoring;
