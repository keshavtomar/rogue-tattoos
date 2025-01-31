import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../src/Home";
import Gallery from "./components/Gallery";
import Getstartedform from "./components/Getstartedform";
import AppointmentForm from "./components/AppointmentForm";
import Admin from "./components/Admin";
import AdminLogin from "./components/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/getstarted" element={<Getstartedform />} />
        <Route path="/appointment" element={<AppointmentForm />} />
        <Route path="/visiting-card" element={<div
        style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", color: "white", fontSize: "2rem", backgroundColor: "#141d26"}}
        >This page is under Development (expected 7 days)</div>}/>
        <Route
          path="/admin"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/login"
          element={<AdminLogin setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
