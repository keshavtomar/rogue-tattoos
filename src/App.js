import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "../src/Home";
import Gallery from "./components/Gallery";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
    </Router>
  );
}

export default App;
