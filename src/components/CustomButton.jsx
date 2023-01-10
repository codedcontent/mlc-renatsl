import React from "react";

const CustomButton = ({ title, handleClick }) => {
  return (
    <button
      className="bg-accentColor md:px-6 px-4 md:py-3.5 py-2 rounded-md"
      onClick={handleClick}
    >
      <p className="font-manrope font-medium text-white md:text-normal text-xs">
        {title}
      </p>
    </button>
  );
};

export default CustomButton;
