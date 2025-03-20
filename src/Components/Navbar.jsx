import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  // Track scroll position for styling and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['Home', 'About', 'Education', 'Certificates', 'Projects', 'Contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 300) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/75 backdrop-blur-xl py-3 shadow-lg shadow-black/30 border-b border-white/5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 reveal">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => scrollToSection('Home')}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-xl shadow-orange-600/20 group-hover:shadow-orange-500/30 group-hover:scale-105 transition-all duration-300">
            <FaCode className="text-white text-lg" />
          </div>
          <h1 className="text-2xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 group-hover:from-orange-300 group-hover:to-red-500 transition-all duration-300">Golu.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-white group-hover:to-white transition-all duration-300">dev</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-3">
            {['Home', 'About', 'Education', 'Certificates', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 relative ${
                    activeSection === item 
                      ? 'text-white bg-gradient-to-br from-orange-500 to-red-600 shadow-lg shadow-orange-600/20 scale-105' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-md hover:shadow-white/5'
                  }`}
                >
                  <span>{item}</span>
                  {activeSection !== item && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-1/2 transition-all duration-300"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden z-50 w-10 h-10 rounded-full bg-gradient-to-br from-black/80 to-gray-900/80 flex items-center justify-center backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-orange-600/20 transition-all duration-300"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <FaTimes className="text-orange-500 text-lg" />
          ) : (
            <FaBars className="text-orange-500 text-lg" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex items-center justify-center transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-8 py-6">
          {['Home', 'About', 'Education', 'Certificates', 'Projects', 'Contact'].map((item) => (
            <li key={item} className="overflow-hidden">
              <button
                onClick={() => scrollToSection(item)}
                className={`text-2xl font-medium transition-all duration-300 relative ${
                  activeSection === item 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 scale-110' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item}
                {activeSection === item && (
                  <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full animate-pulse"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
