import { useState } from 'react';
import MrBirch from '../assets/MrBirch.png';

const imageMap = {
  'MrBirch.png': MrBirch,
};

const statusOptions = ['Not Started', 'In Progress', 'Submitted', 'Accepted', 'Rejected'];

export default function ProgramsTable({ programs }) {
  const [programStatus, setProgramStatus] = useState(
    programs.reduce((acc, item) => {
      acc[item.id] = item.status || 'Not Started';
      return acc;
    }, {})
  );

  const handleStatusChange = (id, newStatus) => {
    setProgramStatus({ ...programStatus, [id]: newStatus });
  };

  return (
    <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
      <table className="min-w-full table-auto text-sm">
        <thead className="bg-gray-100 text-gray-700 text-left">
          <tr>
            <th className="p-4">School</th>
            <th className="p-4">Tags</th>
            <th className="p-4">Description</th>
            <th className="p-4">Deadline</th>
            <th className="p-4">Status</th>
            <th className="p-4">Image</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {programs.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="p-4 font-medium">{item.school}</td>
              <td className="p-4 space-x-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </td>
              <td className="p-4 max-w-sm">{item.description || '-'}</td>
              <td className="p-4">{item.deadline}</td>
              <td className="p-4">
                <select
                  value={programStatus[item.id]}
                  onChange={(e) => handleStatusChange(item.id, e.target.value)}
                  className="bg-white border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
              <td className="p-4">
                <img src={imageMap[item.imageSrc]} alt={item.school} className="w-12 h-12 object-cover rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
