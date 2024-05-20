import React from "react";

const FixedMenu = () => {
  return (
    <div className="fixed z-5 top-0 left-0 w-full h-full flex flex-row-reverse items-end">
      <div className="flex flex-col space-y-3 w-44 mr-10 right-0">
        <div className="bg-white shadow-xl rounded-2xl p-2 border text-orange-500">
          Contact us
        </div>
        <div className="bg-white shadow-xl rounded-2xl p-2 border">
          Customer support
        </div>
        <div className="bg-white shadow-xl rounded-2xl p-2 border">
          Free consultation
        </div>
      </div>
    </div>
  );
};

export default FixedMenu;
