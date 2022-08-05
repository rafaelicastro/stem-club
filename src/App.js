import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home.js';
import { SRel } from './Pages/Physics/SRel';
// import Mathh from './Pages/Math';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/physics">
        <Route path="srel" element={<SRel />} />
      </Route>
    </Routes>
  );
}

export default App;