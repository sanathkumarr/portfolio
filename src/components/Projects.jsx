// Projects.jsx
import { motion } from "framer-motion";
const sectionClass = "py-20 px-5 text-center bg-black/40 border border-green-500 rounded-lg shadow-lg";
const projects = [
  { name: "Rice Plant Disease Detection", description: "Deep learning model with 96.88% accuracy.", tech: "EfficientNetB1, ResNet50, VGG16" },
  { name: "Real-Time Chat System", description: "React.js with WebSocket integration.", tech: "React.js, Node.js, MongoDB" },
  { name: "Accounts App", description: "Django app for company tax verification.", tech: "Django, Google API" },
  { name: "Weather Forecast Website", description: "Real-time weather updates and prediction.", tech: "React.js, OpenWeather API, Deep Learning" }
];

const Projects = () => {
  return (
    <motion.section className={sectionClass}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-green-400 mb-5">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-5 bg-green-900/50 border border-green-400 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p className="text-green-200 mt-2">{project.description}</p>
            <p className="text-green-300 mt-2 font-semibold">Tech: {project.tech}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;