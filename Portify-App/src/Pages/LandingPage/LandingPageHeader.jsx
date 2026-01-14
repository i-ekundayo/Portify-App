import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import "./LandingPageHeader.css";

const LandingPageHeader = () => {
  return (
    <header className="flex justify-between px-5 py-3 lg:px-20 lg:py-8 items-center w-full">
      <div className="logo flex gap-2 items-end">
        <img src={logo} alt="logo" />
        <p className="font-semibold text-3xl lg:text-4xl">Portify</p>
      </div>
      <FaBars className="menu-icon text-[#424C59] cursor-pointer" />
    </header>
  );
};

export default LandingPageHeader;
