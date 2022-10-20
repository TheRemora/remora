import React from "react";
import siteLogo from "../assets/site-logo.svg";
import "../styles/Header.css";
function Header() {
  return (
    <div className="navbar">
      <a href="localhost:3000">
        <img src={siteLogo} alt="sitelogo" />
      </a>
    </div>
  );
}
export default Header;
