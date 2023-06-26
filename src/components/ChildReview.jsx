import React, {useState} from 'react'
import "../styles/review.css";
import Stars from "../components/Stars";
import Avatar from "@mui/material/Avatar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
    
    const review = props.data;

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {review.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ display: "flex", "justify-content": "space-evenly" }}
        >

        </Modal.Body>
        <Modal.Footer>
        
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


function ChildReview({review}) {

    console.log(review);

    const [modalShow, setModalShow] = useState(false);
    console.log(modalShow);
    const handleShow = () => setModalShow(true);

  return (
      <div className="review-card fly-hidden"  style={{ cursor: "pointer" }}
      onClick={() => (modalShow ? null : handleShow())}>
                    <Avatar
                        className="avatar"
                        alt={review.name}
                        src="../public/images/a.png"
                        sx={{ height: 56, width: 56 }}
                    />
                    <Stars filled={review.stars} />
                    <hr />
                    <p>{review.review.slice(0, 170)}...</p>
                    <a className="review-link" href="#home">Read More</a>
                    <h4 className="review-card-name">{review.name}</h4>
                    <p className="review-card-date">{review.date}</p>
                    <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          data={review}
        />
        </div>
  )
}

export default ChildReview
