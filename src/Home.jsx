import React from "react";

// Components
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Faq from "./components/Faq/Faq";

const Home = () => {
  return (
    <main>
      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about">
        <Title subTitle="About" title="What About Soft Tech" />
        <About />
      </section>

      {/* SERVICES */}
      <section id="services">
        <Title subTitle="Services" title="Our Services" />
        <Services />
      </section>

      {/* COURSES */}
      <section id="courses">
        <Title subTitle="Courses" title="Our Courses" />
        {/* Add Courses component here */}
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <Title subTitle="Testimonials" title="What Students Says" />
        <Testimonials />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact />
      </section>

      
      {/* FAQ */}
      <section id="faq's">
        <Title subTitle="FAQ" title="Ask Questions" />
        <Faq/>
      </section>
    </main>
  );
};

export default Home;
