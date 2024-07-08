import React, { useEffect, useState } from "react";

export default function AppointmentCard({ appointment, onDelete }) {
  const [p, setp] = useState("");

  useEffect(() => {
    const setvalue = () => {
      if (appointment.selectedValue === "option1") {
        setp("Social Media ads");
      } else if (appointment.selectedValue === "option2") {
        setp("Through a friend");
      } else if (appointment.selectedValue === "option3") {
        setp("Google Search/website");
      } else if (appointment.selectedValue === "option4") {
        setp("Re-visit");
      } else {
        setp("Others");
      }
    };

    setvalue();
  }, []);

  const handleDeleteClick = () => {
    onDelete(appointment.id);
  };

  return (
    <div className="ad-card" key={appointment.id}>
      <div className="ad-card-body">
        <h5 className="ad-card-title">{appointment.name}</h5>
        <p className="ad-card-text">DOB: {appointment.dob}</p>
        <p className="ad-card-text">Phone: {appointment.phone}</p>
        <p className="ad-card-text">Found us via: {p}</p>
        <p className="ad-card-text">
          Date: {new Date(appointment.date).toLocaleString()}
        </p>
        <button onClick={handleDeleteClick} className="btn btn-outline-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
