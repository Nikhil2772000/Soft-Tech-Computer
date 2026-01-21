import React, { useEffect, useState } from "react";
import "./Thanku.css";

const Thanku = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = [
    "#ff6b6b", // red
    "#feca57", // yellow
    "#48dbfb", // blue
    "#1dd1a1", // green
    "#c77dff", // purple
    "#ff9ff3", // pink
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="thanku-section"
      style={{ backgroundColor: colors[colorIndex] }}
    >
      <div className="thanku-card">
        <h1 className="thanku-title">Thank You! 🎉</h1>

        <p className="thanku-text">
          Your message has been successfully sent.  
          Our team will get in touch with you very soon.
        </p>

        <p className="thanku-sub">
          We appreciate your interest in <strong>Soft Tech Computer</strong>.
        </p>

        <a href="/" className="thanku-btn">
          Go Back Home
        </a>
      </div>
    </section>
  );
};

export default Thanku;
