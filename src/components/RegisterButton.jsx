import React from "react";

const RegisterButton = ({ label }) => {
  return (
    <div>
      <div className="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer">
        {label}
      </div>
    </div>
  );
};

export default RegisterButton;
