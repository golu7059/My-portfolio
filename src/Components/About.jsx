import React, { useEffect, useRef } from "react";
import { FaCode, FaLaptopCode, FaUserGraduate, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion"; // You may need to install this package

const About = () => {
  const aboutSectionRef = useRef(null);
  const bioRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const interestsRef = useRef(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = [bioRef.current, experienceRef.current, educationRef.current, interestsRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="About" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated gradient */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold inline-block mb-4">
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 animate-gradient bg-300">
                About Me
              </span>
              <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 rounded-full animate-gradient bg-300"></span>
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Aspiring Full Stack Developer with a passion for creating seamless digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Image Section */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 relative shadow-2xl">
                {/* Replace with your image */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
                <img 
                  src="https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/my_photo.jpeg" 
                  alt="Golu Kumar" 
                  className="object-cover w-full h-full filter saturate-[1.2]"
                />
                
                {/* Animated orbit */}
                <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin-slow opacity-70 border-t-cyan-500 border-l-purple-500"></div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full p-3 shadow-lg animate-float">
                <FaCode className="text-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full p-3 shadow-lg animate-float-delay">
                <FaLaptopCode className="text-xl" />
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div 
            ref={bioRef}
            className="lg:col-span-2 backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
          >
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Who I Am
            </h3>
            <p className="text-gray-300 mb-4">
              I'm Golu Kumar, a passionate Full Stack Developer currently pursuing my B.Tech in Computer Science and Engineering at Parul University with a strong CGPA of 8.7. I specialize in creating responsive web applications using modern technologies.
            </p>
            <p className="text-gray-300 mb-4">
              My development journey began with a curiosity about how websites work, which has evolved into expertise in both frontend and backend development. I'm committed to writing clean, efficient code and building user-friendly applications.
            </p>
            <p className="text-gray-300">
              I'm currently expanding my skills in Spring Boot, Docker, Microservices, and Kafka to enhance my capabilities as a developer and stay current with industry trends.
            </p>
          </div>
        </div>

        {/* Additional info sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Experience Section */}
          <div 
            ref={experienceRef}
            className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 hover:border-purple-500/30 opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mr-4">
                <FaLaptopCode className="text-2xl text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Professional Experience</h3>
            </div>
            <ul className="space-y-4">
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-400 before:rounded-full">
                <h4 className="font-medium text-white">Web Development Intern</h4>
                <p className="text-sm text-gray-400">Bharat Intern, 2023</p>
                <p className="text-gray-300 text-sm mt-1">Implemented drag-and-drop features, created a task manager, and developed a video conferencing application.</p>
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-cyan-400 before:rounded-full">
                <h4 className="font-medium text-white">Open Source Contributor</h4>
                <p className="text-sm text-gray-400">GitHub, 2022 - Present</p>
                <p className="text-gray-300 text-sm mt-1">Contributing to various open-source projects to improve coding skills and collaborate with the developer community.</p>
              </li>
            </ul>
          </div>

          {/* Education Section */}
          <div 
            ref={educationRef}
            className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 hover:border-cyan-500/30 opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mr-4">
                <FaUserGraduate className="text-2xl text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>
            <ul className="space-y-4">
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-cyan-400 before:rounded-full">
                <h4 className="font-medium text-white">B.Tech in Computer Science</h4>
                <p className="text-sm text-gray-400">Parul University, 2020 - 2024</p>
                <p className="text-gray-300 text-sm mt-1">Maintaining a strong academic record with a CGPA of 8.7, focusing on software development and advanced programming.</p>
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-400 before:rounded-full">
                <h4 className="font-medium text-white">Elite + Silver Certificate</h4>
                <p className="text-sm text-gray-400">IIT Kharagpur NPTEL Course</p>
                <p className="text-gray-300 text-sm mt-1">Earned recognition for excellence in an advanced technical course from one of India's premier institutions.</p>
              </li>
            </ul>
          </div>

          {/* Skills & Interests Section */}
          <div 
            ref={interestsRef}
            className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 hover:border-yellow-500/30 opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
            style={{ transitionDelay: "400ms" }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-purple-500/20 flex items-center justify-center mr-4">
                <FaHeart className="text-2xl text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Skills & Interests</h3>
            </div>
            <div className="mb-4">
              <h4 className="font-medium text-white mb-2">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-purple-300">JavaScript</span>
                <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-blue-300">React</span>
                <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-green-300">Node.js</span>
                <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-yellow-300">MongoDB</span>
                <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-red-300">Java</span>
                <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-cyan-300">Spring Boot</span>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Interests</h4>
              <ul className="space-y-2">
                <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-yellow-400 before:rounded-full">
                  <span className="text-gray-300">Open Source Contribution</span>
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-cyan-400 before:rounded-full">
                  <span className="text-gray-300">Learning New Technologies</span>
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-400 before:rounded-full">
                  <span className="text-gray-300">Problem Solving (LeetCode)</span>
                </li>
                <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                  <span className="text-gray-300">Microservices Architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <motion.a 
            href="#Contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-full transform transition-all hover:scale-105 hover:shadow-lg"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        .appear {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .bg-300 {
          background-size: 300% 300%;
        }
        
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite linear;
        }
        
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 40px) scale(1.05);
          }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default About;
