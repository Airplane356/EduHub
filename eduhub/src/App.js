import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Programs from './pages/Programs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </Router>
  );
}

export default App;