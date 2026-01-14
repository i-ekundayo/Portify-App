import LandingPageHeader from "./LandingPageHeader";
import step1 from "../../assets/images/step-1.png";
import step2 from "../../assets/images/step-2.png";
import step3 from "../../assets/images/step-3.png";
import step4 from "../../assets/images/step-4.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <LandingPageHeader />

      <section className="hero-container flex items-center justify-center md:justify-start md:pl-[50px] lg:pl-[100px]">
        <div className="hero-content flex flex-col items-center md:items-start gap-6 w-4/5 md:w-2/5 lg:w-1/3">
          <h1 className="text-3xl lg:text-5xl text-white text-center md:text-start">
            The Digital Edge Your Career Needs.
          </h1>
          <div className="flex justify-center flex-wrap">
            <button className="btn bg-[#1ABCFE] text-white">Login</button>
            <button className="btn bg-white text-[#1ABCFE]">Signup</button>
          </div>
        </div>
      </section>

      <section className="framework py-10 md:py-20 flex flex-col gap-10 md:gap-16">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center">
          Designed for Modern Creative
        </h1>
        <div className="flex flex-col gap-16 md:gap-20">
          <div className="flex flex-col md:flex-row gap-5 lg:gap-20 items-center  md:w-4/5 lg:w-3/5 m-auto">
            <div className="framework-step text-center md:text-start w-4/5 md:w-full">
              <h1 className="font-semibold text-2xl lg:text-3xl">
                Step 1. Tell Us About You
              </h1>
              <p className="framework-step-body text-xl lg:text-2xl">
                Upload or enter your experience, skills, and education.
              </p>
            </div>
            <div>
              <img src={step1} alt="step-1-image" className="max-w-full" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 lg:gap-20 items-center  md:w-4/5 lg:w-3/5 m-auto justify-cente">
            <div className="framework-step text-center md:text-start w-4/5 md:w- md:order-1">
              <h1 className="font-semibold text-2xl lg:text-3xl">
                Step 2. Pick Your Design
              </h1>
              <p className="framework-step-body text-xl lg:text-2xl">
                Choose from clean, professional résumé, CV, and cover-letter
                templates.
              </p>
            </div>
            <div>
              <img src={step2} alt="step-2-image" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 lg:gap-20 items-center  md:w-4/5 lg:w-3/5 m-auto">
            <div className="framework-step text-center md:text-start w-4/5 md:w-full">
              <h1 className="font-semibold text-2xl lg:text-3xl">
                Step 3. Customize Your Design
              </h1>
              <p className="framework-step-body text-xl lg:text-2xl">
                Refine your work instantly using the visual editor to switch
                templates, adjust colors, and fine-tune your layout in
                real-time.
              </p>
            </div>
            <div>
              <img src={step3} alt="step-3-image" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 lg:gap-20 items-center  md:w-4/5 lg:w-3/5 m-auto">
            <div className="framework-step text-center md:text-start w-4/5 md:w-full md:order-1">
              <h1 className="font-semibold text-2xl lg:text-3xl">
                Step 4. Download & Share
              </h1>
              <p className="framework-step-body text-xl lg:text-2xl">
                Publish your portfolio to a custom URL and share it instantly.
                Every portfolio is fully ATS optimized automatically.
              </p>
            </div>
            <div>
              <img src={step4} alt="step-4-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="featured bg-[#1C3B5E] text-white">
        <h1 className="font-semibold text-3xl md:4xl">Featured Templates</h1>  te
      </section>
    </div>
  );
};

export default LandingPage;
