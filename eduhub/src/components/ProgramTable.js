import { useState } from 'react';
import { Star, StarOff } from 'lucide-react';
import useStarredPrograms from '../hooks/useStarredPrograms';

const statusOptions = ['Not Started', 'In Progress', 'Submitted'];
const appStatusOptions = ['Pending', 'Waitlisted', 'Accepted', 'Rejected'];

export default function ProgramsTable({ programs }) {
  const { starredPrograms, toggleStar, isStarred } = useStarredPrograms();
  const [activeTab, setActiveTab] = useState('programs');

  const [programStatus, setProgramStatus] = useState(
    programs.reduce((acc, item) => {
      acc[item.id] = item.status || 'Not Started';
      return acc;
    }, {})
  );

  const [appStatus, setAppStatus] = useState({});

  const handleStatusChange = (id, newStatus) => {
    setProgramStatus({ ...programStatus, [id]: newStatus });
  };

  const handleAppStatusChange = (id, newStatus) => {
    setAppStatus({ ...appStatus, [id]: newStatus });
  };

  const submittedPrograms = programs.filter((item) => programStatus[item.id] === 'Submitted');

  return (
    <div>
      {/* Tab Buttons */}
      <div className="mb-6 flex gap-4 border-b">
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === 'programs'
              ? 'border-b-2 border-indigo-600 text-indigo-600'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('programs')}
        >
          🎓 Programs
        </button>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === 'applications'
              ? 'border-b-2 border-indigo-600 text-indigo-600'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('applications')}
        >
          📄 Application Results
        </button>
      </div>

      {/* Programs Table */}
      {activeTab === 'programs' && (
        <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gray-100 text-gray-700 text-left">
              <tr>
                <th className="p-4">Starred</th>
                <th className="p-4">School</th>
                <th className="p-4">Tags</th>
                <th className="p-4">Description</th>
                <th className="p-4">Deadline</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {[...programs]
                .sort((a, b) => (isStarred(b.id) ? 1 : 0) - (isStarred(a.id) ? 1 : 0))
                .map((item) => (
                  <tr key={item.id} className="border-t hover:bg-gray-50">
                    <td className="p-4 text-center">
                      <button
                        onClick={() => toggleStar(item.id)}
                        className="text-indigo-500 hover:text-indigo-700"
                        title={isStarred(item.id) ? 'Unfavorite' : 'Favorite'}
                      >
                        {isStarred(item.id) ? <Star fill="currentColor" /> : <StarOff />}
                      </button>
                    </td>
                    <td className="p-4 font-medium">{item.school}</td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 max-w-sm">{item.description || '-'}</td>
                    <td className="p-4">{item.deadline}</td>
                    <td className="p-4">
                      <select
                        value={programStatus[item.id]}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className={`border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 ${
                          programStatus[item.id] === 'In Progress'
                            ? 'bg-yellow-100 text-yellow-800 border-yellow-400 focus:ring-yellow-400'
                            : programStatus[item.id] === 'Submitted'
                            ? 'bg-green-100 text-green-800 border-green-400 focus:ring-green-400'
                            : 'bg-white text-gray-700 border-gray-300 focus:ring-blue-500'
                        }`}
                      >
                        {statusOptions.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Application Status Table */}
      {activeTab === 'applications' && (
        submittedPrograms.length > 0 ? (
          <div className="mt-4 overflow-x-auto rounded-xl shadow border border-gray-200">
            <table className="min-w-full table-auto text-sm">
              <thead className="bg-gray-100 text-gray-700 text-left">
                <tr>
                  <th className="p-4">School</th>
                  <th className="p-4">Deadline</th>
                  <th className="p-4">Application Status</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {submittedPrograms.map((item) => (
                  <tr key={item.id} className="border-t hover:bg-gray-50">
                    <td className="p-4 font-medium">{item.school}</td>
                    <td className="p-4">{item.deadline}</td>
                    <td className="p-4">
                      <select
                        value={appStatus[item.id] || 'Pending'}
                        onChange={(e) => handleAppStatusChange(item.id, e.target.value)}
                        className={`border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 ${
                          appStatus[item.id] === 'Accepted'
                            ? 'bg-green-100 text-green-800 border-green-400 focus:ring-green-400'
                            : appStatus[item.id] === 'Rejected'
                            ? 'bg-red-100 text-red-800 border-red-400 focus:ring-red-400'
                            : appStatus[item.id] === 'Waitlisted'
                            ? 'bg-yellow-100 text-yellow-800 border-yellow-400 focus:ring-yellow-400'
                            : 'bg-gray-100 text-gray-700 border-gray-300 focus:ring-blue-500'
                        }`}
                      >
                        {appStatusOptions.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-6 text-gray-600 text-center text-sm">
            You haven't submitted any applications yet. Once you mark a program as <strong>"Submitted"</strong>, results will appear here.
          </div>
        )
      )}
    </div>
  );
}
