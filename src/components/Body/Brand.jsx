import React from "react";
import RegisterButton from "../RegisterButton";
import BrandLogo1 from "../../images/brand_logo_sushiway.png";
import BrandLogo2 from "../../images/brand_logo_torder2.png";
import BrandLogo3 from "../../images/brand_logo_twohorns.png";
const Brand = () => {
  return (
    <div>
      <div className="p-10 space-y-2">
        <p className="text-black text-2xl font-bold">
          Brands that are with LET EAT GO
        </p>
        <p className="text-xs">
          We are integrated with various POS system companies, so when orders
          come in through <br />
          online ordering, they appear directly on the POS system.
        </p>
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <img src={BrandLogo1} alt="Logo1" className="w-32 h-28" />
        <img src={BrandLogo2} alt="Logo2" className="w-26 h-12" />
        <img src={BrandLogo3} alt="Logo3" className="w-26 h-12" />
      </div>
      <div className="flex justify-center w-full p-20">
        <RegisterButton label="Wanna Join ?" />
      </div>
    </div>
  );
};

export default Brand;
