import React, { useEffect, useState } from "react";

const PhotoTextField = ({
  fieldName,
  required,
  error,
  placeholder,
  handleChange,
  formName,
}) => {
  const [imagesForPreview, setImagesForPreview] = useState(null);

  const [errorStyle, setErrorStyle] = useState({
    border: "border-gray-200",
    text: "text-secondary",
    error: "",
  });

  // Open the file picker when the user clicks on the upload stuff
  const openFilePicker = () => {
    const filePicker = document.getElementById("propertyImagePicker");
    filePicker.click();
  };

  // Handle picking of images from the file picker
  const handleFilePickerChange = (e) => {
    const selectedFiles = Object.values(e.target.files);

    // Generate URLs to preview the selected image(s)
    const imageUrls = selectedFiles.map((imageFile) =>
      URL.createObjectURL(imageFile)
    );

    console.log(imageUrls);
  };

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
      {/* Textfield Type */}
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
        onClick={openFilePicker}
      >
        <input
          type="file"
          name="property image picker"
          id="propertyImagePicker"
          className="hidden"
          accept="image/png, image/jpg, image/jpeg"
          onChange={handleFilePickerChange}
          multiple
        />

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

      <div className="w-full py-6 mt-4 border-2 border-gray-300">
        <p className="font-light text-accentColor text-center font-poppins">
          Preview of selected images appear here
        </p>
      </div>
    </div>
  );
};

export default PhotoTextField;
