import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Home";
import Gallery from "./components/Gallery";
import Getstartedform from "./components/Getstartedform";
import AppointmentForm from "./components/AppointmentForm";
import Admin from "./components/Admin";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/getstarted" element={<Getstartedform />} />
        <Route path="/appointment" element={<AppointmentForm/>}/>
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </Router>
  );
}
export default App;
