import React, { useState } from "react";
import '../styles/footer.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton style={{ backgroundColor: "#302e2e" }}>
                <Modal.Title id="contained-modal-title-vcenter" style={{ color: "white" }}>
                    Terms & Conditions
                </Modal.Title>
            </Modal.Header>
            <Modal.Body
                style={{ backgroundColor: "#302e2e", color: "white", display: "flex", "justify-content": "space-evenly" }}
            >
                <ul>
                    <li>By booking an appointment, the customer confirms that they are of legal age (18+ or as per local laws) and provide informed consent for the tattoo.</li>
                    <li>Customers acknowledge that there are inherent risks associated with getting a tattoo and assume these risks.</li>
                    <li>The tattoo artist retains ownership rights to the original artwork/design.</li>
                    <li>Customer photographs of completed tattoos may be used for promotional purposes with appropriate permissions.</li>
                    <li>Rogue Tattoos and its tattoo artists shall not be held liable for any damages, injuries, or adverse reactions resulting from the tattoo process, within the limits allowed by local laws.</li>
                    {/* <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum.</li> */}
                    {/* <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore tenetur maiores consequuntur qui.</li> */}
                </ul>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "#302e2e" }}>

                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


function Footer() {
    const [modalShow, setModalShow] = useState(false);
    const handleShow = () => setModalShow(true);
    return (
        <div className='footer-container'>
            <footer class="footer">
                <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                </div>
                <p>&copy;2015 The Rogue Tattoos | </p>
                <p>All Rights Reserved |&nbsp; </p>
                <p style={{ "cursor": "pointer" }} onClick={() => (modalShow ? null : handleShow())}> Terms and Conditions </p>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </footer>
        </div >
    )
}

export default Footer;