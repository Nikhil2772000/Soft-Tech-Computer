import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Layout Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cookies from "./components/Cookies/Cookies";

// Pages
import Home from "./Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact us/Contact";
import Policy from "./components/PP/Policy";
import Service from "./components/Term Service/Service";
import Thanku from "./components/Thanku/Thanku";


// Scroll to Top on Route Change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />

      {/* Toast Notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      <Navbar />
      <Cookies />

      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
         <Route path="/thanku" element={<Thanku />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/service" element={<Service />} />
          

          {/* ✅ Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;