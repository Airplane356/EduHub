import programs from '../data/ProgramList.json'; // make sure your JSON file is imported properly
import ProgramTable from '../components/ProgramTable';

function Application() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Programs and Schools</h1>
      <ProgramTable programs={programs} />
    </div>
  );
}

export default Application;
