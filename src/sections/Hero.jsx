import { motion } from "framer-motion";
import pt2 from "../assets/pt2.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row-reverse items-center justify-center text-center md:text-left px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto gap-10 md:gap-16 pt-20"
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 1, delay: 0.5 }}
        className="md:w-1/2"
      >
        <img
          src={pt2}
          alt="Sapta Eka Putra"
          className="w-80 h-80 md:w-[400px] md:h-[400px] object-cover rounded-xl mx-auto shadow-xl"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 mb-8 md:mb-0"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Sapta Eka Putra</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Web Developer | UI/UX Enthusiast
        </p>
        <a
          href="#projects"
          className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition text-xl"
        >
          View Projects
        </a>
      </motion.div>
    </section>
  );
}
