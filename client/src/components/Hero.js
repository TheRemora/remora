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
  return (
    <div className="hero text-center flex flex-col items-center justify-center">
      <div className="w-max">
        <div>
          <h1 className="font-bold mt-[10%] text-8xl text-center">{title}</h1>
        </div>
        <div className="text-2xl flex justify-evenly my-8">
          <Features className="text-[#FF7A00]" features="100% Decentralized" />
          <Features className="text-[#0BFF8A]" features="0% Management Fee" />
          <Features className="text-[#FFE606]" features="Unlimited Splits" />
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
