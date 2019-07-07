import React from "react";
import Hit from "./Hit/Hit";
import Miss from "./Miss/Miss";
import Left from "./Left/Left";

const Scoring = () => {
  return (
    <div>
      <h3>Score</h3>
      <Hit />
      <Miss />
      <Left />
    </div>
  );
};

export default Scoring;
