import React, { useEffect, useState } from "react";
import arrowDown from "../../assets/arrow-down-icon.svg";

const SelectDataTextField = ({ fieldName, required, error, placeholder }) => {
  const [errorStyle, setErrorStyle] = useState({
    border: "border-gray-200",
    text: "text-secondary",
    error: "",
  });

  //   UseEffect tpo style the textfield in an error state
  useEffect(() => {
    if (error) {
      setErrorStyle({
        border: "border-red-600",
        text: "text-red-600 animate__animated animate__headShake",
        error: "animate__headShake",
      });
    } else {
      setErrorStyle({
        border: "border-gray-200",
        text: "text-secondary",
        error: "animate__headShake",
      });
    }
  }, [error]);

  return (
    <div className="w-full grid gap-1">
      <div className="flex gap-2 items-center">
        <span
          className={`font-semibold text-sm capitalize ${errorStyle.text} font-poppins`}
        >
          {fieldName}
        </span>
        <span className="font-black text-accentColor font-poppins">*</span>
      </div>

      {/* Select input and options wrapper */}
      <div className="w-full relative">
        {/* Select input container */}
        <div
          className={`w-full h-14 rounded-md border-2 ${errorStyle.border} bg-gray-200 cursor-pointer px-5 flex items-center justify-between`}
        >
          <p className="font-inter text-sm text-gray-500 w-full">
            {placeholder}
          </p>

          <img src={arrowDown} alt="arrowDown" className="h-2" />
        </div>

        <div className="absolute top-[105%] left-0 max-h-96 h-64 bg-gray-200 w-full rounded-md overflow-y-scroll"></div>
      </div>

      {/* Error text */}
      {error && (
        <p
          className={`text-xs text-red-500 animate__animated ${errorStyle.error} pl-2 -mt-1.5`}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectDataTextField;
