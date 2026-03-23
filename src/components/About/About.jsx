import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import aboutVideo from "../../assets/snapsave-app_680199827675934_hd.mp4";

const About = () => {
  const aboutRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.1 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);

    // Auto-unmute logic: Unmutes as soon as the user interacts with the page
    const enableAudio = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
      window.removeEventListener("click", enableAudio);
    };
    window.addEventListener("click", enableAudio);

    return () => {
      observer.disconnect();
      window.removeEventListener("click", enableAudio);
    };
  }, []);

  return (
    <section className="about-section" ref={aboutRef}>
      <div className="about-container">

        {/* Left Side: Medium Video */}
        <div className="about-visual">
          <div className="video-card-box">
            <video
              ref={videoRef}
              src={aboutVideo}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="about-video-element"
            />
            <div className="audio-status-tag">
              {isMuted ? "🔇 Click anywhere for Sound" : "🔊 Audio On"}
            </div>
          </div>
        </div>

        {/* Right Side: Information */}
        <div className="about-content">
          <div className="est-tag">Since 2005</div>
          <span className="about-tag">Premier IT & Development Hub</span>
          <h2>Empowering Your Digital Future</h2>

          <div className="accent-line"></div>

          <p className="main-para">
            <strong>Soft Tech Computer</strong> is a leading <strong>Learning & Development Ecosystem</strong>.
            We specialize in transforming beginners into industry-ready professionals through
            our <strong>"Theory-to-Execution"</strong> model.


            At Soft Tech Computer, we also support students with
            <strong>job assistance, interview preparation, resume building</strong>, and
            <strong>live project exposure</strong> to boost their confidence and employability.
          </p>

          <div className="training-tracks">
            <ul className="course-list">
              <li><strong>🎓 Govt. Certified:</strong> MS-CIT & KLiC</li>
              <li><strong>📊 Accounting:</strong> Tally Prime & GST</li>
              <li><strong>🎨 Creative:</strong> Graphics & UI/UX</li>
            </ul>
          </div>

          {/* Boxed Features */}
          <div className="feature-box-container">
            <div className="feature-box">
              <span className="box-icon">👨‍🏫</span>
              <div className="box-text">
                <strong>Industry Mentors</strong>
                <p>Learn from working developers</p>
              </div>
            </div>

            <div className="feature-box">
              <span className="box-icon">🛠</span>
              <div className="box-text">
                <strong>100% Practical</strong>
                <p>Project-based learning approach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;