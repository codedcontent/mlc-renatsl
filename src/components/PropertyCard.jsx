import React from "react";
import bedIcon from "../assets/bed-icon.svg";
import showerIcon from "../assets/shower-icon.svg";
import sizeIcon from "../assets/size-icon.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PropertyCard = ({ propertyDetails }) => {
  return (
    <div className="w-full shadow-xl rounded-2xl cursor-pointer">
      <LazyLoadImage
        src={propertyDetails.urls.raw}
        alt="apartment img"
        className="h-72 w-full rounded-t-lg object-cover"
      />

      <div className="space-y-4 px-6 mt-2">
        <p className="font-bold font-dm-sans text-xl">
          2578 Folsom street, san francisco, CA, 94110
        </p>

        <div className="space-y-1">
          <p className="font-dm-sans text-gray-400">Private Room</p>
          <p className="font-dm-sans text-accentColor text-2xl font-black">
            $1200/month
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x-2 px-6 mt-4 border-t-2 border-gray-200">
        <div className="p-4 flex items-center justify-center gap-2">
          <img src={bedIcon} alt="bedIcon" className="h-4 w-4" />

          <p className="font-dm-sans font-black">4</p>
        </div>

        <div className="p-4 flex items-center justify-center gap-2">
          <img src={showerIcon} alt="bedIcon" className="h-4 w-4" />

          <p className="font-dm-sans font-black">2</p>
        </div>

        <div className="p-4 flex items-center justify-center gap-2">
          <img src={sizeIcon} alt="bedIcon" className="h-4 w-4" />

          <p className="font-dm-sans font-black">2</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
