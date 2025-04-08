import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-60 bg-gray-100 h-full flex flex-col items-center py-6 shadow-md border-r">
      <div className="w-12 h-12 bg-purple-600 rounded-xl mb-12"></div>
      <nav className="flex flex-col gap-4 w-full items-center">
        <Link to="/" className="w-40 py-2 text-center rounded-md bg-blue-600 text-white shadow hover:bg-blue-700 transition">Home</Link>
        <Link to="/programs" className="w-40 py-2 text-center rounded-md bg-blue-600 text-white shadow hover:bg-blue-700 transition">Programs and Schools</Link>
        <Link to="/application" className="w-40 py-2 text-center rounded-md bg-blue-600 text-white shadow hover:bg-blue-700 transition">Application Portal</Link>
        <Link to="/calendar" className="w-40 py-2 text-center rounded-md bg-blue-600 text-white shadow hover:bg-blue-700 transition">Calendar</Link>
      </nav>
    </div>
  );
}