import React from "react";

const FixedMenu = () => {
  return (
    <div className="fixed flex flex-col space-y-3 w-44 right-4 top-1/2">
      <div className="bg-white shadow-xl rounded-full p-2 border text-orange-500">
        Contact us
      </div>
      <div className="bg-white shadow-xl rounded-full p-2 border">
        Customer support
      </div>
      <div className="bg-white shadow-xl rounded-full p-2 border">
        Free consultation
      </div>
    </div>
  );
};

export default FixedMenu;
