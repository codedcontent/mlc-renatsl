import React from "react";
import bedRoomImage from "../assets/bedroom-unsplash.jpg";
import cleaningImage from "../assets/cleaning-unsplash.jpg";
import happyImage from "../assets/happy-unsplash.jpg";
import roommateImage from "../assets/roomates-unsplash.jpg";
import CustomButton from "../components/CustomButton";

const FlexibleOptions = () => {
  return (
    <div className="min-h-screen w-full lg:px-24 grid place-items-center h-max pb-6 overflow-hidden">
      {/* Flexibility options content */}
      <div className="flex md:flex-row flex-col-reverse w-full justify-between items-center h-full md:px-0 px-6">
        {/* Flexibility options images container */}
        <div className="space-y-4 md:w-[35%] w-full m-auto h-[80%]">
          {/* Flexibility options - top container */}
          <div className="flex gap-4 h-[50%] w-full items-end">
            <div className="h-full w-[45%] rounded-xl relative">
              <img
                src={bedRoomImage}
                alt="bedRoomImage"
                className="rounded-xl object-cover w-full h-full"
              />

              <p className="absolute w-10/12 top-[5%] left-1/2 -translate-x-1/2 capitalize text-white font-inter font-semibold text-center">
                Flexible Leases
              </p>
            </div>

            <div className="w-[55%] md:h-[80%] h-full rounded-xl relative">
              <img
                src={happyImage}
                alt="bedRoomImage"
                className="rounded-xl object-cover w-full h-full"
              />

              <p className="absolute w-10/12 top-[5%] left-1/2 -translate-x-1/2 capitalize text-white font-inter font-semibold text-center">
                7-Day Happiness Guaranteed
              </p>
            </div>
          </div>

          {/* Flexibility options - bottom container */}
          <div className="flex gap-4 h-[50%] w-full items-start">
            <div className="w-[40%] md:h-[80%] h-full rounded-xl relative">
              <img
                src={cleaningImage}
                alt="bedRoomImage"
                className="rounded-xl object-cover w-full h-full"
              />

              <p className="absolute w-10/12 top-[5%] left-1/2 -translate-x-1/2 capitalize text-white font-inter font-semibold text-center">
                Monthly House Cleaning
              </p>
            </div>

            <div className="w-[60%] h-full rounded-xl relative">
              <img
                src={roommateImage}
                alt="bedRoomImage"
                className="rounded-xl object-cover w-full h-full"
              />

              <p className="absolute w-10/12 top-[5%] left-1/2 -translate-x-1/2 capitalize text-white font-inter font-semibold text-center">
                Choose Your Own Roommates
              </p>
            </div>
          </div>
        </div>

        {/* Flexibility options main text container */}
        <div className="md:w-1/2 w-full grid md:gap-4 gap-2 md:py-0 py-4">
          <p className="font-black font-inter md:text-4xl text-3xl leading-snug">
            Flexibility and options to suit your lifestyle.
          </p>

          <p className="font-inter md:text-lg">
            You need it? We got it. We make finding your next home easy,
            comfortable, and simple. From our happiness guarantee to our
            selective roommate finder option. We provide you the flexibility
            that you most desire.
          </p>

          <a href="#properties" className="md:mt-10 mt-4 md:mb-0 mb-6">
            <CustomButton title={"Search Rooms"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlexibleOptions;
