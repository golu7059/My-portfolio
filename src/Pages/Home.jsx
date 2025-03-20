import React, { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";
import { PiArrowCircleDownBold } from "react-icons/pi";
import { MdOutlineDownloadDone } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { toast } from 'react-hot-toast';

const Home = () => {
    // State to track the download status
    const [downloadStatus, setDownloadStatus] = useState('normal');
    const [tiltStyle, setTiltStyle] = useState({});
    const imgRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        document.title = "Golu Kumar Portfolio";
        
        // Add mouse move event listener for the parallax effect
        const handleMouseMove = (e) => {
            if (sectionRef.current) {
                const { clientX, clientY } = e;
                const { width, height, left, top } = sectionRef.current.getBoundingClientRect();
                const x = (clientX - left) / width - 0.5;
                const y = (clientY - top) / height - 0.5;
                setMousePosition({ x, y });
            }
        };

        // Track scroll position for animations
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle resume download
    const handleDownload = (event) => {
        event.preventDefault();
        setDownloadStatus('loading');
    
        const toastId = toast.loading("Downloading resume...");
    
        setTimeout(() => {
            setDownloadStatus('downloaded');
            toast.success("Resume downloaded successfully!", { id: toastId });
    
            const link = document.createElement('a');
            link.href = "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/Resume_Golu_Kumar.pdf";
            link.download = "Golu-Kumar-Resume.pdf";
            link.click();
            
            // Reset to normal state after 3 seconds
            setTimeout(() => {
                setDownloadStatus('normal');
            }, 3000);
        }, 2000);
    };

    // Mouse movement for 3D effect
    const handleMouseMove = (e) => {
        if (imgRef.current) {
            const rect = imgRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const maxTilt = 12; // Reduced tilt for smoother effect
            const tiltX = (y / rect.height) * maxTilt;
            const tiltY = -(x / rect.width) * maxTilt;
            setTiltStyle({
                transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`,
                boxShadow: `${-tiltY * 2}px ${tiltX * 2}px 25px rgba(255, 69, 0, 0.4)`,
                transition: "transform 0.1s ease, box-shadow 0.1s ease",
            });
        }
    };

    const handleMouseLeave = () => {
        setTiltStyle({
            transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
            boxShadow: "0 10px 30px rgba(255, 69, 0, 0.2)",
            transition: "transform 0.5s ease, box-shadow 0.5s ease",
        });
    };

    // Handle scroll to next section
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('About');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section 
            id='Home' 
            className="min-h-screen flex items-center justify-center overflow-hidden relative"
            ref={sectionRef}
        >
            {/* Enhanced animated background with richer gradients */}
            <div className="absolute inset-0 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-0"></div>
                
                {/* Enhanced animated gradient blobs with better colors */}
                <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-purple-900/20 via-indigo-800/15 to-blue-800/20 blur-3xl animate-blob"></div>
                <div className="absolute -bottom-[30%] -right-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-l from-red-900/20 via-orange-800/15 to-amber-800/20 blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-t from-blue-900/15 via-violet-800/10 to-purple-900/15 blur-3xl animate-blob animation-delay-4000"></div>
                
                {/* Improved grid pattern overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
                
                {/* Enhanced particles with better colors and movements */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(25)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 3 + 1}px`,
                                height: `${Math.random() * 3 + 1}px`,
                                backgroundColor: `hsla(${Math.random() * 60 + 10}, 100%, 75%, ${Math.random() * 0.4 + 0.2})`,
                                animation: `floatParticle ${Math.random() * 15 + 20}s linear infinite`,
                                animationDelay: `${Math.random() * 5}s`,
                                transform: `translateX(${mousePosition.x * -20}px) translateY(${mousePosition.y * -20}px)`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Enhanced main content with improved glassmorphism card */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Enhanced glassmorphism card effect */}
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-2xl shadow-orange-900/5 p-8 md:p-12 transform transition-all duration-500 hover:shadow-orange-800/10 reveal">
                        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                            {/* Enhanced Profile Image */}
                            <div className="md:w-5/12 flex items-center justify-center">
                                <div className="relative">
                                    {/* Enhanced animated rings with gradient colors */}
                                    <div className="absolute inset-0 -m-6 rounded-full border-2 border-gradient-ring animate-spin-slow"></div>
                                    <div className="absolute inset-0 -m-12 rounded-full border-2 border-gradient-ring-alt animate-spin-reverse"></div>
                                    
                                    <div className="relative group">
                                        {/* Enhanced glow effect behind image */}
                                        <div 
                                            className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-600 to-red-600 blur-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-500" 
                                            style={{
                                                transform: `translateX(${mousePosition.x * 15}px) translateY(${mousePosition.y * 15}px)`,
                                            }}
                                        ></div>
                                        
                                        {/* Actual image with enhanced 3D tilt effect */}
                                        <div className="relative">
                                            <img
                                                src="https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/profileImage.JPG"
                                                alt="Golu Kumar"
                                                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover z-10 border-4 border-gradient-profile p-1 transform transition-transform duration-500 group-hover:scale-105 shadow-xl"
                                                onMouseMove={handleMouseMove}
                                                onMouseLeave={handleMouseLeave}
                                                style={tiltStyle}
                                                ref={imgRef}
                                            />
                                            
                                            {/* Enhanced colored edge effect */}
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-red-600 -z-10"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Enhanced Text Content */}
                            <div className="md:w-7/12 text-center md:text-left mt-10 md:mt-0">
                                <div className="space-y-8">
                                    {/* Enhanced greeting with animated text */}
                                    <div className="space-y-2">
                                        <p className="text-xs sm:text-sm uppercase tracking-widest text-orange-300/80 font-medium">Full Stack Developer</p>
                                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-300 to-red-500 animate-gradient">Golu Kumar</span>
                                        </h1>
                                    </div>
                                    
                                    {/* Enhanced typewriter effect */}
                                    <div className="h-16 flex items-center justify-center md:justify-start">
                                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                                            <span className="text-gray-300">I'm a </span>
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400">
                                                <Typewriter
                                                    words={['Frontend Developer', 'Backend Developer', 'Full Stack Developer']}
                                                    loop={0}
                                                    cursor
                                                    cursorStyle="_"
                                                    typeSpeed={140}
                                                    deleteSpeed={25}
                                                    delaySpeed={2000}
                                                />
                                            </span>
                                        </h2>
                                    </div>
                                    
                                    {/* Enhanced introduction text */}
                                    <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
                                        Currently pursuing B.Tech in Computer Science and Engineering at Parul University. 
                                        I build exceptional digital experiences with modern technologies including <span className="text-orange-400 font-medium">React</span>, <span className="text-blue-400 font-medium">Node.js</span>, and <span className="text-green-400 font-medium">MongoDB</span>.
                                    </p>
                                    
                                    {/* Enhanced resume download button and social links */}
                                    <div className="flex flex-col sm:flex-row items-center gap-7 pt-2">
                                        <button
                                            onClick={handleDownload}
                                            className={`
                                                group relative px-8 py-3 overflow-hidden font-medium rounded-full 
                                                bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white 
                                                transition-all duration-500 hover:shadow-lg hover:shadow-orange-600/30
                                                active:scale-95 w-full sm:w-auto
                                            `}
                                            disabled={downloadStatus !== 'normal'}
                                        >
                                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                            <span className="relative flex items-center justify-center gap-2">
                                                {downloadStatus === 'normal' && (
                                                    <>Resume <PiArrowCircleDownBold className='text-xl animate-bounce' /></>
                                                )}
                                                {downloadStatus === 'loading' && (
                                                    <>Downloading <AiOutlineLoading3Quarters className='text-xl animate-spin' /></>
                                                )}
                                                {downloadStatus === 'downloaded' && (
                                                    <>Downloaded <MdOutlineDownloadDone className='text-xl animate-pulse' /></>
                                                )}
                                            </span>
                                        </button>
                                        
                                        <div className="flex space-x-5">
                                            <a 
                                                href="https://www.linkedin.com/in/golu-kumar-7079b5246/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="group"
                                                aria-label="LinkedIn Profile"
                                            >
                                                <div className="p-3 rounded-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm shadow-lg border border-white/10 transform transition-all duration-300 hover:scale-110 hover:shadow-blue-500/20 hover:border-blue-500/30">
                                                    <FaLinkedin className="h-5 w-5 text-gray-200 group-hover:text-blue-400 transition-colors duration-300" />
                                                </div>
                                            </a>
                                            
                                            <a 
                                                href="https://github.com/golu7059" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="group"
                                                aria-label="GitHub Profile"
                                            >
                                                <div className="p-3 rounded-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm shadow-lg border border-white/10 transform transition-all duration-300 hover:scale-110 hover:shadow-orange-500/20 hover:border-orange-500/30">
                                                    <FaGithub className="h-5 w-5 text-gray-200 group-hover:text-orange-400 transition-colors duration-300" />
                                                </div>
                                            </a>
                                            
                                            <a 
                                                href="https://hashnode.com/@golu7059" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="group"
                                                aria-label="Hashnode Profile"
                                            >
                                                <div className="p-3 rounded-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm shadow-lg border border-white/10 transform transition-all duration-300 hover:scale-110 hover:shadow-blue-500/20 hover:border-blue-500/30">
                                                    <SiHashnode className="h-5 w-5 text-gray-200 group-hover:text-blue-400 transition-colors duration-300" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Enhanced scroll down indicator */}
            <button 
                onClick={scrollToAbout}
                className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'}`}
                aria-label="Scroll to About section"
            >
                <span className="text-xs mb-2">Scroll Down</span>
                <FaChevronDown className="animate-bounce h-5 w-5" />
            </button>

            {/* Updated CSS for animations */}
            <style jsx>{`
                @keyframes floatParticle {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    25% {
                        transform: translateY(25px) translateX(20px);
                    }
                    50% {
                        transform: translateY(50px) translateX(0);
                    }
                    75% {
                        transform: translateY(25px) translateX(-20px);
                    }
                }
                
                @keyframes animate-gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
                
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: animate-gradient 5s ease infinite;
                }
                
                .animate-blob {
                    animation: blob 20s infinite ease;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    25% {
                        transform: translate(25px, -35px) scale(1.1);
                    }
                    50% {
                        transform: translate(0, 25px) scale(0.9);
                    }
                    75% {
                        transform: translate(-25px, -20px) scale(1.05);
                    }
                }
                
                .animate-spin-slow {
                    animation: spin 25s linear infinite;
                }
                
                .animate-spin-reverse {
                    animation: spin-reverse 30s linear infinite;
                }
                
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                @keyframes spin-reverse {
                    from {
                        transform: rotate(360deg);
                    }
                    to {
                        transform: rotate(0deg);
                    }
                }
                
                .border-gradient-profile {
                    background: linear-gradient(to right, #f97316, #ef4444);
                    background-clip: padding-box;
                }
                
                .border-gradient-ring {
                    border-color: rgba(249, 115, 22, 0.3);
                }
                
                .border-gradient-ring-alt {
                    border-color: rgba(239, 68, 68, 0.2);
                }
                
                .bg-grid-pattern {
                    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                                     linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
                    background-size: 35px 35px;
                }
            `}</style>
        </section>
    );
};

export default Home;
