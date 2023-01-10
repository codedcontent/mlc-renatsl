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

            <div className="lg:h-14 h-10 lg:w-14 w-10 lg:px-5 px-2  rounded-r-md bg-blue-500 grid place-items-center cursor-pointer">
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-white "
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-9 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
