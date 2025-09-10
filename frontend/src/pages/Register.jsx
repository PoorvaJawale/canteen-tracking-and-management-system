import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/users/register", { name, email, password });
      console.log("Registered:", res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="form-container">
        <form className="form-box" onSubmit={handleSubmit}>
          <h2 className="form-title">Register</h2>
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button className="btn" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
