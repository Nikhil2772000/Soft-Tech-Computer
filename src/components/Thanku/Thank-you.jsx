import React, { useEffect, useRef, useState } from "react";
import "./Thank-you.css";
import { useNavigate } from "react-router-dom";
// Ensure the image is in your src folder or public folder
import natureBg from "../../assets/natures.webp";

const Thanku = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["#ff6b6b", "#48dbfb", "#1dd1a1", "#c77dff", "#ff9ff3"];

  const speakGreeting = () => {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance("Thank You! Our team will contact you.");
    msg.rate = 1;
    msg.pitch = 1.1;
    window.speechSynthesis.speak(msg);
  };

  const goHome = () => {
    window.speechSynthesis.cancel();
    navigate("/");
  };

  useEffect(() => {
    speakGreeting();
    const timer = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.random() * 3 + 1;
        this.vx = (Math.random() - 0.5) * 6;
        this.vy = (Math.random() - 0.5) * 6;
        this.life = 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 0.02;
      }
      draw() {
        ctx.globalAlpha = this.life;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const explode = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 25; i++) {
        particles.push(new Particle(x, y, color));
      }
    };

    const animate = () => {
      // Clear with slight transparency for trail effect
      ctx.clearRect(0, 0, canvas.width, canvas.height); 

      if (Math.random() < 0.05) explode();

      particles = particles.filter((p) => p.life > 0);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section 
      className="thanku-section" 
      style={{ backgroundImage: `url(${natureBg})` }}
    >
      {/* Overlay to help text readability */}
      <div className="bg-overlay"></div>
      
      <canvas ref={canvasRef} className="firework-canvas" />

      <div className="thanku-card">
        <div className="check-container">✓</div>

        <h1 className="thanku-title" style={{ color: colors[colorIndex] }}>
          Thank You 🎉
        </h1>

        <p className="thanku-text">
          Your message was sent successfully.
          <br />
          Our team will contact you shortly.
        </p>

        <p className="thanku-sub">
          Proudly served by <br />
          <strong className="brand-glow">Soft Tech Computer</strong>
        </p>

        <div className="button-wrapper">
          <button className="thanku-btn" onClick={goHome}>
            ← Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Thanku;