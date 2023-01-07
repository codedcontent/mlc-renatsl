import React, { useEffect, useState } from "react";

const TextAreaTextField = ({ fieldName, required, error, placeholder }) => {
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

      {/* Text input container */}
      <div
        className={`w-full h-max rounded-md border-2 ${errorStyle.border} bg-gray-300/50`}
      >
        <textarea
          type="text"
          className="h-14 w-full grid place-items-center p-4 bg-transparent outline-none font-inter text-sm"
          placeholder={placeholder}
        ></textarea>
      </div>

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

export default TextAreaTextField;
