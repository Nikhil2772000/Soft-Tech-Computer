import React, { useEffect, useState } from "react";
import "./Services.css";

import mscitImg from "../../assets/certificate.webp";
import idCardImg from "../../assets/Card.png";
import booksImg from "../../assets/Books.webp";
import padImg from "../../assets/Books.webp"; // replace with actual pad image if available

const servicesData = [
    {
        img: mscitImg,
        title: "MS-CIT Certificates",
        desc: "Government-recognized MS-CIT certification with complete guidance."
    },
    {
        img: idCardImg,
        title: "Student ID Card",
        desc: "Official student ID cards for exams and verification."
    },
    {
        img: booksImg,
        title: "Study Books",
        desc: "Updated syllabus-based study material for students."
    },
    {
        img: padImg,
        title: "Study Pad",
        desc: "Pads are provided to students for daily practice."
    }
];

const Services = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Scroll animation
    useEffect(() => {
        const cards = document.querySelectorAll(".service-card");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.25 }
        );

        cards.forEach(card => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="services-section">
            <div className="container">
                <p className="section-subtitle">
                    <strong>Soft Tech Computer</strong> is a trusted learning and training center
                    dedicated to providing quality computer education and professional skill
                    development. We offer
                    <strong> government-recognized MS-CIT certificates</strong>,
                    <strong> official student ID cards</strong>,
                    <strong> updated study books</strong>, and
                    <strong> study pads</strong> to ensure a complete and structured learning
                    experience. Our institute focuses on
                    <strong> practical training</strong>,
                    <strong> experienced faculty guidance</strong>, and
                    <strong> student-friendly facilities</strong>, helping learners build strong
                    technical knowledge, confidence, and career-ready skills for success in the
                    modern digital world.
                </p>


                <div className="services-grid">
                    {servicesData.map((item, index) => (
                        <div className="service-card" key={index}>
                            <div className="image-wrapper">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    onClick={() => setSelectedImage(item.img)}
                                />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* IMAGE MODAL */}
            {selectedImage && (
                <div className="image-modal">
                    <span className="close-btn" onClick={() => setSelectedImage(null)}>
                        &times;
                    </span>
                    <img src={selectedImage} alt="Preview" className="modal-image" />
                </div>
            )}
        </section>
    );
};

export default Services;
