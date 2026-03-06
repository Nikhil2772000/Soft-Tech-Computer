import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import aboutImg from "../../assets/nav.webp"; 

const About = () => {
  const aboutRef = useRef(null);
  const [years, setYears] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          if (!hasCounted) {
            let start = 0;
            const end = 21;
            const timer = setInterval(() => {
              start += 1;
              if (start >= end) {
                setYears(end);
                clearInterval(timer);
              } else {
                setYears(start);
              }
            }, 50);
            setHasCounted(true);
          }
        }
      },
      { threshold: 0.2 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, [hasCounted]);

  return (
    <section className="about-section" ref={aboutRef}>
      <div className="about-container">
        
        {/* Left Side: Visuals */}
        <div className="about-image">
          <div className="image-border-deco"></div>
          <img src={aboutImg} alt="Soft Tech Computer Learning Center" />
          <div className="experience-badge">
            <span className="years">{years}+</span>
            <span className="exp-text">Years Excellence</span>
          </div>
        </div>

        {/* Right Side: Information */}
        <div className="about-content">
          <span className="about-tag">Premier IT & Development Hub</span>
          <h2>Building Careers Since 2005</h2>
          
          <div className="divider"></div>

          <p className="main-para">
            <strong>Soft Tech Computer</strong> is more than just a training center; we are a 
            <strong> Learning & Development Ecosystem</strong>. Since 2005, we have been 
            pioneering IT education by providing a structured growth path for every student.
          </p>

          <p className="sub-para">
            From foundational courses like <strong>MS-CIT</strong> to advanced 
            <strong> Software Development</strong>, our curriculum is designed to meet 
            global industry standards. We focus on a "Theory-to-Execution" model, ensuring 
            practical mastery over every concept.
          </p>

          {/* Feature Grid */}
          <div className="about-features">
            <div className="feature-card">
              <span className="feature-icon">✔</span>
              <div className="feature-text">
                <strong>Structured Growth</strong>
                <p>Step-by-step learning from Basics to Pro.</p>
              </div>
            </div>

            <div className="feature-card">
              <span className="feature-icon">✔</span>
              <div className="feature-text">
                <strong>MS-CIT Authorized</strong>
                <p>Official center for IT literacy & certification.</p>
              </div>
            </div>

            <div className="feature-card">
              <span className="feature-icon">✔</span>
              <div className="feature-text">
                <strong>Expert Mentorship</strong>
                <p>Learn from certified industry professionals.</p>
              </div>
            </div>

            <div className="feature-card">
              <span className="feature-icon">✔</span>
              <div className="feature-text">
                <strong>Practical Lab</strong>
                <p>24/7 access to high-performance machines.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;