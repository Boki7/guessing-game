import React from "react";
import "./DifficultItem.css";

const DifficultItem = ({
  name,
  value,
  displayName,
  onChange,
  disabled,
  checked
}) => {
  return (
    <label className="container">
      {displayName}
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
      />
      <span className="checkmark" />
    </label>
  );
};

export default DifficultItem;
