import React, { useState, useEffect } from "react";

const RegisterButton = ({ label, link, is_contrasted }) => {
  const [isScrolling, setScrolling] = useState(false);

  const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          setScrolling(true);
          targetElement.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => setScrolling(false), 1000); 
      }
  };

  useEffect(() => {
      const handleScrollEnd = () => setScrolling(false);
      window.addEventListener('scroll', handleScrollEnd);
      return () => window.removeEventListener('scroll', handleScrollEnd);
  }, []);


  var buttonLabel;
  var buttonLink;
  if (label) {
    buttonLabel = label;
  } else {
    buttonLabel = "Resister your restaurant";
  }

  if (link) {
    buttonLink = link;
  } else {
    buttonLink = "#contact";
  }

  return (
    <a
      href={buttonLink}
      onClick={(e)=> handleScroll(e)}
      className={`${
        is_contrasted
          ? "bg-white text-orange-500"
          : "bg-orange-500 text-white"
      } block w-56 py-2 rounded font-bold`}
    >
      {buttonLabel}
    </a>
  );
};

export default RegisterButton;
