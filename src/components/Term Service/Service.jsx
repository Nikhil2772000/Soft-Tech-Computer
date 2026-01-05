import React from "react";
import './Service.css';

const Termofservice = () => {
  return (
    <section className="terms-container">
      <div className="terms-wrapper">
        <h1 className="terms-title">Terms of Service</h1>

        <div className="terms-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>Soft Tech Computer Training & Learning Center</strong>.
            By accessing our website, courses, or services, you agree to comply
            with and be bound by these Terms of Service.
          </p>
        </div>

        <div className="terms-section">
          <h2>2. Services</h2>
          <p>
            Soft Tech Computer provides professional computer education, software
            training, and skill development programs. Course content, duration,
            and fees may change without prior notice.
          </p>
        </div>

        <div className="terms-section">
          <h2>3. User Responsibilities</h2>
          <ul>
            <li>Provide accurate and complete information during registration</li>
            <li>Use our services for lawful purposes only</li>
            <li>Respect instructors, staff, and fellow learners</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>4. Payments & Fees</h2>
          <p>
            All course fees must be paid as per the agreed schedule.
            Fees once paid are non-refundable unless stated otherwise in writing.
          </p>
        </div>

        <div className="terms-section">
          <h2>5. Intellectual Property</h2>
          <p>
            All study materials, videos, content, and branding belong to
            Soft Tech Computer. Reproduction or distribution without permission
            is strictly prohibited.
          </p>
        </div>

        <div className="terms-section">
          <h2>6. Limitation of Liability</h2>
          <p>
            Soft Tech Computer shall not be liable for any indirect or
            consequential damages arising from the use of our services.
          </p>
        </div>

        <div className="terms-section">
          <h2>7. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to our services
            if these terms are violated.
          </p>
        </div>

        <div className="terms-section">
          <h2>8. Changes to Terms</h2>
          <p>
            These Terms of Service may be updated periodically. Continued use of
            our services constitutes acceptance of the revised terms.
          </p>
        </div>

        <div className="terms-section">
          <h2>9. Contact Information</h2>
          <p>
            For any questions regarding these Terms, contact us at:
          </p>
          <p className="terms-contact">
            <strong>Email:</strong> support@softtechcomputer.com <br />
            <strong>Phone:</strong> +91 8380863037
          </p>
        </div>
      </div>
    </section>
  );
};

export default Termofservice;
