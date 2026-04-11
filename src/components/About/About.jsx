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
          video?.play().catch(() => { /* Autoplay prevented */ });
        } else {
          video?.pause();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    const handleFirstInteraction = () => {
      setIsMuted(false);
      if (video) video.muted = false;
      window.removeEventListener("click", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);

    return () => {
      observer.disconnect();
      window.removeEventListener("click", handleFirstInteraction);
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
              className="about-video-element"
            />
            <div className={`audio-indicator ${!isMuted ? "unmuted" : ""}`}>
              {isMuted ? "🔇 Muted" : "🔊 Audio On"}
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
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="card-icon">🎓</div>
              <div>
                <h4>Govt. Certified</h4>
                <p>MS-CIT & KLiC Authorized</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="card-icon">🧑‍🏫</div>
              <div>
                <h4>Expert Mentors</h4>
                <p>Learn from IT pros</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="card-icon">💻</div>
              <div>
                <h4>100% Practical</h4>
                <p>Live project training</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="card-icon">📊</div>
              <div>
                <h4>Accounting</h4>
                <p>Tally Prime & GST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;