import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Programs from './pages/Programs'
import Application from './pages/Application'
import Calendar from './pages/Calendar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/application" element={<Application />} />
        <Route path="/calendar" element={<Calendar />}/>
      </Routes>
    </Router>
  );
}

export default App;