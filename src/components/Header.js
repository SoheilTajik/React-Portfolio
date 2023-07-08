import React from "react";

import Logo from "../assets/logo.png";
import Logo1 from "../assets/logo1.png";


const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/**logo */}
          <a href="#">
            <img src={Logo1} alt="logo" width={100} />
          </a>
          <img src={Logo} alt="logo1" width={100}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
