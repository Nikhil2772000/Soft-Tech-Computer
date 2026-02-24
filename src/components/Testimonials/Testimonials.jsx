import React, { useEffect, useState, useRef } from "react";
import "./Testimonials.css";

import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";
import user5 from "../../assets/gallery-3.png";

const testimonialsData = [
  {
    id: 1,
    name: "Amit Sharma",
    course: "MS-CIT",
    rating: 5,
    image: user1,
    message:
      "Soft Tech Computer provides excellent training. The teachers are very supportive and friendly.",
  },
  {
    id: 2,
    name: "Priya Patil",
    course: "Tally",
    rating: 4,
    image: user2,
    message:
      "Good learning environment with practical knowledge. Highly recommended institute.",
  },
  {
    id: 3,
    name: "Rahul Joshi",
    course: "Programming",
    rating: 5,
    image: user3,
    message:
      "Best institute in the area. I gained confidence and real skills for my career.",
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    course: "Python",
    rating: 5,
    image: user4,
    message:
      "Practical teaching approach helped me understand concepts easily. Great experience!",
  },
  {
    id: 5,
    name: "Vikas Deshmukh",
    course: "Web Design",
    rating: 4,
    image: user5,
    message:
      "Friendly environment and updated syllabus. I feel job-ready after completing the course.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
      setAnimate(true);
    }, 300);
  };

  const prevSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setIndex((prev) =>
        prev === 0 ? testimonialsData.length - 1 : prev - 1
      );
      setAnimate(true);
    }, 300);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 6000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const { name, course, rating, image, message } =
    testimonialsData[index];

  return (
    <section className="testimonials-section">
      <div className="testi-container">
        <header className="testi-header">
          <span className="tag">Success Stories</span>
          <h2>Student Reviews</h2>
        </header>

        <div className={`testimonial-card ${animate ? "fade-in" : "fade-out"}`}>
          <span className="quote-icon">“</span>

          <p className="message">{message}</p>

          <div className="user-info">
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <span>{course} Course</span>
              <div className="rating">
                {"★".repeat(rating)}
                {"☆".repeat(5 - rating)}
              </div>
            </div>
          </div>

          <div className="nav-controls">
            <button onClick={prevSlide}>❮</button>

            <div className="dots">
              {testimonialsData.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === index ? "active" : ""}`}
                />
              ))}
            </div>

            <button onClick={nextSlide}>❯</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;