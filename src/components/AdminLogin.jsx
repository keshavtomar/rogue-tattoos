import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "../styles/appointment.css";

export default function AdminLogin({ setIsLoggedIn }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;
    if (password === adminPassword) {
      setIsLoggedIn(true);
      navigate("/admin");
    } else {
      setError("Invalid password. Please try again.");
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 bg-dark">
      <Row className="w-100">
        <Col md={{ span: 4, offset: 4 }}>
          <div className="login-container p-4 bg-white rounded">
            <h2 className="text-center mb-4 text-dark font-weight-bold">Admin Login</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-light text-dark"
                />
              </Form.Group>
              <Button variant="dark" type="submit" className="w-100">
                Login
              </Button>
            </Form>
            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
