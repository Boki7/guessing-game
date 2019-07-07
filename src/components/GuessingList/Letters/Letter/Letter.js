import React from "react";
import "./Letter.css";

const Letter = ({ letter, number, bla }) => {
  const attachClass = ["letter-list-letter", bla].join(" ");
  return (
    <div className={attachClass}>
      {letter} ({number})
    </div>
  );
};

export default Letter;
