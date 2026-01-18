const FourthSlide = ({ selectOption, selectedOption }) => {
  const headings = [
    "Yes, I am starting with a blank Template",
    "No, I want to upload my CV / portfolio",
    "Optimize Linkedin profile",
  ];

  return (
    <div className="theme-container">
      <div className="flex flex-col gap-6 mb-8 items-center text-center">
        <h2 className="font-playfair text-xl lg:text-2xl">
          Will you be starting on a blank template?
        </h2>
        <p>
          Kick off your journey with a blank slate or select a proven framework
          to get moving faster.
        </p>
      </div>

      <div className="themes grid grid-cols-2 md:grid-cols-3 grid-rows-1 gap-8">
        {headings.map((heading) => (
          <div
            onClick={() => selectOption(heading)}
            key={heading}
            className={`flex flex-col justify-center gap-4 text-center px-2 py-8 sm:py-20 text-[#1C3B5E] rounded-xl ${selectedOption === heading ? "border-[4px] border-[#1ABCFE]" : "border border-[#1C3B5E]"} cursor-pointer`}
          >
            <h3 className="text-lg font-semibold">
              {heading}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourthSlide;
