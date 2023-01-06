import React from "react";
import sectionImg from "../assets/section-1-img.png";
import dollarPayIcon from "../assets/dollar-pay-icon.svg";
import communityIcon from "../assets/community-icon.svg";
import stackIcon from "../assets/stack-icon.svg";
import flowerIcon from "../assets/flower-icon.svg";
import shieldIcon from "../assets/safe-shield-icon.svg";
import eyeIcon from "../assets/eyes-icon.svg";

const livingFeatures = [
  {
    title: "Pay as Little as possible!",
    icon: dollarPayIcon,
  },
  {
    title: "Enjoy wisdom of community!",
    icon: communityIcon,
  },
  {
    title: "Let's somebody else take care of Landlord!",
    icon: stackIcon,
  },
  {
    title: "Enjoy peaceful Environment!",
    icon: flowerIcon,
  },
  {
    title: "Stay Safe! Save Money!",
    icon: shieldIcon,
  },
  {
    title: "Pay for what you use!",
    icon: eyeIcon,
  },
];

const LivingCost = () => {
  return (
    <div className="h-screen w-full lg:p-24" id="#features">
      <div className="w-max">
        <span className="text-2xl font-inter font-bold capitalize">
          minimum living cost takes care of everything
        </span>

        <hr className="border-accentColor w-1/2 h-0.5 bg-accentColor" />
      </div>

      <div className="w-full h-full flex space-x-5">
        <img src={sectionImg} alt="sectionImg" className="W-12 bg-cover" />

        <div className="grid grid-cols-3 gap-10 place-content-center">
          {livingFeatures.map((feature, index) => (
            <div className="space-y-3 w-full" key={index}>
              <div className="bg-white p-4 shadow-xl rounded-lg w-max">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-10 w-10"
                />
              </div>

              <p className="text-xl font-bold">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LivingCost;
