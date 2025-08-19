import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onClose, onShowRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (res.data.success) {
        alert("Login Successfully");
        console.log("User Data", res.data.user);
        onClose(); // Close modal
        navigate("/main"); // Navigate to main page
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error("Login error", err);
      alert("Login failed");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label className="mb-2">Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-2"
          required
        />

        <label className="mb-2">Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-2"
          required
        />

        <Button type="submit">Login</Button>
        <p className="mt-3">
          Don't have an account?{" "}
          <span
            onClick={() => {
              onClose(); // Close login modal
              onShowRegister(); // Show register modal
            }}
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Sign Up
          </span>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
