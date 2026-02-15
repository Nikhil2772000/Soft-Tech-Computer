import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="nav-container">

        {/* ✅ LOGO (PAGE REFRESH ON CLICK) */}
        <div className="logo-wrap">
          <a href="/">
            <img
              src={logo}
              alt="Soft Tech Computers Logo"
              className="logo"
            />
          </a>
        </div>


        {/* MOBILE MENU ICON */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

        {/* MENU */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>

          <li onClick={closeMenu}>
            <a href="#about" className="nav-link">About</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#services" className="nav-link">Services</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#testimonials" className="nav-link">Testimonials</a>
          </li>

          <li className="nav-btn-item" onClick={closeMenu}>
            <a href="/contact">
              <button className="btn">Contact Us</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
