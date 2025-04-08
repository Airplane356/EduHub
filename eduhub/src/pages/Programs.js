import React from 'react';
import SchoolCard from '../components/ProgramCard'; 
import schoolImage from '../assets/MrBirch.png'; 
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
const programs = [
  {
    id: 1,
    school: 'Milliken Mills High School',
    tags: ['IB', 'SHSM'],
    description:
      'goated',
    imageSrc: schoolImage,
    linkTo: '/programs/ib',
    deadline: 'December 14, 2024',
  },
  {
    id: 2,
    school: 'Markham District High School',
    tags: ['AP', 'SHSM'],
    description:
      'The Advanced Placement Program allows students to take college-level courses and exams while still in high school.',
    imageSrc: schoolImage,
    linkTo: '/programs/ap',
    deadline: 'December 9, 2024',
  },
  {
    id: 3,
    school: 'Middlefield Collegiate Institute',
    tags: ['SHSM'],
    description:
      'The Specialist High Skills Major (SHSM) in Business provides students with a strong foundation in business education.',
    imageSrc: schoolImage,
    linkTo: '/programs/shsm-business',
    deadline: 'January 14, 2025',
  },
  {
    id: 4,
    school: 'Bill Crothers Secondary School',
    tags: ['HPA'],
    description:
      '',
    imageSrc: schoolImage,
    linkTo: '/programs/shsm-business',
    deadline: 'January 14, 2025',
  },
  {
    id: 5,
    school: 'Unionville High School',
    tags: ['Arts', 'STEM'],
    description:
      '',
    imageSrc: schoolImage,
    linkTo: '/programs/shsm-business',
    deadline: 'January 14, 2025',
  },
  // Add more entries here...
];

const ProgramDirectory = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <div className="flex-1 overflow-y-auto">
            

    <div className="min-h-screen bg-white-800 text-black px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Program Directory</h1>

      <input
        type="text"
        placeholder="Search programs..."
        className="w-full md:w-1/2 mb-8 p-3 rounded-lg bg-gray-200 text-gray-500 placeholder-gray-500 focus:outline-none"
      />

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {programs.map((program) => (
          <div key={program.id} className="bg-gray-100 rounded-lg p-4">
            <SchoolCard
              imageSrc={program.imageSrc}
              name={program.school}
              description={`${program.description}`}
              tags={program.tags}
              linkTo={program.linkTo}
            />
            
          </div>
        ))}
      </div>
    </div>
    </div>
          </div>
        </div>
  );
};

export default ProgramDirectory;
