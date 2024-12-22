import React from "react";
import { FaJava, FaPython, FaJs, FaHtml5, FaCss3, FaNodeJs, FaReact } from "react-icons/fa";
import { SiC, SiTailwindcss, SiDjango, SiMysql, SiMongodb, SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  const technologies = [
    { name: "C", icon: <SiC className="text-6xl text-cyan-500" /> },
    { name: "Java", icon: <FaJava className="text-6xl text-red-600" /> },
    { name: "Python", icon: <FaPython className="text-6xl text-yellow-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-6xl text-yellow-300" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-6xl text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3 className="text-6xl text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-6xl text-green-500" /> },
    { name: "React", icon: <FaReact className="text-6xl text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-6xl text-teal-300" /> },
    { name: "Django", icon: <SiDjango className="text-6xl text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-6xl text-blue-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-6xl text-green-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-6xl text-blue-500" /> },
  ];

  return (
    <section id="Technologies" className="py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Animated Header */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12 tracking-wider"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-cyan-400">Programming </span>& Technologies
      </motion.h2>

      {/* Technology Cards */}
      <div className="flex flex-wrap justify-center gap-8 reveal">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-48 h-48 flex flex-col items-center justify-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.08, rotate: 0 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.01, delay: 0 }}
          >
            {tech.icon}
            <h3 className="text-xl font-semibold mt-4">{tech.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
