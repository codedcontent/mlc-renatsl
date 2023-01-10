import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import PropertyCard from "../components/PropertyCard";

const Properties = () => {
  const [listOfHotelImages, setListOfHotelImages] = useState(null);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = "https://api.unsplash.com";
    const numImages = 6;
    const query = "resort rooms";

    const getRentalImages = () => {
      // Make a request to the /search/photos endpoint
      fetch(
        `${BASE_URL}/search/photos?per_page=${numImages}&query=${query}&client_id=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          // Get the list of images from the response
          const images = data.results;

          setListOfHotelImages(images);
        });
    };

    getRentalImages();
  }, []);

  return (
    <div
      className="min-h-screen w-full lg:p-24 md:px-12 px-6 pb-6 md:py-0 py-4"
      id="properties"
    >
      {/* Main content text copy */}
      <div className="flex w-full items-center justify-between">
        <div className="w-max">
          <span className="md:text-2xl text-lg font-inter font-bold capitalize">
            list of properties
          </span>

          <hr className="border-accentColor w-1/2 h-0.5 bg-accentColor" />
        </div>

        <CustomButton title={"View All Property"} />
      </div>

      {/* List of properties */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-4 place-items-center">
        {listOfHotelImages?.length !== null && (
          <>
            {listOfHotelImages?.map((image) => (
              <PropertyCard key={image.id} propertyDetails={image} />
            ))}
          </>
        )}
      </div>

      {/* Pagination */}
      <div className="rounded-lg border-2 border-gray-200 w-max mt-10 m-auto items-center justify-center grid grid-cols-5 divide-x-2 h-12">
        <p className="bg-gray-100 font-medium font-montserrat h-full md:px-5 px-2 flex justify-center items-center text-gray-400 cursor-pointer text-xs">
          First
        </p>

        <p className="bg-white font-medium font-montserrat h-full md:px-5 px-2 flex justify-center items-center text-accentColor cursor-pointer text-xs">
          1
        </p>

        <p className="text-white font-medium font-montserrat h-full md:px-5 px-2 flex justify-center items-center bg-accentColor cursor-pointer text-xs">
          2
        </p>

        <p className="bg-white font-medium font-montserrat h-full md:px-5 px-2 flex justify-center items-center text-accentColor cursor-pointer text-xs">
          3
        </p>

        <p className="bg-white font-medium font-montserrat h-full md:px-5 px-2 flex justify-center items-center text-accentColor cursor-pointer text-xs">
          Last
        </p>
      </div>
    </div>
  );
};

export default Properties;
