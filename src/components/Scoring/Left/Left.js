import React from "react";
import {connect} from 'react-redux'

const Left = ({randomNumbers}) => {
  return <h3>Left: {randomNumbers}</h3>;
};

const mapStateToProps = state => {
  return {
    randomNumbers: state.randomNumber.randomNumbers.length
  }
}

export default connect(mapStateToProps)(Left);
