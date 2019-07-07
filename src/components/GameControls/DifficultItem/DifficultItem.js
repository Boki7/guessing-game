import React from "react";

const DifficultItem = ({
  name,
  value,
  displayName,
  onChange,
  disabled,
  checked
}) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
      />
      {displayName}
    </>
  );
};

export default DifficultItem;
