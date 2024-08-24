import React from "react";
import { FaJava, FaPython, FaJs, FaHtml5, FaCss3, FaNodeJs,FaReact  } from "react-icons/fa"; // Add more icons as needed
import { SiC, SiTailwindcss, SiDjango, SiMysql, SiMongodb, SiPostgresql} from "react-icons/si";
import { motion } from "framer-motion"; // For animations

const Languages = () => {
  // Array of languages with icon and name
  const languages = [
    { name: "C", icon: <SiC className="text-5xl text-blue-700" /> },
    { name: "Java", icon: <FaJava className="text-5xl text-orange-600" /> },
    { name: "Python", icon: <FaPython className="text-5xl text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-5xl text-yellow-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-5xl text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3 className="text-5xl text-blue-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-600" /> },
    { name: "React", icon: <FaReact className="text-5xl text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-teal-400" /> },
    { name: "Django", icon: <SiDjango className="text-5xl text-green-800" /> },
    { name: "MySQL", icon: <SiMysql className="text-5xl text-blue-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-5xl text-blue-500" /> }

  ];

  return (
    <section id="Languages" className="p-8 bg-black text-white">
      {/* Animated Header */}
      <h2 className="text-3xl font-bold text-orange-600 text-center mb-10 font-mono">Programming Languages & Technologies</h2>

      {/* Language Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            className="bg-white text-black p-6 rounded-lg shadow-lg w-40 h-40 flex flex-col items-center justify-center text-center hover:bg-gray-200 transition duration-300"
            whileHover={{ scale: 1.08, rotate: 0 }} // Scale and rotate on hover
            initial={{ opacity: 0 }} // Initial opacity
            animate={{ opacity: 1 }} // Animate to full opacity
            transition={{ duration: 0.03 }} // Animation duration
          >
            {lang.icon}
            <h3 className="text-xl font-bold mt-4">{lang.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
