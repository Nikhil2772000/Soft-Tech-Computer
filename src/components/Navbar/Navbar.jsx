import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="nav-container">
        
        {/* LOGO */}
        <div className="logo-wrap">
          <a href="/">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>

        {/* HAMBURGER ICON - Toggle menuOpen state on click */}
        <div 
          className={`menu-icon ${menuOpen ? "open" : ""}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS - Toggled by 'active' class */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li><a href="/" className="nav-link" onClick={closeMenu}>Home</a></li>
          <li><a href="/about" className="nav-link" onClick={closeMenu}>About</a></li>
          <li><a href="/services" className="nav-link" onClick={closeMenu}>Services</a></li>
          <li><a href="/testimonials" className="nav-link" onClick={closeMenu}>Testimonials</a></li>
          <li className="nav-btn-item">
            <a href="/contact" className="btn" onClick={closeMenu}>Contact Us</a>
          </li>
        </ul>
      </div>

      {/* MOBILE OVERLAY - Closes menu when clicking outside */}
      {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;