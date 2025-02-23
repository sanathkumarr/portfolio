import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 text-green-300 px-5 py-3 shadow-lg z-50 border-b border-green-500">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold neon-glow">Sanath portfolio</a>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-green-300 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`md:flex gap-6 ${isOpen ? "block" : "hidden"} absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black/90 md:bg-transparent py-5 md:py-0 border-t border-green-500 md:border-0 text-center`}>
          {[
            { name: "About", link: "#about" },
            { name: "Skills", link: "#skills" },
            { name: "Experience", link: "#experience" },
            { name: "Education", link: "#education" },
            { name: "Projects", link: "#projects" },
            { name: "Certifications", link: "#certifications" },
            { name: "Contact", link: "#contact" }
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className="md:inline-block block my-2 md:my-0"
            >
              <a href={item.link} className="text-lg font-medium hover:text-green-400 transition">
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
