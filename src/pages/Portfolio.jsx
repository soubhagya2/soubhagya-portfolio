import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "./Projects";
import Experience from "../sections/Experience";
import Services from "../components/Services";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Soubhagya Ranjan Rout \u2014 Full Stack Developer";
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
