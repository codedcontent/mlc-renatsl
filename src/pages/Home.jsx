import React from "react";
import CustomAppBar from "../components/CustomAppBar";
import mapImg from "../assets/GoogleMapTA.jpg";
import arrowDownIcon from "../assets/arrow-down-icon.svg";
import searchIcon from "../assets/search icon.svg";

const Home = () => {
  return (
    <div
      className="relative bg-hero-pattern bg-cover h-screen w-full grid place-items-center"
      id="#"
    >
      <CustomAppBar />

      <div className="flex justify-between items-center xl:px-32 lg:px-24 gap-10">
        <p className="text-5xl leading-tight font-bold font-inter w-1/2 text-white capitalize">
          Find the most affordable places to stay in Nigeria,{" "}
          <span className="text-accentColor font-poppins">
            the African Giant
          </span>
        </p>

        <div className="space-y-6 w-1/2">
          <img
            src={mapImg}
            alt="map img"
            className="w-[400px] h-[340px] rounded-2xl m-auto object-cover"
          />

          <div className="bg-white h-20 w-[400px] rounded-lg m-auto flex items-center px-4">
            <div className="border-2 border-gray-200 font-medium font-poppins h-14 px-5 rounded-l-md flex justify-between items-center gap-4 cursor-pointer">
              <p className="text-xs">All Type</p>

              <img src={arrowDownIcon} alt="arrow down icon" />
            </div>

            <div className="border-y-2 border-gray-200 font-medium font-poppins h-14 px-5 flex justify-between items-center gap-4 flex-1 cursor-pointer">
              <p className="text-xs">Neighborhood</p>

              <img src={arrowDownIcon} alt="arrow down icon" />
            </div>

            <div className="h-14 w-14 rounded-r-md bg-blue-500 grid place-items-center cursor-pointer">
              <img src={searchIcon} alt="search icon" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
