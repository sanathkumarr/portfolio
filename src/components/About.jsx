// Example for About.jsx
import { motion } from "framer-motion";
const sectionClass = "py-20 px-5 text-center bg-black/40 border border-green-500 rounded-lg shadow-lg";
const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className={sectionClass}
    >
      <h2 className="text-4xl font-bold text-green-400 mb-5">About Me</h2>
      <p className="text-lg max-w-3xl mx-auto text-green-200">
        Experienced React & Next.js Developer skilled in building scalable web applications.
        Passionate about AI, deep learning, and full-stack development.
      </p>
    </motion.section>
  );
};

export default About;
