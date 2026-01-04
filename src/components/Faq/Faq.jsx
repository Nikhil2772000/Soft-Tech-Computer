import React, { useState } from 'react';
import './Faq.css';

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
    question: "6. What are the operating hours?",
    answer: "Monday to Saturday: 9:00 am - 9:00 pm, Sunday: Closed."
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-wrapper">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">{item.question}</div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
