import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, StarOff } from 'lucide-react'; // optional icons if you're using lucide

const SchoolCard = ({ imageSrc, name, description, tags = [], linkTo, deadline }) => {
  const navigate = useNavigate();
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="flex bg-gray-100 rounded-xl shadow-md overflow-hidden p-4 hover:shadow-lg transition">
      {/* School image */}
      <div className="w-1/3 flex-shrink-0">
        <img
          src={imageSrc}
          alt={`${name} campus`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content section */}
      <div className="flex flex-col justify-between flex-grow px-6 py-2">
        {/* Top: Name + Favorite */}
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

          {/* Favorite Button */}
          <div className="relative">
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className="text-indigo-500 hover:text-indigo-700"
              title={isFavorited ? 'Unfavorite' : 'Favorite'}
            >
              {isFavorited ? <Star fill="currentColor" /> : <StarOff />}
            </button>
          </div>
        </div>

        {/* Middle: Description */}
        <p className="text-sm text-gray-700 mt-2">{description}</p>

        {/* Bottom: Deadline + Buttons */}
        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            📅 Deadline: <span className="font-medium">{deadline}</span>
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => navigate(linkTo)}
              className="bg-indigo-200 hover:bg-indigo-300 text-indigo-800 px-4 py-2 rounded-lg text-sm font-semibold"
            >
              More Info
            </button>
            <button
              onClick={() => navigate(linkTo)}
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
