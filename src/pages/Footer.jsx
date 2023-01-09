import React from "react";
import mlcLogo from "../assets/logo 1.svg";
import locationIcon from "../assets/location-icon.svg";
import phoneIcon from "../assets/call-icon.svg";
import twitterIcon from "../assets/Twitter.svg";
import linkInIcon from "../assets/LinkedIn.svg";
import tubeIcon from "../assets/Youtube.svg";
import gramIcon from "../assets/Instagram.svg";

const Footer = () => {
  const footerLinks = [
    {
      title: "about us",
    },
    {
      title: "contact us",
    },
    {
      title: "help",
    },
    {
      title: "privacy policy",
    },
    {
      title: "disclaimer",
    },
  ];
  return (
    <footer
      className="w-full lg:px-24 my-24 grid place-items-center"
      id="#footer"
    >
      {/* Footer brand info */}
      <div className="flex justify-center items-center w-full mt-10 border-t-2 border-accentColor py-10">
        {/* Brand logo */}
        <div className="flex-1 items-center justify-center grid place-items-center">
          <div className="w-max bg-black text-white p-4 space-y-4 rounded-md">
            <img src={mlcLogo} alt="mlcLogo" className="rounded-md" />

            <p className="text-2xl font-inter font-black border-t-2 border-white">
              MLC Rentals
            </p>
          </div>
        </div>

        {/* Contact && Social media */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex gap-4">
            <img src={locationIcon} alt="locationIcon" className="w-6 h-6" />

            <p className="font-assistant text-secondary">
              345 ABC Drive, Suite 4 • Charlottesville, CA, 12345
            </p>
          </div>

          <div className="flex gap-4">
            <img src={phoneIcon} alt="locationIcon" className="w-6 h-6" />

            <p className="font-assistant text-secondary">(+234) 816 5239 374</p>
          </div>

          <div className="mt-6 flex gap-6 w-full items-center">
            <p className="text-gray-400 capitalize font-medium">
              Our social media
            </p>

            <a href="link" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="phoneIcon" className="h-4 w-4" />
            </a>

            <a href="link" target="_blank" rel="noopener noreferrer">
              <img src={linkInIcon} alt="phoneIcon" className="h-4 w-4" />
            </a>

            <a href="link" target="_blank" rel="noopener noreferrer">
              <img src={tubeIcon} alt="phoneIcon" className="h-4 w-4" />
            </a>

            <a href="link" target="_blank" rel="noopener noreferrer">
              <img src={gramIcon} alt="phoneIcon" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer helpful links and copyright */}
      <div className="border-t-[1px] mt-6 border-[#7BB9FC] w-[80%] m-auto py-2">
        <div className="flex gap-4 justify-between">
          <div className="mt-6 flex gap-6 w-full items-center">
            {footerLinks.map((footerLink, index) => (
              <a
                key={index}
                href={footerLink.url}
                className="uppercase text-xs hover:text-accentColor cursor-pointer hover:font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {footerLink.title}
              </a>
            ))}
          </div>

          <div className="mt-6 flex gap-6 w-full items-center justify-end">
            <p className="text-gray-400 text-xs">
              Copyright © 2020 Ogechukwu Mephors - MLC rentals. All rights
              reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
