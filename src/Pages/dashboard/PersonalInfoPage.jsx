import { useState } from "react";
import DashboardHeader from "../../Components/Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Image from "../../assets/images/image-picture.png";
import "./PersonalInfoPage.css";

const PersonalInfoPage = () => {
  const [picture, setPicture] = useState("");
  const pictureUpload = (e) => {
    setPicture(e.target.files[0]?.name);
  };
  const size = 100;
  return (
    <div className="personal-info-page">
      <DashboardHeader />
      <Sidebar />
      <main className="main flex flex-col p-5 pr-8 xl:pr-24 xl:p-10 gap-2.5">
        <button className="border-2 border-[#1ABCFE] text-[#1ABCFE] px-3 py-1 rounded-lg font-inter self-end">
          Preview
        </button>
        <section>
          <div className="text-center sm:text-left mb-10">
            <h2 className="font-semibold text-xl md:text-2xl  lg:text-3xl xl:text-4xl mb-2.5">
              Personal Info
            </h2>
            <p className="font-inter text-sm">
              Provide your personal information, and contact details. Ensure
              your ATS profile is strong, and up-to-date.
            </p>
          </div>
          <div>
            <form
              action=""
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10"
            >
              <div className="flex flex-col gap-2.5">
                <label htmlFor="job-role">Job Role/Title</label>
                <input
                  type="text"
                  placeholder="Enter your role/title"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-2 lg:py-5"
                />
              </div>
              <div className="flex gap-2 items-center picture-image">
                <img src={Image} alt="picture-image" width={size} />
                <div className="flex flex-col gap-1">
                  <input
                    type="file"
                    className="hidden"
                    id="pictureUpload"
                    onChange={pictureUpload}
                  />
                  <label
                    htmlFor="pictureUpload"
                    className="text-[#1ABCFE] font-inter cursor-pointer"
                  >
                    Upload Picture
                  </label>
                  {picture && (
                    <span className="text-sm text-gray-600">{picture}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="job-role">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name e.g John"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-2 lg:py-5"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="job-role">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name e.g Doe"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-2 lg:py-5"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="job-role">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter with country code e.g +234"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-2 lg:py-5"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="job-role">Contact Email</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-2 lg:py-5"
                />
              </div>
              <div className="flex flex-col gap-2.5 col-span-full">
                <label htmlFor="job-role">LinkedIn Profile</label>
                <input
                  type="text"
                  placeholder="Enter your LinkedIn URL"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-2 lg:py-5 "
                />
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10 mt-20">
            <button className="border-2 rounded-xl border-[#1ABCFE] text-[#1ABCFE] py-2">
              Back
            </button>
            <button className="border-2 rounded-xl border-[#1ABCFE] bg-[#1ABCFE] text-white py-2">
              Next: Education
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PersonalInfoPage;
