import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the CSS for the carousel
import { Carousel } from "react-responsive-carousel";

const Certificates = () => {
    // Replace these paths with your actual certificate image paths
    const certificates = [
        { id: 1, src: "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/FullStackCertificate.png", title: "Full Stack Developer Certificate" },
        { id: 2, src: "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/CNCertificate.jpg", title: "Computer Networking Certificate" },
        {id: 3, src: "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/TheoryOfComputation.jpg", title: "TOC Certificate"},
        { id: 4, src: "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/cyberBullyingCertificate.jpg", title: "Cyber Bullying Awareness Certificate" },
        // Add more certificates as needed
    ];

    return (
        <section id="Certificates" className="bg-black text-white py-16 px-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                {/* Left side - Certificates Carousel */}
                <div className="md:w-1/2 w-full">
                    <Carousel
                        showThumbs={false}
                        infiniteLoop
                        autoPlay
                        interval={3000}
                        transitionTime={600}
                        showStatus={false}
                        emulateTouch
                        useKeyboardArrows
                        className="shadow-2xl rounded-lg overflow-hidden"
                        dynamicHeight={false}
                    >
                        {certificates.map((certificate) => (
                            <div key={certificate.id} className="p-4 transform transition duration-300 hover:scale-105">
                                <div className="relative">
                                    <img
                                        src={certificate.src}
                                        alt={certificate.title}
                                        className="rounded-lg shadow-xl hover:shadow-2xl hover:shadow-orange-600 transition-shadow duration-500"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 rounded-b-lg">
                                        <p className="text-center text-lg">{certificate.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>

                {/* Right side - Text Content */}
                <div className="md:w-1/2 w-full mt-8 md:mt-0 md:pl-12 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 mb-4">
                        Achievements & Certifications
                    </h2>
                    <p className="text-xl text-gray-300 mb-4">
                        Throughout my career, I have pursued various certifications that demonstrate my commitment to excellence and continuous improvement. These achievements reflect my dedication to mastering new technologies and expanding my knowledge in diverse fields.
                    </p>
                    <p className="text-lg text-gray-400">
                        From full stack development to cybersecurity, each certificate showcases my ability to learn, adapt, and apply my skills effectively. These credentials not only validate my technical expertise but also my passion for growth and innovation.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
