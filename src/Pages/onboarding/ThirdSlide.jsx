const ThirdSlide = ({ selectOption, selectedOption }) => {
  const headings = ["Minimalist", "Bold", "Professional"];
  const body = [
    "Clean lines, ample white space, high readability. Best for architects, writers.",
    "Vibrant colors, strong typography, unique layout. \n Best for creatives, media.",
    "Structured clear hierarchy, focusing on data and detail. \n Best for academics, law.",
  ];
  return (
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
        {headings.map((heading, index) => (
          <div
            onClick={() => selectOption(heading)}
            className={`flex flex-col justify-center gap-4 text-center px-2 py-8 sm:py-20 text-white bg-[#1C3B5E] rounded-xl cursor-pointer ${selectedOption === heading ? "border-[4px] border-[#1ABCFE]" : ""}`}
          >
            <h3 className="text-lg font-semibold">{heading}</h3>
            <p>{body[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThirdSlide