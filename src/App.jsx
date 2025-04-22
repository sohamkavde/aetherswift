import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeIndex from './view/Home/HomeIndex';
import Seedsaleindex from './view/SeedSale/seedsaleindex';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/seed-sale" element={<Seedsaleindex />} />
      </Routes>
    </Router>
  );
}

export default App;
