import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(false);

  /* Scroll Animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    let err = {};
    Object.keys(formData).forEach(
      (key) => !formData[key] && (err[key] = true)
    );
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();

    if (Object.keys(err).length === 0) {
      setSubmitted(true);
      setErrors({});
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
      });
    } else {
      setErrors(err);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`contact-section ${visible ? "show" : ""}`}
    >

      <div className="contact-container">
        {/* LEFT INFO */}
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope />
            <span>softtech@gmail.com</span>
          </div>
          <div className="info-item">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Soft Tech Computer, Motala, Maharashtra</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? "error" : ""}
              />
              <input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? "error" : ""}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className={errors.mobile ? "error" : ""}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
            />

            <button className="submit-btn">Send Message</button>
          </form>

          {submitted && (
            <div className="success-msg">
              <FaCheckCircle />
              <span>Thank you! We will contact you soon.</span>
            </div>
          )}
        </div>
      </div>

      {/* GOOGLE MAP – MOTALA */}
      <div className="map-container">
        <iframe
          title="Soft Tech Computer Motala"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Soft+Tech+Computer+Motala&output=embed"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
