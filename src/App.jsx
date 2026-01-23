import {Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import SignupPage from './Pages/SignupPage.jsx';
import ForgotPassword from './Pages/ForgotPassword.jsx';
import OnboardingPage from './Pages/onboarding/OnboardingPage.jsx';
import PersonalInfoPage from './Pages/dashboard/PersonalInfoPage.jsx';
import EducationPage from './Pages/dashboard/EducationPage.jsx'

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
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App