import React from "react";
import bedRoomImage from "../assets/bedroom-unsplash.jpg";
import cleaningImage from "../assets/cleaning-unsplash.jpg";
import happyImage from "../assets/happy-unsplash.jpg";
import roommateImage from "../assets/roomates-unsplash.jpg";

const FlexibleOptions = () => {
  return (
    <div
      className="h-screen w-full lg:p-24 grid place-items-center"
      id="#options"
    >
      <div className="flex w-full justify-between">
        <div className="photo-grid w-3/5 grid grid-cols-2 gap-6">
          <img
            src={bedRoomImage}
            alt="bedRoomImage"
            className="rounded-xl w-64 h-full object-cover"
          />
          <img src={bedRoomImage} alt="bedRoomImage" className="rounded-xl" />
          <img src={bedRoomImage} alt="bedRoomImage" className="rounded-xl" />
          <img src={bedRoomImage} alt="bedRoomImage" className="rounded-xl" />
        </div>

        <div className="w-2/5 space-y-3">
          <p className="font-black font-inter text-4xl leading-snug">
            Flexibility and options to suit your lifestyle.
          </p>

          <p className="font-inter text-lg">
            You need it? We got it. We make finding your next home easy,
            comfortable, and simple. From our happiness guarantee to our
            selective roommate finder option. We provide you the flexibility
            that you most desire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlexibleOptions;
