import { motion } from "framer-motion";
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "ICAMP PRIVATE LIMITED",
    role: "Machine Learning/Full Stack Junior Engineer",
    duration: "Oct 2023 - Jan 2024",
    location: "Bangalore",
    logo: "/images/icamp_logo.jpg",
  },
  {
    company: "TECH 0X.DAY PRIVATE LIMITED",
    role: "DApp Engineering - SDE-1 Fellows",
    duration: "July 2024 - Ongoing",
    location: "Bangalore",
    logo: "/images/tech0x_logo.jpg",
  },
];

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center text-center px-6 py-16 bg-black text-green-300 rounded-lg shadow-lg max-w-4xl mx-auto"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold glitch-text mb-6">Work Experience</h2>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 0, 0.7)" }}
            className="flex flex-col glowing-card items-center p-4 bg-black border border-green-500 rounded-lg shadow-lg transition transform"
          >
            {/* Company Logo */}
            <img src={exp.logo} alt={exp.company} className="w-16 h-16 mb-2 rounded-full border border-green-500" />
            
            {/* Role & Company */}
            <h3 className="text-xl font-semibold text-green-400">{exp.role}</h3>
            <p className="text-green-200">{exp.company}</p>
            <p className="text-green-300 text-sm">{exp.duration}</p>

            {/* Location */}
            <div className="flex items-center gap-2 mt-2 text-green-400 text-sm">
              <FaMapMarkerAlt />
              <span>{exp.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
