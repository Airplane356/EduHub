import React from 'react';
import useStarredPrograms from '../hooks/useStarredPrograms';
import { useNavigate } from 'react-router-dom';
import { Star, StarOff } from 'lucide-react';

const SchoolCard = ({
  imageSrc,
  name,
  description,
  tags = [],
  linkTo,
  deadline,
  isStarred,
  onStarToggle,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row h-48 bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition sm:items-stretch">
      {/* Image Container */}
      <div className="w-full sm:w-1/3 flex-shrink-0 h-full">
        <img
          src={imageSrc}
          alt={`${name} campus`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-grow p-4">
        {/* Header: Name, Tags, & Favorite */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold">{name}</h2>
            <div className="flex flex-wrap gap-2 mt-1">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Favorite Star */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={onStarToggle}
              className="text-indigo-500 hover:text-indigo-700 ml-auto"
              title={isStarred ? 'Unfavorite' : 'Favorite'}
            >
              {isStarred ? <Star fill="currentColor" /> : <StarOff />}
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 mt-2 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <p className="text-sm text-gray-600">
            📅 Deadline: <span className="font-medium">{deadline}</span>
          </p>
          <div className="mt-2 sm:mt-0 flex gap-3">
            <button
              onClick={() => navigate(linkTo)}
              className="bg-indigo-200 hover:bg-indigo-300 text-indigo-800 px-4 py-2 rounded-lg text-sm font-semibold"
            >
              More Info
            </button>
            <button
              onClick={() => navigate('/application')}
              className="bg-indigo-200 hover:bg-indigo-300 text-indigo-800 px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
