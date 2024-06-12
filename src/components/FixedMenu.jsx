import React from "react";
import { Link } from "react-scroll";

const FixedMenu = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed flex flex-col space-y-3 w-44 right-4 bottom-5">
      <Link
        to="contact"
        smooth={true}
        className="bg-white shadow-xl rounded-full p-2 border text-orange-500"
      >
        Contact us
      </Link>
    </div>
  );
};

export default FixedMenu;
