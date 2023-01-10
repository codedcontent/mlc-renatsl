import React, { useEffect, useState } from "react";
import mlcLogo from "../assets/logo 1.svg";
import closeIcon from "../assets/close_icon.svg";

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

  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  // UseEffect to listen for changes in the urls' hash
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
    <div className="w-full lg:h-20 h-14 xl:px-32 lg:px-24 md:px-12 px-2 fixed top-0 left-0 z-50">
      <div className="w-full border-b-white border-b-2 flex items-center justify-center h-full">
        <a href="/">
          <img
            src={mlcLogo}
            alt="minimum living cost rentals logo"
            className="h-10 w-36 text-white"
          />
        </a>

        {/* Large screen navigation */}
        <div className="lg:flex justify-center lg:gap-2 h-full items-center flex-1 hidden">
          {navLinks.map((link, index) => {
            return (
              <a
                key={index}
                className={`h-full px-5 hover:text-accentColor font-dm-sans grid text-center place-items-center text-white xl:text-sm text-xs ${
                  currentSection === `${link.path}` &&
                  "border-b-accentColor border-b-4 -mb-1 animate__animated animate__rubberBand"
                }`}
                style={{
                  textShadow: "1px 1px 5px #000",
                }}
                href={link.path}
              >
                {link.title}
              </a>
            );
          })}
        </div>

        {/* Hamburger menu */}
        <div
          className="w-max flex lg:hidden flex-col flex-1 items-end gap-1 cursor-pointer"
          onClick={openNav}
        >
          <div className="w-8 h-1 bg-black border-[1px] rounded-full border-white"></div>
          <div className="w-8 h-1 bg-black border-[1px] rounded-full border-white"></div>
          <div className="w-8 h-1 bg-black border-[1px] rounded-full border-white"></div>
        </div>

        {/* Small screen navigation */}
        {navOpen && (
          <div className="lg:hidden absolute right-0 top-0 z-50 grid h-screen w-80 bg-accentColor place-items-center animate__animated animate__bounceInRight">
            {/* Close icon */}
            <div onClick={closeNav}>
              <svg
                className="h-6 w-6 absolute right-5 top-5 cursor-pointer fill-white"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>

            <div className="w-full h-full space-y-6">
              {navLinks.map((link, index) => {
                return (
                  <a
                    key={index}
                    className={`h-max px-5 animate__animated hover:animate__bounce font-dm-sans grid text-center place-items-center text-white uppercase hover:scale-105`}
                    href={link.path}
                    onClick={closeNav}
                  >
                    {link.title}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomAppBar;
