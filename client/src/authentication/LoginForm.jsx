import React, { useState } from "react";
import axios from "axios";
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
        navigate("/main");
      }
    } catch (err) {
      console.error("Login error", err);
      alert("Login failed");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Login
        </button>

        <p className="mt-3 text-center">
          Don't have an account?{" "}
          <span
            onClick={() => {
              onClose && onClose();
              onShowRegister && onShowRegister();
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
    </div>
  );
};

export default LoginForm;
