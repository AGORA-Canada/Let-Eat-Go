import React from "react";
import logo from "../images/LEG_logo 2.png";
import RegisterButton from "./RegisterButton";
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between h-15 px-10 py-4">
        <div className="px-4 py-2 ml-4 rounded">
          <a href="/">
            <img src={logo} alt="Logo" />
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
