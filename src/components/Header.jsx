import React from "react";
import RegisterButton from "./RegisterButton";
const Header = () => {
  return (
    <div className="m-auto">
      <div className="bg-gray-600 px-4 py-40 space-y-5">
        <h1 className="text-white font-bold text-3xl sm:text-4xl">
          When restaurants meet online order,
          <br />
          LET EAT GO online order
        </h1>
        <p className="text-white text-sm sm:text-base">
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
