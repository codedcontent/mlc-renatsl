import React, { useEffect, useState } from "react";
import mlcLogo from "../assets/logo 1.svg";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Landlord",
    path: "#landlord",
  },
  {
    title: "Tenants",
    path: "#tenants",
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
    <div className="w-full h-20 lg:px-32 absolute top-0 left-0">
      <div className="w-full border-b-white border-b-2 flex items-center justify-center h-full">
        <a href="/">
          <img
            src={mlcLogo}
            alt="minimum living cost rentals logo"
            className="h-10 w-36 text-white"
          />
        </a>

        <div className="flex justify-center lg:gap-14 h-full items-center flex-1">
          {navLinks.map((link, index) => {
            return (
              <a
                key={index}
                className={`h-full px-5 font-dm-sans grid text-center place-items-center text-white ${
                  currentSection === `${link.path}` &&
                  "border-b-white border-b-2"
                }`}
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
