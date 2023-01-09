import React, { useEffect, useState } from "react";
import mlcLogo from "../assets/logo 1.svg";

const navLinks = [
  {
    title: "List of properties",
    path: "#properties",
  },
  {
    title: "Features",
    path: "#features",
  },
  {
    title: "Add a property",
    path: "#new-property",
  },
  {
    title: "Testimonials",
    path: "#testimonials",
  },
  {
    title: "Contact us",
    path: "#contact-us",
  },
];

const CustomAppBar = () => {
  const [currentSection, setCurrentSection] = useState(window.location.hash);

  useEffect(() => {
    const updateCurrentUrl = () => {
      setCurrentSection(window.location.hash);
    };

    window.addEventListener("popstate", updateCurrentUrl);

    return () => {
      window.removeEventListener("popstate", updateCurrentUrl);
      setCurrentSection("/");
    };
  }, []);

  return (
    <div className="w-full h-20 xl:px-32 lg:px-24 fixed top-0 left-0 z-50">
      <div className="w-full border-b-white border-b-2 flex items-center justify-center h-full">
        <a href="/">
          <img
            src={mlcLogo}
            alt="minimum living cost rentals logo"
            className="h-10 w-36 text-white"
          />
        </a>

        <div className="flex justify-center lg:gap-2 h-full items-center flex-1">
          {navLinks.map((link, index) => {
            return (
              <a
                key={index}
                className={`h-full px-5 font-dm-sans grid text-center place-items-center text-white xl:text-sm text-xs ${
                  currentSection === `${link.path}` &&
                  "border-b-accentColor border-b-4 -mb-1 animate__animated animate__rubberBand"
                }`}
                style={{
                  textShadow: "1px 1px 5px #F4511E",
                }}
                href={link.path}
              >
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomAppBar;
