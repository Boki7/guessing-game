import React from "react";
import {connect} from 'react-redux'
import './Left.css';

const Left = ({randomNumbers}) => {
  return <h3 className="left">LEFT: {randomNumbers}</h3>;
};

const mapStateToProps = state => {
  return {
    randomNumbers: state.randomNumber.randomNumbers.length
  }
}

export default connect(mapStateToProps)(Left);
