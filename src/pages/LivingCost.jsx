import React from "react";
import sectionImg from "../assets/building-unsplash.jpg";
import dollarPayIcon from "../assets/dollar-pay-icon.svg";
import communityIcon from "../assets/community-icon.svg";
import stackIcon from "../assets/stack-icon.svg";
import flowerIcon from "../assets/flower-icon.svg";
import shieldIcon from "../assets/safe-shield-icon.svg";
import eyeIcon from "../assets/eyes-icon.svg";

const livingFeatures = [
  {
    title: "Affordable price range",
    icon: dollarPayIcon,
  },
  {
    title: "Enjoy the community",
    icon: communityIcon,
  },
  {
    title: "You are the Landlord",
    icon: stackIcon,
  },
  {
    title: "The Peaceful Environment",
    icon: flowerIcon,
  },
  {
    title: "Protect your investment",
    icon: shieldIcon,
  },
  {
    title: "Clientele focused",
    icon: eyeIcon,
  },
];

const LivingCost = () => {
  return (
    <div
      className="h-max w-full lg:p-24 lg:py-0 md:py-6 md:px-12 px-6"
      id="features"
    >
      <div className="w-full mb-4">
        <span className="text-2xl font-inter font-bold capitalize">
          minimum living cost takes care of everything
        </span>

        <hr className="border-accentColor w-1/2 h-0.5 bg-accentColor" />
      </div>

      <div className="w-full h-full flex md:flex-row flex-col gap-5">
        <img
          src={sectionImg}
          alt="sectionImg"
          className="md:w-1/2 w-[90%] m-auto md:h-full h-64 bg-cover flex-1 rounded-xl"
        />

        <div className="grid grid-cols-3 lg:gap-10 gap-5 place-content-center break-words flex-1">
          {livingFeatures.map((feature, index) => (
            <div className="lg:space-y-3 w-full" key={index}>
              <div className="bg-white p-4 shadow-xl rounded-lg w-max">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="lg:h-10 md:h-6 lg:w-10 md:w-6"
                />
              </div>

              <p className="lg:text-xl font-bold">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LivingCost;
