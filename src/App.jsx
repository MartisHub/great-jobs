import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vacatures from './pages/Vacatures';
import Offerte from './pages/Offerte';
import Diensten from './pages/Diensten';
import Over from './pages/Over';
import Nieuwsbrief from './pages/Nieuwsbrief';
import Contact from './pages/Contact';
import Inschrijven from './pages/Inschrijven';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vacatures" element={<Vacatures />} />
          <Route path="/offerte" element={<Offerte />} />
          <Route path="/diensten" element={<Diensten />} />
          <Route path="/over" element={<Over />} />
          <Route path="/nieuwsbrief" element={<Nieuwsbrief />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inschrijven" element={<Inschrijven />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;