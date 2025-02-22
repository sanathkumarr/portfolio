// General styling for all sections
const sectionClass = "py-20 px-5 text-center bg-black/40 border border-green-500 rounded-lg shadow-lg";

// Certifications.jsx
import { motion } from "framer-motion";

const certifications = [
  { name: "Google Internship Certificate", issuer: "Smart Internz" },
  { name: "Microsoft Internship Certificate", issuer: "Languify" },
  { name: "Azure Administrator Certificate", issuer: "Microsoft" }
];

const Certifications = () => {
  return (
    <motion.section className={sectionClass}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-green-400 mb-5">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-5 bg-green-900/50 border border-green-400 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold">{cert.name}</h3>
            <p className="text-green-200 mt-2">Issued by {cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;