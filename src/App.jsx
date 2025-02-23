import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation";
import { motion } from "framer-motion";
import { useEffect } from "react";

const App = () => {
  // Smooth scrolling on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative text-green-300 overflow-hidden ">
      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col gap-16 px-5 md:px-10 mt-16"
      >
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="projects"><Projects /></section>
        <section id="certifications"><Certifications /></section>
        <section id="contact"><Contact /></section>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
