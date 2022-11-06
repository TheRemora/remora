import React from "react";

import "../styles/main.css";
import SiteLogo from "../widgets/SiteLogo";

function Header() {
  return (
    <SiteLogo className="container text-center h-24 w-24 mobile:text-center mobile:h-36 mobile:w-36 mobile:mx-auto tablet:text-center tablet:h-36 tablet:w-36 tablet:mx-auto laptop:text-center laptop:mx-auto laptop:h-48 laptop:w-48 desktop:text-center desktop:h-48 desktop:w-48 mx-auto" />
  );
}
export default Header;
