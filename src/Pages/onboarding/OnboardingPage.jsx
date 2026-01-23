import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";
import FourthSlide from "./FourthSlide";
import "./OnboardinPage.css";

const OnboardingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const skip = () => {
    setSelectedOption(null);
    setCurrentSlide((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  const selectOption = (heading) => {
    setSelectedOption(heading);
  }

  const activateNextButton = (e) => {
    setSelectedOption(null);
    setCurrentSlide((prev) => Math.min(prev + 1, totalSteps - 1));

    e.target.value === "Start Building" && navigate("/login");
  };

  const totalSteps = 4;

  return (
    <section className="p-6 lg:p-12 font-inter flex flex-col">
      <div className="grid grid-cols-4 gap-5">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`h-[8px] rounded-md transition-all duration-300 ${
              index === currentSlide ? "bg-[#1C3B5E]" : "bg-[#1C3B5E4D]"
            }`}
          />
        ))}
      </div>
      <button
        disabled={currentSlide === totalSteps - 1}
        className={`px-4 py-1 border-2 border-[#1ABCFE] text-[#1ABCFE] text-md rounded-lg mt-4 self-end transition-all ${currentSlide === totalSteps - 1 ? "" : "hover:bg-[#1ABCFE] hover:text-white "}`}
        onClick={skip}
      >
        Skip
      </button>
      <div className="self-center">
        {/* First Slide */}
        {currentSlide === 0 && (
          <FirstSlide
            selectOption={selectOption}
            selectedOption={selectedOption}
          />
        )}

        {/* Second Slide */}
        {currentSlide === 1 && (
          <SecondSlide
            selectOption={selectOption}
            selectedOption={selectedOption}
          />
        )}

        {/* Third Slide */}
        {currentSlide === 2 && (
          <ThirdSlide
            selectOption={selectOption}
            selectedOption={selectedOption}
          />
        )}

        {/* Fourth Slide */}
        {currentSlide === 3 && (
          <FourthSlide
            selectOption={selectOption}
            selectedOption={selectedOption}
          />
        )}
      </div>
      <button
        disabled={!selectedOption}
        className={`w-4/5 lg:w-1/2 py-2 border-2 text-md self-center rounded-lg mt-6 ${selectedOption ? "bg-[#1ABCFE] text-white" : "border-[#1ABCFE] text-[#1ABCFE]"}  transition-all`}
        onClick={activateNextButton} value = {currentSlide === 3 ? "Start Building" : "Next"}
      >
        {currentSlide === 3 ? "Start Building" : "Next"}
      </button>
    </section>
  );
};

export default OnboardingPage;
