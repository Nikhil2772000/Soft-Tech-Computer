import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-text">
        <h2 className="hero-title">Welcome To</h2>

        {/* Typing animation */}
        <h1 className="typing-text">
          Soft Tech Computer
        </h1>

        <a href="/explore" className="btn explore-btn">
          Explore More
        </a>
      </div>
    </section>
  );
};

export default Hero;
