import React from "react";
import "./Policy.css";


const Privacypolicy = () => {
  return (
    <section className="privacy-container">
        <div style={{ padding: "120px 20px" }}>
      <div className="privacy-wrapper animate">
        <h1 className="privacy-title">Privacy Policy</h1>

        <div className="privacy-section">
          <h2>Introduction</h2>
          <p>
            At <strong>Soft Tech Computer Training & Learning Center</strong>,
            we value your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            safeguard your data when you visit our website or use our services.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Information We Collect</h2>
          <ul>
            <li>Personal details such as name, email address, and phone number</li>
            <li>Course enquiry and registration information</li>
            <li>Communication details submitted through contact forms</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>How We Use Your Information</h2>
          <p>
            We use the collected information to:
          </p>
          <ul>
            <li>Provide and manage training programs</li>
            <li>Respond to your enquiries and support requests</li>
            <li>Improve our website and services</li>
            <li>Send important updates related to courses</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>Data Protection</h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal data from unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Third-Party Sharing</h2>
          <p>
            Soft Tech Computer does not sell, trade, or rent users’ personal
            identification information to others. Your data is shared only
            when legally required.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Your Rights</h2>
          <p>
            You have the right to access, update, or request deletion of your
            personal information by contacting us.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please
            contact us at:
          </p>
          <p className="contact-info">
            <strong>Email:</strong> softtechmotala@gmail.com <br />
            <strong>Phone:</strong> +91 8380863037
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Privacypolicy;
