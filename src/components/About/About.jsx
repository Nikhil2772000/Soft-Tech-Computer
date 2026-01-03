import React, { useEffect, useRef } from "react";
import "./About.css";
import aboutImg from "../../assets/gallery-1.png"; // update path if needed

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={aboutRef}>
      <div className="about-container">
        
        {/* Left Image */}
        <div className="about-image">
          <img src={aboutImg} alt="Soft Tech Computer" />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h4>About Us</h4>
          <h2>Soft Tech Computer</h2>
          <p>
            Established in <strong>2005</strong>, Soft Tech Computer has been a
            trusted name in computer education and IT training. We are committed
            to empowering students with practical skills, industry-relevant
            knowledge, and hands-on experience.
          </p>

          <p>
            Our mission is to build strong technical foundations and prepare
            learners for real-world challenges through quality education,
            experienced faculty, and modern infrastructure.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
