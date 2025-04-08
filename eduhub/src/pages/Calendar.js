import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const days = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
];

const totalDays = 35; // Enough to represent 5 weeks

export default function Calendar() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Navbar />
        
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Calendar</h1>

          {/* Weekday Header */}
          <div className="grid grid-cols-7 gap-2 text-center font-semibold text-gray-700">
            {days.map(day => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mt-2">
            {Array.from({ length: totalDays }).map((_, index) => (
              <div
                key={index}
                className="h-24 bg-white border rounded-lg shadow-sm flex items-center justify-center cursor-pointer hover:bg-blue-100 transition"
                onClick={() => alert(`Clicked day ${index + 1}`)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
    