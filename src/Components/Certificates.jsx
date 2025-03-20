import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaCertificate, FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";

const Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    
    // Certificate data
    const certificates = [
        { 
            id: 1, 
            src: "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/FullStackCertificate.png", 
            title: "Full Stack Developer Certificate",
            issuer: "Udemy",
            date: "November 2023",
            skills: ["React", "Node.js", "MongoDB", "Express"]
        },
        { 
            id: 2, 
            src: "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/CNCertificate.jpg", 
            title: "Computer Networking Certificate",
            issuer: "Cisco Networking Academy",
            date: "June 2023",
            skills: ["Networking", "Routing", "TCP/IP", "Security"]
        },
        {
            id: 3, 
            src: "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/TheoryOfComputation.jpg", 
            title: "Theory Of Computation Certificate",
            issuer: "NPTEL - IIT Kharagpur",
            date: "August 2023",
            skills: ["Automata Theory", "Formal Languages", "Turing Machines"]
        },
        { 
            id: 4, 
            src: "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/cyberBullyingCertificate.jpg", 
            title: "Cyber Bullying Awareness Certificate",
            issuer: "Indian Government Initiative",
            date: "February 2023",
            skills: ["Digital Safety", "Online Ethics", "Cybersecurity"]
        }
    ];

    // Custom arrow components
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 40,
        height: 40,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.5)',
        borderRadius: '50%',
        transition: 'all 0.3s ease',
    };
    
    const CustomPrevArrow = (onClickHandler, hasPrev) => (
        <button 
            type="button" 
            onClick={onClickHandler} 
            className={`${!hasPrev ? 'opacity-30' : 'opacity-100 hover:bg-orange-600'}`}
            style={{ ...arrowStyles, left: 15 }}
            aria-label="Previous slide"
            disabled={!hasPrev}
        >
            <FaChevronLeft className="text-white" />
        </button>
    );
    
    const CustomNextArrow = (onClickHandler, hasNext) => (
        <button 
            type="button"
            onClick={onClickHandler} 
            className={`${!hasNext ? 'opacity-30' : 'opacity-100 hover:bg-orange-600'}`}
            style={{ ...arrowStyles, right: 15 }}
            aria-label="Next slide"
            disabled={!hasNext}
        >
            <FaChevronRight className="text-white" />
        </button>
    );

    return (
        <section id="Certificates" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-pink-500/10 to-orange-500/5 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-500/10 to-red-500/5 blur-3xl rounded-full"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="flex flex-col items-center mb-16 reveal">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-orange-600 mb-5 shadow-glow">
                        <FaCertificate className="text-white text-2xl" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-2">
                        Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-600">Certifications</span>
                    </h2>
                    <p className="text-gray-400 text-center max-w-2xl">
                        Credentials that validate my skills and demonstrate my commitment to continuous learning.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-orange-600 rounded-full mt-4"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Left side - Certificates Carousel */}
                    <div className="md:w-1/2 w-full reveal">
                        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 shadow-xl overflow-hidden">
                            <Carousel
                                showThumbs={false}
                                infiniteLoop
                                autoPlay
                                interval={4000}
                                transitionTime={800}
                                showStatus={false}
                                emulateTouch
                                useKeyboardArrows
                                dynamicHeight={false}
                                renderArrowPrev={(onClickHandler, hasPrev) => CustomPrevArrow(onClickHandler, hasPrev)}
                                renderArrowNext={(onClickHandler, hasNext) => CustomNextArrow(onClickHandler, hasNext)}
                                className="certificate-carousel"
                            >
                                {certificates.map((certificate) => (
                                    <div key={certificate.id} className="p-2 relative group">
                                        <div className="relative overflow-hidden rounded-xl">
                                            <img
                                                src={certificate.src}
                                                alt={certificate.title}
                                                className="rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                                            />
                                            
                                            {/* Overlay with expand button */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                                <h3 className="text-white text-xl font-bold mb-2">{certificate.title}</h3>
                                                <p className="text-gray-300 text-sm mb-2">Issued by: {certificate.issuer}</p>
                                                <button 
                                                    className="self-center mt-2 bg-white/20 backdrop-blur-sm border border-white/30 p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedCertificate(certificate);
                                                    }}
                                                    aria-label="View certificate"
                                                >
                                                    <FaExpand className="text-white" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>

                    {/* Right side - Text Content */}
                    <div className="md:w-1/2 w-full mt-8 md:mt-0 reveal">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white">
                                Continuous Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-600">Journey</span>
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Throughout my career, I have pursued various certifications that demonstrate my commitment to excellence and continuous improvement. These achievements reflect my dedication to mastering new technologies and expanding my knowledge in diverse fields.
                            </p>
                            <p className="text-gray-400">
                                From full stack development to cybersecurity, each certificate showcases my ability to learn, adapt, and apply my skills effectively. These credentials not only validate my technical expertise but also my passion for growth and innovation.
                            </p>
                            
                            {/* Skills badges */}
                            <div className="pt-4">
                                <h4 className="text-lg font-medium text-white mb-3">Key Certified Skills:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Full Stack Development", "Computer Networking", "Theory of Computation", "Cybersecurity", "Data Structures", "Algorithms"].map((skill, i) => (
                                        <span 
                                            key={i}
                                            className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-pink-500/20 to-orange-600/20 border border-pink-500/30 text-gray-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Certificate Modal */}
            {selectedCertificate && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedCertificate(null)}>
                    <div className="relative max-w-4xl w-full bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="absolute -top-4 -right-4 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center z-10"
                            onClick={() => setSelectedCertificate(null)}
                            aria-label="Close"
                        >
                            ✕
                        </button>
                        <img 
                            src={selectedCertificate.src}
                            alt={selectedCertificate.title}
                            className="w-full rounded-lg"
                        />
                        <div className="mt-4">
                            <h3 className="text-xl font-bold text-white">{selectedCertificate.title}</h3>
                            <p className="text-gray-400">Issued by {selectedCertificate.issuer} • {selectedCertificate.date}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {selectedCertificate.skills.map((skill, i) => (
                                    <span key={i} className="px-2 py-1 bg-white/10 text-xs rounded-full text-white">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;
