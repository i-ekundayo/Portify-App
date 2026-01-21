import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import phone from "../../assets/images/si_phone-fill.png";
import whatsapp from "../../assets/images/whatsapp.png";
import email from "../../assets/images/email.png";
import "./LandingPageHeader.css";

const LandingPageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (link) => {
    setIsDropdownOpen(isDropdownOpen === link ? null : link);
  };

  return (
    <header className="relative flex justify-between px-5 py-3 md:px-20 lg:py-8 items-center w-full">
      <div className="logo flex gap-2 items-end">
        <img src={logo} alt="logo" />
        <p className="font-semibold text-3xl lg:text-4xl">Portify</p>
      </div>
      <FaBars
        className="menu-icon text-[#424C59] cursor-pointer"
        onClick={toggleMenu}
      />

      <nav
        className={`landing-page-nav absolute ${
          isMenuOpen ? "block" : "hidden"
        } bg-white top-0 right-0 md:right-10 rounded-lg p-5 md:py-5 md:px-10 lg:p-10 flex flex-col gap-10`}
      >
        <div className="flex justify-end">
          <FaTimes
            className="close-icon cursor-pointer size-7"
            onClick={toggleMenu}
          />
        </div>
        <div className="flex flex-col gap-8 border-y border-y-black py-8 pr-24">
          <ul className="flex flex-col gap-3 text-xl">
            <li>
              <button className="flex items-center">
                Products
                <FaAngleDown
                  className={`${
                    isDropdownOpen === "products" ? "rotate-180" : ""
                  } inline-block ml-3 size-4 text-[#424C59] transition-transform`}
                  onClick={() => toggleDropdown("products")}
                />
              </button>

              {isDropdownOpen === "products" && (
                <ul className={`font-light text-lg ml-5 mt-3`}>
                  <li>Resume Builder</li>
                  <li>CV Builder</li>
                  <li>Portfolio Builder</li>
                  <li>Cover letter</li>
                </ul>
              )}
            </li>
            <li>
              <button className="flex items-center">
                Templates
                <FaAngleDown
                  className={`${
                    isDropdownOpen === "templates" ? "rotate-180" : ""
                  } inline-block ml-3 size-4 text-[#424C59] transition-transform`}
                  onClick={() => toggleDropdown("templates")}
                />
              </button>
              {isDropdownOpen === "templates" && (
                <ul className={`font-light text-lg ml-5 mt-3`}>
                  <li>Resume Template</li>
                  <li>CV Template</li>
                  <li>Portfolio Template</li>
                </ul>
              )}
            </li>
            <li>About</li>
            <li>Account</li>
          </ul>
          <div className="flex flex-col gap-3">
            <p className="font-xl font-light">Contact Us</p>
            <div className="flex gap-5">
              <img src={phone} alt="phone-icon" className="size-5" />
              <img src={whatsapp} alt="whatsapp-icon" className="size-5" />
              <img src={email} alt="email-icon" className="size-5" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LandingPageHeader;
