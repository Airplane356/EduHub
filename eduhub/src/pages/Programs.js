import React from 'react';
import SchoolCard from '../components/ProgramCard';  
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import programs from '../data/ProgramList.json';
import MrBirch from '../assets/MrBirch.png';

const imageMap = {
  "MrBirch.png": MrBirch,
};


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
              imageSrc={imageMap[program.imageSrc]}
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
