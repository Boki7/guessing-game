import React from "react";
import Letter from "../Letter/Letter";
import { connect } from "react-redux";
import "./LetterList.css";
import { correctAnswer } from "../../../../store/actions/index";

const LetterList = ({ letters, pickedLetter, inputValue, correctAnswer }) => {
  if (pickedLetter[0]) {
    if (inputValue === pickedLetter[0].letter) {
      correctAnswer(pickedLetter[0].number);
    }
  }

  const attachClass = type => {
    switch (type) {
      case "correct":
        return "letter-list-letter-correct";
      case "wrong":
        return "letter-list-letter-wrong";
      default:
        return "";
    }
  };

  const renderLetters = () => {
    return letters.map(({ letter, number, correct }) => {
      return (
        <Letter
          letter={letter.toUpperCase()}
          number={number}
          key={number}
          bla={attachClass(correct)}
        />
      );
    });
  };

  return <div className="letter-list">{renderLetters()}</div>;
};

const mapStateToProps = state => {
  return {
    letters: Object.values(state.letters.letters),
    pickedLetter: state.letters.pickedLetter,
    inputValue: state.inputValue
  };
};

export default connect(
  mapStateToProps,
  {
    correctAnswer
  }
)(LetterList);
