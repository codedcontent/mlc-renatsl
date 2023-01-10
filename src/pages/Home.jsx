import React from "react";
import CustomAppBar from "../components/CustomAppBar";
import mapImg from "../assets/GoogleMapTA.jpg";
import arrowDownIcon from "../assets/arrow-down-icon.svg";
import searchIcon from "../assets/search icon.svg";
import heroImg from "../assets/hero_img.png";

const Home = () => {
  return (
    <div
      className="relative bg-cover min-h-screen pb-4 w-full grid place-items-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <CustomAppBar />

      {/* main content */}
      <main className="flex md:flex-row flex-col justify-between items-center xl:px-32 lg:px-24 md:px-12 px-6 md:gap-10 gap-5 md:mt-0 mt-20 md:text-left text-center">
        <p className="lg:text-5xl md:text-4xl text-3xl leading-tight font-bold font-inter md:w-1/2 w-full text-white capitalize">
          Find the most affordable places to stay in Nigeria,{" "}
          <span className="text-[#FF792D] font-poppins">the African Giant</span>
        </p>

        <div className="space-y-6 md:w-1/2 w-full">
          <img
            src={mapImg}
            alt="map img"
            className="md:w-[400px] w-full h-[340px] rounded-2xl m-auto object-cover"
          />

          <div className="bg-white h-max py-2 md:w-[400px] w-full rounded-lg m-auto flex items-center px-2">
            <div className="border-2 border-gray-200 font-medium font-poppins lg:h-14 h-10 lg:px-5 px-2 rounded-l-md flex justify-between items-center gap-4 cursor-pointer">
              <p className="text-xs">All Type</p>

              <img src={arrowDownIcon} alt="arrow down icon" />
            </div>

            <div className="border-y-2 border-gray-200 font-medium font-poppins lg:h-14 h-10 lg:px-5 px-2 flex justify-between items-center gap-4 flex-1 cursor-pointer">
              <p className="text-xs">Neighborhood</p>

              <img src={arrowDownIcon} alt="arrow down icon" />
            </div>

            <div className="lg:h-14 h-10 lg:px-5 px-2 lgw-14 w-10 rounded-r-md bg-blue-500 grid place-items-center cursor-pointer">
              <img src={searchIcon} alt="search icon" className="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
