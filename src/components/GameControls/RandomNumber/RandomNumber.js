import React, { Component } from "react";
import { connect } from "react-redux";
import { myInt, checkAnswerAuto } from "../../../store/actions/index";

class RandomNumber extends Component {
  state = {
    intervalId: "",
    intervalCheckId: ''
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.props.myInt()
      setTimeout(() => {
        this.props.checkAnswerAuto()
      }, this.props.timeout - 300)
    }, this.props.timeout);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div>
        <h1>{this.props.randomNumber}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    randomNumber: state.randomNumber,
    timeout: state.difficult.timeout
  };
};

export default connect(
  mapStateToProps,
  {
    myInt,
    checkAnswerAuto
  }
)(RandomNumber);
