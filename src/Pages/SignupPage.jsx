import api from "../services/api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../assets/images/logo.png";
import { FaEye } from "react-icons/fa";
import "./LoginPage.css";

const SignupPage = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const getInput = (e) => {
    const {name, value} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };

  const showPassword = () => {
    setShowPass(!showPass);
  };

  const signUp = async (e) => {
    e.preventDefault();
    try{
      const { email, password, fullName } = formData;

      const response = await api.post("/v1/users/register", {
        email: email,
        password: password,
        fullName: fullName,
        username: email,
      });
      toast.success(response.data.message);
      navigate("/onboarding");
    } catch(error) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
    
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
              name="fullName"
              type="text"
              className="border-[1.5px] bg-[#F5F8FA] dark:bg-[#424C59CC] border-[#424C5999] dark:border-[#1ABCFEB2] rounded-lg p-2 text-black dark:text-white outline-0 focus:border-[#1C3B5E] dark:focus:border-[3px] dark:focus:border-[#1ABCFE]"
              onChange={getInput}
              value={formData.fullName}
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
              name="email"
              type="email"
              className="border-[1.5px] bg-[#F5F8FA] dark:bg-[#424C59CC] border-[#424C5999] dark:border-[#1ABCFEB2] rounded-lg p-2 text-black dark:text-white outline-0 focus:border-[#1C3B5E] dark:focus:border-[3px] dark:focus:border-[#1ABCFE]"
              onChange={getInput}
              value={formData.email}
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
                name="password"
                type={showPass ? "text" : "password"}
                className="border-[1.5px] bg-[#F5F8FA] dark:bg-[#424C59CC] border-[#424C5999] dark:border-[#1ABCFEB2] rounded-lg p-2 text-black dark:text-white outline-0 focus:border-[#1C3B5E] dark:focus:border-[3px] dark:focus:border-[#1ABCFE] w-full"
                onChange={getInput}
                value={formData.password}
              />
              <FaEye
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#424C59B2] dark:text-[#1ABCFEB2] cursor-pointer"
                onClick={showPassword}
              />
            </div>
          </div>

          <button className="font-semibold text-md lg:text-xl p-2 border border-[#1ABCFE] hover:bg-[#1ABCFE] text-[#1ABCFE] hover:text-white rounded-lg mb-2" onClick={signUp}>
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
