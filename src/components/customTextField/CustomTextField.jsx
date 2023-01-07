import React, { useEffect, useState } from "react";
import PhotoTextField from "./PhotoTextField";
import SelectDataTextField from "./SelectDataTextField";
import TextAreaTextField from "./TextAreaTextField";
import TextDataTextField from "./TextDataTextField";

const CustomTextField = ({
  textType,
  fieldName,
  required,
  error,
  placeholder,
}) => {
  const [errorStyle, setErrorStyle] = useState({
    border: "border-gray-200",
    text: "text-secondary",
    error: "",
  });

  if (textType === "text") {
    return (
      <TextDataTextField
        fieldName={fieldName}
        required={required}
        error={error}
        placeholder={placeholder}
      />
    );
  } else if (textType === "long") {
    return (
      <TextAreaTextField
        fieldName={fieldName}
        required={required}
        error={error}
        placeholder={placeholder}
      />
    );
  } else if (textType === "photos") {
    return (
      <PhotoTextField
        fieldName={fieldName}
        required={required}
        error={error}
        placeholder={placeholder}
      />
    );
  } else if (textType === "select") {
    return (
      <SelectDataTextField
        fieldName={fieldName}
        required={required}
        error={error}
        placeholder={placeholder}
      />
    );
  }
};

export default CustomTextField;
