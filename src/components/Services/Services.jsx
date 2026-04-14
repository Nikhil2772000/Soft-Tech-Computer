import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  Target, 
  ClipboardCheck, 
  BookOpen, 
  Award, 
  Smartphone,
  X 
} from "lucide-react"; 
import "./Services.css";

const servicesData = [
  { 
    id: 1,
    icon: <TrendingUp size={40} />, 
    title: "Proven Expertise", 
    desc: "Our SEO specialists follow the latest trends and Google guidelines to deliver real results.",
    details: "We perform deep technical audits and keyword research to ensure your business ranks where your customers are looking."
  },
  { 
    id: 2,
    icon: <Smartphone size={40} />, 
    title: "App Development", 
    desc: "Custom mobile solutions built for multiple platforms to give you endless possibilities.",
    details: "From enterprise solutions to UI/UX design, we build apps that provide seamless experiences across iOS and Android."
  },
  { 
    id: 3,
    icon: <Target size={40} />, 
    title: "Custom Strategies", 
    desc: "Tailored SEO and digital plans designed for your unique business goals and audience.",
    details: "No 'one-size-fits-all'. We create bespoke roadmaps based on your specific industry and competitor landscape."
  },
  { 
    id: 4,
    icon: <Award size={40} />, 
    title: "MS-CIT Excellence", 
    desc: "Authorized training for government-recognized IT certification with expert guidance.",
    details: "Get certified with Soft Tech. We provide comprehensive training, practical exams, and official certification support."
  },
  { 
    id: 5,
    icon: <BookOpen size={40} />, 
    title: "Study Material", 
    desc: "Updated syllabus-based study books and pads provided for daily practice.",
    details: "We ensure our students have the best resources, including physical books and interactive digital learning tools."
  },
  { 
    id: 6,
    icon: <ClipboardCheck size={40} />, 
    title: "Transparent Reporting", 
    desc: "Regular insights and progress tracking so you see the impact of our strategies clearly.",
    details: "Honesty is our policy. You get full access to growth metrics, ranking improvements, and student progress reports."
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="services-section">
      <div className="container">
        <header className="services-header">
          <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="top-sub">
            Why Choose Us?
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Smarter Learning for <br />
            <span className="highlight">Digital Excellence & Business Growth</span>
          </motion.h2>
          <motion.p className="section-subtitle">
            <strong>Soft Tech Computer</strong> empowers students and businesses with 
            cutting-edge IT education and strategic digital solutions.
          </motion.p>
        </header>

        <motion.div 
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {servicesData.map((item) => (
            <motion.div 
              className="service-card" 
              key={item.id}
              onClick={() => setSelectedService(item)}
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            >
              <div className="icon-wrapper">
                <div className="icon-box">{item.icon}</div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button className="explore-btn">Explore More &rarr;</button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedService(null)}>
                <X size={20} />
              </button>
              <div className="modal-icon">{selectedService.icon}</div>
              <h2>{selectedService.title}</h2>
              <div className="divider"></div>
              <p>{selectedService.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;