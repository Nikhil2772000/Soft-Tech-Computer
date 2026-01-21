import React, { useState, useEffect } from "react";
import "./Cookies.css";

const COOKIES_KEY = "cookiesConsent";
const EXPIRY_DAYS = 20;

const Cookies = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem(COOKIES_KEY);

    if (!storedData) {
      setVisible(true);
      return;
    }

    const { expiry } = JSON.parse(storedData);
    const now = new Date().getTime();

    if (now > expiry) {
      // Expired → show banner again
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

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <h3>🍪 Cookie Policy</h3>
        <p>
          <strong>Soft Tech Computer Training Learning Center</strong> uses cookies
          to enhance your browsing experience, analyze traffic, and deliver
          relevant content. By clicking <b>Accept</b>, you consent to the use of
          cookies.
        </p>

        <div className="cookie-actions">
          <button className="btn accept" onClick={() => saveConsent("accepted")}>
            Accept
          </button>
          <button className="btn decline" onClick={() => saveConsent("declined")}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
