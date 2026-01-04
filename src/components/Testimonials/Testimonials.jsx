import React, { useEffect, useRef, useState } from "react";
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
      "Soft Tech Computer provides excellent training. The teachers are very supportive and friendly."
  },
  {
    id: 2,
    name: "Priya Patil",
    course: "Tally",
    rating: 4,
    image: user2,
    message:
      "Good learning environment with practical knowledge. Highly recommended institute."
  },
  {
    id: 3,
    name: "Rahul Joshi",
    course: "Programming",
    rating: 5,
    image: user3,
    message:
      "Best institute in the area. I gained confidence and real skills for my career."
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    course: "Python",
    rating: 5,
    image: user4,
    message:
      "Practical teaching approach helped me understand concepts easily. Great experience!"
  },
  {
    id: 5,
    name: "Vikas Deshmukh",
    course: "Web Design",
    rating: 4,
    image: user5,
    message:
      "Friendly environment and updated syllabus. I feel job-ready after completing the course."
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);

  /* Auto Slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* Scroll Animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonialsData.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === testimonialsData.length - 1 ? 0 : index + 1);
  };

  const { name, course, rating, image, message } =
    testimonialsData[index];

  return (
    <section
      className="testimonials-section"
      id="testimonials"
      ref={sectionRef}
    >

      <div className="testimonial-card">
        <img src={image} alt={name} className="user-img" />

        <p className="message">“{message}”</p>

        <div className="rating">
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </div>

        <h3>{name}</h3>
        <span>{course}</span>

        <div className="controls">
          <button onClick={prevSlide}>❮</button>
          <button onClick={nextSlide}>❯</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
