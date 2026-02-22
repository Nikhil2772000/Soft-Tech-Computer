import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import whatsapp from "../../assets/whatpp.avif";
import facebook from "../../assets/facebook.webp";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const phone = "918380863037";
  const message = "Hello, I want to know about your courses.";
  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <footer className="footer">
      {/* Wave Shape Divider */}
      <div className="ocean-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="footer-container">
        {/* LEFT SECTION */}
        <div className="footer-section footer-brand">
          <img
            src={logo}
            alt="Soft Tech Computer"
            className="footer-logo"
            onClick={handleLogoClick}
          />
          <p className="footer-text">
            Practical, industry-oriented computer training to build a successful IT career. 
            An authorized <strong>MS-CIT</strong> learning center.
          </p>
          <div className="footer-social">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
            <a href="https://www.facebook.com/share/1AsZNB35rX/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-section footer-legal">
          <h3>Legal Support</h3>
          <ul>
            <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
            <li><NavLink to="/terms-of-service">Terms of Service</NavLink></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 <strong>Soft Tech Computer</strong>. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;