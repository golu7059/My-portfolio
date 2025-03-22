import React, { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiHashnode, SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si";
import { PiArrowCircleDownBold, PiCaretDown } from "react-icons/pi";
import { MdOutlineDownloadDone, MdOutlineMenu, MdClose } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from 'react-hot-toast';

const Home = () => {
    // State management
    const [downloadStatus, setDownloadStatus] = useState('normal');
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [particlesVisible, setParticlesVisible] = useState(false);
    const sectionRef = useRef(null);
    const canvasRef = useRef(null);
    const imageRef = useRef(null);
    const headerRef = useRef(null);

    // Navigation items
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' }
    ];

    // Skills to display
    const skills = [
        { icon: FaReact, label: 'React', color: '#61DAFB' },
        { icon: FaNodeJs, label: 'Node.js', color: '#68A063' },
        { icon: SiMongodb, label: 'MongoDB', color: '#4DB33D' },
        { icon: FaHtml5, label: 'HTML5', color: '#E34F26' },
        { icon: FaCss3Alt, label: 'CSS3', color: '#1572B6' },
        { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
        { icon: SiTailwindcss, label: 'TailwindCSS', color: '#38B2AC' }
    ];

    // Initialize page setup
    useEffect(() => {
        document.title = "Golu Kumar | Developer";
        
        // Show particles with delay for smooth initial load
        const particlesTimer = setTimeout(() => {
            setParticlesVisible(true);
        }, 500);
        
        // Track scroll position for header styling
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        
        // Track mouse position for subtle parallax effect
        const handleMouseMove = (e) => {
            setMousePos({
                x: e.clientX / window.innerWidth - 0.5,
                y: e.clientY / window.innerHeight - 0.5
            });
        };
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            clearTimeout(particlesTimer);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Handle canvas particles
    useEffect(() => {
        if (!particlesVisible || !canvasRef.current) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const particles = [];
        
        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);
        
        // Create particles
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speed = Math.random() * 0.2 + 0.1;
                this.angle = Math.random() * 360;
                this.opacity = Math.random() * 0.5 + 0.2;
            }
            
            update() {
                // Move in a slightly random direction
                this.angle += Math.random() * 4 - 2;
                const radian = this.angle * Math.PI / 180;
                this.x += Math.cos(radian) * this.speed;
                this.y += Math.sin(radian) * this.speed;
                
                // Wrap around edges
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();
            }
        }
        
        // Initialize particles
        for (let i = 0; i < (window.innerWidth < 768 ? 30 : 50); i++) {
            particles.push(new Particle());
        }
        
        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // Draw connections
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 0.5;
            
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        };
        
        animate();
        
        return () => {
            window.removeEventListener('resize', setCanvasSize);
        };
    }, [particlesVisible]);

    // Handle download resume functionality
    const handleDownload = () => {
        setDownloadStatus('loading');
        
        const toastId = toast.loading("Preparing your download...");
        
        // Create and trigger download with more reliable approach
        const downloadResume = () => {
            try {
                const link = document.createElement('a');
                link.href = "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/Resume_Golu_Kumar.pdf";
                link.download = "Golu-Kumar-Resume.pdf";
                document.body.appendChild(link); // Necessary for Firefox
                link.click();
                document.body.removeChild(link); // Clean up
            } catch (error) {
                console.error("Download failed:", error);
                toast.error("Download failed. Please try again.", { id: toastId });
                setDownloadStatus('normal');
                return false;
            }
            return true;
        };
        
        setTimeout(() => {
            const downloadSuccessful = downloadResume();
            
            if (downloadSuccessful) {
                setDownloadStatus('downloaded');
                toast.success("Resume downloaded successfully!", { id: toastId });
                
                setTimeout(() => {
                    setDownloadStatus('normal');
                }, 3000);
            }
        }, 1500);
    };

    // Handle scroll to section
    const scrollToSection = (id) => {
        const sectionId = id.toLowerCase();
        
        const element = document.getElementById(sectionId);
        if (element) {
            // Get header height to offset scroll position
            const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 70;
            
            // Calculate position with offset
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            setActiveSection(sectionId);
            setMenuOpen(false);
        } else {
            console.warn(`Section with id "${sectionId}" not found`);
        }
    };

    // Parallax effect calculation
    const getParallaxStyle = (factor = 1) => {
        return {
            transform: `translate(${mousePos.x * 10 * factor}px, ${mousePos.y * 10 * factor}px)`
        };
    };

    // Toggle mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {/* Header Navigation - Fixed blurring issues */}
            <header 
                ref={headerRef} 
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-black/80 backdrop-blur-md shadow-md' : 'py-5 bg-transparent'}`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="logo text-white font-bold text-2xl">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">GK</span>
                    </div>
                    
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            {navItems.map(item => (
                                <li key={item.id}>
                                    <button 
                                        onClick={() => scrollToSection(item.id)}
                                        className={`nav-link relative px-1 ${activeSection === item.id ? 'text-white' : 'text-gray-400'}`}
                                    >
                                        {item.label}
                                        {activeSection === item.id && (
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 mt-0.5"></span>
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    
                    <button 
                        className="block md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <MdClose size={24} /> : <MdOutlineMenu size={24} />}
                    </button>
                </div>
                
                {/* Mobile menu - Improved transition and clarity */}
                <div 
                    className={`mobile-menu md:hidden absolute w-full bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-64 py-4 border-b border-gray-800' : 'max-h-0 py-0 border-b border-transparent'}`}
                    style={{ opacity: menuOpen ? 1 : 0 }}
                >
                    <div className="container mx-auto px-4">
                        <ul className="space-y-3">
                            {navItems.map(item => (
                                <li key={item.id}>
                                    <button 
                                        onClick={() => scrollToSection(item.id)}
                                        className={`mobile-nav-link w-full text-left py-2 px-3 rounded transition-colors duration-200 ${activeSection === item.id ? 'text-white font-medium bg-blue-500/10 border-l-2 border-blue-400' : 'text-gray-400 border-l-2 border-transparent'}`}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </header>

            {/* Main Hero Section - Improved responsiveness */}
            <section 
                id="home" 
                ref={sectionRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900"
            >
                {/* Particle background */}
                <canvas 
                    ref={canvasRef}
                    className={`absolute inset-0 transition-opacity duration-1000 ${particlesVisible ? 'opacity-100' : 'opacity-0'}`}
                ></canvas>
                
                {/* Gradient background accents */}
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px] opacity-30"></div>
                <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-[100px] opacity-30"></div>
                
                {/* Main hero content - Enhanced mobile layout */}
                <div className="container mx-auto px-4 pt-16 md:pt-20 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            {/* Left column: Text content - Improved spacing for mobile */}
                            <div className="order-2 md:order-1 text-center md:text-left mt-8 md:mt-0">
                                <div className="overflow-hidden">
                                    <p className="text-sm md:text-base text-gray-400 tracking-wider uppercase slide-up-fade animate-[slide-up-fade_0.5s_0.1s_forwards]">
                                        <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-2 opacity-75"></span> 
                                        Full Stack Developer
                                    </p>
                                </div>
                                
                                {/* Title - Improved responsiveness */}
                                <div className="mt-3 md:mt-4 overflow-hidden">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight slide-up-fade animate-[slide-up-fade_0.5s_0.3s_forwards]">
                                        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Golu Kumar</span>
                                    </h1>
                                </div>
                                
                                {/* Typewriter - Better height handling on mobile */}
                                <div className="mt-3 md:mt-4 h-12 sm:h-16 overflow-hidden slide-up-fade animate-[slide-up-fade_0.5s_0.5s_forwards]">
                                    <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300">
                                        I'm a{" "}
                                        <span className="text-white font-medium">
                                            <Typewriter
                                                words={['Frontend Developer', 'Backend Developer', 'Full Stack Developer']}
                                                loop={0}
                                                cursor
                                                cursorStyle="|"
                                                typeSpeed={100}
                                                deleteSpeed={80}
                                                delaySpeed={1500}
                                            />
                                        </span>
                                    </h2>
                                </div>
                                
                                {/* Description - Better text size on mobile */}
                                <div className="mt-3 md:mt-4 overflow-hidden slide-up-fade animate-[slide-up-fade_0.5s_0.7s_forwards]">
                                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0">
                                        Currently pursuing B.Tech in Computer Science and Engineering at Parul University. 
                                        I create exceptional digital experiences with modern web technologies.
                                    </p>
                                </div>
                                
                                {/* Buttons - Improved hover effects and responsive sizing */}
                                <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start overflow-hidden slide-up-fade animate-[slide-up-fade_0.5s_0.9s_forwards]">
                                    <button
                                        onClick={handleDownload}
                                        disabled={downloadStatus !== 'normal'}
                                        className="btn-primary group"
                                    >
                                        <div className="btn-bg bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:from-blue-500 group-hover:to-indigo-500"></div>
                                        <span className="btn-content">
                                            {downloadStatus === 'normal' && (
                                                <>Download Resume <PiArrowCircleDownBold className="ml-1" /></>
                                            )}
                                            {downloadStatus === 'loading' && (
                                                <>Downloading <AiOutlineLoading3Quarters className="ml-1 animate-spin" /></>
                                            )}
                                            {downloadStatus === 'downloaded' && (
                                                <>Downloaded <MdOutlineDownloadDone className="ml-1" /></>
                                            )}
                                        </span>
                                    </button>
                                    
                                    {/* Changed to button for better navigation consistency */}
                                    <button 
                                        onClick={() => scrollToSection('projects')}
                                        className="btn-secondary group"
                                    >
                                        <span>View Projects</span>
                                    </button>
                                </div>
                                
                                {/* Social icons - Improved hover effects */}
                                <div className="mt-8 md:mt-10 flex items-center space-x-4 md:space-x-5 justify-center md:justify-start overflow-hidden slide-up-fade animate-[slide-up-fade_0.5s_1.1s_forwards]">
                                    <a 
                                        href="https://www.linkedin.com/in/golu-kumar-7079b5246/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="social-icon-link"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedin size={18} />
                                    </a>
                                    <a 
                                        href="https://github.com/golu7059" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="social-icon-link"
                                        aria-label="GitHub"
                                    >
                                        <FaGithub size={18} />
                                    </a>
                                    <a 
                                        href="https://hashnode.com/@golu7059" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="social-icon-link"
                                        aria-label="Hashnode"
                                    >
                                        <SiHashnode size={16} />
                                    </a>
                                </div>
                            </div>
                            
                            {/* Right column: Profile image - Improved mobile sizing */}
                            <div className="order-1 md:order-2 relative flex justify-center" style={getParallaxStyle(0.5)}>
                                <div className="relative inline-block">
                                    {/* Background tech icons - Better sizing on mobile */}
                                    <div className="absolute -z-10 inset-0 opacity-40">
                                        {skills.map((skill, index) => {
                                            const angle = (index / skills.length) * Math.PI * 2;
                                            const radius = window.innerWidth < 640 ? 120 : 150;
                                            const x = Math.cos(angle) * radius;
                                            const y = Math.sin(angle) * radius;
                                            
                                            return (
                                                <div
                                                    key={index}
                                                    className="absolute text-2xl sm:text-3xl tech-icon"
                                                    style={{
                                                        top: `calc(50% + ${y}px)`,
                                                        left: `calc(50% + ${x}px)`,
                                                        color: skill.color,
                                                        transform: 'translate(-50%, -50%)',
                                                        animationDelay: `${index * 0.2}s`
                                                    }}
                                                >
                                                    <skill.icon />
                                                </div>
                                            );
                                        })}
                                    </div>
                                    
                                    {/* Profile image with effect - Responsive sizing */}
                                    <div className="relative fade-in animate-[fade-in_1s_0.5s_forwards] opacity-0">
                                        <div className="relative z-10 profile-frame">
                                            <div className="h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 overflow-hidden rounded-full">
                                                <div className="h-full w-full overflow-hidden rounded-full p-1 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500">
                                                    <div className="h-full w-full overflow-hidden rounded-full border-4 sm:border-8 border-black">
                                                        <img
                                                            ref={imageRef}
                                                            src="https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/profileImage.JPG"
                                                            alt="Golu Kumar"
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Animated highlight */}
                                            <div className="absolute inset-0 rounded-full profile-highlight"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Scroll indicator - Improved visibility */}
                <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 fade-in animate-[fade-in_1s_1.5s_forwards] opacity-0">
                    <button 
                        onClick={() => scrollToSection('about')}
                        className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label="Scroll down"
                    >
                        <span className="text-xs sm:text-sm mb-1">Scroll Down</span>
                        <PiCaretDown className="text-lg sm:text-xl animate-bounce" />
                    </button>
                </div>
            </section>

            <style jsx>{`
                /* Basic animations */
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slide-up-fade {
                    from { 
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .slide-up-fade {
                    opacity: 0;
                }
                
                /* Mobile navigation enhancements */
                .mobile-nav-link {
                    display: block;
                    width: 100%;
                }
                
                .mobile-nav-link:hover {
                    color: white;
                    background-color: rgba(59, 130, 246, 0.1);
                }
                
                /* Header styles with improved hover effects */
                .nav-link {
                    position: relative;
                    padding-bottom: 2px;
                    transition: color 0.2s ease;
                }
                
                .nav-link:hover {
                    color: white;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(to right, #60a5fa, #6366f1);
                    transition: width 0.3s ease;
                    border-radius: 1px;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                /* Improved button styles */
                .btn-primary {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    height: 40px;
                    padding: 0 1.25rem;
                    font-weight: 500;
                    font-size: 0.9rem;
                    border-radius: 6px;
                    color: white;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                    transform: translateZ(0);
                }
                
                .btn-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .btn-content {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                }
                
                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
                }
                
                .btn-primary:active {
                    transform: translateY(0);
                    box-shadow: 0 3px 10px rgba(79, 70, 229, 0.3);
                }
                
                .btn-primary:disabled {
                    opacity: 0.8;
                    cursor: not-allowed;
                    transform: translateY(0);
                    box-shadow: none;
                }
                
                .btn-secondary {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    height: 40px;
                    padding: 0 1.25rem;
                    font-weight: 500;
                    font-size: 0.9rem;
                    border-radius: 6px;
                    color: white;
                    background-color: transparent;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                }
                
                .btn-secondary:hover {
                    border-color: rgba(255, 255, 255, 0.5);
                    background-color: rgba(255, 255, 255, 0.08);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
                }
                
                .btn-secondary:active {
                    transform: translateY(0);
                    box-shadow: none;
                }
                
                /* Improved social link styles */
                .social-icon-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    color: white;
                    background-color: rgba(255, 255, 255, 0.08);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    transform: translateZ(0);
                }
                
                .social-icon-link:hover {
                    background-color: rgba(255, 255, 255, 0.15);
                    transform: translateY(-2px) scale(1.05);
                    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15);
                }
                
                .social-icon-link:active {
                    transform: translateY(0) scale(1);
                    box-shadow: none;
                }
                
                /* Profile image effects with better performance */
                .profile-frame {
                    position: relative;
                    border-radius: 50%;
                    transition: transform 0.3s ease;
                }
                
                .profile-frame:hover {
                    transform: scale(1.02);
                }
                
                .profile-highlight {
                    background: linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.08) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.08) 55%, transparent 60%);
                    background-size: 200% 100%;
                    animation: shine 3s ease-in-out infinite;
                }
                
                @keyframes shine {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
                
                /* Tech icon animations with improved performance */
                .tech-icon {
                    opacity: 0;
                    animation: fadeUp 0.8s forwards;
                    will-change: opacity, transform;
                }
                
                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translate(-50%, -40%);
                    }
                    to {
                        opacity: 1;
                        transform: translate(-50%, -50%);
                    }
                }
                
                /* Responsive adjustments */
                @media (max-width: 640px) {
                    .social-icon-link {
                        width: 32px;
                        height: 32px;
                    }
                    
                    .btn-primary, .btn-secondary {
                        height: 38px;
                        padding: 0 1rem;
                        font-size: 0.85rem;
                    }
                }
            `}</style>
        </>
    );
};

export default Home;
