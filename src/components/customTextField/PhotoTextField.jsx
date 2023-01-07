import React, { useEffect, useState } from "react";

const PhotoTextField = ({ fieldName, required, error, placeholder }) => {
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
    <div className="w-full space-y-1">
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
        className={`w-full py-6 cursor-pointer rounded-md border-2 border-dashed border-accentColor grid place-items-center space-y-1`}
      >
        <p className="font-bold font-poppins">
          Drag your images here,{" "}
          <span className="text-accentColor">or browse</span>
        </p>

        <p className="font-light font-poppins text-sm text-gray-400">
          Supported: JPG, JPEG, PNG
        </p>
      </div>
      {error && (
        <p className="text-xs text-red-500 animate__animated animate__lightSpeedInLeft pl-2">
          {error}
        </p>
      )}
    </div>
  );
};

export default PhotoTextField;
