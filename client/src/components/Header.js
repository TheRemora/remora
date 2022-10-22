import React from "react";
import siteLogo from "../assets/site-logo.svg";
import "../styles/main.css";

function Header() {
  return (
    <div className="flex justify-center">
      <a href="localhost:3000">
        <img src={siteLogo} alt="sitelogo" className="text-center h-48 w-48" />
      </a>
    </div>
  );
}
export default Header;
