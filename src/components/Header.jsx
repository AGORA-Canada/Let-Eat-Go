import React from "react";
import RegisterButton from "./RegisterButton";
const Header = () => {
  return (
    <div>
      <div className="bg-gray-600 p-44 space-y-5">
        <h2 className="text-white font-bold text-4xl">
          When restaurants meet online order,
          <br />
          LET EAT GO online order
        </h2>
        <p className="text-white text-base">
          Bring comfort into your restaurant with our online order system
        </p>
        <div className="flex justify-center w-full">
          <RegisterButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
