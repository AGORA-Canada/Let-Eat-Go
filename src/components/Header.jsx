import React from "react";
import RegisterButton from "./RegisterButton";
const Header = () => {
  return (
    <div>
      <div className="bg-gray-600 p-24 space-y-5">
        <p className="text-white font-bold text-2xl">
          When restaurants meet online order,
          <br />
          LET EAT GO online order
          <br />
        </p>
        <p className="text-white text-sm">
          Bring comfort into your restaurant with our online order system
        </p>
        <div className="flex justify-center w-full">
          <RegisterButton label="Register your restaurant" />
        </div>
      </div>
    </div>
  );
};

export default Header;
