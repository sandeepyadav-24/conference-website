import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Guidelines from "./Components/Guidelines";
import About from "./Components/About";
import Speakers from "./Components/Speakers";
import Committee from "./Components/Committee";
import CallForPapers from "./Components/CallForPapers";
import Register from "./Components/Register";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/guidelines" element={<Guidelines />}></Route>
          <Route path="/speakers" element={<Speakers />}></Route>
          <Route path="/committee" element={<Committee />}></Route>
          <Route path="/call-for-papers" element={<CallForPapers />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
};
export default App;
