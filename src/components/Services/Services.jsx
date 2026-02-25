import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Services.css";

// Import your assets
import mscitImg from "../../assets/certificate.webp";
import idCardImg from "../../assets/Card.png";
import booksImg from "../../assets/books.webp";
import padImg from "../../assets/books.webp"; 

const servicesData = [
  { img: mscitImg, title: "MS-CIT Certificates", desc: "Government-recognized MS-CIT certification with complete guidance." },
  { img: idCardImg, title: "Student ID Card", desc: "Official student ID cards for exams and verification." },
  { img: booksImg, title: "Study Books", desc: "Updated syllabus-based study material for students." },
  { img: padImg, title: "Study Pad", desc: "Pads are provided to students for daily practice." }
];

const Services = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="services-section">
      <div className="container">
        <header className="services-header">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            MS-CIT Training That Builds Confidence
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <strong>Soft Tech Computer</strong> is a trusted learning center dedicated to 
            providing quality computer education. We offer <strong>government-recognized certifications</strong> 
            and modern learning tools to help you succeed in the digital world.
          </motion.p>
        </header>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((item, index) => (
            <motion.div 
              className="service-card" 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="image-wrapper" onClick={() => setSelectedImage(item.img)}>
                <img src={item.img} alt={item.title} />
                <div className="overlay"><span>View Image</span></div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MODAL WITH ANIMATION */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <span className="close-btn">&times;</span>
            <motion.img 
              src={selectedImage} 
              alt="Preview" 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;