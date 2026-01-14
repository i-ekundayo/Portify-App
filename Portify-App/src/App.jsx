import {Routes, Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default App