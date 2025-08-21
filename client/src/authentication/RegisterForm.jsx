import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const RegisterForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("https://elite-walk-api.vercel.app/register", {
        name,
        email,
        password,
      });

      if (res.status === 201) {
        alert("Registration successful");
        onClose(); // ✅ Close modal
      } else {
        alert("Registration failed");
      }
    } catch (err) {
      console.log(err);
      alert("Registration failed");
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <h2 className="fw-bold">Register</h2>
      <form onSubmit={handleSubmit}>
        <label className="mb-2">Name</label>
        <input
          type="text"
          placeholder="Enter your full name..."
          required
          className="mb-2 form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="mb-2">Email</label>
        <input
          type="email"
          placeholder="Enter email..."
          required
          className="mb-2 form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="mb-2">Password</label>
        <input
          type="password"
          placeholder="Password..."
          required
          className="mb-2 form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="mb-2">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm password..."
          required
          className="mb-2 form-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="d-flex justify-content-center mt-4">
          <Button className="px-3" type="submit">
            Register
          </Button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
