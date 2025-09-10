import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🍴 Gourmet Canteen</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login?type=user">User Login</Link></li>
        <li><Link to="/login?type=admin">Admin Login</Link></li>
        <li><Link to="/menucard">Menu</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
