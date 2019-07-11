import React from "react";
import {connect} from 'react-redux'
import './Hit.css';


const Hit = ({lettersCorrect}) => {
  const correct = lettersCorrect.filter(letter => {
    return letter.correct === "correct"
  })
  return <h3 className="hit">HIT: {correct.length} </h3>;
};

const mapStateToProps = state => {
  return {
    lettersCorrect: Object.values(state.letters.letters)
  }
}

export default connect(mapStateToProps)(Hit);
