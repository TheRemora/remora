import React from "react";
import "../styles/Hero.css";
function Hero() {
  return (
    <div className="hero">
      <div>
        <h1 className="heroTitle">Splitting Revenue Got Easy</h1>
      </div>
      <div className="heroDesc">
        <div>
          <p className="feature1">100% Decentralized</p>
        </div>
        <div>
          <p className="feature2">0% Management Fee</p>
        </div>
        <div>
          <p className="feature3">Unlimited Splits</p>
        </div>
      </div>
      <div>
        <button className="heroCTA">Launch App</button>
      </div>
    </div>
  );
}

export default Hero;
