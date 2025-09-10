import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";


const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">Canteen</h1>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  </nav>
);

export default Navbar;
