import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home.js';
import { SRel } from './Pages/Physics/SRel';
import { NumberTheory } from './Pages/Math/NumberTheory';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/srel" element={<SRel />} />
        <Route path="/numtheory" element={<NumberTheory />} />
      </Routes>
  );
}

export default App;