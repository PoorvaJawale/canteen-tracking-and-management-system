import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaTwitter /></a>
      </div>
      <div className="contact-info">
        <p>Email: contact@gourmetcanteen.com</p>
        <p>Phone: +91 9876543210</p>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Gourmet Canteen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
