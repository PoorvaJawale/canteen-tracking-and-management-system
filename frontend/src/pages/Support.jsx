import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Support.css";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Support form submitted:", formData);
    alert("Your message has been sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <div className="support-container">
        <h2>Support</h2>
        <p>If you have any questions, issues, or feedback, reach out to us!</p>

        <div className="support-content">
          {/* Contact Info */}
          <div className="support-info">
            <h3>Contact Info</h3>
            <p>Email: support@gourmetcanteen.com</p>
            <p>Phone: +91 9876543210</p>
            <p>We aim to respond within 24 hours.</p>
          </div>

          {/* Contact Form */}
          <div className="support-form">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
              <textarea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq">
            <p><strong>Q:</strong> What are your operating hours?</p>
            <p><strong>A:</strong> We are open from 8 AM to 10 PM every day.</p>

            <p><strong>Q:</strong> Can I place an order online?</p>
            <p><strong>A:</strong> Currently orders are placed in-person, but online ordering is coming soon!</p>

            <p><strong>Q:</strong> How can I report an issue with my order?</p>
            <p><strong>A:</strong> Use the contact form above or email support@gourmetcanteen.com.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
