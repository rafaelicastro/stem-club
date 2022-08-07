import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home.js';
import { SRel } from './Pages/Physics/SRel';
import { NumberTheory } from './Pages/Math/NumberTheory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stem-club" element={<Home />} />
        <Route path="/stem-club/physics">
          <Route path="srel" element={<SRel />} />
        </Route>
        <Route path="/stem-club/math">
          <Route path="numtheory" element={<NumberTheory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;