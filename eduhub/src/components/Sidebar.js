import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/ginyard international.png';

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/programs', label: 'Programs & Schools' },
    { path: '/application', label: 'Application Portal' },
    { path: '/calendar', label: 'Calendar' },
  ];

  return (
    <div className="w-80 bg-blue-900 h-full flex flex-col items-center py-6 px-7 shadow-md border-r">
      <div className="w-28 h-28 bg-purple-600 mb-12 overflow-hidden rounded-xl">
        <img src={logo} alt="logo" className="object-contain" />
      </div>
      <nav className="flex flex-col gap-4 w-full items-center">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`relative group w-full py-2 rounded-2xl text-center text-white font-medium transition-all duration-300 ${
                isActive ? 'bg-blue-700' : 'bg-transparent hover:bg-blue-700'
              }`}
            >
              {link.label}
              <span
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 text-xl ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
