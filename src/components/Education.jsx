import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const education = [
  {
    institution: "VIT-AP University",
    degree: "BTech - CSE AIML",
    cgpa: "8.05",
    year: "2021 - Present",
    location: "Amaravathi",
    logo: "/images/vit_logo.jpg",
  },
  {
    institution: "Sri Chaitanya",
    degree: "Intermediate",
    marks: "896",
    year: "2019 - 2021",
    location: "Kurnool",
    logo: "/images/chaitanya_logo.jpg",
  },
  {
    institution: "Sri Vivekananda English Medium High School",
    degree: "10th Standard",
    gpa: "9.5",
    year: "2019",
    location: "Uravakonda",
    logo: "/images/vivekananda_logo.jpg",
  },
];

const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center text-center px-6 py-16 bg-black text-green-300 rounded-lg shadow-lg max-w-4xl mx-auto"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold glitch-text mb-6">Education</h2>

      {/* Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 0, 0.7)" }}
            className="flex flex-col glowing-card items-center p-4 bg-black border border-green-500 rounded-lg shadow-lg transition transform"
          >
            {/* Institution Logo */}
            <img src={edu.logo} alt={edu.institution} className="w-16 h-16 mb-2 rounded-full border border-green-500" />
            
            {/* Degree & Institution */}
            <h3 className="text-xl font-semibold text-green-400">{edu.degree}</h3>
            <p className="text-green-200">{edu.institution} ({edu.year})</p>
            <p className="text-green-300 text-sm">
              {edu.cgpa ? `CGPA: ${edu.cgpa}` : edu.marks ? `Marks: ${edu.marks}` : `GPA: ${edu.gpa}`}
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 mt-2 text-green-400 text-sm">
              <FaMapMarkerAlt />
              <span>{edu.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
