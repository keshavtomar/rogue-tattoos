// AdminLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin({ setIsLoggedIn }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(password)
    if (password === process.env.admin_password) {
      setIsLoggedIn(true);
      navigate("/admin");
    } else {
      setError("Invalid password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
