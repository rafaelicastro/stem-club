import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home.js';
import Physics from './Pages/Physics';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/physics">
        <Route path="srel" element={<Physics.SRel />} />
      </Route>
    </Routes>
  );
}

export default App;