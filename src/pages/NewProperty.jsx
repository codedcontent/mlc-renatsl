import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomTextField from "../components/customTextField/CustomTextField";
import allStates from "../constants/states";

const NewProperty = () => {
  // Form values
  const [form, setForm] = useState({
    name: "",
    address: "",
    houseNumber: "",
    state: "",
    city: "",
    roomType: "",
    price: "",
    description: "",
    photos: "",
  });

  // The errors in the form
  const [error, setError] = useState({
    name: "",
    address: "",
    houseNumber: "",
    city: "",
    state: "",
    roomType: "",
    price: "",
    description: "",
    photos: "",
  });

  // Handle form input changes as the user types
  const handleFormChange = (type, changedValue) => {
    setForm((prev) => ({ ...prev, [type]: changedValue }));

    // console.log(type, changedValue);
  };

  const formInputs = [
    {
      title: "Name",
      error: error.name,
      placeholder: "What's your name?",
      textType: "text",
      value: form.name,
      required: true,
      handleChange: handleFormChange,
      formName: "name",
    },
    {
      title: "Address",
      error: error.address,
      placeholder: "Property address?",
      textType: "text",
      value: form.address,
      required: true,
      handleChange: handleFormChange,
      formName: "address",
    },
    {
      title: "Property number",
      error: error.houseNumber,
      placeholder: "Property number?",
      textType: "text",
      value: form.houseNumber,
      required: true,
      handleChange: handleFormChange,
      formName: "houseNumber",
    },
    {
      title: "State",
      error: error.state,
      placeholder: "Select property state",
      textType: "select",
      value: form.state,
      required: true,
      handleChange: handleFormChange,
      formName: "state",
      allStates: allStates,
    },
    {
      title: "City",
      error: error.city,
      placeholder: "Select property city",
      textType: "select",
      value: form.city,
      required: true,
      handleChange: handleFormChange,
      formName: "city",
      parentData: form.state,
    },
    {
      title: "Room type",
      error: error.roomType,
      placeholder: "Select room type",
      textType: "select",
      value: form.roomType,
      required: true,
      handleChange: handleFormChange,
      formName: "roomType",
    },
    {
      title: "price",
      error: error.price,
      placeholder: "Rental price?",
      textType: "text",
      value: form.price,
      required: true,
      handleChange: handleFormChange,
      formName: "price",
    },
  ];

  const clearAnError = (type) => {
    setError((prev) => ({ ...prev, [type]: "" }));
  };

  const setAnError = (type) => {
    setError((prev) => ({ ...prev, [type]: "Invalid data" }));
  };

  const validateForm = () => {
    for (let i = 0; i < Object.entries(form).length; i++) {
      const input = Object.entries(form)[i];

      if (!input[1] || input[1]?.length <= 0) {
        if (input[0] !== "photos") {
          if (!input[1].trim()) {
            setAnError(input[0]);
            return false;
          }
        } else {
          setAnError(input[0]);
          return false;
        }
      } else {
        clearAnError(input[0]);
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("object");

    const isValidForm = validateForm();

    if (isValidForm) {
      // Reset the form
      setForm({
        name: "",
        address: "",
        houseNumber: "",
        state: "",
        city: "",
        roomType: "",
        price: "",
        description: "",
        photos: "",
      });

      // Reset the form
      setError({
        name: "",
        address: "",
        houseNumber: "",
        city: "",
        state: "",
        roomType: "",
        price: "",
        description: "",
        photos: "",
      });

      alert("Property Added");
    }
  };

  return (
    <div
      className="min-h-screen w-full lg:px-24 grid gap-5 pt-4 place-items-center"
      id="new-property"
    >
      <p className="text-semibold text-xl font-inter text-gray-700 capitalize">
        File your property with us and be Confident that Your Room will be
        Filled Out!
      </p>

      {/* Add a new property form container */}
      <div
        className="w-full rounded-lg p-10 space-y-10"
        style={{ boxShadow: "0px 4px 63px rgba(0, 0, 0, 0.15)" }}
      >
        <p className="text-2xl font-bold text-accentColor text-center capitalize">
          Add A New Property
        </p>

        {/* Add a new property form */}
        <form className="w-full" onSubmit={handleSubmit}>
          {/* Name, Address, property number, property state, property city, room type */}
          <div className="w-full grid grid-cols-3 gap-10 mb-8">
            {formInputs.map((inputDetail, index) => (
              <div className="w-full" key={index}>
                <CustomTextField
                  error={inputDetail.error}
                  fieldName={inputDetail.title}
                  required={inputDetail.required}
                  placeholder={inputDetail.placeholder}
                  textType={inputDetail.textType}
                  handleChange={inputDetail.handleChange}
                  formName={inputDetail.formName}
                  parentData={inputDetail.parentData}
                  clearAnError={clearAnError}
                />
              </div>
            ))}
          </div>

          {/* Property Description && Property images container */}
          <div className="space-y-6">
            <CustomTextField
              error={error.description}
              fieldName="Description"
              required={true}
              placeholder="Give us a brief description about what your needs may be?"
              textType={"long"}
              handleChange={handleFormChange}
              formName="description"
              clearAnError={clearAnError}
            />

            <CustomTextField
              error={error.photos}
              fieldName="Upload photos"
              required={true}
              textType={"photos"}
              handleChange={handleFormChange}
              formName="photos"
              clearAnError={clearAnError}
            />
          </div>

          <div className="grid mt-10 w-full place-items-center">
            <CustomButton
              title={"Add New Property"}
              handleClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProperty;
