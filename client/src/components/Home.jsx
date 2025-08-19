import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import LoginForm from "../authentication/LoginForm";
import RegisterForm from "../authentication/RegisterForm";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Step Into Style</h1>
        <p>
          Discover the latest footwear and accessories designed to keep you
          ahead of the trend.
        </p>
        <button onClick={() => setShowLogin(true)}>Shop Now</button>
      </div>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <LoginForm
            onClose={() => setShowLogin(false)}
            onShowRegister={() => setShowRegister(true)}
          />
        </Modal.Body>
      </Modal>

      {/* Register Modal */}
      <Modal show={showRegister} onHide={() => setShowRegister(false)} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <RegisterForm onClose={() => setShowRegister(false)} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
