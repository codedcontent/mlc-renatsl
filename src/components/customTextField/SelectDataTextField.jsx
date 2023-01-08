import React, { useEffect, useState } from "react";
import arrowDown from "../../assets/arrow-down-icon.svg";
import ClickAwayListener from "@mui/base/ClickAwayListener";

const allOptions = [
  {
    title: "1 bedroom",
    value: "bedroom-1",
  },
  {
    title: "2 bedroom",
    value: "bedroom-2",
  },
  {
    title: "3 bedroom",
    value: "bedroom-3",
  },
];

const SelectDataTextField = ({ fieldName, required, error, placeholder }) => {
  const [errorStyle, setErrorStyle] = useState({
    border: "border-gray-200",
    text: "text-secondary",
    error: "",
  });

  const [selectingFromOptions, setSelectingFromOptions] = useState(false);

  // Handle what happens when user clicks away from the select && option fields
  const handleClickAway = () => {
    setSelectingFromOptions(false);
  };

  // Handle what happens when the users click on the select input
  const handleSelectClick = () => {
    setSelectingFromOptions(true);
  };

  // Handle what happens when the users click on an option
  const handleOptionClick = () => {
    setSelectingFromOptions(false);
  };

  /**
   * UseEffects
   */
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
      {/* Select title */}
      <div className="flex gap-2 items-center">
        <span
          className={`font-semibold text-sm capitalize ${errorStyle.text} font-poppins`}
        >
          {fieldName}
        </span>
        <span className="font-black text-accentColor font-poppins">*</span>
      </div>

      {/* Select input and options wrapper */}
      <div className="w-full relative" onClick={handleSelectClick}>
        {/* Select input container */}
        <div
          className={`w-full h-14 rounded-md border-2 ${errorStyle.border} bg-gray-200 cursor-pointer px-5 flex items-center justify-between`}
        >
          <p className="font-inter text-sm text-gray-500 w-full">
            {placeholder}
          </p>

          <img src={arrowDown} alt="arrowDown" className="h-2" />
        </div>

        {/* Select options */}
        {selectingFromOptions && (
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className="absolute top-[105%] left-0 h-max bg-gray-200 w-full rounded-md divide-y divide-gray-100 grid grid-cols-1">
              {/* The select options */}
              {allOptions.map((option, index) => (
                <div
                  key={index}
                  className="w-full px-4 py-2 cursor-pointer text-accentColor hover:bg-accentColor hover:text-white hover:transition-all hover:duration-500 hover:ease-in-out"
                  onClick={handleOptionClick}
                >
                  <p className="font-bold capitalize">{option.title}</p>
                </div>
              ))}
            </div>
          </ClickAwayListener>
        )}
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
