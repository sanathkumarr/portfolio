import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaCss3Alt, FaJs, FaGitAlt, FaJava, FaHtml5 } from "react-icons/fa";
import { SiDjango, SiNextdotjs, SiShadcnui } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Databases", icon: <FaDatabase /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "ShadCN", icon: <SiShadcnui /> },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center text-center px-6 py-16 bg-black text-green-300 rounded-lg shadow-lg max-w-4xl mx-auto"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold glitch-text mb-6">Skills & Technologies</h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-3xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="glowing-card flex flex-col items-center p-4 bg-black border border-green-500 rounded-lg shadow-lg transition transform"
          >
            <div className="text-4xl text-green-400">{skill.icon}</div>
            <p className="text-lg mt-2 text-green-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
