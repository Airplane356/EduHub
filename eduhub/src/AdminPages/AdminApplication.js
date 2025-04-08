import Sidebar from '../AdminComponents/AdminSidebar';
import Navbar from '../AdminComponents/AdminNavbar';
import programs from '../data/ProgramList.json'; // make sure your JSON file is imported properly
import ProgramTable from '../components/ProgramTable';

function AdminApplication() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
        <Navbar />
            <div className="flex-1 overflow-y-auto">
                <div className="p-8">
                <h1 className="text-2xl font-semibold mb-4">Programs and Schools</h1>
                <ProgramTable programs={programs} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default AdminApplication;
