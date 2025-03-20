import React, { useState } from "react";
import { FaTrophy, FaGithub, FaCode, FaLaptopCode, FaExternalLinkAlt } from "react-icons/fa";

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('coding');
  
  const achievements = {
    coding: [
      {
        title: "LeetCode Achievements",
        description: "Solved over 200+ problems on LeetCode, ranking in the top 20% of users globally.",
        image: "https://res.cloudinary.com/di4z2y1fg/image/upload/v1734929280/leetcodeScreenshot_xj0zbt.png",
        link: "https://leetcode.com/u/golukumarjaisidih/",
        linkText: "View LeetCode Profile"
      },
      {
        title: "GitHub Contributions",
        description: "Maintained an active GitHub profile with consistent contributions to personal and open-source projects.",
        image: "https://res.cloudinary.com/di4z2y1fg/image/upload/v1734929301/githubScreenshot_nneok1.png",
        link: "https://github.com/golu7059",
        linkText: "View GitHub Profile"
      }
    ],
    hackathons: [
      {
        title: "Hackathon Finalist",
        description: "Reached the finals in a national-level hackathon organized by Parul University, creating an innovative solution for healthcare management.",
        image: "https://res.cloudinary.com/di4z2y1fg/image/upload/v1734929573/hackathoneCertificate_ok0xf0.jpg",
        link: "#",
        linkText: "View Certificate"
      },
      {
        title: "Code Crafters Champion",
        description: "Won first place in the Code Crafters competition by developing a web application for real-time data visualization.",
        image: "https://res.cloudinary.com/di4z2y1fg/image/upload/v1734929994/codeCraftersCertificate_wgo9no.jpg",
        link: "#",
        linkText: "View Achievement"
      }
    ]
  };
  
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-green-500/10 to-blue-500/5 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-500/10 to-green-500/5 blur-3xl rounded-full"></div>
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="flex flex-col items-center mb-16 reveal">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-blue-600 mb-5 shadow-glow">
            <FaTrophy className="text-white text-2xl" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">Achievements</span> & Milestones
          </h2>
          <p className="text-gray-400 text-center max-w-2xl">
            Showcasing my commitment to excellence and continuous growth in the tech industry.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-4"></div>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8 reveal">
          <div className="inline-flex p-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <button
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'coding' 
                  ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-md' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('coding')}
            >
              <span className="flex items-center">
                <FaCode className="mr-2" /> Coding Achievements
              </span>
            </button>
            <button
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'hackathons' 
                  ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-md' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('hackathons')}
            >
              <span className="flex items-center">
                <FaLaptopCode className="mr-2" /> Hackathons & Competitions
              </span>
            </button>
          </div>
        </div>
        
        {/* Achievement cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements[activeTab].map((achievement, index) => (
            <div 
              key={index}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-glow hover:scale-105 reveal"
            >
              <div className="flex flex-col h-full">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-300 mb-6 flex-grow">{achievement.description}</p>
                  <a 
                    href={achievement.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-green-400 hover:text-green-300"
                  >
                    {achievement.linkText} <FaExternalLinkAlt className="ml-2 text-sm" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-16 gap-8 reveal">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-3">Ready to Collaborate?</h3>
            <p className="text-gray-300 mb-4">
              My achievements showcase my commitment to continuous learning and problem-solving in the tech industry. I'm always looking for new challenges and opportunities to grow.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#Projects" 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:translate-y-1"
              >
                Explore My Work
              </a>
              <a 
                href="#Contact" 
                className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300 hover:translate-y-1"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 hidden md:block">
            <div className="grid grid-cols-2 gap-3 transform rotate-3">
              {Object.values(achievements).flat().slice(0, 4).map((achievement, index) => (
                <div 
                  key={index} 
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-glow transition-all duration-300 hover:scale-105"
                  style={{ transform: `rotate(${index % 2 === 0 ? '-2' : '2'}deg)` }}
                >
                  <img 
                    src={achievement.image} 
                    alt={achievement.title} 
                    className="w-full h-32 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
