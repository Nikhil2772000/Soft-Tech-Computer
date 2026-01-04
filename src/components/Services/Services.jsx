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

                {/* Heading */}

                <p className="section-subtitle">
                    <strong>Soft Tech Computer</strong> is a <strong>trusted provider</strong> of
                    <strong> quality education</strong> and
                    <strong> certification services</strong> dedicated to supporting your
                    <strong> career growth</strong>. We offer
                    <strong> government-recognized certificates</strong>,
                    <strong> student ID cards</strong>, and
                    <strong> MSCIT books</strong> to ensure a complete and authentic learning
                    experience. Our institute focuses on
                    <strong> practical knowledge</strong>,
                    <strong> industry-relevant training</strong>, and
                    <strong> professional guidance</strong>, helping students build strong
                    technical skills and confidence for a successful future in the
                    <strong> IT and computer education field</strong>.
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
