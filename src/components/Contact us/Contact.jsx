
import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ================= INPUT HANDLER ================= */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ================= VALIDATION ================= */
  const validate = () => {
    let err = {};
    if (!formData.firstName) err.firstName = "Required";
    if (!formData.lastName) err.lastName = "Required";
    if (!formData.email) err.email = "Required";
    if (!formData.mobile || formData.mobile.length !== 10)
      err.mobile = "Enter valid mobile number";
    if (!formData.message) err.message = "Required";
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

  // 🔥 MAP React fields to API model
  const payload = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    mobileNo: formData.mobile, // ✅ FIXED
    message: formData.message
  };

  try {
    const response = await fetch("https://localhost:7027/api/Contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      throw new Error("Failed to submit");
    }

    toast.success("Message sent successfully");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      message: ""
    });

    navigate("/thanku");
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong. Please try again.");
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
            <FaEnvelope />
            <a href="mailto:softtechmotala@gmail.com">
              softtechmotala@gmail.com
            </a>
          </div>

          <div className="info-item">
            <FaPhoneAlt />
            <a href="tel:+918380863037">+91 8380863037</a>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>
              Buldhana Rd, near Suyog Hospital, Phata, Motala, Maharashtra
              443103
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

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setFormData({ ...formData, mobile: value });
              }}
              maxLength="10"
              className={errors.mobile ? "error" : ""}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
            />

            <button type="submit" className="submit-btn" disabled={loading}>
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
