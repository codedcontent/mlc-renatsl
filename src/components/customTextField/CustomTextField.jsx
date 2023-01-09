import React, { useState } from "react";
import TextDataTextField from "./TextDataTextField";
import TextAreaTextField from "./TextAreaTextField";
import PhotoTextField from "./PhotoTextField";
import SelectDataTextField from "./SelectDataTextField";

const CustomTextField = ({
  textType,
  fieldName,
  required,
  error,
  placeholder,
  value,
  handleChange,
  formName,
  parentData,
  clearAnError,
}) => {
  // Text Content-Type Text Filed
  if (textType === "text") {
    return (
      <TextDataTextField
        fieldName={fieldName}
        required={required}
        error={error}
        placeholder={placeholder}
        value={value}
        handleChange={handleChange}
        formName={formName}
        clearAnError={clearAnError}
      />
    );
  }
  // Long Text Content-Type Text Filed
  else if (textType === "long") {
    return (
      <TextAreaTextField
        fieldName={fieldName}
        required={required}
        error={error}
        placeholder={placeholder}
        value={value}
        handleChange={handleChange}
        formName={formName}
        clearAnError={clearAnError}
      />
    );
  }

  // Photo Content-Type Text Filed
  else if (textType === "photos") {
    return (
      <PhotoTextField
        fieldName={fieldName}
        required={required}
        error={error}
        placeholder={placeholder}
        value={value}
        handleChange={handleChange}
        formName={formName}
        clearAnError={clearAnError}
      />
    );
  }
  // Select Content-Type Text Filed
  else if (textType === "select") {
    return (
      <SelectDataTextField
        fieldName={fieldName}
        required={required}
        error={error}
        placeholder={placeholder}
        value={value}
        handleChange={handleChange}
        formName={formName}
        parentData={parentData}
        clearAnError={clearAnError}
      />
    );
  }
};

export default CustomTextField;
