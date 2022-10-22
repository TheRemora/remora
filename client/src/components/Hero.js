import React from "react";
import "../styles/main.css";

function Hero() {
  return (
    <div className="hero text-center flex flex-col items-center justify-center">
      <div className="w-max ">
        <div>
          <h1 className="font-bold mgt-[10%] text-8xl text-center">
            Splitting Revenue Got Easy
          </h1>
        </div>
        <div className="text-2xl flex justify-evenly my-8">
          <div>
            <p className="feature1 text-[#FF7A00]">100% Decentralized</p>
          </div>
          <div>
            <p className="feature2 text-[#0BFF8A]">0% Management Fee</p>
          </div>
          <div>
            <p className="feature3 text-[#FFE606]">Unlimited Splits</p>
          </div>
        </div>
      </div>
      <div className="relative px-8 py my-4 ">
        <div className="absolute inset-[50px] animate-blurAnimation rounded-full p-6 blur-xl "></div>
        <button className="relative bg-background text-2xl px-6 py-6 animate-borderAnimation rounded-full my-12">
          Launch App
        </button>
      </div>
    </div>
  );
}

export default Hero;
