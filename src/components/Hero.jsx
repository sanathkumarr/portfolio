// Hero.jsx
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black/40 text-green-300 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 100 },
            move: { enable: true, speed: 2 },
            size: { value: 3 },
            color: { value: "#00ff00" },
            links: { enable: true, color: "#00ff00" },
          },
        }}
        className="absolute w-full h-full"
      />
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">Hi, I'm Sanath Kumar</h1>
        <TypeAnimation
          sequence={["Full-Stack Developer", 2000, "AI Enthusiast", 2000, "Creative Coder", 2000]}
          speed={50}
          repeat={Infinity}
          className="text-xl mt-2 text-green-400"
        />
        <p className="mt-4 text-green-200">Building scalable & interactive web solutions</p>
      </motion.div>
    </div>
  );
};

export default Hero;