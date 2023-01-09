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
    city: "",
    state: "",
    roomType: "",
    price: "",
    description: "",
    uploadedImage: "",
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
    uploadedImage: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(form);
  };

  return (
    <div
      className="min-h-screen w-full lg:px-24 pb-10 grid place-items-center"
      id="#new-property"
    >
      <p className="text-semibold text-xl font-inter capitalize">
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
                />
              </div>
            ))}
          </div>

          {/* Property Description && Property images container */}
          <div className="space-y-6">
            <CustomTextField
              error={""}
              fieldName="Description"
              required={true}
              placeholder="Give us a brief description about what your needs may be?"
              textType={"long"}
            />

            <CustomTextField
              error={""}
              fieldName="Upload photos"
              required={true}
              textType={"photos"}
            />
          </div>

          <div className="grid mt-10 w-full place-items-center">
            <CustomButton title={"Add New Property"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProperty;
