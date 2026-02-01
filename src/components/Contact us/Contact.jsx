import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import gmailIcon from "../../assets/gmail.avif";
import phoneIcon from "../../assets/Phone 1.png";
import mapIcon from "../../assets/googlemaps.png";

const Contact = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ================= INPUT ================= */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ================= VALIDATION ================= */
  const validate = () => {
    let err = {};
    if (!formData.firstName) err.firstName = true;
    if (!formData.lastName) err.lastName = true;
    if (!formData.email) err.email = true;
    if (formData.mobile.length !== 10) err.mobile = true;
    if (!formData.message) err.message = true;
    return err;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();

    if (Object.keys(err).length) {
      setErrors(err);
      toast.error("Please fill all required fields");
      return;
    }

    setErrors({});
    setLoading(true);

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      mobileNo: formData.mobile,
      message: formData.message,
    };

    try {
      const res = await fetch("https://localhost:7027/api/Contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      toast.success("Message Sent Successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
      });

      navigate("/thanku");
    } catch {
      toast.error("ERROR");
    } finally {
      setLoading(false);
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
            <img src={gmailIcon} alt="Email" />
            <a href="mailto:softtechmotala@gmail.com">
              softtechmotala@gmail.com
            </a>
          </div>

          <div className="info-item">
            <img src={phoneIcon} alt="Phone" />
            <a href="tel:+918380863037">+91 838086 3037</a>
          </div>

          <div className="info-item">
            <img src={mapIcon} alt="Location" />
            <span>
              Buldhana Rd, near Suyog Hospital,<br />
              Motala, Maharashtra 443103
            </span>
          </div>

          <div className="info-item">
            <span className="time-icon">⏰</span>
            <span>
              <strong>Office Time:</strong><br />
              Monday to Saturday<br />
              8:00 AM – 5:00 PM
            </span>
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
              maxLength="10"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  mobile: e.target.value.replace(/\D/g, ""),
                })
              }
              className={errors.mobile ? "error" : ""}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* GOOGLE MAP */}
      <div className="map-container">
        <iframe
          title="Soft Tech Computer Motala"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.899689284405!2d76.2016072!3d20.6731234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9f10b063be8f9%3A0xe6a51e8167397678!2sSoft%20Tech%20Computer%20Motala!5e0!3m2!1sen!2sin!4v1702100000000"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
