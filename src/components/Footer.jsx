import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-green-300 py-6 text-center border-t border-green-500 shadow-lg mt-10">
      <p className="text-lg">© 2024 Sanath Kumar | All Rights Reserved</p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-3">
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://github.com/sanathkumarr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-green-400 transition"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://linkedin.com/in/sanath-kumar-sanath-a09492213"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-green-400 transition"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="mailto:ravadagundisanath@gmail.com"
          className="text-2xl hover:text-green-400 transition"
        >
          <FaEnvelope />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
