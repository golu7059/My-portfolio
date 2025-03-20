import React, { useState, useEffect, useRef } from 'react';
import { FaBrain, FaRocket, FaCode, FaLaptopCode, FaUserGraduate, FaTools, FaRegLightbulb, FaServer, FaDatabase, FaMobile } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [visibleSection, setVisibleSection] = useState(null);
  const sectionRefs = useRef({
    overview: useRef(null),
    skills: useRef(null),
    approach: useRef(null)
  });
  
  // Skills categories
  const skillGroups = {
    frontend: ["JavaScript", "React", "TypeScript", "HTML/CSS", "Tailwind CSS"],
    backend: ["Node.js", "Express", "Java", "Python", "API Design"],
    database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    tools: ["Git", "Docker", "VS Code", "Postman", "Figma"]
  };
  
  // Personal stats with animating values
  const stats = [
    { label: "Projects Completed", value: "15+", icon: <FaCode className="text-orange-500" /> },
    { label: "Technologies", value: "20+", icon: <FaTools className="text-blue-500" /> },
    { label: "Years Learning", value: "3+", icon: <FaUserGraduate className="text-purple-500" /> },
    { label: "Happy Clients", value: "10+", icon: <FaRocket className="text-green-500" /> }
  ];

  // Intersection observer for sections
  useEffect(() => {
    const observers = [];
    Object.entries(sectionRefs.current).forEach(([key, ref]) => {
      if (!ref.current) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSection(key);
          }
        },
        { threshold: 0.6 }
      );
      
      observer.observe(ref.current);
      observers.push({ observer, element: ref.current });
    });
    
    return () => {
      observers.forEach(({ observer, element }) => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Handle tab selection with smooth scroll
  const selectTab = (tab) => {
    setActiveTab(tab);
    sectionRefs.current[tab].current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div id="About" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-500/10 to-purple-500/5 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-purple-500/5 blur-3xl rounded-full"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating shapes */}
      <div className="absolute w-20 h-20 top-20 left-[5%] border border-purple-500/20 rounded-full animate-float-slow"></div>
      <div className="absolute w-16 h-16 bottom-40 right-[10%] border border-orange-500/20 rounded-xl rotate-45 animate-float-medium"></div>
      <div className="absolute w-12 h-12 top-1/2 right-[20%] border border-blue-500/20 rounded-lg animate-float-fast"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-24 h-24 mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/30 to-red-600/30 blur-lg animate-pulse-slow"></div>
            <div className="relative w-full h-full rounded-full bg-gradient-to-r from-orange-500 to-red-600 p-1 shadow-glow">
              <img 
                className="w-full h-full rounded-full object-cover"
                src="https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/my_photo.jpeg" 
                alt="coding_logo"
              />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-3">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6"></div>
          <p className="text-gray-400 text-center max-w-2xl mb-4">
            A passionate <span className="text-orange-400">Full Stack Developer</span> focusing on modern web technologies
            and exceptional user experiences.
          </p>
        </motion.div>
        
        {/* Tabs navigation - Sticky on mobile */}
        <div className="sticky top-20 z-30 bg-black/50 backdrop-blur-md py-2 rounded-xl border border-white/5 mb-8 shadow-lg">
          <div className="flex justify-center flex-wrap gap-2 px-2">
            {[
              { id: 'overview', label: 'Overview', icon: <FaUserGraduate className="mr-2" /> },
              { id: 'skills', label: 'Skills', icon: <FaTools className="mr-2" /> },
              { id: 'approach', label: 'My Approach', icon: <FaRegLightbulb className="mr-2" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center 
                  ${activeTab === tab.id 
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md' 
                    : 'text-gray-400 hover:text-white bg-white/5 hover:bg-white/10'}`}
                onClick={() => selectTab(tab.id)}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Overview Section */}
        <div 
          ref={sectionRefs.current.overview}
          className={`transition-all duration-500 ${visibleSection === 'overview' ? 'opacity-100' : 'opacity-70'}`}
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left column */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-lg text-white shadow-glow shrink-0">
                    <FaCode className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Full Stack Developer</h3>
                    <p className="text-gray-300">
                      Currently pursuing a B.Tech in <span className='text-orange-400 font-medium'>Computer Science and Engineering</span> at Parul University, 
                      I have maintained a strong academic record with a CGPA of 8.7, reflecting my dedication 
                      and understanding of core technical concepts.
                    </p>
                  </div>
                </div>
                
                <motion.div variants={itemVariants} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-lg text-white shadow-glow shrink-0">
                    <FaBrain className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Skills & Adaptability</h3>
                    <p className="text-gray-300">
                      I am an adaptable person, with a strong desire to learn and grow. 
                      I am a <span className='text-orange-400 font-medium'>quick learner</span>, and I work well in team environments.
                      My technical repertoire includes proficiency in various languages and frameworks 
                      for both frontend and backend development.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Right column */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-lg text-white shadow-glow shrink-0">
                    <FaLaptopCode className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Projects & Experience</h3>
                    <p className="text-gray-300">
                      Throughout my journey, I have successfully developed and deployed a range of projects. 
                      During my internship at Bharat Intern, I demonstrated my capability to work on complex projects,
                      including implementing a drag-and-drop feature, creating a task manager, and developing a 
                      video conferencing application.
                    </p>
                  </div>
                </div>
                
                <motion.div variants={itemVariants} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-lg text-white shadow-glow shrink-0">
                    <FaRocket className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Learning & Growth</h3>
                    <p className="text-gray-300">
                      My commitment to <span className='text-orange-400 font-medium'>continuous learning</span> is evident from my current focus 
                      on mastering Spring Boot, Docker, Microservices, and Kafka. I am also proud of my achievements,
                      including a high rank on Leetcode and earning an <span className='text-orange-400 font-medium'>Elite + Silver</span> certificate from an IIT Kharagpur NPTEL course.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Stats Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-orange-500/30 transition-all group"
                >
                  <div className="flex justify-center mb-2">
                    <span className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">{stat.icon}</span>
                  </div>
                  <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 counter-animation">{stat.value}</h4>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Skills Section */}
        <div 
          ref={sectionRefs.current.skills}
          className={`transition-all duration-500 ${visibleSection === 'skills' ? 'opacity-100' : 'opacity-70'}`}
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl mb-16"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-8 text-center"
            >
              Technical Expertise
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend Skills */}
              <motion.div 
                variants={itemVariants}
                className="backdrop-blur-sm bg-gradient-to-br from-blue-600/10 to-purple-600/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <FaLaptopCode className="text-blue-400 text-2xl" />
                    <h4 className="text-xl font-semibold text-white">Frontend Development</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {skillGroups.frontend.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-full text-sm bg-white/10 text-blue-300 backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mt-4 text-sm">
                    Building responsive, accessible, and performant user interfaces using modern frameworks and tools.
                  </p>
                </div>
              </motion.div>
              
              {/* Backend Skills */}
              <motion.div 
                variants={itemVariants}
                className="backdrop-blur-sm bg-gradient-to-br from-green-600/10 to-emerald-600/5 rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 to-green-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <FaServer className="text-green-400 text-2xl" />
                    <h4 className="text-xl font-semibold text-white">Backend Development</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {skillGroups.backend.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-full text-sm bg-white/10 text-green-300 backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mt-4 text-sm">
                    Developing robust, scalable server-side applications and RESTful APIs with security best practices.
                  </p>
                </div>
              </motion.div>
              
              {/* Database Skills */}
              <motion.div 
                variants={itemVariants}
                className="backdrop-blur-sm bg-gradient-to-br from-purple-600/10 to-pink-600/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <FaDatabase className="text-purple-400 text-2xl" />
                    <h4 className="text-xl font-semibold text-white">Database Management</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {skillGroups.database.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-full text-sm bg-white/10 text-purple-300 backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mt-4 text-sm">
                    Designing and managing both relational and NoSQL databases with optimized queries and data modeling.
                  </p>
                </div>
              </motion.div>
              
              {/* Tools */}
              <motion.div 
                variants={itemVariants}
                className="backdrop-blur-sm bg-gradient-to-br from-orange-600/10 to-amber-600/5 rounded-xl p-6 border border-white/10 hover:border-orange-500/30 transition-all relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 to-orange-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <FaTools className="text-orange-400 text-2xl" />
                    <h4 className="text-xl font-semibold text-white">Dev Tools & Workflow</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {skillGroups.tools.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-full text-sm bg-white/10 text-orange-300 backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mt-4 text-sm">
                    Utilizing modern development tools and workflows to streamline the development process and ensure code quality.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* My Approach Section */}
        <div 
          ref={sectionRefs.current.approach}
          className={`transition-all duration-500 ${visibleSection === 'approach' ? 'opacity-100' : 'opacity-70'}`}
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-8 text-center"
            >
              My Development Philosophy
            </motion.h3>
            
            <div className="space-y-8">
              <motion.div 
                variants={itemVariants}
                className="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10 hover:border-orange-500/30 transition-all hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-lg text-white shadow-glow shrink-0">
                    <FaRegLightbulb className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">User-Centric Design</h4>
                    <p className="text-gray-300">
                      I believe that great software starts with a deep understanding of user needs. My development process begins with empathy for the user, ensuring that every feature and interaction serves their goals. This approach leads to intuitive interfaces and meaningful user experiences.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10 hover:border-orange-500/30 transition-all hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-lg text-white shadow-glow shrink-0">
                    <FaCode className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Clean, Maintainable Code</h4>
                    <p className="text-gray-300">
                      Writing code that's easy to understand and maintain is essential for long-term project success. I focus on clean architecture, consistent patterns, and thorough documentation. This approach reduces technical debt and makes collaboration more efficient.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10 hover:border-orange-500/30 transition-all hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-lg text-white shadow-glow shrink-0">
                    <FaMobile className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Responsive & Accessible Design</h4>
                    <p className="text-gray-300">
                      I'm committed to creating applications that work seamlessly across all devices and are accessible to everyone. This means thoughtful responsive layouts, semantic HTML, keyboard navigation, and adherence to WCAG guidelines for maximum inclusivity.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex justify-center mt-8"
              >
                <a 
                  href="#Contact" 
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:translate-y-1 flex items-center space-x-2"
                >
                  Let's Build Something Amazing
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        .animate-float-slow {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float 10s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float 7s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          25% { transform: translateY(-15px) rotate(5deg); }
          50% { transform: translateY(10px) rotate(-5deg); }
          75% { transform: translateY(-5px) rotate(2deg); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(0.97); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        .counter-animation {
          opacity: 0;
          animation: countUp 1.5s forwards ease-out;
          animation-delay: 0.5s;
        }
        
        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
};

export default About;
