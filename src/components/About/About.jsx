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
          aboutRef.current?.classList.add("show");
          video?.play().catch(() => {});
        } else {
          video?.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  // Sync mute state with video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <section className="about-section" ref={aboutRef}>
      
     

      <div className="about-container">
        
        {/* VIDEO */}
        <div className="about-visual">
          <div className="video-wrapper">
            <video
              ref={videoRef}
              src={aboutVideo}
              loop
              muted
              autoPlay
              playsInline
              className="about-video-element"
            />

            <div
              className={`audio-indicator ${!isMuted ? "unmuted" : ""}`}
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? "🔇 Click to Unmute" : "🔊 Audio On"}
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="about-content">
          <div className="header-meta">
            <span className="meta-tag">Est. 2005</span>
            <span className="meta-tag blue">Premier IT Hub</span>
          </div>

          <h2>
            Empowering Your <br />
            <span className="text-gradient">Digital Future</span>
          </h2>

          <p className="main-para">
            <strong>Soft Tech Computer</strong> is more than just a training center; we are a 
            Learning & Development Ecosystem dedicated to building job-ready 
            professionals for the global tech landscape.
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
              <div className="card-icon">💻</div>
              <div>
                <h4>100% Practical</h4>
                <p>Hands-on Live Projects</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="card-icon">🧑‍🏫</div>
              <div>
                <h4>Expert Mentors</h4>
                <p>Industry Professional Faculty</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="card-icon">🚀</div>
              <div>
                <h4>Career Trainers</h4>
                <p>Personalized Guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;