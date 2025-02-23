import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaUserSecret, FaCode, FaRobot, FaShieldAlt } from "react-icons/fa"; // Icons

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center  text-green-300 overflow-hidden">
      {/* Floating Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 120 },
            move: { enable: true, speed: 0.5 },
            size: { value: 2 },
            color: { value: "#00ff00" },
            links: { enable: true, color: "#00ff00" },
            opacity: { value: 0.3 },
          },
        }}
        className="absolute w-full h-full"
      />

      {/* Profile Picture */}
      <motion.img
        src="/images/profile.jpg" // Add your profile image to public/images
        alt="Profile"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-green-500 shadow-lg neon-glow mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Name & Typewriter Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="glitch-text text-4xl md:text-6xl font-extrabold text-green-400">
          Ravadagundi Sanath Kumar
        </h1>

        <TypeAnimation
          sequence={[
            "Full-Stack Developer",
            2000,
            "AI Enthusiast",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-xl mt-2 text-green-400 font-semibold tracking-wide"
        />

        <p className="mt-4 text-lg text-green-200">
          Building secure and intelligent web solutions.
        </p>

        {/* Animated Icons */}
        <div className="flex justify-center gap-6 mt-6 text-3xl text-green-400">
          <motion.div whileHover={{ scale: 1.2 }} className="hover:text-green-500">
            <FaUserSecret />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="hover:text-green-500">
            <FaCode />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="hover:text-green-500">
            <FaRobot />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="hover:text-green-500">
            <FaShieldAlt />
          </motion.div>
        </div>

        {/* CTA Button */}
        <a
          href="#projects"
          className="mt-6 inline-block px-8 py-3 text-lg font-semibold text-black bg-green-500 rounded-lg shadow-lg hover:bg-green-600 transition transform hover:scale-105"
        >
          View My Work
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
