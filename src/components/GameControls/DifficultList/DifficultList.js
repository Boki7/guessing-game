import React from "react";
import DifficultItem from "../DifficultItem/DifficultItem";
import { changeDifficult } from "../../../store/actions/index";
import { connect } from "react-redux";

import "./DifficultList.css";

const difficultList = [
  { name: "difficult", value: "easy", displayName: "Easy" },
  { name: "difficult", value: "medium", displayName: "Medium" },
  { name: "difficult", value: "hard", displayName: "Hard" }
];

const DifficultList = ({ changeDifficult, isPlaying, difficult }) => {
  const handleOnChange = event => {
    changeDifficult(event.target.value);
  };

  const renderDifficultItems = () => {
    return difficultList.map(({ name, value, displayName }) => {
      return (
        <DifficultItem
          name={name}
          value={value}
          displayName={displayName}
          key={value}
          onChange={handleOnChange}
          disabled={isPlaying}
          checked={difficult === value}
        />
      );
    });
  };

  return <div className="difficult-list">{renderDifficultItems()}</div>;
};

const mapStateToProps = state => {
  return {
    isPlaying: state.isPlaying,
    difficult: state.difficult.difficult
  };
};

export default connect(
  mapStateToProps,
  {
    changeDifficult
  }
)(DifficultList);
