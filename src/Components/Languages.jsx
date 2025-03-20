import React, { useState, useEffect, useRef } from "react";
import { FaJava, FaPython, FaJs, FaHtml5, FaCss3, FaNodeJs, FaReact } from "react-icons/fa";
import { SiC, SiTailwindcss, SiDjango, SiMysql, SiMongodb, SiPostgresql, SiSpring, SiDocker, SiTypescript } from "react-icons/si";

const Technologies = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const techSectionRef = useRef(null);

  // Technology data grouped by category
  const techCategories = {
    frontend: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS3", icon: <FaCss3 className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "Python", icon: <FaPython className="text-yellow-500" /> },
      { name: "C", icon: <SiC className="text-cyan-500" /> },
      { name: "Spring Boot", icon: <SiSpring className="text-green-500" /> },
    ],
    database: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    ],
    devops: [
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    ]
  };

  // Get technologies based on active filter
  const getFilteredTechs = () => {
    if (activeFilter === 'all') {
      // Return all technologies across all categories
      return Object.values(techCategories).flat();
    } else {
      // Return technologies for the selected category
      return techCategories[activeFilter] || [];
    }
  };

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const techIcons = document.querySelectorAll('.tech-icon');
          techIcons.forEach((icon, index) => {
            setTimeout(() => {
              icon.classList.add('appear');
            }, index * 80);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (techSectionRef.current) {
      observer.observe(techSectionRef.current);
    }

    return () => {
      if (techSectionRef.current) {
        observer.unobserve(techSectionRef.current);
      }
    };
  }, [activeFilter]);

  return (
    <section id="Technologies" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-600/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated gradient */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold inline-block mb-4 reveal">
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 animate-gradient bg-300">
                Skills & Technologies
              </span>
              <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 rounded-full animate-gradient bg-300"></span>
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            My technical toolkit includes a diverse range of languages, frameworks, and tools
            that I've mastered throughout my development journey.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 reveal">
          {["all", "frontend", "backend", "database", "devops"].map((category) => (
            <button 
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform
                ${activeFilter === category 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg scale-105' 
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30'}
              `}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Animated tech showcase */}
        <div 
          ref={techSectionRef}
          className="relative max-w-5xl mx-auto backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl"
        >
          {/* Tech orbital visualization */}
          <div className="tech-orbital-container">
            {/* Central tech icon */}
            <div className="relative flex justify-center mb-12">
              <div className="tech-center-icon w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md flex items-center justify-center">
                <div className="absolute inset-0 rounded-full animate-pulse-slow bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-md"></div>
                <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {activeFilter === 'all' ? 'Tech' : activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
                </span>
              </div>
            </div>

            {/* Tech icons orbit */}
            <div className="flex flex-wrap justify-center gap-5">
              {getFilteredTechs().map((tech, index) => (
                <div 
                  key={tech.name} 
                  className="tech-icon opacity-0 transform translate-y-8 transition-all duration-500 group"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col items-center justify-center p-4 hover:scale-110 transition-all duration-300">
                    {/* Icon background with glow effect */}
                    <div className="relative p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg mb-3 overflow-hidden">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-700 rounded-2xl"></div>
                      
                      {/* Moving gradient background */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 animate-shimmer"></div>
                      </div>
                      
                      {/* Icon */}
                      <div className="relative z-10 text-4xl md:text-5xl lg:text-6xl">
                        {tech.icon}
                      </div>
                    </div>
                    
                    {/* Tech name */}
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Empty state */}
          {getFilteredTechs().length === 0 && (
            <div className="py-20 text-center">
              <div className="text-cyan-400 text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No skills in this category yet</h3>
              <p className="text-gray-400 mb-6">I'm constantly learning new technologies</p>
              <button 
                onClick={() => setActiveFilter('all')}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white"
              >
                Show all skills
              </button>
            </div>
          )}
        </div>

        {/* Skill level summary */}
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-cyan-500/30">
            <h3 className="text-xl font-semibold text-white mb-4">My Approach</h3>
            <p className="text-gray-300">
              I focus on creating clean, efficient, and maintainable code using modern development practices. 
              My skills span across the entire development stack, allowing me to build complete solutions from front to back.
            </p>
          </div>
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-cyan-500/30">
            <h3 className="text-xl font-semibold text-white mb-4">Learning & Growth</h3>
            <p className="text-gray-300">
              I'm constantly expanding my skill set through continuous learning. Currently focusing on 
              advanced React patterns, system design, and cloud architecture to build more scalable applications.
            </p>
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        .tech-icon.appear {
          opacity: 1;
          transform: translateY(0);
        }
        
        .bg-300 {
          background-size: 300% 300%;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
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

export default Technologies;
