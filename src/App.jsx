import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact us/Contactus";       // ✅ no space
import Policy from "./components/PP/Policy";     // ✅ clean name
import Service from "./components/Term Service/Service";     // ✅ clean name

const App = () => {
  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/term-of-service" element={<Service />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </>
  );
};

export default App;
