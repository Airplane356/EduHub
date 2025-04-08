import { Link } from 'react-router-dom';
import { FaCog, FaEnvelope, FaPen, FaArrowLeft } from 'react-icons/fa';
import johnPork from '../assets/johnpork.jpeg';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/programs':
        return 'Programs and Schools';
      case '/application':
        return 'Application Portal';
      case '/calendar':
        return 'Calendar';
      default:
        return 'EduHub';
    }
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b bg-white shadow-sm">
      <div className="flex items-center space-x-4">
        {location.pathname !== '/' &&(
          <Link to="/">
            <FaArrowLeft className="text-gray-500 hover:text-black cursor-pointer" />
          </Link>
        )}
        <h1 className="text-2xl font-bold">{getPageTitle()}</h1>
      </div>

      <div className="flex gap-4 items-center relative">
        <FaPen className="text-gray-500 hover:text-black cursor-pointer" />
        <FaCog className="text-gray-500 hover:text-black cursor-pointer" />
        <FaEnvelope className="text-gray-500 hover:text-black cursor-pointer" />
        <div className="w-8 h-8 bg-purple-600 rounded-full overflow-hidden">
          <img src={johnPork} alt="profile picture" className="object-contain" />
        </div>
        <div className="relative">
          <span
            className="font-semibold cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}>
            John Pork
          </span>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
              <Link to="/" className="block px-4 py-2 text-sm hover:bg-gray-100">Student Profile</Link>
              <Link to="/AdminHome" className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                Admin Profile
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
