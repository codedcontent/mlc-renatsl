import React from "react";

const CustomButton = ({ title, handleClick }) => {
  return (
    <button
      className="bg-accentColor px-6 py-3.5 rounded-md"
      onClick={handleClick}
    >
      <p className="font-manrope font-medium text-white">{title}</p>
    </button>
  );
};

export default CustomButton;
