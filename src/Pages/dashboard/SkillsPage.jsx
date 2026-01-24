import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Sidebar from "./Sidebar";
import './PersonalInfoPage.css';

const SkillsPage = () => {
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
              Skills
            </h2>
            <p className="font-inter text-sm">
              List your professional skills. Emphasize your key strengths
            </p>
          </div>
          <div>
            <form
              action=""
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10"
            >
              <div className="flex flex-col gap-2.5 col-span-full">
                <label htmlFor="skills">Skills</label>
                <textarea
                  name="skills"
                  id="skills"
                  rows="8"
                  placeholder="Enter a skill"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5 "
                ></textarea>
              </div>
              <div className="flex flex-col gap-2.5 col-span-full">
                <label htmlFor="relevance">Relevance</label>
                <textarea
                  name="relevance"
                  id="relevance"
                  rows="8"
                  placeholder="Optional: Explain how this skill is relevant to your desired roles"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5 "
                ></textarea>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10 mt-20">
            <Link to="/dashboard/experience">
              <button className="border-2 rounded-xl border-[#1ABCFE] text-[#1ABCFE] py-2 w-full">
                Back
              </button>
            </Link>
            <button className="border-2 rounded-xl border-[#1ABCFE] bg-[#1ABCFE] text-white py-2">
              Next: Certifications
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SkillsPage