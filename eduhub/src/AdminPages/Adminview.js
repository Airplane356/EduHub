import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../AdminComponents/AdminSidebar';
import Navbar from '../AdminComponents/AdminNavbar';
import portfolio from '../assets/portfolio.png';

function PortfolioCard({ student, onCardClick }) {
  return (
    <div
      onClick={() => onCardClick(student)}
      className="cursor-pointer p-4 border rounded-lg shadow hover:shadow-lg transition duration-200 ease-in-out"
    >
      <h3 className="font-semibold text-lg">{student.studentName}</h3>
      <p className="text-sm text-gray-600 mt-1">Elementary: {student.elementaryName}</p>
      <p className="text-sm text-gray-600 mt-1">Gapps Number: {student.gapps}</p>
      <p className="text-sm text-gray-600 mt-1">{student.description}</p>
      <div
        className={`mt-2 inline-block px-2 py-1 text-xs font-medium rounded ${
          student.status === 'Accepted'
            ? 'bg-green-100 text-green-700'
            : student.status === 'Waitlisted'
            ? 'bg-yellow-100 text-yellow-700'
            : student.status === 'Rejected'
            ? 'bg-red-100 text-red-700'
            : 'bg-gray-100 text-gray-700'
        }`}
      >
        {student.status}
      </div>
      <p className="text-xs text-gray-500 mt-2">Click for portfolio details</p>
    </div>
  );
}

function StudentModal({ student, onClose }) {
  if (!student) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded shadow-lg max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">{student.studentName}'s Portfolio</h2>
        {/* Portfolio image */}
        {student.portfolioImage && (
          <img
            src={portfolio}
            alt={`${student.studentName}'s portfolio`}
            className="w-full h-auto rounded mb-4"
          />
        )}
        <p className="mb-2"><strong>Exam Score:</strong> {student.examScore}</p>
        <p className="mb-4"><strong>Supplementary Essay:</strong> {student.supplementary}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function StudentPortfolio() {
  const [activeTab, setActiveTab] = useState("IB");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const ibStudents = [
    {
      id: 1,
      studentName: "Eric Chen",
      elementaryName: "Parkland Public School",
      gapps: "3491234567",
      description: "Excellent IB student with strong academics.",
      status: "Accepted",
      examScore: "95%",
      supplementary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
      portfolioImage: "https://via.placeholder.com/400?text=Portfolio+1",
    },
    {
      id: 2,
      studentName: "Cliff Zhang",
      elementaryName: "Ashton Meadows Public School",
      gapps: "3492345678",
      description: "Strong analytical skills and a passion for learning.",
      status: "Rejected",
      examScore: "66%",
      supplementary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
      portfolioImage: "https://via.placeholder.com/400?text=Portfolio+2",
    },
    {
      id: 7,
      studentName: "Darrien Guan",
      elementaryName: "Tensorflow Elementary",
      gapps: "3496789012",
      description: "Strong robotics and math student",
      status: "Accepted",
      examScore: "93%",
      supplementary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
      portfolioImage: "https://via.placeholder.com/400?text=Portfolio+7",
    },
    {
      id: 8,
      studentName: "William Zhang",
      elementaryName: "SWE Public School",
      gapps: "3496789012",
      description: "Competitive programmer",
      status: "Waitlisted",
      examScore: "93%",
      supplementary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
      portfolioImage: "https://via.placeholder.com/400?text=Portfolio+8",
    },
  ];

  const apStudents = [
    {
      id: 3,
      studentName: "Ryan Chen",
      elementaryName: "Ashton Meadows Public School",
      gapps: "3493456789",
      description: "Outstanding student with a focus on STEM subjects.",
      status: "Waitlisted",
      examScore: "82%",
      supplementary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
      portfolioImage: "https://via.placeholder.com/400?text=Portfolio+3",
    },
    {
      id: 4,
      studentName: "Dana White",
      elementaryName: "Hilltop Elementary",
      gapps: "3494567890",
      description: "Strong leadership skills.",
      status: "Accepted",
      examScore: "90%",
      supplementary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
      portfolioImage: "https://via.placeholder.com/400?text=Portfolio+4",
    },
  ];

  const artsStudents = [
    {
      id: 5,
      studentName: "Shaoming Wu",
      elementaryName: "Parkview Elementary",
      gapps: "3495678901",
      description: "Creative arts student.",
      status: "Rejected",
      examScore: "87%",
      supplementary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
      portfolioImage: "https://via.placeholder.com/400?text=Portfolio+5",
    },
    {
      id: 6,
      studentName: "Kieu Huynh",
      elementaryName: "Milly Elementary",
      gapps: "3496789012",
      description: "Competitive dancer",
      status: "Accepted",
      examScore: "93%",
      supplementary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
      portfolioImage: "https://via.placeholder.com/400?text=Portfolio+6",
    },
  ];

  const baseStudents =
    activeTab === "IB" ? ibStudents : activeTab === "AP" ? apStudents : artsStudents;

  const studentsToDisplay =
    filterStatus === "All"
      ? baseStudents
      : baseStudents.filter((student) => student.status === filterStatus);

  const handleCardClick = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  return (
    <div>
      {/* Tab Navigation */}
      <div className="mb-6 flex flex-col gap-4 border-b pb-2">
        <div className="flex gap-4">
          {["IB", "AP", "Arts"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setFilterStatus("All"); // reset filter when tab changes
              }}
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
        {/* Status Filter Dropdown */}
        <div className="flex items-center gap-2">
          <label className="font-semibold">Filter by Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="All">All</option>
            <option value="Accepted">Accepted</option>
            <option value="Waitlisted">Waitlisted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {studentsToDisplay.map((student) => (
          <PortfolioCard key={student.id} student={student} onCardClick={handleCardClick} />
        ))}
      </div>

      {/* Modal Popup */}
      {showModal && selectedStudent && (
        <StudentModal
          student={selectedStudent}
          onClose={() => {
            setShowModal(false);
            setSelectedStudent(null);
          }}
        />
      )}
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
