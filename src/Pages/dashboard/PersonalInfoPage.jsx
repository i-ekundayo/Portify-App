import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api.js";
import Header from "../../Components/Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Image from "../../assets/images/image-picture.png";
import "./PersonalInfoPage.css";

const PersonalInfoPage = () => {
  const [picture, setPicture] = useState("");
  const [formData, setFormData] = useState({
    jobTitle: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    socialLink: [],
  });
  const navigate = useNavigate();

  // Picture Upload
  const pictureUpload = (e) => {
    setPicture(e.target.files[0]?.name);
    console.log(e.target.files);
  };
  const size = 100;

  // Store all inputs in an object
  const getInput = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit personal info
  const personalInfo = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const { jobTitle, firstName, lastName, phoneNumber, email, socialLink } =
      formData;
    const profilePic = picture;

    try {
      const response = await api.post(
        "/v1/personal-info",
        {
          jobTitle,
          profilePic,
          firstName,
          lastName,
          phoneNumber,
          email,
          socialLink,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      console.log(response.data);

      toast.success(response.data.message);
      navigate("/dashboard/education");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Failed to Upload Personal Info",
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
                  name="jobTitle"
                  type="text"
                  placeholder="Enter your role/title"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                  onChange={getInput}
                  value={formData.jobTitle}
                />
              </div>
              <div className="flex gap-2 items-center picture-image">
                <img src={Image} alt="picture-image" width={size} />
                <div className="flex flex-col gap-1">
                  <input
                    name="profilePic"
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
                <label htmlFor="first-name">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name e.g John"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                  onChange={getInput}
                  value={formData.firstName}
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="last-name">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name e.g Doe"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                  onChange={getInput}
                  value={formData.lastName}
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="phone-number">Phone Number</label>
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="Enter with country code e.g +234"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                  onChange={getInput}
                  value={formData.phoneNumber}
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="email">Contact Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                  onChange={getInput}
                  value={formData.email}
                />
              </div>
              <div className="flex flex-col gap-2.5 col-span-full">
                <label htmlFor="linkedIn">LinkedIn Profile</label>
                <input
                  name="socialLink"
                  type="text"
                  placeholder="Enter your LinkedIn URL"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5 "
                  value={formData.socialLink.join(", ")}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      socialLink: e.target.value
                        .split(",")
                        .map((link) => link.trim()),
                    }))
                  }
                />
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10 mt-20">
            <Link to="/dashboard">
              <button className="border-2 rounded-xl border-[#1ABCFE] text-[#1ABCFE] py-2 w-full">
                Back
              </button>
            </Link>
            <button
              className="border-2 rounded-xl border-[#1ABCFE] bg-[#1ABCFE] text-white py-2"
              onClick={personalInfo}
            >
              Next: Education
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PersonalInfoPage;
