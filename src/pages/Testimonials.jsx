import React, { useState } from "react";
import person from "../assets/person-unsplash.jpg";
import singleQuote from "../assets/single-quote.svg";

const Testimonials = () => {
  const [appTestimonials, setAppTestimonials] = useState(["", "", "", ""]);
  return (
    <div
      className="h-max w-screen lg:px-24 mt-20 grid place-items-center bg-accentColor/10"
      id="#testimonials"
    >
      <div className="w-full h-max flex gap-5 justify-center items-center">
        {/* Testimonials text content */}
        <div className="flex-1 gap-6 flex flex-col relative mx-4">
          <img
            src={singleQuote}
            alt="singleQuote"
            className="absolute top-0 left-0 -translate-x-[80%] -translate-y-[55%] opacity-40"
          />

          {/* Testimony text */}
          <p className="font-inter text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
            pellentesque est. Curabitur at odio sit amet libero vulputate
            efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
            faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
            fringilla finibus.
          </p>

          {/* Testimony provider */}
          <div className="flex gap-4 items-center">
            <img
              src={person}
              alt="person"
              className="h-14 w-14 rounded-full object-cover"
            />

            <div className="">
              <p className="font-semibold text-accentColor font-inter">
                Harrison Wells
              </p>
              <p className="text-xs font-inter">Owner of Star Labs</p>
            </div>
          </div>

          {/* Testimony counter circles */}
          <div className="flex gap-2 mt-6">
            {appTestimonials.map((_, index) => (
              <div
                key={index}
                className={`rounded-full h-2 w-2 ${
                  index === 0 ? "bg-accentColor" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Testimony video playback */}
        <div className="flex-1">
          <iframe
            src="https://www.youtube.com/embed/InF16sp7J0M"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-[480px] w-full object-cover"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
