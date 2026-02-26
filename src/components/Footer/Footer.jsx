import React, { useEffect, useState } from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import whatsapp from "../../assets/whatpp.avif";
import facebook from "../../assets/facebook.webp";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showScroll, setShowScroll] = useState(false);

  const phone = "918380863037";
  const message = "Hello, I want to know about your courses.";
  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // ✅ SHOW / HIDE SCROLL BUTTON
  useEffect(() => {
    const handleScroll = () => {
      // Show only if scrolled down AND not at Home top
      if (window.scrollY > 250) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide button completely on Home at top
  const shouldShowButton =
    showScroll || location.pathname !== "/";

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Scroll Up + Go Home
  const scrollToTop = () => {
    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <footer className="footer">
      {/* ✅ Scroll to Top Button (Conditional) */}
      {shouldShowButton && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <span className="arrow-up"></span>
        </button>
      )}

      {/* Wave */}
      <div className="ocean-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86
               82.39-16.72,168.19-17.73,250.45-.39
               C823.78,31,906.67,72,985.66,92.83
               c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35
               A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          />
        </svg>
      </div>

      <div className="footer-container">
        {/* LEFT */}
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
            <a
              href="https://www.facebook.com/share/1AsZNB35rX/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-section footer-legal">
          <h3>Legal Support</h3>
          <ul>
            <li><NavLink to="/policy">Privacy Policy</NavLink></li>
            <li><NavLink to="/service">Terms of Service</NavLink></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 <strong>Soft Tech Computer</strong>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;