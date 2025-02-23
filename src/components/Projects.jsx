import { motion } from "framer-motion";
import { FaProjectDiagram, FaRobot, FaCloudSun, FaDatabase } from "react-icons/fa";

const projects = [
  {
    name: "Rice Plant Disease Detection",
    description: "Deep learning model with 96.88% accuracy.",
    tech: "TensorFlow, CNN, EfficientNet",
    icon: <FaRobot />,
  },
  {
    name: "Real-Time Chat System",
    description: "Secure & fast chat application.",
    tech: "React.js, WebSockets, Node.js",
    icon: <FaProjectDiagram />,
  },
  {
    name: "Django Auth App",
    description: "Tax verification system using Google API.",
    tech: "Django, Google OAuth, PostgreSQL",
    icon: <FaDatabase />,
  },
  {
    name: "Weather Forecast Website",
    description: "Real-time weather updates & predictions.",
    tech: "React.js, OpenWeather API, Deep Learning",
    icon: <FaCloudSun />,
  },
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center text-center px-6 py-16 bg-black text-green-300 rounded-lg shadow-lg max-w-4xl mx-auto"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold glitch-text mb-6">Projects</h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 10 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 0, 0.7)" }}
            className="flex flex-col glowing-card items-center p-4 bg-black border border-green-500 rounded-lg shadow-lg transition transform"
          >
            {/* Project Icon */}
            <div className="text-5xl text-green-400 mb-3">{project.icon}</div>

            {/* Project Name & Description */}
            <h3 className="text-2xl font-semibold text-green-400">{project.name}</h3>
            <p className="text-green-200">{project.description}</p>
            <p className="text-green-400 mt-2 font-semibold">Tech: {project.tech}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
