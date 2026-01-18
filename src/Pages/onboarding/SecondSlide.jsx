const SecondSlide = ({selectOption, selectedOption}) => {
  const headings = ["Getting hired", "Attract Clients", "Personal brand"];

  const body = [
    "Designed to impress recruiters and hiring managers (ATS system)",
    "Showcase services, pricing and client testimonials",
    "A flexible site to share thoughts, projects and bio",
  ];
  return (
    <div className="primary-goals-container">
      <div className="flex flex-col gap-6 mb-8 items-center text-center">
        <h2 className="font-playfair text-xl lg:text-2xl">
          What is your primary goal for building this portfolio?
        </h2>
        <p>Answer a few quick questions so we can tailor your experience.</p>
      </div>

      <div className="primary-goals grid grid-cols-2 md:grid-cols-3 grid-rows-1 gap-8">
        {headings.map((heading, index) => (
          <div
            onClick={() => selectOption(heading)}
            key={heading}
            className={`flex flex-col justify-center gap-4 text-center px-2 py-8 sm:py-20 text-[#1C3B5E] rounded-xl  cursor-pointer ${selectedOption === heading ? "border-[4px] border-[#1ABCFE]" : "border border-[#1C3B5E]"}`}
          >
            <h3 className="text-lg font-semibold">{heading}</h3>
            <p>{body[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondSlide;
