import React, { useState, useEffect } from "react";
import "./Hero.css";

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
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h2 className="hero-subtitle">Welcome To</h2>

          <div className="typing-container">
            <h1 className="typing-text">Soft Tech Computer</h1>
          </div>

          <div className="center-code">
            Center Code : <span>32210149</span>
          </div>

          <p className="hero-description">
            <strong>Soft Tech Computer</strong> is a professional training institute
            providing quality education in <strong>MS-CIT</strong> and essential
            <strong> IT skills</strong> to build successful careers.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="blue-rotate-bg"></div>
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