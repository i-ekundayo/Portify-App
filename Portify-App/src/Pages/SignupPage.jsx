import { useState } from "react";
import { Link } from "react-router-dom";
import facebookIcon from "../assets/images/logos_facebook.png";
import googleIcon from "../assets/images/material-icon-theme_google.png";
import Logo from "../assets/images/logo.png";
import { FaApple } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "./LoginPage.css";

const SignupPage = () => {
  const [showPass, setShowPass] = useState(false);

  const showPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <section className="min-h-screen dark:bg-black bg-white font-inter flex items-center justify-center md:justify-end relative ">
      <div className="fixed left-0 top-1/2 -translate-y-1/2 w-2/5 rounded-r-full bg-[#1C3B5E] text-white border-[6px] border-l-0 border-[#1ABCFE] h-[120%] hidden md:flex items-center justify-center">
        <p className="font-bold text-3xl lg:text-5xl text-center">
          WELCOME BACK!
        </p>
      </div>

      <div className="flex flex-col justify-center items-center my-8 w-4/5 md:w-3/5">
        <div className="flex flex-col justify-center items-center mb-6 lg:mb-10">
          <img src={Logo} alt="logo" className=" border border-[#1ABCFE]" />
          <h2 className="text-[#1C3B5E] dark:text-[#1ABCFE] font-medium text-3xl">
            Portify
          </h2>
        </div>
        <form
          action=""
          className="text-[#1ABCFE] flex flex-col gap-6 w-4/5 lg:w-3/5"
        >
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className=" text-[#424C59B2] dark:text-[#1ABCFEB2] mb-2.5 text-xl lg:text-2xl"
            >
              Email
            </label>
            <input
              type="email"
              className="border-[1.5px] bg-[#F5F8FA] dark:bg-[#424C59CC] border-[#424C5999] dark:border-[#1ABCFEB2] rounded-lg p-2 text-black dark:text-white outline-0 focus:border-[#1C3B5E] dark:focus:border-[3px] dark:focus:border-[#1ABCFE]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="username"
              className=" text-[#424C59B2] dark:text-[#1ABCFEB2] mb-2.5 text-xl lg:text-2xl"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                className="border-[1.5px] bg-[#F5F8FA] dark:bg-[#424C59CC] border-[#424C5999] dark:border-[#1ABCFEB2] rounded-lg p-2 text-black dark:text-white outline-0 focus:border-[#1C3B5E] dark:focus:border-[3px] dark:focus:border-[#1ABCFE] w-full"
              />
              <FaEye
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#424C59B2] dark:text-[#1ABCFEB2] cursor-pointer"
                onClick={showPassword}
              />
            </div>
            <Link to="/forgot-password" className="self-end">
              Forgot Password?
            </Link>
          </div>

          <button className="font-semibold text-xl lg:text-2xl p-2 bg-[#1ABCFE] text-white rounded-lg mb-2">
            Login
          </button>
        </form>
        <div className="flex flex-col gap-4">
          <p className="text-[#1C3B5E] dark:text-white">
            New User?{" "}
            <Link to="/signup" className="text-[#1ABCFE]">
              Sign Up
            </Link>
          </p>
          <p className="text-black dark:text-white text-xl lg:text-2xl">
            Or sign up with
          </p>
          <div className="flex gap-3 lg:gap-5">
            <img
              src={facebookIcon}
              alt="facebook-icon"
              className="size-12 cursor-pointer"
            />
            <FaApple className="text-black dark:text-white size-12 cursor-pointer" />
            <img
              src={googleIcon}
              alt="google-icon"
              className="size-12 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
