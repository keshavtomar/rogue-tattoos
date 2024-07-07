import React, { useState, useEffect } from "react";
import "../styles/admin.css"; // Assuming you have some styles for the admin page
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppointmentCard from "./AppointmentCard";

export default function AdminPage() {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      console.log("hello");
      const response = await fetch("https://rogue-tattoos-api.onrender.com/appointments");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAppointments(data);
      setFilteredAppointments(data); // Initialize filteredAppointments with all appointments
      toast.success("Appointments successfully fetched!");
    } catch (error) {
      setError(error);
      toast.error("Error fetching appointments: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    // Filter appointments based on search query
    const filtered = appointments.filter(appointment =>
      appointment.phone.includes(searchQuery)
    );
    setFilteredAppointments(filtered);
  }, [searchQuery, appointments]);

  const handleDelete = async (id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this appointment?"
      );
      if (!confirmed) return;
      // Perform delete API call
      const response = await fetch(`https://rogue-tattoos-api.onrender.com/appointments/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchAppointments();
        console.log("Appointment deleted successfully.");
      } else {
        console.error("Failed to delete appointment:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  if (loading)
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <div
          className="loader2"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        ></div>
      </div>
    );
  if (error)
    return <div style={{ color: "white" }}>Error: {error.message}</div>;

  return (
    <div className="ad-admin-page">
      <h1>Appointments</h1>
      <input
        type="text"
        placeholder="Search by phone number"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="ad-search-bar"
        style={{margin:"10px auto", borderRadius:'5px'}}
      />
      <div className="ad-appointments-list">
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div>No appointments found.</div>
        )}
      </div>
    </div>
  );
}
