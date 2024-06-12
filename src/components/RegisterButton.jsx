import React, { useState, useEffect } from "react";
import Link from "react-scroll";

const RegisterButton = ({ label, link, is_contrasted }) => {
  const [isScrolling, setScrolling] = useState(false);

  const handleScroll = (e) => {
    e.preventDefault();
    const target = e.target.closest("a");
    if (!target) return;

    const href = target.getAttribute("href");
    if (!href) return;

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setScrolling(true);
      targetElement.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setScrolling(false), 1000);
    }
  };
  useEffect(() => {
    const handleScrollEnd = () => setScrolling(false);
    window.addEventListener("scroll", handleScrollEnd);
    return () => window.removeEventListener("scroll", handleScrollEnd);
  }, []);

  var buttonLabel;
  var buttonMobileLabel;
  var buttonLink;

  if (label) {
    buttonLabel = label;
    buttonMobileLabel = label;
  } else {
    buttonLabel = "Register your restaurant";
    buttonMobileLabel = "Register";
  }

  if (link) {
    buttonLink = link;
  } else {
    buttonLink = "#contact";
  }

  return (
    <a
      href={buttonLink}
      onClick={(e) => handleScroll(e)}
      className={`${
        is_contrasted ? "bg-white text-orange-500" : "bg-orange-500 text-white"
      } block px-4 sm:px-8 py-2 rounded font-bold text-sm sm:text-base`}
    >
      <span className="hidden sm:block">{buttonLabel}</span>
      <span className="block sm:hidden ">{buttonMobileLabel}</span>
    </a>
  );
};

export default RegisterButton;
