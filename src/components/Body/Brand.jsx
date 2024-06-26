import React from "react";
import RegisterButton from "../RegisterButton";
import BrandLogo1 from "../../images/brand_logo_sushiway.png";
import BrandLogo2 from "../../images/brand_logo_torder2.png";
import BrandLogo3 from "../../images/brand_logo_twohorns.png";
const Brand = () => {
  return (
    <div className="py-20 px-4">
      <div className="flex flex-col items-center space-y-3">
        <h2 className="text-black text-3xl sm:text-4xl font-bold">
          Brands that are with LET EAT GO
        </h2>
        <p className="text-sm sm:text-base px-10 sm:w-1/2">
          We are integrated with various POS system companies, so when orders
          come in through online ordering, they appear directly on the POS
          system.
        </p>
      </div>
      <div className="flex flex-row justify-evenly items-center flex-wrap">
        <img src={BrandLogo1} alt="Logo1" className="w-32 h-28" />
        <img src={BrandLogo2} alt="Logo2" className="w-26 h-12" />
        <img src={BrandLogo3} alt="Logo3" className="w-26 h-12" />
      </div>
      <div className="w-full flex justify-center mt-32 ">
        <RegisterButton label="Wanna Join ?" />
      </div>
    </div>
  );
};

export default Brand;
