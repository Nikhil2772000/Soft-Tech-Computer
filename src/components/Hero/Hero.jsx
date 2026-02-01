import React, { useState, useEffect } from "react";
import "./Hero.css";
import banner1 from "../../assets/mscit.webp";
import banner2 from "../../assets/about.png";
import banner4 from "../../assets/web2.jpg";

const images = [banner1, banner2, banner4];

const Hero = () => {
  const [current, setCurrent] = useState(0); // ✅ FIXED

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Background */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${images[current]})` }}
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">Welcome To</h2>

          {/* MAIN HEADING */}
          <h1 className="typing-text">
            <span className="stroke-text">Soft Tech Computer</span>
          </h1>

          {/* ✅ CENTER CODE — NOW PERFECTLY BELOW HEADING */}
          <div className="center-code">
            Center Code : <span>32210149</span>
          </div>

          <p className="hero-para">
            <strong>Soft Tech Computer</strong> is a professional training institute
            dedicated to providing quality education in
            <strong> MS-CIT, Computer Courses</strong> and essential
            <strong> IT skills</strong>, helping students build strong knowledge and
            confidence for a successful career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
