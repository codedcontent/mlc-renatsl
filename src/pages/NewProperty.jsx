import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomTextField from "../components/customTextField/CustomTextField";

const NewProperty = () => {
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

  const formInputs = [
    {
      title: "Name",
      error: error.name,
      placeholder: "What's your name?",
      textType: "text",
      value: form.name,
      required: true,
    },
    {
      title: "Address",
      error: error.address,
      placeholder: "What's your property address?",
      textType: "text",
      value: form.address,
      required: true,
    },
    {
      title: "Property number",
      error: error.houseNumber,
      placeholder: "What's your property number?",
      textType: "text",
      value: form.houseNumber,
      required: true,
    },
    {
      title: "State",
      error: error.state,
      placeholder: "Select state",
      textType: "text",
      value: form.state,
      required: true,
    },
    {
      title: "City",
      error: error.city,
      placeholder: "Select city",
      textType: "text",
      value: form.city,
      required: true,
    },
    {
      title: "Room type",
      error: error.roomType,
      placeholder: "Select room type",
      textType: "select",
      value: form.roomType,
      required: true,
    },
    {
      title: "price",
      error: error.roomType,
      placeholder: "How much would you rent this out for?",
      textType: "text",
      value: form.roomType,
      required: true,
    },
  ];

  return (
    <div
      className="min-h-screen w-full lg:px-24 grid place-items-center"
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
        <form className="w-full">
          <div className="w-full grid grid-cols-3 gap-10 mb-8">
            {formInputs.map((inputDetail, index) => (
              <div className="w-full" key={index}>
                <CustomTextField
                  error={inputDetail.error}
                  fieldName={inputDetail.title}
                  required={inputDetail.required}
                  placeholder={inputDetail.placeholder}
                  textType={inputDetail.textType}
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
