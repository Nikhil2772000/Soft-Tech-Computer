import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero/Hero";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subTitle="About" title="What About Soft Tech" />
        <About />
        <Title subTitle="Services" title="Our Services" />
        <Services/>
        <Title subTitle="Testmonials" title="What Student Says" />
        <Testimonials/>
      </div>
    </>
  );
};

export default App;
