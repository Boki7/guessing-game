import React, { Component } from "react";
import { connect } from "react-redux";
import {
  myInt,
  checkAnswerAuto,
  generateRandomNumbers,
  clearInput
} from "../../../store/actions/index";
import './RandomNumber.css';

class RandomNumber extends Component {
  state = {
    intervalId: ""
  };

  componentDidMount() {
    this.props.generateRandomNumbers(this.randomNumbersArray());
    const intervalId = setInterval(() => {
      this.props.myInt();
      setTimeout(() => {
        this.props.checkAnswerAuto();
        this.props.clearInput();
      }, this.props.timeout - 50);
    }, this.props.timeout);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  randomNumbersArray = () => {
    const randomNumbers = [];
    while (randomNumbers.length < 26) {
      var random = Math.floor(Math.random() * 26 + 1);
      if (randomNumbers.indexOf(random) === -1) {
        randomNumbers.push(random);
      }
    }
    return randomNumbers;
  };

  render() {
    if(this.props.gameEnd){
      clearInterval(this.state.intervalId);
    }
    return (
      <div>
        <h1 className="game-controls-number">{this.props.randomNumber}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    randomNumber: state.randomNumber.randomNumber,
    timeout: state.difficult.timeout,
    gameEnd: state.isPlaying.gameEnd
  };
};

export default connect(
  mapStateToProps,
  {
    myInt,
    checkAnswerAuto,
    generateRandomNumbers,
    clearInput
  }
)(RandomNumber);



