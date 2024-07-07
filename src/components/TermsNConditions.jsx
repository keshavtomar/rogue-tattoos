import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  const { color, fontFamily } = props;

  const modalStyles = {
    color: color || "white",
    fontFamily: fontFamily || "inherit",
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ backdropFilter: "blur(5px)", zIndex:"5000" }}
    >
      <Modal.Header closeButton style={{ backgroundColor: "#302e2e" }}>
        <Modal.Title id="contained-modal-title-vcenter" style={modalStyles}>
          Terms & Conditions
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          ...modalStyles,
          backgroundColor: "#302e2e",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <ul>
          <li style={{ fontFamily: fontFamily, fontWeight: "300" }}>
            By booking an appointment, the customer confirms that they are of
            legal age (18+ or as per local laws) and provide informed consent
            for the tattoo.
          </li>
          <li style={{ fontFamily: fontFamily, fontWeight: "300" }}>
            Customers acknowledge that there are inherent risks associated with
            getting a tattoo and assume these risks.
          </li>
          <li style={{ fontFamily: fontFamily, fontWeight: "300" }}>
            The tattoo artist retains ownership rights to the original
            artwork/design.
          </li>
          <li style={{ fontFamily: fontFamily, fontWeight: "300" }}>
            Customer photographs of completed tattoos may be used for
            promotional purposes with appropriate permissions.
          </li>
          <li style={{ fontFamily: fontFamily, fontWeight: "300" }}>
            Rogue Tattoos and its tattoo artists shall not be held liable for
            any damages, injuries, or adverse reactions resulting from the
            tattoo process, within the limits allowed by local laws.
          </li>
          <li style={{ fontFamily: fontFamily, fontWeight: "300" }}>
            Rogue Tattoos does not provide tattoo services to pregnant women,
            individuals with diabetes (sugar patients), or those with other
            serious illnesses
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#302e2e" }}>
        <Button onClick={props.onHide} style={modalStyles}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function TermsNConditions({ color, fontFamily }) {
  const [modalShow, setModalShow] = useState(false);
  const handleShow = () => setModalShow(true);

  return (
    <div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        color="#fff"
        fontFamily={fontFamily}
      />
      <span
        style={{
          cursor: "pointer",
          margin: "0",
          display: "inline",
          color: color || "white", // Embedding color directly inline
        }}
        onClick={() => (modalShow ? null : handleShow())}
      >
        Terms & Conditions
      </span>
    </div>
  );
}
