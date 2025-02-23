import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col  glowing-card items-center text-center px-6 py-16 bg-black text-green-300 rounded-lg shadow-lg max-w-4xl mx-auto"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold glitch-text mb-6">Contact Me</h2>

      {/* Contact Details */}
      <div className="flex flex-col  md:flex-row justify-center gap-6 mb-6">
        <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-3 text-lg text-green-400">
          <FaEnvelope className="text-3xl" /> ravadagundisanath@gmail.com
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-3 text-lg text-green-400">
          <FaPhoneAlt className="text-3xl" /> +919666129442
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-3 text-lg text-green-400">
          <FaMapMarkerAlt className="text-3xl" /> Andhra Pradesh, India
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-lg w-full bg-black/80 p-6 rounded-lg border border-green-500 shadow-lg"
      >
        {/* Input Fields */}
        <motion.input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 bg-black/60 text-green-300 border border-green-500 rounded focus:ring-2 focus:ring-green-500 outline-none transition hover:scale-105"
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 bg-black/60 text-green-300 border border-green-500 rounded focus:ring-2 focus:ring-green-500 outline-none transition hover:scale-105"
        />
        <motion.textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 bg-black/60 text-green-300 border border-green-500 rounded focus:ring-2 focus:ring-green-500 outline-none transition hover:scale-105"
          rows="4"
        ></motion.textarea>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="px-6 py-3 flex items-center justify-center gap-2 bg-green-500 text-black font-bold border border-green-500 rounded shadow-lg hover:bg-green-600 transition"
        >
          <FaPaperPlane /> Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
