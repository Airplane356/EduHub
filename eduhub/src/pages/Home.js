import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HomeContent from '../components/HomeContent';

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 flexx flex-col overflow-y-auto">
          <HomeContent />
        </div>
      </div>
    </div>
  );
}