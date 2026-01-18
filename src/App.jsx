import {Routes, Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import SignupPage from './Pages/SignupPage.jsx';
import ForgotPassword from './Pages/ForgotPassword.jsx';
import OnboardingPage from './Pages/onboarding/OnboardingPage.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
    </Routes>
  )
}

export default App