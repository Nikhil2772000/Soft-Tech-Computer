import React, { useState, useEffect } from "react";
import "./Cookies.css";

const COOKIES_KEY = "cookiesConsent";
const EXPIRY_DAYS = 20;

const Cookies = () => {
  const [visible, setVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem(COOKIES_KEY);
      if (!storedData) {
        setVisible(true);
        return;
      }

      const { expiry } = JSON.parse(storedData);
      const now = new Date().getTime();

      if (now > expiry) {
        localStorage.removeItem(COOKIES_KEY);
        setVisible(true);
      }
    } catch (error) {
      // If JSON is malformed, clear it and show banner
      localStorage.removeItem(COOKIES_KEY);
      setVisible(true);
    }
  }, []);

  const saveConsent = (status) => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + EXPIRY_DAYS);

    localStorage.setItem(
      COOKIES_KEY,
      JSON.stringify({
        status,
        expiry: expiryDate.getTime(),
      })
    );

    // Trigger closing animation
    setIsClosing(true);
    setTimeout(() => setVisible(false), 500); // Matches CSS transition time
  };

  if (!visible) return null;

  return (
    <div className={`cookie-container ${isClosing ? "exit" : ""}`}>
      <div className="cookie-card">
        <div className="cookie-icon">🍪</div>
        <div className="cookie-text">
          <h3>Cookie Policy</h3>
          <p>
            <strong>Soft Tech Computer Training</strong> uses cookies to 
            improve your experience. By clicking <b>Accept</b>, you agree to our 
            data settings.
          </p>
        </div>

        <div className="cookie-actions">
          <button className="btn btn-decline" onClick={() => saveConsent("declined")}>
            Decline
          </button>
          <button className="btn btn-accept" onClick={() => saveConsent("accepted")}>
            <span>Accept All</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;