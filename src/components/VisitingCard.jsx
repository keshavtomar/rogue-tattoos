import React, { useState } from "react";
import "../styles/visitingcard.css";

export default function VisitingCard() {
  const [isContactOpen, setIsContactOpen] = useState(true);
  const [isAddressOpen, setIsAddressOpen] = useState(true);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const handleContactOpen = () => {
    setIsContactOpen(!isContactOpen);
    setIsAddressOpen(false);
    setIsAppointmentOpen(false);
  };

  const handleAddressOpen = () => {
    setIsAddressOpen(!isAddressOpen);
    setIsContactOpen(false);
    setIsAppointmentOpen(false);
  };
  const handleAppointmentOpen = () => {
    setIsAppointmentOpen(!isAppointmentOpen);
    setIsAddressOpen(false);
    setIsContactOpen(false);
  };

  return (
    <div className="visiting-card-screen">
      <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
        <div className="visiting-card-container">
          <div className="visiting-card-box ">
            <div className="visiting-card-heading">
              <img width={80} src="../../images/newlogo.png" />
            </div>
            <div className="visiting-card-section visiting-card-section1">
              <div style={{ cursor: "pointer" }} onClick={handleContactOpen}>
                Contact
                <img
                  src="../../images/toggleDown.svg"
                  className={`visitingcardtoggleDown ${
                    isContactOpen && "rotate"
                  }`}
                  alt="rope"
                  width={20}
                  height={20}
                />
              </div>
              <div className={`toggling-content ${isContactOpen && "show1"}`}>
                <div style={{ opacity: "90%" }}>
                  <div className="vc-link">
                    <a href="tel:+919971947774">+919971947774</a>
                  </div>
                  <div className="vc-link">
                    <a href="mailto:theroguetattoos@gmail.com">
                      theroguetattoos@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="visiting-card-section visiting-card-section2">
              <div style={{ cursor: "pointer" }} onClick={handleAddressOpen}>
                Address
                <img
                  src="../../images/toggleDown.svg"
                  className={`visitingcardtoggleDown ${
                    isAddressOpen && "rotate"
                  }`}
                  alt="dropdown"
                  width={20}
                  height={20}
                />
              </div>
              <div className={`toggling-content ${isAddressOpen && "show2"}`}>
                <div style={{ opacity: "90%" }}>
                  <div className="vc-link">
                    <a href="https://maps.app.goo.gl/KqHWHfnA4sGWdUNfA">
                      B- 1/18- B Paschim Vihar, New Delhi, Pin-code : 110063
                    </a>
                  </div>
                </div>
                <div style={{ opacity: "90%" }}>
                  <div className="vc-link">
                    <a href="https://maps.app.goo.gl/KqHWHfnA4sGWdUNfA">
                      Review Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="visiting-card-section visiting-card-section3">
              <div
                style={{ cursor: "pointer" }}
                onClick={handleAppointmentOpen}
                className="vc-link"
              >
                <a href="https://www.roguetattoos.in/getstarted">
                  Appointment
                  <img
                    src="../../images/toggleDown.svg"
                    className="visitingcardtoggleDown show-different"
                    alt="dropdown toggle"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
              <div
                className={`toggling-content ${isAppointmentOpen && "show"}`}
              ></div>
            </div>
            <div
              className="visiting-card-icon"
              style={{ position: "absolute", bottom: "10px" }}
            >
              <div>
                <a href="https://wa.me/+919871718432">
                  <img
                    src="../../images/whatsapp.svg" // Public folder image
                    alt="Whatsapp"
                    width={40}
                    height={40}
                  />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/theroguetattoos/">
                  <img
                    src="/images/instagram.svg" // Public folder image
                    alt="Instagram"
                    width={40}
                    height={40}
                  />
                </a>
              </div>
              <div>
                <a href="https://www.roguetattoos.in/">
                  <img
                    src="/images/newlogo.png" // Public folder image
                    alt="Website"
                    width={40}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
