import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../authentication/RegisterForm";
import LoginForm from "../authentication/LoginForm";

function MyNavbar({ cartCount }) {
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar
        expand="lg"
        style={{
          background: "linear-gradient(90deg, #000000, #1a1a1a)",
          color: "white",
        }}
        className="shadow-sm"
        variant="dark"
      >
        <Container fluid>
          {/* Brand + Toggle */}
          <Navbar.Brand className="fw-bold d-flex align-items-center">
            <img
              src="/Images/logo.png"
              alt="EliteWalk Logo"
              style={{
                height: "40px",
                marginRight: "10px",
                marginBottom: "5px",
              }}
            />
            EliteWalk
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* Left Nav */}
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/accessories"
                className="text-white fw-semibold"
              >
                Accessories
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/shoes"
                className="text-white fw-semibold"
              >
                <i className="fa-solid fa-watch me-2"></i>
                Shoes
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/luggages"
                className="text-white fw-semibold"
              >
                Luggages
              </Nav.Link>
            </Nav>

            {/* Right Side */}
            <div className="d-lg-flex align-items-center ms-auto">
              <Form className="d-flex me-lg-3 my-2 my-lg-0">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">Search</Button>
              </Form>

              <div
                className="position-relative me-lg-3 my-2 my-lg-0"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/cart")}
              >
                <i className="bi bi-cart fs-4 text-white"></i>
                {cartCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {cartCount}
                  </span>
                )}
              </div>

              <Button
                variant="outline-light"
                className="me-2 my-2 my-lg-0"
                onClick={() => setShowLogin(true)}
              >
                Sign In
              </Button>
              <Button
                style={{ backgroundColor: "#000000ff", color: "white" }}
                className="my-2 my-lg-0"
                onClick={() => setShowRegister(true)}
              >
                Sign Up
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modals */}
      <Modal show={showRegister} onHide={() => setShowRegister(false)} centered>
        <Modal.Header closeButton>
          <Modal.Body>
            <RegisterForm onClose={() => setShowRegister(false)} />
          </Modal.Body>
        </Modal.Header>
      </Modal>

      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Body>
            <LoginForm
              onClose={() => setShowLogin(false)}
              onShowRegister={() => {
                setShowLogin(false);
                setShowRegister(true);
              }}
            />
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default MyNavbar;
