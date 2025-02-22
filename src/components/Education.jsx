
// General styling for all sections
const sectionClass = "py-20 px-5 text-center bg-black/40 border border-green-500 rounded-lg shadow-lg";

// Education.jsx
import { motion } from "framer-motion";

const education = [
  { institution: "VIT-AP University", degree: "BTech - CSE AIML", cgpa: "8.05", year: "2021 - Present" },
  { institution: "Sri Chaitanya", degree: "Intermediate", marks: "896", year: "2019 - 2021" },
  { institution: "Sri Vivekananda English Medium High School", degree: "10th Standard", gpa: "9.5", year: "2019" }
];

const Education = () => {
  return (
    <motion.section className={sectionClass}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-green-400 mb-5">Education</h2>
      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-5 my-4 bg-green-900/50 border border-green-400 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold">{edu.institution}</h3>
            <p className="text-green-200">{edu.degree} ({edu.year})</p>
            <p className="text-green-300 mt-2 font-semibold">CGPA: {edu.cgpa || edu.marks || edu.gpa}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;