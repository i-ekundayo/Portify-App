import Logo from '../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';
import './Header.css';
  
const Header = () => {
  return (
    <header className="dashboard-header flex items-center justify-between">
      <div className="flex gap-2.5 items-end">
        <img src={Logo} alt="Portify Logo" />
        <h1 className="text-[32px] font-semibold">Portify</h1>
      </div>
      <nav className='hidden md:block'>
        <ul className="flex gap-10">
          <li className="cursor-pointer">My Dashboard</li>
          <li className="cursor-pointer">Templates</li>
          <li className="cursor-pointer">ATS Checker</li>
          <li className="cursor-pointer">Jobs</li>
        </ul>
      </nav>
      <FaBars size={24} className="cursor-pointer" />
    </header>
  );
}

export default Header;