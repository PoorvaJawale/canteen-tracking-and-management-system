import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/users/login", { email, password });
      console.log("Logged in:", res.data);
      // Save token/session
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="form-container">
        <form className="form-box" onSubmit={handleSubmit}>
          <h2 className="form-title">Login</h2>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button className="btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
