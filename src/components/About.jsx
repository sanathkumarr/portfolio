import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa"; // Icon

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center text-center px-6 py-16 bg-black text-green-300 rounded-lg shadow-lg max-w-4xl mx-auto"
    >
      {/* Animated Icon */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="text-5xl text-green-400 mb-4"
      >
        <FaUserTie />
      </motion.div>

      {/* Heading */}
      <h2 className="text-4xl font-bold glitch-text mb-4">About Me</h2>

      {/* Description */}
      <p className="text-lg text-green-200 max-w-3xl">
        I am a Full-Stack Developer & AI Enthusiast with experience in React, Next.js, Python and Java.  
        Passionate about deep learning, and creating intelligent web solutions.
      </p>

      {/* Hover Effect Line */}
      <motion.div
        whileHover={{ scaleX: 1.2 }}
        className="w-40 h-1 bg-green-500 mt-4 rounded-lg"
      />
    </motion.section>
  );
};

export default About;
