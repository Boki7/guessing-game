import React from "react";
import './Input.css';

const Input = ({ type, onChange, disabled, value, attachClass, placeholder }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      disabled={disabled}
      maxLength={1}
      value={value}
      className={attachClass}
      placeholder={placeholder}
    />
  );
};

export default Input;
