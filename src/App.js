import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { SRel } from './Pages/Physics/SRel';
import { NumberTheory } from './Pages/Math/NumberTheory';
import { AMC } from './Pages/Math/AMC';
import { Manim } from './Pages/CompSci/Manim';
import { NeuralNetworks } from './Pages/CompSci/NeuralNetworks';
import { About } from './Pages/About/About';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/srel" element={<SRel />} />
        <Route path="/numtheory" element={<NumberTheory />} />
        <Route path="/amc" element={<AMC />} />
        <Route path="/manim" element={<Manim />} />
        <Route path="/nnetworks" element={<NeuralNetworks />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;