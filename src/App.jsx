import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact us/Contact";     // ✅ no space
import Policy from "./components/PP/Policy";     // ✅ clean name
import TermsService from "./components/Term Service/Service";   // ✅ clean name
import Cookies from "./components/Cookies/Cookies";
import Thanku from "./components/Thank/Thanku";

import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      {/* Toast notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Layout */}
      <Navbar />
      <Cookies />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thanku" element={<Thanku />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/terms-of-service" element={<TermsService />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
