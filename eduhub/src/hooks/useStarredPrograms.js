// src/hooks/useStarredPrograms.js
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'starredPrograms';

export default function useStarredPrograms() {
  const [starredPrograms, setStarredPrograms] = useState({});

  // Load on first mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setStarredPrograms(JSON.parse(stored));
    }
  }, []);

  // Toggle function
  const toggleStar = (programId) => {
    const updated = {
      ...starredPrograms,
      [programId]: !starredPrograms[programId],
    };
    setStarredPrograms(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  // Return star state and toggle function
  return {
    starredPrograms,
    toggleStar,
    isStarred: (id) => !!starredPrograms[id],
  };
}
