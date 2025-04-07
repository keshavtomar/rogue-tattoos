import React, { useState } from "react";
import "../styles/visitingcard2.css";
import "animate.css";
import { useWindowSize } from "@uidotdev/usehooks";

export default function VisitingCard2() {
  const size = useWindowSize();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
    setIsLocationOpen(false);
    setIsAppointmentOpen(false);
  };

  const toggleLocation = () => {
    setIsLocationOpen(!isLocationOpen);
    setIsContactOpen(false);
    setIsAppointmentOpen(false);
  };

  const toggleAppointment = () => {
    setIsAppointmentOpen(!isAppointmentOpen);
    setIsLocationOpen(false);
    setIsContactOpen(false);
  };

  if (size.width > 480 || size.height < 600) {
    return (
      <div
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100dvh",
        }}
      >
        Please use a device with smaller screen width (webpage compatible with
        phones only)
      </div>
    );
  }

  const handleDownload = () => {
    const imageUrl = "/images/vc2/rogue-card.jpg";
    const fileName = "my-image.jpg";

    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="vc2-page">
      <div className="vc2Img-container">
        <img
          src="../../images/vc2img.jpg"
          alt="background"
          className="vc2-backgroundImg"
        />
      </div>
      <div className="vc2-container">
        <div className="vc2-details vc2-blur">
          <div className="vc2-details-logo">
            <img src="../../images/newlogo.png" alt="logo" />
          </div>
          <div className="vc2-details-content">
            <div className="vc2-contact">
              <div
                className="vc2-headings vc2-contact-heading"
                onClick={toggleContact}
              >
                Contact
                <div
                  className={`vc2-heading-arrow ${
                    isContactOpen ? "fade-out" : "fade-in"
                  }`}
                >
                  <img src="../../images/vc2/right-arrow.svg" alt="arrow" />
                </div>
              </div>
              <div
                className={`vc2-contact-details toggling-content ${
                  isContactOpen && "vc2-show"
                }`}
              >
                <div>
                  <div className="vc-link">
                    <a href="tel:+919971947774" className="vc-single-link">
                      <div className="vvv">
                        <img
                          width={15}
                          src="../../images/vc-phone.svg"
                          alt="phone"
                        />
                      </div>
                      <div style={{ margin: "auto 4px" }}>+919971947774</div>
                    </a>
                  </div>
                  <div className="vc-link">
                    <a
                      href="mailto:theroguetattoos@gmail.com"
                      className="vc-single-link"
                    >
                      <div className="vvv">
                        <img
                          width={14}
                          src="../../images/vc-mail.svg"
                          alt="mail"
                        />
                      </div>
                      <div style={{ margin: "auto 4px" }}>
                        theroguetattoos@gmail.com
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="vc2-locate">
              <div
                className="vc2-headings vc2-locate-heading"
                onClick={toggleLocation}
              >
                Locate us
                <div
                  className={`vc2-heading-arrow ${
                    isLocationOpen ? "fade-out" : "fade-in"
                  }`}
                >
                  <img src="../../images/vc2/right-arrow.svg" alt="arrow" />
                </div>
              </div>
              <div
                className={`vc2-location-details toggling-content ${
                  isLocationOpen && "vc2-show"
                }`}
              >
                <div>
                  <div className="vc-link">
                    <a
                      href="https://maps.app.goo.gl/KqHWHfnA4sGWdUNfA"
                      className="vc-single-link"
                    >
                      <div className="vvv">
                        <img
                          width={15}
                          src="../../images/vc-location.svg"
                          alt="locate"
                        />
                      </div>
                      <div style={{ margin: "auto 4px" }}>
                        B1/18- B Paschim Vihar,
                        <br /> New Delhi, 110063
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="vc2-appointment">
              <a
                href="https://www.roguetattoos.in/getstarted"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="vc2-headings vc2-appointment-heading"
                  onClick={toggleAppointment}
                >
                  Book <br /> Appointment
                  <div
                    className={`vc2-heading-arrow ${
                      isAppointmentOpen ? "fade-out" : "fade-in"
                    }`}
                  >
                    <img src="../../images/vc2/right-arrow.svg" alt="arrow" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="vc2-download-button" onClick={handleDownload}>
            <img src="../../images/vc2/vc2-download.svg" alt="download" />
          </div>
        </div>
        <div className="vc2-capsule vc2-blur">
          <a
            href="https://wa.me/+919871718432"
            target="_blank"
            rel="noreferrer"
          >
            <div className="vc2-icon vc2-icon-whatsapp">
              <img src="../../images/vc2/vc2-whatsapp.png" alt="whatsapp" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/theroguetattoos/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="vc2-icon vc2-icon-instagram">
              <img src="../../images/vc2/vc2-instagram.png" alt="instagram" />
            </div>
          </a>
          <a
            href="https://www.roguetattoos.in/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="vc2-icon vc2-icon-website">
              <img src="../../images/vc2/vc2-website.png" alt="website" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
