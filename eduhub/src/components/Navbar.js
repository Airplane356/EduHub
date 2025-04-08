import { Link } from 'react-router-dom';
import { FaCog, FaEnvelope, FaPen, FaArrowLeft } from 'react-icons/fa';
import johnPork from '../assets/johnpork.jpeg';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

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
        {location.pathname !== '/' && (
          <Link to="/">
            <FaArrowLeft className="text-gray-500 hover:text-black cursor-pointer" />
          </Link>
        )}
        <h1 className="text-2xl font-bold">{getPageTitle()}</h1>
      </div>
      <div className="flex gap-4 items-center">
        <FaPen className="text-gray-500 hover:text-black cursor-pointer" />
        <FaCog className="text-gray-500 hover:text-black cursor-pointer" />
        <FaEnvelope className="text-gray-500 hover:text-black cursor-pointer" />
        <div className="w-8 h-8 bg-purple-600 rounded-full overflow-hidden"><img src={johnPork} alt="profile" object-fit="contain"></img></div>
        <span className="font-semibold">John Pork</span>
      </div>
    </div>
  );
}