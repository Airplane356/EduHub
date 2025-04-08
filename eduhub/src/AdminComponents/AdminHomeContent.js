import { Link } from 'react-router-dom';
import happyChildren from '../assets/happychildren.png';
import compChildren from '../assets/compChildren.jpg';

export default function AdminHomeContent() {
  return (
    <div className="text-center px-8">
      <h2 className="text-4xl font-light mt-12 mb-12">Learn, Share, <span className="font-bold">Empower</span></h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
        <img src={happyChildren} alt="kids" className="rounded-2xl w-72 shadow-lg" />
        <div className="text-left max-w-md">
          <p className="mb-4 text-gray-700 text-sm">
            We empower students to explore their interests by facilitating the grade 8 to high school transition.
            Apply to various programs ranging from STEM to Arts to the International Baccalaureate!
          </p>
          <Link to="/AdminPrograms">
            <button className="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-md transition">View Regional Programs</button>
          </Link>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-6">View your Application Status</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="text-left max-w-md">
          <p className="mb-4 text-gray-700 text-sm">
            We provide a centralized portal to view your child’s application statuses for all the programs they applied to.
          </p>
          <Link to="/AdminApplication">
            <button className="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-md transition">View Application Status</button>
          </Link>
        </div>
        <img src={compChildren} alt="girl on laptop" className="rounded-2xl w-72 shadow-lg" />
      </div>
    </div>
  );
}