import React from "react";

const Input = ({ type, classes, onChange, disabled }) => {
  return (
    <input
      type={type}
      className={classes}
      onChange={onChange}
      disabled={disabled}
      maxLength={1}
    />
  );
};

export default Input;
