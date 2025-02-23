import { motion } from "framer-motion";
import { FaCertificate, FaGoogle, FaMicrosoft } from "react-icons/fa";

const certifications = [
  {
    name: "Google Internship Certificate",
    issuer: "Smart Internz",
    icon: <FaGoogle />,
  },
  {
    name: "Microsoft Internship Certificate",
    issuer: "Languify",
    icon: <FaMicrosoft />,
  },
  {
    name: "Azure Administrator Certificate",
    issuer: "Microsoft",
    icon: <FaCertificate />,
  },
];

const Certifications = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center text-center px-6 py-16 bg-black text-green-300 rounded-lg shadow-lg max-w-4xl mx-auto"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold glitch-text mb-6">Certifications</h2>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 0, 0.7)" }}
            className="flex flex-col glowing-card items-center p-4 bg-black border border-green-500 rounded-lg shadow-lg transition transform"
          >
            {/* Certification Icon */}
            <div className="text-5xl text-green-400 mb-3">{cert.icon}</div>

            {/* Certification Name & Issuer */}
            <h3 className="text-2xl font-semibold text-green-400">{cert.name}</h3>
            <p className="text-green-300 mt-2">Issued by {cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
