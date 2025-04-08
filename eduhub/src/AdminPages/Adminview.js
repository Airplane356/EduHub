import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../AdminComponents/AdminSidebar';
import Navbar from '../AdminComponents/AdminNavbar';

function PortfolioCard({ student }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/portfolio/${student.id}`)}
      className="cursor-pointer p-4 border rounded-lg shadow hover:shadow-lg transition duration-200 ease-in-out"
    >
      <h3 className="font-semibold text-lg">{student.studentName}</h3>
      <p className="text-sm text-gray-600 mt-1">{student.description}</p>
      <p className="text-xs text-gray-500 mt-2">Click for portfolio details</p>
    </div>
  );
}


function StudentPortfolio() {
  const [activeTab, setActiveTab] = useState("IB");

  const ibStudents = [
    { id: 1, studentName: "Alice", description: "Excellent IB student with strong academics" },
    { id: 2, studentName: "Bob", description: "Excellent IB student with strong academics" },
  ];

  const apStudents = [
    { id: 3, studentName: "Charlie", description: "Outstanding AP scholar across multiple subjects" },
    { id: 4, studentName: "Dana", description: "Outstanding AP scholar across multiple subjects" },
  ];

  const artsStudents = [
    { id: 5, studentName: "Eve", description: "Outstanding AP scholar across multiple subjects" },
    { id: 6, studentName: "Frank", description: "Outstanding AP scholar across multiple subjects" },
  ];

  const studentsToDisplay =
    activeTab === "IB"
      ? ibStudents
      : activeTab === "AP"
      ? apStudents
      : artsStudents;

  return (
    <div>
      {/* Tab Navigation */}
      <div className="mb-6 flex gap-4 border-b pb-2">
        {["IB", "AP", "Arts"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold transition-colors duration-300 ${
              activeTab === tab
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-500 hover:text-indigo-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {studentsToDisplay.map((student) => (
          <PortfolioCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default function Admin() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-8">
          <h1 className="text-2xl font-bold mb-4">Student Portfolios</h1>
          <StudentPortfolio />
        </div>
      </div>
    </div>
  );
}
