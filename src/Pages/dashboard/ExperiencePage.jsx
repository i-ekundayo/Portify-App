import { Link } from "react-router-dom";
import Header from "../../Components/Header.jsx";
import Sidebar from "./Sidebar.jsx";

const ExperiencePage = () => {
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
              Experience
            </h2>
            <p className="font-inter text-sm">
              Add your work experience, highlight your professional achievement
              to stand out.
            </p>
          </div>
          <div>
            <form
              action=""
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10"
            >
              <div className="flex flex-col gap-2.5">
                <label htmlFor="job-role">Job Title</label>
                <input
                  type="text"
                  placeholder="Enter your role/title"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  placeholder="Enter the name of your company"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="start-date">Start Date</label>
                <input
                  type="date"
                  placeholder="Enter with country code e.g +234"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="end-date">End Date</label>
                <input
                  type="date"
                  placeholder="Enter with country code e.g +234"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                />
              </div>
              <div className="flex flex-col gap-2.5 col-span-full">
                <label htmlFor="textarea">
                  Responsibilities & Achievements
                </label>
                <textarea
                  name="textarea"
                  id=""
                  rows="8"
                  placeholder="List your responsibilities, projects, and key accomplishment"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5 "
                ></textarea>
              </div>
              <div className="flex flex-col gap-2.5 col-span-full">
                <label htmlFor="textarea">Upload Images</label>
                <input
                  type="file"
                  id=""
                  rows="8"
                  placeholder="Upload your project / design / pictures (screens or pages)"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5 "
                ></input>
              </div>
              <div className="flex flex-col gap-2.5 col-span-full">
                <label htmlFor="textarea">Description Box</label>
                <input
                  name="textarea"
                  id=""
                  rows="5"
                  placeholder="Write a brief summary ON THE PROJECT ABOVE"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5 "
                ></input>
              </div>
              <div className="flex flex-col gap-2.5 col-span-full">
                <label htmlFor="textarea">Professional Summary</label>
                <textarea
                  name="textarea"
                  id=""
                  rows="8"
                  placeholder="Briefly describe your professional journey"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5 "
                ></textarea>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10 mt-20">
            <Link to="/dashboard/education">
              <button className="border-2 rounded-xl border-[#1ABCFE] text-[#1ABCFE] py-2 w-full">
                Back
              </button>
            </Link>
            <button className="border-2 rounded-xl border-[#1ABCFE] bg-[#1ABCFE] text-white py-2">
              Next: Skills
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ExperiencePage