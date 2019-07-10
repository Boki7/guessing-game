import React from "react";
import {connect} from 'react-redux'

const Miss = ({lettersCorrect}) => {
  const correct = lettersCorrect.filter(letter => {
    return letter.correct === "wrong"
  })
  return <h3>Wrong: {correct.length} </h3>;
};

const mapStateToProps = state => {
  return {
    lettersCorrect: Object.values(state.letters.letters)
  }
}

export default connect(mapStateToProps)(Miss);
