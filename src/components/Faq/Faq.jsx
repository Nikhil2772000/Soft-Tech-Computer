import React, { useState } from 'react';
import './Faq.css';
import Man from '../../assets/Man.webp';

const faqData = [
  {
    question: "1. What is the duration of a course at Soft-Tech Computer?",
    answer: "The duration depends on the course you choose. On average, it can take 6 to 12 months. Some courses may take longer."
  },
  {
    question: "2. Do I need my own laptop/computer?",
    answer: "No, Soft-Tech Computer provides computers to practice on during classes."
  },
  {
    question: "3. How much fees does Soft-Tech Computer charge?",
    answer: "Fees depend on the course. It is advised to contact Soft-Tech Computer for details."
  },
  {
    question: "4. Does Soft-Tech Computer charge monthly?",
    answer: "Some courses are charged monthly or yearly. Contact Soft-Tech Computer for exact info."
  },
  {
    question: "5. Do institutes help you learn Microsoft Office?",
    answer: "Yes, Microsoft Office and more are taught in the courses."
  },
  {
    question: "6. What are the Office Time?",
    answer: "Monday to Saturday: 7:00 am - 5:00 pm, Sunday: Closed."
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="hero-faq-section">
      <div className="main-wrapper">

        {/* LEFT SIDE: Floating Image */}
        <div className="left-content-visual">
          <div className="circle-decoration"></div>
          <img
            src={Man}
            alt="Success Guide"
            className="main-person-img floating-anim"
          />
        </div>

        {/* RIGHT SIDE: Information */}
        <div className="right-content-info">
          <h1 className="hero-headline">Join Us Now And Begin Your Digital Success Journey</h1>
          <p className="hero-subtext">
            Take your business to new heights by collaborating with Nagpur’s most
            credible digital marketing agency, <strong>Motala Soft Tech</strong>.
            Our ROI-focused strategy will bring you tangible results.
          </p>

          <div className="button-row">
            {/* Wrap the button in a 'tel' link */}
            <a href="tel:+919876543210" className="call-link">
              <button className="btn-call">
                <span className="btn-icon">📞</span>
                Call Now: +91 8380863037
              </button>
            </a>
          </div>

          <div className="faq-box">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-accordion">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`faq-row ${activeIndex === index ? 'is-active' : ''}`}
                  onClick={() => toggleFaq(index)}
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="faq-q-text">
                    {item.question}
                    <span className="faq-plus-minus">
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </div>
                  <div className="faq-a-text">
                    <div className="a-inner">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Faq;