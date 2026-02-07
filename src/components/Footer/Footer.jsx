import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg";
import whatsapp from "../../assets/whatpp.avif";
import facebook from "../../assets/facebook.webp";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const phone = "918380863037"; // WhatsApp number with country code

  const message =
    "Hello, I want to know about your courses."

  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;



  // Function to refresh and go to Home page
  const handleLogoClick = () => {
    window.location.href = "/"; // Full page reload to home
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-left">
          {/* Logo click refreshes Home page */}
          <img
            src={logo}
            alt="Soft Tech Computer Logo"
            className="footer-logo"
            style={{ cursor: "pointer" }}
            onClick={handleLogoClick}
          />

          <p>
            <br />
            Practical, industry-oriented computer training to build a successful IT career.
            <br />
            Authorized MS-CIT learning center offering basic to advanced computer education,
            skill development, and career-focused courses.
          </p>

        </div>

        {/* MIDDLE */}
        <div className="footer-middle">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/" end style={{ cursor: "pointer" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h3>Legal Support</h3>
          <ul>
            <li>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/terms-of-service">Terms of Service</NavLink>
            </li>
          </ul>

          <div className="footer-social">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="WhatsApp" />
            </a>

            <a
              href="https://www.facebook.com/share/1AsZNB35rX/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 <strong>Soft Tech Computer</strong>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
