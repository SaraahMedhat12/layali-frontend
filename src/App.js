import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Services from "./pages/Services";
import Captains from "./pages/Captains";
import Trips from "./pages/Trips";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/captains" element={<Captains />} />
        <Route path="/trips" element={<Trips />} />
      </Routes>
    </Router>
  );
}

export default App;
