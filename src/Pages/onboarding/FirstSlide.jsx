import React from "react";

const FirstSlide = ({selectOption, selectedOption}) => {
  const headings = [
    "Creative & Design",
    "Business & Consulting",
    "Tech & Developers",
    "Communications & Editorial",
    "Education & Service",
    "Scientific & Research",
  ];

  const body = [
    "Graphic Designer, Architect, Photographer, Fashion Designer, Art Director",
    "Banker, Consultant, Marketing Director, Business Analyst.",
    "Graphic Designer, Architect, Photographer, Fashion Designer, Art Director",
    "Journalist, Content Strategist, Editor, Blogger, Social Media Manager.",
    "Teacher, Event Planner, Personal Trainer, Real Estate Agent, Counselor.",
    "Microbiologists, Lab Techs, Medical Doctors, Professors, Pharmacists.",
  ];
  return (
    <div>
      <div className="flex flex-col gap-6 mb-6 items-center text-center">
        <h2 className="font-playfair text-xl lg:text-2xl">
          What profession are you building for?
        </h2>
      </div>

      <div className="professions grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4">
        {headings.map((heading, index) => (
          <div
            onClick={() => selectOption(heading)}
            key={heading}
            className={`flex flex-col justify-center gap-4 text-center px-2 py-6 bg-[#1C3B5E] text-white rounded-xl cursor-pointer ${selectedOption === heading ? "border-[4px] border-[#1ABCFE]" : ""}`}
          >
            <h3 className="text-lg font-semibold">{heading}</h3>
            <p>{body[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstSlide;
