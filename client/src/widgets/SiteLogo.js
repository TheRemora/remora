import React from "react";
import siteLogo from "../assets/site-logo.svg";
function SiteLogo({ className }) {
  return (
    <div className="flex justify-center">
      <img src={siteLogo} alt="sitelogo" className={className} />
    </div>
  );
}

export default SiteLogo;
