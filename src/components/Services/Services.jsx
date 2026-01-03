import React, { useEffect } from "react";
import "./Services.css";

import mscitImg from "../../assets/user-1.png";
import idCardImg from "../../assets/user-2.png";
import booksImg from "../../assets/user-3.png";

const Services = () => {

    // Simple scroll animation logic
    useEffect(() => {
        const cards = document.querySelectorAll(".service-card");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        cards.forEach(card => observer.observe(card));
    }, []);

    return (
        <section className="services-section">
            <div className="container">

                {/* Heading */}
                <h2 className="section-title">Services</h2>
                <p className="section-subtitle">
                    We are a trusted provider of quality education and certification services for your career growth.
                </p>

                {/* Services Cards */}
                <div className="services-grid">

                    <div className="service-card">
                        <img src={mscitImg} alt="MS-CIT Certificate" />
                        <h3>MS-CIT Certificates</h3>
                        <p>
                            Government recognized MS-CIT certification with proper guidance and support.
                        </p>
                    </div>

                    <div className="service-card">
                        <img src={idCardImg} alt="Student ID Card" />
                        <h3>Student ID Card</h3>
                        <p>
                            Official student ID cards for exams, verification, and institute records.
                        </p>
                    </div>

                    <div className="service-card">
                        <img src={booksImg} alt="Study Books" />
                        <h3>Study Books</h3>
                        <p>
                            Updated syllabus-based books and learning material for students.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Services;
