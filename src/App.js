import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../src/Home";
import Gallery from "./components/Gallery";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
