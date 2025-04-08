import { FaCog, FaEnvelope, FaPen } from 'react-icons/fa';
import johnPork from '../assets/johnpork.jpeg';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b bg-white shadow-sm">
      <h1 className="text-2xl font-bold">Home</h1>
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
