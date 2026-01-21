import { NavLink } from "react-router-dom";
import ProfileCompletion from "./ProfileCompletion";

const Sidebar = () => {
  const links = [
    "Personal Info",
    "Education",
    "Experience",
    "Skills",
    "Certifications",
    "Others"
  ];

  const path = [
    "personal-info",
    "education",
    "experience",
    "skills",
    "certifications",
    "others"
  ]
  

  return (
    <aside className="sidebar bg-[#1C3B5E] border-r-[6px] border-[#1ABCFE] text-white flex flex-col items-center xl:py-[85px] py-10 gap-16 xl:gap-[100px]">
      <div className="flex flex-col gap-4 items-center text-center">
        <ProfileCompletion percentage={48} />
        <p className="font-semibold text-2xl xl:text-[32px]">
          Project Completion Score
        </p>
      </div>

      <nav className="w-full">
        <ul className="flex flex-col gap-2.5">
          {links.map((link, index) => (
            <NavLink to={`/dashboard/${path[index]}`}
              key={index}
              className={({ isActive }) =>
                `pl-4 cursor-pointer ${
                  isActive
                    ? "bg-[#1ABCFE] p-2.5 text-center mb-2.5 text-xl pl-0"
                    : ""
                }`
              }
            >
              {link}
            </NavLink>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;