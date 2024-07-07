import React, { useState, useRef } from "react";
import "../styles/appointment.css";
import { toast, ToastContainer } from "react-toastify";
import TermsNConditions from "./TermsNConditions";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export default function AppointmentForm() {
  const handle = useFullScreenHandle();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [data, setData] = useState({
    name: "",
    dob: "",
    phone: "",
    selectedValue: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const date = new Date();
    const updatedData = { ...data, date: date.toISOString() };
    console.log("Form data submitted:", updatedData);
    try {
      const response = await fetch(
        `https://rogue-tattoos-api.onrender.com/appointment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (response.ok) {
        toast.success("Submission Successfull");
        setData({
          name: "",
          dob: "",
          phone: "",
          selectedValue: "",
          date: "",
        });
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  const handleFullScreenChange = (state) => {
    console.log(state);
    setIsFullScreen(state);
  };

  return (
    <div>
      <button
        style={{
          position: "absolute",
          zIndex: "1000",
          backgroundColor: "rgb(3,3,4,0)",
          right: "10px",
          top: "10px",
          borderRadius: "50%",
          height: "35px",
          border: "none",
        }}
        onClick={handle.enter}
      >
        <img
          src="images/FullScreen.svg"
          alt="full-screen"
          style={{ objectFit: "contain", width: "20px" }}
        />
      </button>
      <FullScreen handle={handle} onChange={handleFullScreenChange}>
        <div className="appointment">
          <div className="background-container">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
              alt="moon"
            />
            <div className="af-stars"></div>
            <div className="af-twinkling"></div>
            <div className="af-clouds"></div>

            <div className="unique-form-container">
              <div
                className="est-container2"
                style={isFullScreen ? { bottom: "-50px" } : { bottom: "-20px" }}
              >
                <img
                  className="est2"
                  id="est2"
                  src="images/stamp.png"
                  alt="established in 2015"
                ></img>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="unique-form-input-blocks">
                  <div className="left-inputs">
                    <div className="unique-form-group">
                      <label
                        className="unique-form-label"
                        htmlFor="unique-name"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="unique-form-input"
                        id="unique-name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="unique-form-group">
                      <label
                        className="unique-form-label"
                        htmlFor="unique-birthday"
                      >
                        Birthday
                      </label>
                      <input
                        type="date"
                        className="unique-form-input"
                        id="unique-birthday"
                        name="dob"
                        value={data.dob}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="right-inputs">
                    <div className="unique-form-group">
                      <label
                        className="unique-form-label"
                        htmlFor="unique-phone"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="unique-form-input"
                        id="unique-phone"
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="unique-form-group">
                      <label
                        className="unique-form-label"
                        htmlFor="selectInput"
                      >
                        How you know about us
                      </label>
                      <select
                        id="selectInput"
                        className="unique-form-input"
                        name="selectedValue"
                        value={data.selectedValue}
                        onChange={handleChange}
                      >
                        <option value="">--Select an option--</option>
                        <option value="option1">Social Media ads</option>
                        <option value="option2">Through a friend</option>
                        <option value="option3">Google Search/website</option>
                        <option value="option4">Re-visit</option>
                        <option value="option5">Others</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className="unique-form-checkbox"
                  style={{ display: "flex" }}
                >
                  <input
                    type="checkbox"
                    id="unique-terms"
                    name="terms"
                    required
                  />
                  <label htmlFor="unique-terms" style={{ display: "flex" }}>
                    <div style={{ margin: "auto 5px" }}>I agree to the</div>
                    <TermsNConditions
                      color="#a68954"
                      fontFamily="'Montserrat', sans-serif"
                    />
                  </label>
                </div>
                <div className="unique-form-button">
                  <button type="submit">
                    {loading ? <div className="loader1"></div> : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <ToastContainer />
        </div>
      </FullScreen>
    </div>
  );
}
