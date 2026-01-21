import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  /* ================= STICKY ================= */
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= SCROLL TO SECTION ================= */
  const scrollToSection = (id) => {
    closeMenu();

    const scrollTo = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(scrollTo, 50); // reduced delay for faster scroll
    } else {
      scrollTo();
    }
  };


  /* ================= CLOSE MENU ================= */
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  /* ================= LOGO CLICK (FULL REFRESH) ================= */
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  /* ================= HOME CLICK (FULL REFRESH) ================= */
  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="nav-container">

        {/* LOGO */}
        <div className="logo-wrap" onClick={handleLogoClick}>
          <img src={logo} alt="Soft-Tech Computers Logo" className="logo" />
        </div>

        {/* MOBILE ICON */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>

        {/* MENU */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>

          <li onClick={handleHomeClick}>
            <span className="nav-link">Home</span>
          </li>

          <li onClick={() => scrollToSection("about")}>
            <span className="nav-link">About</span>
          </li>

          <li onClick={() => scrollToSection("services")}>
            <span className="nav-link">Services</span>
          </li>

        
          <li onClick={() => scrollToSection("testimonials")}>
            <span className="nav-link">Testimonials</span>
          </li>

          <li className="nav-btn-item" onClick={() => scrollToSection("contact")}>
            <button className="btn">Contact Us</button>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
