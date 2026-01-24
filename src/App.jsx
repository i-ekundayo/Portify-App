import {Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import SignupPage from './Pages/SignupPage.jsx';
import ForgotPassword from './Pages/ForgotPassword.jsx';
import OnboardingPage from './Pages/onboarding/OnboardingPage.jsx';
import PersonalInfoPage from './Pages/dashboard/PersonalInfoPage.jsx';
import EducationPage from './Pages/dashboard/EducationPage.jsx';
import ExperiencePage from './Pages/dashboard/ExperiencePage.jsx';
import SkillsPage from './Pages/dashboard/SkillsPage.jsx';
import CertificationsPage from './Pages/dashboard/CertificationsPage.jsx';
import OthersPage from './Pages/dashboard/OthersPage.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/dashboard/personal-info" element={<PersonalInfoPage />} />
        <Route path="/dashboard/education" element={<EducationPage />} />
        <Route path='/dashboard/experience' element={<ExperiencePage />} />
        <Route path='/dashboard/skills' element={<SkillsPage />} />
        <Route path='/dashboard/certifications' element={<CertificationsPage />} />
        <Route path='/dashboard/others' element={<OthersPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App