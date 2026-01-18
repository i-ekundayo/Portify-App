import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
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
        <p className="font-bold text-3xl lg:text-4xl text-center">
          CREATE ACCOUNT
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
              htmlFor="fullName"
              className=" text-[#424C59B2] dark:text-[#1ABCFEB2] mb-2.5 text-md lg:text-xl"
            >
              Full Name
            </label>
            <input
              type="text"
              className="border-[1.5px] bg-[#F5F8FA] dark:bg-[#424C59CC] border-[#424C5999] dark:border-[#1ABCFEB2] rounded-lg p-2 text-black dark:text-white outline-0 focus:border-[#1C3B5E] dark:focus:border-[3px] dark:focus:border-[#1ABCFE]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className=" text-[#424C59B2] dark:text-[#1ABCFEB2] mb-2.5 text-md lg:text-xl"
            >
              Email Address
            </label>
            <input
              type="email"
              className="border-[1.5px] bg-[#F5F8FA] dark:bg-[#424C59CC] border-[#424C5999] dark:border-[#1ABCFEB2] rounded-lg p-2 text-black dark:text-white outline-0 focus:border-[#1C3B5E] dark:focus:border-[3px] dark:focus:border-[#1ABCFE]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="username"
              className=" text-[#424C59B2] dark:text-[#1ABCFEB2] mb-2.5 text-md lg:text-xl"
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
          </div>

          <button className="font-semibold text-md lg:text-xl p-2 border border-[#1ABCFE] hover:bg-[#1ABCFE] text-[#1ABCFE] hover:text-white rounded-lg mb-2">
            Sign Up
          </button>
        </form>
        <div className="flex flex-col gap-4 items-center">
          <p className="text-[#1C3B5E] dark:text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-[#1ABCFE]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
