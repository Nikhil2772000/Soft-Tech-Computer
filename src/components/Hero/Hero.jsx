import React, { useState, useEffect } from "react";
import "./Hero.css";

// Assuming these paths are correct in your project
import banner1 from "../../assets/mscit.webp";
import banner2 from "../../assets/about us.jpg";
import banner3 from "../../assets/computer logo.jpg";
import banner4 from "../../assets/laptop2.jpg";
import banner5 from "../../assets/students.webp";



const images = [banner1, banner2, banner3, banner4, banner5];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

 

  return (
    <section className="hero">
      {/* Background Hexagon Pattern Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-badge">ISO Certified Institute</span>
          <h2 className="hero-subtitle">Welcome To</h2>
          <div className="typing-container">
            <h1 className="typing-text">Soft Tech Computer</h1>
          </div>
          <div className="center-code">
            Center Code : <span>32210149</span>
          </div>
          <p className="hero-description">
            Empowering students with <strong>MS-CIT</strong> and cutting-edge
            <strong> IT skills</strong>. Join us to transform your digital future
            with professional guidance.
          </p>
        </div>

        <div className="hero-right">
          {/* SLOW ROTATION: Blue Glow */}
          <div className="blob-shape"></div>

          {/* FAST ROTATION: Benzene / Hex Frame */}
          <div className="decor-circle"></div>

          <div className="image-frame">
            {images.map((img, index) => (
              <div
                key={index}
                className={`slide ${index === current ? "active" : ""}`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;