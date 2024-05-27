import React from "react";
import logo from "../images/LEG_logo 2.svg";
import RegisterButton from "./RegisterButton";
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between h-15 px-4 sm:px-12 lg:px-24 py-4">
        <div className="py-2">
          <a href="/">
            <img src={logo} alt="Logo" className="w-32 sm:w-full"/>
          </a>
        </div>
        <div>
          <RegisterButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
