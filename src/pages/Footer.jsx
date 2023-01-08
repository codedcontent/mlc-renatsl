import React from "react";
import mlcLogo from "../assets/logo 1.svg";

const Footer = () => {
  return (
    <footer
      className="h-screen w-full lg:px-24 pb-10 grid place-items-center"
      id="#footer"
    >
      {/* Footer brand info */}
      <div className="flex justify-center items-center w-full my-20 border-t-2 border-accentColor py-10">
        <div className="flex-1 items-center justify-center grid place-items-center">
          <div className="w-max bg-black text-white p-4 space-y-4 rounded-md">
            <img src={mlcLogo} alt="mlcLogo" className="rounded-md" />

            <p className="text-2xl font-inter font-black border-t-2 border-white">
              MLC Rentals
            </p>
          </div>
        </div>
        <div className="flex-1 items-center justify-center">Details</div>
      </div>

      {/* Footer links */}
      <div className="border-t-[1px] border-[#7BB9FC] w-[80%] m-auto py-2">
        Footer Links
      </div>
    </footer>
  );
};

export default Footer;
