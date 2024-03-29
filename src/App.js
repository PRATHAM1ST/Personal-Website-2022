// Imports
import { Route, Routes } from "react-router-dom";
// Components
import Navbar from "./Components/Navbar";
// Pages
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";
// Css
import "./Css/Global.css";
import "./Css/Root.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*"  />
      </Routes>
    </div>
  );
}

export default App;
