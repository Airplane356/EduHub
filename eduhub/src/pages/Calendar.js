import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthData = [
  { month: 'January', days: 31 },
  { month: 'February', days: 28 }, // Leap year handling not added, but can be.
  { month: 'March', days: 31 },
  { month: 'April', days: 30 },
  { month: 'May', days: 31 },
  { month: 'June', days: 30 },
  { month: 'July', days: 31 },
  { month: 'August', days: 31 },
  { month: 'September', days: 30 },
  { month: 'October', days: 31 },
  { month: 'November', days: 30 },
  { month: 'December', days: 31 },
];

export default function Calendar() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [events, setEvents] = useState({});
  const [newEvent, setNewEvent] = useState('');
  
  const closeOverlay = () => setSelectedDay(null);

  const goToNextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % monthData.length);
  };

  const goToPreviousMonth = () => {
    setCurrentMonthIndex(
      (prevIndex) => (prevIndex - 1 + monthData.length) % monthData.length
    );
  };

  const currentMonth = monthData[currentMonthIndex];
  const firstDayOfMonth = 0; // You can replace this with dynamic logic for first day of month.

  const handleAddEvent = () => {
    if (newEvent.trim()) {
      setEvents(prevEvents => {
        const updatedEvents = { ...prevEvents };
        if (!updatedEvents[selectedDay]) {
          updatedEvents[selectedDay] = [];
        }
        updatedEvents[selectedDay].push(newEvent);
        return updatedEvents;
      });
      setNewEvent('');
    }
  };

  const handleClearEvent = (eventIndex) => {
    setEvents(prevEvents => {
      const updatedEvents = { ...prevEvents };
      updatedEvents[selectedDay].splice(eventIndex, 1); // Remove the specific event
      if (updatedEvents[selectedDay].length === 0) {
        delete updatedEvents[selectedDay]; // If no events left, remove the day entry
      }
      return updatedEvents;
    });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Calendar</h1>

          {/* Month Navigation */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={goToPreviousMonth}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Previous
            </button>
            <h2 className="text-2xl font-semibold">{currentMonth.month}</h2>
            <button
              onClick={goToNextMonth}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Next
            </button>
          </div>

          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-2 text-center font-semibold text-gray-700">
            {daysOfWeek.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mt-2">
            {/* Empty slots before the first day */}
            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
              <div key={index} className="h-24"></div>
            ))}

            {/* Calendar days */}
            {Array.from({ length: currentMonth.days }).map((_, index) => (
              <div
                key={index}
                className="h-24 bg-white border rounded-lg shadow-sm flex items-center justify-center cursor-pointer hover:bg-blue-100 transition relative"
                onClick={() => setSelectedDay(index + 1)}
              >
                {/* Day number in the top-left corner */}
                <div className="absolute top-2 left-2 text-gray-400 font-semibold">
                  {index + 1}
                </div>

                {/* Display events in a blue box */}
                {events[index + 1] && (
                  <div className="absolute left-0 w-full p-2 bg-blue-500 text-white rounded-lg text-xs">
                    {events[index + 1].map((event, i) => (
                      <div key={i} className="text-white">
                        {event}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {selectedDay && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center flex-col p-8">
          <h2 className="text-4xl font-bold mb-4">Day {selectedDay}</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-center">Events:</h3>
            {events[selectedDay] ? (
              events[selectedDay].map((event, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                  <div className="bg-blue-500 text-white p-2 rounded-lg text-sm w-full">
                    {event}
                  </div>
                  <button
                    onClick={() => handleClearEvent(index)}
                    className="ml-2 bg-red-500 text-white px-2 py-1 rounded-lg text-xs"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p>No events for this day</p>
            )}
          </div>

          <input
            type="text"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Add Event"
            className="border rounded-lg p-2 mb-4 w-64"
          />
          <button
            onClick={handleAddEvent}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Add Event
          </button>
          <button
            onClick={closeOverlay}
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
