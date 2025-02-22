// Navbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-black/60 border-b border-green-500 text-green-300 p-5 fixed w-full z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-400">Portfolio</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none text-green-400">
          ☰
        </button>
        <ul className={`md:flex gap-6 ${isOpen ? "block" : "hidden"}`}>
          <li><a href="#about" className="hover:text-green-500">About</a></li>
          <li><a href="#skills" className="hover:text-green-500">Skills</a></li>
          <li><a href="#experience" className="hover:text-green-500">Experience</a></li>
          <li><a href="#education" className="hover:text-green-500">Education</a></li>
          <li><a href="#projects" className="hover:text-green-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-green-500">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;