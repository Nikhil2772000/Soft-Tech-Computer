import React from "react";

// Components
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Faq from "./components/Faq/Faq";
import Contact from "./components/Contact us/Contact";

const Home = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <Title subTitle="About" title="What About Soft Tech" />
        <About />
      </section>

      {/* SERVICES SECTION */}
      <section id="services">
        <Title subTitle="Services" title="Our Services" />
        <Services />
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials">
        <Title subTitle="Testimonials" title="What Students Say" />
        <Testimonials />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact />
      </section>

      {/* FAQ SECTION */}
      <section id="faq">
        <Title subTitle="FAQ" title="Ask Questions" />
        <Faq />
      </section>
    </main>
  );
};

export default Home;
