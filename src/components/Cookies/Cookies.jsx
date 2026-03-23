import React, { useState, useEffect } from "react";
import { Cookie, Settings, ShieldCheck, Check } from "lucide-react"; 
import "./Cookies.css";

const COOKIES_KEY = "cookiesConsent";
const EXPIRY_DAYS = 20;

const Cookies = () => {
  const [visible, setVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showManage, setShowManage] = useState(false);
  
  // Tracking specific choices
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false
  });

  useEffect(() => {
    try {
      const storedData = localStorage.getItem(COOKIES_KEY);
      if (!storedData) {
        setVisible(true);
        return;
      }
      const { expiry } = JSON.parse(storedData);
      if (new Date().getTime() > expiry) {
        localStorage.removeItem(COOKIES_KEY);
        setVisible(true);
      }
    } catch (e) {
      setVisible(true);
    }
  }, []);

  const saveConsent = (status, customPrefs = null) => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + EXPIRY_DAYS);

    const data = {
      status,
      preferences: customPrefs || preferences,
      expiry: expiryDate.getTime(),
    };

    localStorage.setItem(COOKIES_KEY, JSON.stringify(data));
    setIsClosing(true);
    setTimeout(() => setVisible(false), 600);
  };

  if (!visible) return null;

  return (
    <div className={`cookie-container ${isClosing ? "exit" : ""}`}>
      <div className={`cookie-card ${showManage ? "expanded" : ""}`}>
        
        <div className="cookie-main-content">
          <div className="cookie-header">
            <div className="cookie-icon-wrapper">
              <Cookie className="main-icon" size={32} />
              <ShieldCheck className="badge-icon" size={16} />
            </div>
            <div className="cookie-text">
              <h3>Cookie Settings</h3>
              <p>We use cookies to enhance your <strong>Soft Tech</strong> experience.</p>
            </div>
          </div>

          <div className="cookie-actions">
            <button 
              className={`btn btn-manage ${showManage ? 'active' : ''}`} 
              onClick={() => setShowManage(!showManage)}
            >
              <Settings size={18} />
              <span>{showManage ? "Close" : "Manage"}</span>
            </button>
            
            <div className="main-btns">
              <button className="btn btn-decline" onClick={() => saveConsent("declined")}>
                Decline
              </button>
              <button className="btn btn-accept" onClick={() => saveConsent("accepted")}>
                Accept All
              </button>
            </div>
          </div>
        </div>

        {showManage && (
          <div className="manage-panel-anim">
            <div className="manage-grid">
              <div className="manage-item">
                <div className="item-info">
                  <span className="item-title">Essential</span>
                  <span className="item-desc">Required for site to function.</span>
                </div>
                <div className="status-badge">Always On</div>
              </div>

              <div className="manage-item">
                <div className="item-info">
                  <span className="item-title">Analytics</span>
                  <span className="item-desc">Helps us improve our courses.</span>
                </div>
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            <button className="btn btn-save" onClick={() => saveConsent("custom")}>
              Save My Preferences
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cookies;