import React from "react";

const Input = ({ type, classes, onChange, disabled, value }) => {
  return (
    <input
      type={type}
      className={classes}
      onChange={onChange}
      disabled={disabled}
      maxLength={1}
      value={value}
    />
  );
};

export default Input;
