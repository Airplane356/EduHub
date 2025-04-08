import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HomeContent from '../components/HomeContent';

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-pink-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto">
          <HomeContent />
        </div>
      </div>
    </div>
  );
}