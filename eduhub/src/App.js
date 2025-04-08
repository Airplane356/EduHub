import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Application from './pages/Application';
import Calendar from './pages/Calendar';
import AdminHome from './AdminPages/AdminHome';
import AdminPrograms from './AdminPages/AdminPrograms';
import AdminApplication from './AdminPages/AdminApplication';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/application" element={<Application />} />
        <Route path="/calendar" element={<Calendar />}/>
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/adminprograms" element={<AdminPrograms />} />
        <Route path="/adminapplication" element={<AdminApplication />} />
      </Routes>
    </Router>
  );
}

export default App;