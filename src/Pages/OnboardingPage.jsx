import "./OnboardinPage.css";

const OnboardingPage = () => {
  return (
    <section className="p-6 lg:p-12 font-inter flex flex-col">
      <div className="grid grid-cols-4 gap-5">
        <div className="h-[8px] bg-[#1C3B5E4D] rounded-md active"></div>
        <div className="h-[8px] bg-[#1C3B5E4D] rounded-md"></div>
        <div className="h-[8px] bg-[#1C3B5E4D] rounded-md"></div>
        <div className="h-[8px] bg-[#1C3B5E4D] rounded-md"></div>
      </div>
      <button className="px-4 py-1 border-2 border-[#1ABCFE] text-[#1ABCFE] text-md rounded-lg mt-4 self-end hover:bg-[#1ABCFE] hover:text-white transition-all">
        Skip
      </button>
      <div className="self-center">
        {/* First Slide */}
        <div className="">
          <div className="flex flex-col gap-6 mb-6 items-center text-center">
            <h2 className="font-playfair text-xl lg:text-2xl">
              What profession are you building for?
            </h2>
          </div>

          <div className="professions grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4">
            <div className="flex flex-col justify-center gap-4 text-center px-2 py-6 bg-[#1C3B5E] text-white rounded-xl">
              <h3 className="text-lg font-semibold">Creative & Design</h3>
              <p>
                Graphic Designer, Architect, Photographer, Fashion Designer, Art
                Director
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 text-center px-2 py-6 bg-[#1C3B5E] text-white rounded-xl">
              <h3 className="text-lg font-semibold">Business & Consulting</h3>
              <p>Banker, Consultant, Marketing Director, Business Analyst.</p>
            </div>
            <div className="flex flex-col justify-center gap-4 text-center px-2 py-6 bg-[#1C3B5E] text-white rounded-xl">
              <h3 className="text-lg font-semibold">Tech & Developers</h3>
              <p>
                Graphic Designer, Architect, Photographer, Fashion Designer, Art
                Director
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 text-center px-2 py-6 bg-[#1C3B5E] text-white rounded-xl">
              <h3 className="text-lg font-semibold">
                Communications & Editorial
              </h3>
              <p>
                Journalist, Content Strategist, Editor, Blogger, Social Media
                Manager.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 text-center px-2 py-6 bg-[#1C3B5E] text-white rounded-xl">
              <h3 className="text-lg font-semibold">Education & Service</h3>
              <p>
                Teacher, Event Planner, Personal Trainer, Real Estate Agent,
                Counselor.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 text-center px-2 py-6 bg-[#1C3B5E] text-white rounded-xl">
              <h3 className="text-lg font-semibold">Scientific & Research</h3>
              <p>
                Microbiologists, Lab Techs, Medical Doctors, Professors,
                Pharmacists.
              </p>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="primary-goals-container">
          <div className="flex flex-col gap-6 mb-8 items-center text-center">
            <h2 className="font-playfair text-xl lg:text-2xl">
              What is your primary goal for building this portfolio?
            </h2>
            <p>
              Answer a few quick questions so we can tailor your experience.
            </p>
          </div>

          <div className="primary-goals grid grid-cols-2 md:grid-cols-3 grid-rows-1 gap-8">
            <div className="flex flex-col justify-center gap-4 text-center px-2 py-8 sm:py-20 text-[#1C3B5E] rounded-xl border border-[#1C3B5E]">
              <h3 className="text-lg font-semibold">Getting hired</h3>
              <p>
                Designed to impress recruiters and hiring managers (ATS system)
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 text-center px-2 py-8 sm:py-12 text-[#1C3B5E] rounded-xl border border-[#1C3B5E]">
              <h3 className="text-lg font-semibold">Attract Clients</h3>
              <p>Showcase services, pricing and client testimonials</p>
            </div>
            <div className="flex flex-col justify-center gap-4 text-center px-2 py-8 sm:py-20 text-[#1C3B5E] rounded-xl border border-[#1C3B5E]">
              <h3 className="text-lg font-semibold">Personal brand</h3>
              <p>A flexible site to share thoughts, projects and bio</p>
            </div>
          </div>
        </div>

        {/* Third Slide */}
        <div className="theme-container">
          <div className="flex flex-col gap-6 mb-8 items-center text-center">
            <h2 className="font-playfair text-xl lg:text-2xl">
              What aesthetic or theme will you be using?
            </h2>
            <p>
              Pick a theme to define your typography, color palette, and initial
              design structure.
            </p>
          </div>

          <div className="themes grid grid-cols-2 md:grid-cols-3 grid-rows-1 gap-8">
            <div className="flex flex-col justify-center gap-4 text-center px-2 py-8 sm:py-20 text-white bg-[#1C3B5E] rounded-xl">
              <h3 className="text-lg font-semibold">Minimalist</h3>
              <p>
                Clean lines, ample white space, high readability. Best for
                architects, writers.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 text-center px-2 py-8 sm:py-12 text-white bg-[#1C3B5E] rounded-xl">
              <h3 className="text-lg font-semibold">Bold</h3>
              <p>
                Vibrant colors, strong typography, unique layout. <br /> Best
                for creatives, media.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 text-center px-2 py-8 sm:py-20 text-white bg-[#1C3B5E] rounded-xl">
              <h3 className="text-lg font-semibold">Professional</h3>
              <p>
                Structured clear hierarchy, focusing on data and detail. <br />{" "}
                Best for academics, law.
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Slide */}
        <div className="theme-container">
          <div className="flex flex-col gap-6 mb-8 items-center text-center">
            <h2 className="font-playfair text-xl lg:text-2xl">
              Will you be starting on a blank template?
            </h2>
            <p>
              Kick off your journey with a blank slate or select a proven
              framework to get moving faster.
            </p>
          </div>

          <div className="themes grid grid-cols-2 md:grid-cols-3 grid-rows-1 gap-8">
            <div className="flex flex-col justify-center gap-4 text-center px-2 py-8 sm:py-20 text-[#1C3B5E] rounded-xl border border-[#1C3B5E]">
              <h3 className="text-lg font-semibold">
                Yes, I am starting with a blank Template
              </h3>
            </div>
            <div className="flex flex-col justify-center gap-4 text-center px-2 py-8 sm:py-12 text-[#1C3B5E] rounded-xl border border-[#1C3B5E]">
              <h3 className="text-lg font-semibold">
                No, I want to upload my CV / portfolio
              </h3>
            </div>
            <div className="flex flex-col justify-center gap-4 text-center px-2 py-8 sm:py-20 text-[#1C3B5E] rounded-xl border border-[#1C3B5E]">
              <h3 className="text-lg font-semibold">
                No, I want to upload my CV / portfolio
              </h3>
            </div>
          </div>
        </div>
      </div>
      <button className="w-4/5 lg:w-1/2 py-2 border-2 border-[#1ABCFE] text-[#1ABCFE] text-md self-center rounded-lg mt-6 hover:bg-[#1ABCFE] hover:text-white transition-all ">
        Next
      </button>
    </section>
  );
};

export default OnboardingPage;
