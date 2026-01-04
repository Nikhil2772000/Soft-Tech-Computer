import React, { useState, useEffect } from "react";
import "./Hero.css";
import banner1 from "../../assets/nav.webp";
import banner2 from "../../assets/Soft.png";
import slide from "../../assets/slide.webp";

const images = [banner1, banner2, slide];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Background Slider */}
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

          <h1 className="typing-text">
            <span className="stroke-text">Soft Tech Computer</span>
          </h1>

          <p className="hero-para">
            <strong>Soft Tech Computer</strong> is a professional training
            institute providing quality education in
            <strong> Computer Courses, Software Development</strong> and
            <strong> IT Skills</strong> to build a successful career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
