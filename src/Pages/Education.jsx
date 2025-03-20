import React from "react";
import { FaSchool, FaGraduationCap, FaCalendarAlt, FaMedal } from "react-icons/fa";

const Education = () => {
    const educationData = [
        {
            id: 1,
            school: "ABPN Bihita",
            period: "2013 - 2015",
            qualification: "JNV Exam Qualified",
            description: "Prepared for JNV class 6th exam and got Qualified",
            image: "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/ABPN.jpg",
            icon: <FaSchool className="text-white text-2xl" />
        },
        {
            id: 2,
            school: "JNV Bihiya",
            period: "2015 - 2021",
            qualification: "10th: 88.8%, 12th: 88.6%",
            description: "Studied class 6th-12th",
            image: "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/jnvBihiya4.jpg",
            icon: <FaSchool className="text-white text-2xl" />
        },
        {
            id: 3,
            school: "Parul University",
            period: "2022 - Present",
            qualification: "Current CGPA: 8.7",
            description: "B.Tech in Computer Science and Engineering",
            image: "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/PU.png",
            icon: <FaGraduationCap className="text-white text-2xl" />
        }
    ];

    return (
        <section id="Education" className="py-20 bg-gradient-to-b from-black via-blue-950 to-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-purple-500/5 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-500/10 to-blue-500/5 blur-3xl rounded-full"></div>
            
            {/* Grid background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="flex flex-col items-center mb-16 reveal">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-5 shadow-lg">
                        <FaGraduationCap className="text-white text-2xl" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-2">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Academic Journey</span>
                    </h2>
                    <p className="text-gray-400 text-center max-w-2xl">
                        From primary education to higher studies, each step has shaped my knowledge and perspective.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4"></div>
                </div>

                {/* Timeline layout - Fixed to ensure consistent centering of timeline markers */}
                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden md:block"></div>
                    
                    <div className="space-y-12">
                        {educationData.map((item, index) => (
                            <div key={item.id} className="flex flex-col md:flex-row items-center justify-center reveal">
                                {/* Timeline content - alternating layout for desktop with fixed structure */}
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-last'}`}>
                                    <div 
                                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:bg-white/10 hover:scale-105 h-full"
                                    >
                                        <h3 className="text-2xl font-bold text-white mb-2">{item.school}</h3>
                                        <div className={`flex items-center mb-3 text-sm text-gray-400 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                            <FaCalendarAlt className={`mr-2 ${index % 2 === 0 ? 'md:order-1 md:ml-2 md:mr-0' : ''}`} />
                                            <span>{item.period}</span>
                                        </div>
                                        <p className="text-gray-300 mb-4">{item.description}</p>
                                        <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg inline-flex items-center">
                                                <FaMedal className="text-white mr-2" />
                                                <span className="text-white font-medium">{item.qualification}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Timeline marker - Ensuring it's always in the middle */}
                                <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center my-4 md:my-0 z-10">
                                    <div className="relative">
                                        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center z-10 relative shadow-glow">
                                            {item.icon}
                                        </div>
                                        <div className="absolute inset-0 rounded-full animate-pulse-slow bg-white/20 blur-md"></div>
                                    </div>
                                </div>
                                
                                {/* Image for desktop - alternating layout */}
                                <div className={`md:w-1/2 hidden md:block ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                                    <div className="relative overflow-hidden rounded-xl group transform transition duration-500 hover:scale-105">
                                        <img 
                                            src={item.image} 
                                            alt={item.school}
                                            className="w-full h-48 object-cover rounded-xl transform transition duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    </div>
                                </div>
                                
                                {/* Images for mobile only */}
                                <div className="w-full md:hidden mt-4">
                                    <div className="relative overflow-hidden rounded-xl">
                                        <img 
                                            src={item.image} 
                                            alt={item.school}
                                            className="w-full h-48 object-cover rounded-xl"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
