import React from "react";
import {connect} from 'react-redux'
import './Miss.css';

const Miss = ({lettersCorrect}) => {
  const correct = lettersCorrect.filter(letter => {
    return letter.correct === "wrong"
  })
  return <h3 className="miss">MISS: {correct.length} </h3>;
};

const mapStateToProps = state => {
  return {
    lettersCorrect: Object.values(state.letters.letters)
  }
}

export default connect(mapStateToProps)(Miss);
