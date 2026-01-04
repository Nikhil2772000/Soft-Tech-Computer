import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import whatpp from "../../assets/whatpp.avif";
import facebook from "../../assets/facebook.webp";

const Footer = () => {
    const phone = "918380863037";
    const message = "Hello, I want to know about your courses.";
    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    const handleLogoClick = () => {
        window.location.href = "/";
    };

    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Left Section: Logo & Info */}
                <div className="footer-left">
                    <img src={logo} alt="Soft-Tech Computers Logo" onClick={handleLogoClick} className="footer-logo" />
                    <p>
                        <strong>Soft Tech Computer Training Learning Center</strong><br />
                        Learn modern technologies and boost your career with practical training.
                    </p>
                </div>

                {/* Middle Section: Quick Links */}
                <div className="footer-middle">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* Right Section: Legal & Social */}
                <div className="footer-right">
                    <h3>Legal Support</h3>
                    <ul>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-service">Terms of Service</a></li>
                    </ul>

                    <div className="footer-social">
                        <a href={whatsappURL} target="_blank" rel="noreferrer" className="social-link">
                            <img src={whatpp} alt="WhatsApp" />
                        </a>
                        <a href="https://facebook.com/your-page" target="_blank" rel="noreferrer" className="social-link">
                            <img src={facebook} alt="Facebook" />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Copyright */}
            <div className="footer-bottom">
                © 2026 Guru Software Solutions. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
