import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/ginyard international.png';

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/programs', label: 'Programs and Schools' },
    { path: '/application', label: 'Application Portal' },
    { path: '/calendar', label: 'Calendar' },
  ];

  return (
    <div className="w-60 bg-blue-900 h-full flex flex-col items-center py-6 px-5 shadow-md border-r">
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
              className={`w-full py-2 rounded-2xl text-center text-white shadow font-medium  ${
                isActive
                  ? 'bg-blue-700'
                  : 'bg-transparent hover:bg-blue-700'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
