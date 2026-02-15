import React, { useEffect, useRef, useState } from "react";
import "./Thanku.css";
import { Link } from "react-router-dom";

const Thanku = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const canvasRef = useRef(null);

  const colors = ["#ff6b6b", "#48dbfb", "#1dd1a1", "#c77dff", "#ff9ff3"];

  /* ================= Background color animation ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [colors.length]);

  /* ================= 🎆 Firework Animation ================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = [];
    const startTime = Date.now();
    const MAX_TIME = 20 * 60 * 1000; // 20 minutes

    const createParticle = (side) => {
      const baseX = side === "left" ? 40 : canvas.width - 40;

      particles.push({
        x: baseX,
        y: canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -Math.random() * 5 - 3,
        size: Math.random() * 2 + 1,
        life: 120,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const elapsed = Date.now() - startTime;
      const intensity = Math.min(elapsed / MAX_TIME, 1);
      const spawnRate = Math.floor(1 + intensity * 12);

      for (let i = 0; i < spawnRate; i++) {
        createParticle("left");
        createParticle("right");
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, [colors]);

  return (
    <section
      className="thanku-section"
      style={{ backgroundColor: colors[colorIndex] }}
    >
      {/* 🎆 Firework Canvas */}
      <canvas ref={canvasRef} className="firework-canvas"></canvas>

      <div className="thanku-card">
        <h1 className="thanku-title">Thank You! 🎉</h1>

        <p className="thanku-text">
          Your message has been successfully sent.
          Our team will get in touch with you very soon.
        </p>

        <p className="thanku-sub">
          We appreciate your interest in{" "}
          <strong className="brand-color">Soft Tech Computer</strong>.
        </p>

        <ul className="thanku-actions">
          <li>
            {/* ✅ Link (simple navigation) */}
            <Link to="/" className="thanku-btn">
              Go Back Home
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Thanku;
