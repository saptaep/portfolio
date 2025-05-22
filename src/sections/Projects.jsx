import { motion } from "framer-motion";
import prjct2 from "../assets/prjct2.png";
import prjct3 from "../assets/prjct3.png";

const projects = [
  {
    title: "Paid Project",
    description:
      "Cosmetic product ordering system, using the Laravel11 framework (CRUD).",
    image: prjct2,
  },
  {
    title: "Personal Project",
    description:
      "BlogPress   project using laravel 11 & react js, aims to make it easier for users to create and write an article.",
    image: prjct3,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-44 px-4 max-w-6xl mx-auto mt-12">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
