import { useRef } from "react";
import { PiPlaceholder } from "react-icons/pi";

const UploadBox = ({placeholder}) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log(files);
  };

  return (
    <div
      onClick={handleClick}
      className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
    >

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-3">
        <div className="text-gray-400 text-sm">
          {placeholder}
        </div>

        {/* <svg className="">
          <rect
            x="1"
            y="1"
            width="200"
            height="200"
            fill="none"
            stroke="#1C3B5E"
            strokeWidth="1"
            strokeDasharray="26 26"
            rx="12"
          />
        </svg> */}

        <div className="flex items-center justify-center w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] border border-dashed border-gray-400 rounded-lg cursor-pointer">
          <div className="text-8xl font-bold">+</div>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default UploadBox;
