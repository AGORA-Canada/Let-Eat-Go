import React from "react";
import logo from "../images/LEG_logo 2.png";
import RegisterButton from "./RegisterButton";
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between align-middle mx-auto h-15 pl-10 pr-10 p-4">
        <div className=" px-4 py-2 ml-4 rounded cursor-pointer">
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex flex-row space-x-5">
          <RegisterButton label="Register your restaurant" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
