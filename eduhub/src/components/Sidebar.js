import { Link } from 'react-router-dom';
import logo from '../assets/ginyard international.png';

export default function Sidebar() {
  return (
    <div className="w-60 bg-pink-400 h-full flex flex-col items-center py-6 shadow-md border-r">
      <div className="w-28 h-28 bg-purple-600 rounded-xl mb-12 overflow-hidden rounded-xl"><img src={logo} alt="logo" object-fit="contain"></img></div>
        <nav className="flex flex-col gap-4 w-full items-center">
          <Link to="/" className="w-full py-2 text-center rounded-md bg-transparent text-white shadow hover:bg-pink-600 transition font-medium tracking-normal">Home</Link>
          <Link to="/programs" className="w-full py-2 text-center rounded-md bg-transparent text-white shadow hover:bg-pink-600 transition font-medium tracking-normal">Programs and Schools</Link>
          <Link to="/application" className="w-full py-2 text-center rounded-md bg-transparent text-white shadow hover:bg-pink-600 transition font-medium tracking-normal">Application Portal</Link>
          <Link to="/calendar" className="w-full py-2 text-center rounded-md bg-transparent text-white shadow hover:bg-pink-600 transition font-medium tracking-normal">Calendar</Link>
        </nav>
    </div>
  );
}