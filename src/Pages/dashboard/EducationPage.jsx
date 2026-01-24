import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header.jsx";
import Sidebar from "./Sidebar.jsx";
import { FaAngleDown } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import "./PersonalInfoPage.css";
import "./EducationPage.css";

const EducationPage = () => {
  const [dropDown, setDropDown] = useState(false);
  const [degree, setDegree] = useState("");

  const toggleDropDown = () => {
    setDropDown((prev) => !prev);
  };

  const selectedDegree = (e) => {
    setDegree(e.target.textContent);
    setDropDown(false);
  }

  return (
    <div className="personal-info-page">
      <Header />
      <Sidebar />
      <main className="main flex flex-col p-5 pr-8 xl:pr-24 xl:p-10 gap-2.5">
        <button className="border-2 border-[#1ABCFE] text-[#1ABCFE] px-3 py-1 rounded-lg font-inter self-end">
          Preview
        </button>
        <section>
          <div className="text-center sm:text-left mb-10">
            <h2 className="font-semibold text-xl md:text-2xl  lg:text-3xl xl:text-4xl mb-2.5">
              Education
            </h2>
            <p className="font-inter text-sm">
              Add your educational background, highlight your degrees to
              optimize your ATS profile.
            </p>
          </div>
          <div>
            <form
              action=""
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10"
            >
              <div className="flex flex-col gap-2.5 col-span-full">
                <label htmlFor="degree">Degree</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your LinkedIn URL"
                    className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5 w-full"
                    value={degree}
                  />
                  <FaAngleDown
                    className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={toggleDropDown}
                  />
                  <div
                    className={`${dropDown ? "flex" : "hidden"} degree absolute right-0 top-0 w-48 flex-col gap-4 rounded-lg py-7 bg-white`}
                  >
                    <FaTimes
                      className="self-end cursor-pointer mr-7"
                      onClick={toggleDropDown}
                    />
                    <ul className="flex flex-col">
                      <li
                        className="cursor-pointer py-1 px-7 hover:bg-[#D3D7DD]"
                        value="BSc"
                        onClick={selectedDegree}
                      >
                        BSc
                      </li>
                      <li
                        className="cursor-pointer py-1 px-7 hover:bg-[#D3D7DD]"
                        value="BA"
                        onClick={selectedDegree}
                      >
                        BA
                      </li>
                      <li
                        className="cursor-pointer py-1 px-7 hover:bg-[#D3D7DD]"
                        value="B.Eng"
                        onClick={selectedDegree}
                      >
                        B.Eng
                      </li>
                      <li
                        className="cursor-pointer py-1 px-7 hover:bg-[#D3D7DD]"
                        value="B.Ed"
                        onClick={selectedDegree}
                      >
                        B.Ed
                      </li>
                      <li
                        className="cursor-pointer py-1 px-7 hover:bg-[#D3D7DD]"
                        value="MA"
                        onClick={selectedDegree}
                      >
                        MA
                      </li>
                      <li
                        className="cursor-pointer py-1 px-7 hover:bg-[#D3D7DD]"
                        value="Phd"
                        onClick={selectedDegree}
                      >
                        Phd
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="university">University</label>
                <input
                  type="text"
                  placeholder="Enter your school name"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="course">Course</label>
                <input
                  type="text"
                  placeholder="Enter your course of study"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="year-of-graduation">Year of graduation</label>
                <input
                  type="date"
                  placeholder="Enter with country code e.g +234"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  placeholder="Enter your home address"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                />
              </div>
              <div className="flex flex-col gap-2.5 col-span-full">
                <label htmlFor="textarea">
                  Optional: Describe your key learning, achievements or projects
                </label>
                <textarea
                  name="textarea"
                  id=""
                  rows="8"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5 "
                ></textarea>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10 mt-20">
            <Link to="/dashboard/personal-info">
              <button className="border-2 rounded-xl border-[#1ABCFE] text-[#1ABCFE] py-2 w-full">
                Back
              </button>
            </Link>
            <button className="border-2 rounded-xl border-[#1ABCFE] bg-[#1ABCFE] text-white py-2">
              Next: Experience
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EducationPage;
