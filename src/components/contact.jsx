// Contact.jsx
import { motion } from "framer-motion";

const sectionClass = "py-20 px-5 text-center bg-black/40 border border-green-500 rounded-lg shadow-lg";
const Contact = () => {
  return (
    <motion.section className={sectionClass}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-green-400 mb-5">Contact Me</h2>
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-lg mx-auto bg-green-900/50 p-6 border border-green-400 rounded-lg shadow-lg"
      >
        <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 bg-black/50 text-green-200 border border-green-400 rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 bg-black/50 text-green-200 border border-green-400 rounded" />
        <textarea placeholder="Your Message" className="w-full p-3 mb-4 bg-black/50 text-green-200 border border-green-400 rounded" rows="4"></textarea>
        <button type="submit" className="px-6 py-3 bg-green-600 border border-green-400 rounded text-white font-bold hover:bg-green-700 transition">Send</button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
