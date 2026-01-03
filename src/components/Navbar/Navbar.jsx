import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{},[
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  ]);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      {/* LOGO */}
      <a href="/">
        <img src={logo} alt="Soft-Tech Computers Logo" className="logo" />
      </a>

      {/* MENU ICON (RIGHT SIDE) */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* MENU */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>

        {/* COURSES DROPDOWN */}
        <li className="dropdown">
          <a href="#courses">Courses ▾</a>
          <ul className="dropdown-menu">
            <li><a href="#tally">📘 Tally</a></li>
            <li><a href="#java">☕ Java</a></li>
            <li><a href="#python">🐍 Python</a></li>
            <li><a href="#html">🌐 HTML5</a></li>
            <li><a href="#css">🎨 CSS3</a></li>
            <li><a href="#js">⚡ JavaScript</a></li>
          </ul>
        </li>

        <li><a href="#testimonials">Testimonials</a></li>

        <li>
          <a href="/contact">
            <button className="btn">Contact Us</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
