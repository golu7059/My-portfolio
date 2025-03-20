import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaChevronUp, FaCode, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="relative bg-gray-900 text-white overflow-hidden">
            {/* Animated wave divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-1">
                <svg
                    className="relative block w-full h-12 sm:h-16"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-black"
                    ></path>
                </svg>
            </div>

            {/* Moving gradient background */}
            <div className="absolute inset-0 -z-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-600/5 to-pink-600/5 blur-3xl rounded-full animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600/5 to-purple-600/5 blur-3xl rounded-full animate-blob animation-delay-4000"></div>
                
                {/* Background particles */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/5"
                        style={{
                            width: `${Math.random() * 6 + 1}px`,
                            height: `${Math.random() * 6 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `floatParticle ${Math.random() * 8 + 10}s linear infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
                {/* Back to top button */}
                <div className="flex justify-center mb-10">
                    <button
                        onClick={scrollToTop}
                        className="relative group p-2 w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg flex items-center justify-center hover:shadow-orange-500/20 transition-all duration-300 hover:scale-110"
                        aria-label="Back to top"
                    >
                        <FaChevronUp className="h-5 w-5 animate-bounce" />
                        <span className="absolute inset-0 rounded-full animate-ping-slow bg-white/20"></span>
                    </button>
                </div>

                {/* Footer content - 3 column layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {/* Left column - Branding */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center shadow-glow">
                                <FaCode className="text-white text-lg" />
                            </div>
                            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                                Golu Kumar
                            </h2>
                        </div>
                        <p className="text-gray-400 max-w-xs">
                            A passionate Full Stack Developer focused on creating elegant, efficient, and user-friendly web applications.
                        </p>
                        
                        {/* Social links */}
                        <div className="flex space-x-4 pt-4">
                            <a 
                                href="https://linkedin.com/in/golu-kumar-7079b5246" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="h-5 w-5 text-blue-400 group-hover:text-blue-300" />
                            </a>
                            <a 
                                href="https://github.com/golu7059" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                                aria-label="GitHub"
                            >
                                <FaGithub className="h-5 w-5 text-gray-300 group-hover:text-white" />
                            </a>
                            <a 
                                href="https://twitter.com/golu7059" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                                aria-label="Twitter"
                            >
                                <FaTwitter className="h-5 w-5 text-sky-400 group-hover:text-sky-300" />
                            </a>
                            <a 
                                href="mailto:golukumarjaisidih@gmail.com" 
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                                aria-label="Email"
                            >
                                <FaEnvelope className="h-5 w-5 text-orange-400 group-hover:text-orange-300" />
                            </a>
                        </div>
                    </div>

                    {/* Middle column - Quick links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></span>
                        </h3>
                        <ul className="space-y-2 grid grid-cols-2">
                            <li>
                                <a 
                                    href="#Home" 
                                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 inline-flex items-center hover:translate-x-1 transform"
                                >
                                    <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span> Home
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#About" 
                                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 inline-flex items-center hover:translate-x-1 transform"
                                >
                                    <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span> About
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#Projects" 
                                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 inline-flex items-center hover:translate-x-1 transform"
                                >
                                    <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span> Projects
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#Education" 
                                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 inline-flex items-center hover:translate-x-1 transform"
                                >
                                    <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span> Education
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#Certificates" 
                                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 inline-flex items-center hover:translate-x-1 transform"
                                >
                                    <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span> Certificates
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#Contact" 
                                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 inline-flex items-center hover:translate-x-1 transform"
                                >
                                    <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span> Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right column - Contact & Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 relative inline-block">
                            Contact Me
                            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                                <div className="p-2 rounded-full bg-white/5 flex-shrink-0">
                                    <FaEnvelope className="text-orange-500 h-4 w-4" />
                                </div>
                                <span className="text-gray-400">golukumarjaisidih@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                                <div className="p-2 rounded-full bg-white/5 flex-shrink-0">
                                    <FaGithub className="text-gray-300 h-4 w-4" />
                                </div>
                                <a href="https://github.com/golu7059" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                                    github.com/golu7059
                                </a>
                            </li>
                            <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                                <div className="p-2 rounded-full bg-white/5 flex-shrink-0">
                                    <FaLinkedin className="text-blue-400 h-4 w-4" />
                                </div>
                                <a href="https://linkedin.com/in/golu-kumar-7079b5246" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                                    linkedin.com/in/golu-kumar-7079b5246
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Lower footer with copyright */}
                <div className="pt-8 mt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <FaRegCopyright className="text-gray-500 mr-2" />
                            <p className="text-gray-500 text-sm">
                                {new Date().getFullYear()} All rights reserved.
                            </p>
                        </div>
                        
                        <p className="text-gray-500 text-sm flex items-center">
                            Made with 
                            <FaHeart className="text-red-500 mx-1 animate-pulse" /> 
                            by <span className="text-orange-400 ml-1">Golu Kumar</span>
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Custom styles for animations */}
            <style jsx>{`
                @keyframes floatParticle {
                    0%, 100% { transform: translate(0, 0); }
                    25% { transform: translate(10px, 10px); }
                    50% { transform: translate(5px, 20px); }
                    75% { transform: translate(-10px, 10px); }
                }
                
                @keyframes animate-ping-slow {
                    0%, 100% { transform: scale(1); opacity: 0; }
                    50% { transform: scale(1.5); opacity: 0.3; }
                }
                
                @keyframes flow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                .animate-ping-slow {
                    animation: animate-ping-slow 2s ease-in-out infinite;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
