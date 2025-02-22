import { motion } from "framer-motion";

const skills = ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "Python", "Node.js", "Django", "MongoDB"];
const sectionClass = "py-20 px-5 text-center bg-black/40 border border-green-500 rounded-lg shadow-lg";
const Skills = () => {
  return (
    <motion.section className={sectionClass}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-green-400 mb-5">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-4 bg-green-900/50 border border-green-400 rounded-lg shadow-lg"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;