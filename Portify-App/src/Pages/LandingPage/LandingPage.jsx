import LandingPageHeader from "./LandingPageHeader";
import step1 from "../../assets/images/step-1.png";
import step2 from "../../assets/images/step-2.png";
import step3 from "../../assets/images/step-3.png";
import step4 from "../../assets/images/step-4.png";
import template1 from "../../assets/images/template-1.png";
import template2 from "../../assets/images/template-2.png";
import template3 from "../../assets/images/template-3.png";
import feedbackImage1 from "../../assets/images/feedback-image-1.png";
import feedbackImage2 from "../../assets/images/feedback-image-2.png";
import feedbackImage3 from "../../assets/images/feedback-image-3.png";
import logo from "../../assets/images/logo.png";
import { FaArrowRight } from "react-icons/fa";
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

      <section className="featured bg-[#1C3B5E] text-white py-8 md:py-12 md:px-20 flex flex-col items-center gap-6 lg:gap-10">
        <h1 className="font-semibold text-3xl md:4xl text-center">
          Featured Templates
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          <div className="flex flex-col items-start">
            <img src={template1} alt="template-1" />
            <div className="gap-2.5 p-2.5 bg-[#1ABCFE] flex items-center mt-2.5 md:mt-5 cursor-pointer rounded-md">
              <p className="text-xl lg:2xl font-semibold">
                Start building Free
              </p>
              <FaArrowRight />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <img src={template2} alt="template-2" />
            <div className="gap-2.5 p-2.5 bg-[#1ABCFE] flex items-center mt-2.5 md:mt-5 cursor-pointer rounded-md">
              <p className="text-xl lg:2xl font-semibold">
                Start building Free
              </p>
              <FaArrowRight />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <img src={template3} alt="template-3" />
            <div className="gap-2.5 p-2.5 bg-[#1ABCFE] flex items-center mt-2.5 md:mt-5 cursor-pointer rounded-md">
              <p className="text-xl lg:2xl font-semibold">
                Start building Free
              </p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:pt-24 md:pb-20 lg:pt-[100px] lg:px-[100px] flex flex-col gap-6 lg:gap-10 items-center">
        <h1 className="font-semibold text-3xl md:4xl text-center">
          What People Say About Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
          <div className="px-5 py-7 rounded-xl flex flex-col gap-7 items-center text-center bg-[#1C3B5E] text-white max-w-[400px]">
            <img src={feedbackImage1} alt="feedback-1" className="w-[100px]" />
            <p className="text-xl lg:text-2xl">
              “This tool helped me create a professional résumé in under 10
              minutes — and I landed interviews immediately.” <br /> -Rita
            </p>
          </div>
          <div className="px-5 py-7 rounded-xl flex flex-col gap-7 items-center text-center bg-[#1C3B5E] text-white max-w-[400px]">
            <img src={feedbackImage2} alt="feedback-1" className="w-[100px]" />
            <p className="text-xl lg:text-2xl">
              “Thanks to Portify, I finally have a portfolio I’m proud to share
              with recruiters.” <br /> -Susan
            </p>
          </div>
          <div className="px-5 py-7 rounded-xl flex flex-col gap-7 items-center text-center bg-[#1C3B5E] text-white max-w-[400px]">
            <img src={feedbackImage3} alt="feedback-1" className="w-[100px]" />
            <p className="text-xl lg:text-2xl">
              “I’ve tried many résumé builders, but this is the first one that
              actually made the process simple.” <br /> -Jamal
            </p>
          </div>
        </div>
      </section>

      <footer className="p-10 lg:p-[100px] lg:pb-5 bg-[#1C3B5E] text-white flex flex-col gap-10 text-center">
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
          <div className="logo flex gap-2 items-end">
            <img src={logo} alt="logo" />
            <p className="font-semibold text-3xl lg:text-4xl">Portify</p>
          </div>
          <p className="font-semibold text-xl lg:text-2xl">
            Home | Products | Templates | About Us | Contact Us
          </p>
        </div>
        <div>
          <small>Terms of Services | Privacy Policy</small>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
