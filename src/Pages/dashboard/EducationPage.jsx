import DashboardHeader from "../../Components/Header.jsx";
import Sidebar from "./Sidebar.jsx";
import "./PersonalInfoPage.css";

const EducationPage = () => {
  return (
    <div className="personal-info-page">
      <DashboardHeader />
      <Sidebar />
      <main className="main"></main>
    </div>
  );
};

export default EducationPage;
