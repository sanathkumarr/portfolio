// Experience.jsx
import { motion } from "framer-motion";
const Experience = () => {
  const experiences = [
    { company: "ICAMP PRIVATE LIMITED", role: "Machine Learning/Full Stack Junior Engineer", duration: "Oct 2023 - Jan 2024" },
    { company: "TECH 0X.DAY PRIVATE LIMITED", role: "DApp Engineering - SDE-1 Fellows", duration: "July 2024 - Ongoing" }
  ];
  const sectionClass = "py-20 px-5 text-center bg-black/40 border border-green-500 rounded-lg shadow-lg";
  return (
    <motion.section className={sectionClass}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-green-400 mb-5">Experience</h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-5 my-4 bg-green-900/50 border border-green-400 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-green-200">{exp.company} ({exp.duration})</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;