import React, {useState} from "react";
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
      <Modal.Header closeButton style={{backgroundColor:"#302e2e"}}>
        <Modal.Title id="contained-modal-title-vcenter" style={{color:"white"}}>
          Terms & Conditions
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ backgroundColor:"#302e2e" ,color:"white", display: "flex", "justify-content": "space-evenly" }}
      >
          <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sed atque, quam obcaecati mollitia cumque consequatur. Laboriosam incidunt corrupti magnam ad labore? Mollitia!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus dolorem praesentium! Deleniti optio aperiam vitae unde doloremque itaque facere voluptate, voluptas corporis perspiciatis, enim, deserunt autem in odit harum.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laboriosam temporibus nemo.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate delectus, unde voluptatibus architecto dicta ad pariatur.</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro odit eius a quae suscipit illum totam optio recusandae consectetur deserunt.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore tenetur maiores consequuntur qui.</li>
          </ul>
      </Modal.Body>
      <Modal.Footer style={{backgroundColor:"#302e2e"}}>
      
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function Footer() {
  const [modalShow, setModalShow] = useState(false);
  const handleShow = () => setModalShow(true);
  return (
      <div className='footer-component'>
          <footer class="footer">
              <div class="waves">
                  <div class="wave" id="wave1"></div>
                  {/* <div class="wave" id="wave2"></div> */}
                  {/* <div class="wave" id="wave3"></div> */}
              </div>

            <p>&copy;2015 The Rogue Tattoos | All Rights Reserved <p style={{"cursor":"pointer"}} onClick={()=> (modalShow ? null : handleShow())}> Terms and Conditions </p></p>
            <MyVerticallyCenteredModal 
            show={modalShow}
            onHide = {()=> setModalShow(false)}
        />
          </footer>
      </div>
  )
}

export default Footer;