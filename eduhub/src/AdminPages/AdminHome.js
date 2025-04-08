import Sidebar from '../AdminComponents/AdminSidebar';
import Navbar from '../AdminComponents/AdminNavbar';
import HomeContent from '../AdminComponents/AdminHomeContent';

export default function AdminHome() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
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