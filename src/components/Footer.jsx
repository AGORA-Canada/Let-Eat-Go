import React from "react";
import RegisterButton from "./RegisterButton";
import LEGlogo from "../images/LEG_logo_white.svg";
import FacebookIcon from "../images/facebook-icon.svg";
import IGIcon from "../images/ig-icon.svg";
import TiktokIcon from "../images/tiktok-icon.svg";
import YoutubeIcon from "../images/youtube-icon.svg";

const Footer = () => {
  return (
    <div className="bg-orange-500 w-full text-white">
      <div
        id="footer"
        className="w-72 m-auto grid gap-16 lg:w-full lg:flex lg:justify-between lg:items-center lg:gap-4 lg:px-24 py-16"
      >
        <div style={{ gridArea: "logo" }} className="m-auto lg:m-0">
          <a href="/">
            <img
              src={LEGlogo}
              alt="Let eat go logo"
              className="w-64 lg:w-full"
            />
          </a>
        </div>
        <div
          className="text-center lg:text-left"
          style={{ gridArea: "address" }}
        >
          <p>+1 778.323.5976</p>
          <p>
            7673 6th St, Burnaby, BC
            <br />
            V3N 3M8
          </p>
        </div>
        <p style={{ gridArea: "copyright" }}>© 2023 by LET EAT GO</p>
        <div
          className="flex flex-col gap-6 items-center"
          style={{ gridArea: "social" }}
        >
          <div className="flex w-full justify-center gap-6 lg:justify-between">
            <a href="https://www.facebook.com/profile.php?id=100069622074905">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/leteatgo_ca">
              <img src={IGIcon} alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com/@leteatgo">
              <img src={TiktokIcon} alt="Tiktok" />
            </a>
            <a href="https://www.youtube.com/@LETEATGOCA">
              <img src={YoutubeIcon} alt="Youtube" />
            </a>
          </div>
          <RegisterButton is_contrasted={true} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
