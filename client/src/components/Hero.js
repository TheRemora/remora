import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import AnimatedButton from "../widgets/buttons";

export const Features = ({ className, features }) => {
  return (
    <div>
      <p className={className}>{features}</p>
    </div>
  );
};

function Hero() {
  const title = "Splitting Revenue Got Easy";

  const featureStyle =
    "text-[12px] mobile:text-sm tablet:text-2xl laptop:text-2xl desktop:text-2xl";

  return (
    <div className="hero text-center flex flex-col items-center justify-center">
      <div className="w-screen">
        <div>
          <h1 className="font-bold mt-[7%] text-4xl text-center mobile:text-4xl tablet:text-6xl laptop:text-8xl desktop:text-8xl">
            {title}
          </h1>
        </div>
        <div className=" flex justify-evenly my-8">
          <Features
            className={`text-[#FF7A00] ${featureStyle}`}
            features="100% Decentralized"
          />
          <Features
            className={`text-[#0BFF8A] ${featureStyle}`}
            features="0% Management Fee"
          />
          <Features
            className={`text-[#FFE606] ${featureStyle}`}
            features="Unlimited Splits"
          />
        </div>
      </div>
      <div className="relative px-8 py my-4 ">
        <div className="absolute inset-[50px] animate-blurAnimation rounded-full p-6 blur-xl "></div>
        <Link to="/mint">
          <AnimatedButton
            className="relative bg-background text-2xl px-6 py-6 animate-borderAnimation rounded-full my-12"
            buttonName="Launch App"
          />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
