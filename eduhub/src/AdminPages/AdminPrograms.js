import React, { useState } from 'react';
import SchoolCard from '../components/ProgramCard';
import Sidebar from '../AdminComponents/AdminSidebar';
import Navbar from '../AdminComponents/AdminNavbar';
import programs from '../data/ProgramList.json';
import useStarredPrograms from '../hooks/useStarredPrograms';

// SCHOOL IMAGES
import MrBirch from '../assets/MrBirch.png';
import mmhs from '../assets/mmhs.png';
import mdhs from '../assets/mdhs.jpg';
import mss from '../assets/mss.jpeg';
import uhs from '../assets/uhs.jpg';
import gwwss from '../assets/gwwss.png';
import bcss from '../assets/bcss.jpg';
import bss from '../assets/bss.jpeg';
import peths from '../assets/peths.jpg';
import tss from '../assets/tss.jpg';
import str from '../assets/str.png';

const imageMap = {
  "MrBirch.png": MrBirch,
  "mmhs.png": mmhs,
  "mdhs.jpg": mdhs,
  "mss.jpeg": mss,
  "uhs.jpg": uhs,
  "gwwss.png": gwwss,
  "bcss.jpg": bcss,
  "bss.jpeg": bss,
  "peths.jpg": peths,
  "tss.jpg": tss,
  "str.png": str
};

const ProgramDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const { starredPrograms, toggleStar, isStarred } = useStarredPrograms();

  const allTags = Array.from(new Set(programs.flatMap((program) => program.tags)));

  const handleTagChange = (e, tag) => {
    if (e.target.checked) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    }
  };

  const filteredPrograms = programs
    .filter((program) => {
      const lowerSearch = searchTerm.toLowerCase();
      const matchesSearch =
        program.school.toLowerCase().includes(lowerSearch) ||
        program.description.toLowerCase().includes(lowerSearch) ||
        program.tags.some((tag) => tag.toLowerCase().includes(lowerSearch));

      const matchesTags =
        selectedTags.length === 0 ||
        program.tags.some((tag) => selectedTags.includes(tag));

      return matchesSearch && matchesTags;
    })
    .sort((a, b) => a.school.localeCompare(b.school));

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto">
          <div className="min-h-screen bg-white-800 text-black px-6 py-10">
            <h1 className="text-3xl font-bold mb-6">Program Directory</h1>

            {/* Search Bar */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search programs..."
              className="w-full md:w-1/2 mb-8 p-3 rounded-lg bg-gray-200 text-gray-500 placeholder-gray-500 focus:outline-none"
            />

            {/* Tag Filter */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Filter by Tags</h2>
              <div className="flex flex-wrap gap-4">
                {allTags.map((tag) => (
                  <label key={tag} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={tag}
                      checked={selectedTags.includes(tag)}
                      onChange={(e) => handleTagChange(e, tag)}
                    />
                    {tag}
                  </label>
                ))}
              </div>
            </div>

            {/* Program Cards */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
              {filteredPrograms.map((program) => (
                <div key={program.id} className="bg-gray-100 rounded-lg p-4">
                  <SchoolCard
                    imageSrc={imageMap[program.imageSrc]}
                    name={program.school}
                    description={program.description}
                    tags={program.tags}
                    linkTo={program.linkTo}
                    deadline={program.deadline}
                    isStarred={isStarred(program.id)}
                    onStarToggle={() => toggleStar(program.id)} 
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
