import React, { useEffect, useRef, useState } from "react";
import arrowDown from "../../assets/arrow-down-icon.svg";
import allStates from "../../constants/states";
import useClickOutsideHook from "../../hooks/useClickOutsideHook";

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

const SelectDataTextField = ({
  fieldName,
  error,
  placeholder,
  formName,
  parentData,
  handleChange,
  clearAnError,
}) => {
  /**
   * Higher Order Functions Start
   */
  const selectRef = useRef();
  // Handle what happens when user clicks away from the select && option fields
  const handleClickAway = () => {
    setSelectOpen(false);
  };

  // Use the hook to listen for mouse downs on the select field
  useClickOutsideHook(selectRef, handleClickAway);

  /**
   * Higher Order Functions End
   */

  const [errorStyle, setErrorStyle] = useState({
    border: "border-gray-200",
    text: "text-secondary",
    error: "",
  });
  // Track if the select option is open
  const [selectOpen, setSelectOpen] = useState(false);
  // Track the option selected by the user
  const [selectedOption, setSelectedOption] = useState(placeholder);

  // Handle what happens when the users click on the select input
  const handleSelectClick = () => {
    setSelectOpen(true);

    clearAnError(formName);
  };
  // Handle what happens when the users click on an option
  const handleOptionClick = (optionValue) => {
    setSelectOpen(false);

    setSelectedOption(optionValue);

    handleChange(formName, optionValue);
  };

  /**
   * UseEffects Start
   */

  //   UseEffect to style the textfield in an error state
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

  /**
   * UseEffects End
   */

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
      <div className="w-full relative">
        {/* Select input container */}
        <div
          className={`w-full h-14 rounded-md border-2 ${errorStyle.border} bg-gray-200 cursor-pointer px-5 flex items-center justify-between`}
          onClick={handleSelectClick}
        >
          <p className="font-inter text-sm text-gray-500 w-full capitalize">
            {selectedOption}
          </p>

          <img src={arrowDown} alt="arrowDown" className="h-2" />
        </div>

        {/* Select options */}
        {selectOpen && (
          <div
            ref={selectRef}
            className="absolute top-[105%] left-0 max-h-60 overflow-y-scroll bg-gray-200 w-full rounded-md divide-y divide-gray-100 grid grid-cols-1 shadow-2xl"
          >
            {formName === "state" ? (
              <>
                {allStates.map((option, index) => (
                  <div
                    key={index}
                    className="w-full px-4 py-2 cursor-pointer text-accentColor hover:bg-accentColor hover:text-white hover:transition-all hover:duration-500 hover:ease-in-out"
                    onClick={() => {
                      handleOptionClick(option.name);
                    }}
                  >
                    <p className="font-bold capitalize">{option.name}</p>
                  </div>
                ))}
              </>
            ) : formName === "city" ? (
              <>
                {parentData && (
                  <>
                    {allStates[
                      allStates.findIndex((e) => e.name === parentData)
                    ].lgas.map((option, index) => (
                      <div
                        key={index}
                        className="w-full px-4 py-2 cursor-pointer text-accentColor hover:bg-accentColor hover:text-white hover:transition-all hover:duration-500 hover:ease-in-out"
                        onClick={() => {
                          handleOptionClick(option);
                        }}
                      >
                        <p className="font-bold capitalize">{option}</p>
                      </div>
                    ))}
                  </>
                )}
              </>
            ) : (
              <>
                {/* The select options */}
                {allOptions.map((option, index) => (
                  <div
                    key={index}
                    className="w-full px-4 py-2 cursor-pointer text-accentColor hover:bg-accentColor hover:text-white hover:transition-all hover:duration-500 hover:ease-in-out"
                    onClick={() => {
                      handleOptionClick(option.title);
                    }}
                  >
                    <p className="font-bold capitalize">{option.title}</p>
                  </div>
                ))}
              </>
            )}
          </div>
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
