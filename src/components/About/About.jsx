import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import aboutVideo from "../../assets/snapsave-app_680199827675934_hd.mp4";

const About = () => {
  const aboutRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add("show");
          video?.play().catch(() => { });
        } else {
          video?.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    const enableAudio = () => {
      if (video) {
        video.muted = false;
        setIsMuted(false);
      }
      window.removeEventListener("click", enableAudio);
      window.removeEventListener("touchstart", enableAudio);
    };

    window.addEventListener("click", enableAudio);
    window.addEventListener("touchstart", enableAudio);

    return () => {
      observer.disconnect();
      window.removeEventListener("click", enableAudio);
      window.removeEventListener("touchstart", enableAudio);
    };
  }, []);

  return (
    <section className="about-section" ref={aboutRef}>
      <div className="about-container">

        {/* VIDEO SIDE */}
        <div className="about-visual">
          <div className="video-wrapper">
            <video
              ref={videoRef}
              src={aboutVideo}
              loop
              muted={isMuted}
              playsInline
              autoPlay
              className="about-video-element"
            />
            <div className={`audio-indicator ${!isMuted ? "unmuted" : ""}`}>
              {isMuted ? "🔇 Tap for Sound" : "🔊 Audio On"}
            </div>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="about-content">
          <div className="header-meta">
            <span className="est-tag">Est. 2005</span>
            <span className="about-tag">Premier IT Hub</span>
          </div>

          <h2>
            Empowering Your <span className="text-gradient">Digital Future</span>
          </h2>

          <div className="accent-line"></div>

          <p className="main-para">
            <strong>Soft Tech Computer</strong> is a leading Learning & Development Ecosystem
            dedicated to building skilled and job-ready professionals in the IT and accounting domains.

            <br /><br />


            With guidance from <strong>industry experts and working professionals</strong>, our students
            learn the latest technologies and tools that are actively used in the job market, making them
            confident and career-ready.
          </p>
          {/* FEATURE CARDS */}
          <div className="feature-grid">

            <div className="feature-card">
              <div className="card-icon">🎓</div>
              <h4>Govt. Certified</h4>
              <p>MS-CIT & KLiC Authorized Center</p>
            </div>

            <div className="feature-card">
              <div className="card-icon">🧑‍🏫</div>
              <h4>Expert Mentors</h4>
              <p>Learn from working IT professionals</p>
            </div>

            <div className="feature-card">
              <div className="card-icon">💻</div>
              <h4>100% Practical</h4>
              <p>Hands-on training with live projects</p>
            </div>

            <div className="feature-card">
              <div className="card-icon">📊</div>
              <h4>Accounting Course</h4>
              <p>Tally Prime with GST & Returns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;