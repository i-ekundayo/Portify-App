import api from "../../services/api.js";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../Components/Header.jsx";
import Sidebar from "./Sidebar.jsx";
import { FaAngleDown } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import "./PersonalInfoPage.css";
import "./EducationPage.css";

const EducationPage = () => {
  const [dropDown, setDropDown] = useState(false);
  const [formData, setFormData] = useState({
    degree: "",
    university: "",
    course: "",
    yearOfGrad: "",
    location: "",
    description: "",
  });
  const navigate = useNavigate();

  // Toggle the dropdown menu
  const toggleDropDown = () => {
    setDropDown((prev) => !prev);
  };

  // Select a degree
  const selectedDegree = (e) => {
    setFormData((prev) => ({
      ...prev,
      degree: e.target.textContent,
    }));
    setDropDown(false);
  };

  // Store all inputs in an object
  const getInput = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(formData);
  };

  // Submit personal info
  const Education = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log("TOKEN:", token);

    const { degree, university, course, yearOfGrad, location, description } =
      formData;

    try {
      const response = await api.post(
        "/v1/education",
        {
          degree,
          university,
          course,
          yearOfGrad,
          location,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      console.log(response);

      toast.success(response.data.message);
      navigate("/dashboard/experience");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Failed to Upload Education",
      );
    }
  };

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
                    name="degree"
                    type="text"
                    placeholder="Enter your LinkedIn URL"
                    className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5 w-full"
                    value={formData.degree}
                    readOnly
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
                  name="university"
                  type="text"
                  placeholder="Enter your school name"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                  onChange={getInput}
                  value={formData.university}
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="course">Course</label>
                <input
                  name="course"
                  type="text"
                  placeholder="Enter your course of study"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                  onChange={getInput}
                  value={formData.course}
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="year-of-graduation">Year of graduation</label>
                <input
                  name="yearOfGrad"
                  type="date"
                  placeholder="Enter with country code e.g +234"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                  onChange={getInput}
                  value={formData.yearOfGrad}
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="location">Location</label>
                <input
                  name="location"
                  type="text"
                  placeholder="Enter your home address"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                  onChange={getInput}
                  value={formData.location}
                />
              </div>
              <div className="flex flex-col gap-2.5 col-span-full">
                <label htmlFor="description">
                  Optional: Describe your key learning, achievements or projects
                </label>
                <textarea
                  name="description"
                  id=""
                  rows="8"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5 "
                  onChange={getInput}
                  value={formData.description}
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
            <button
              className="border-2 rounded-xl border-[#1ABCFE] bg-[#1ABCFE] text-white py-2"
              onClick={Education}
            >
              Next: Experience
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EducationPage;
