import React from "react";
import { FaSchool, FaGraduationCap, FaBook } from "react-icons/fa";

const Education = () => {
    return (
        <section id="Education" className="p-8 bg-gradient-to-b from-black via-blue-900 to-black text-white">
            <h2 className="text-4xl font-bold font-sans text-center mt-10 mb-16 animate-fadeIn tracking-wider text-gradient-to-r from-white to-red-600">
                My Academic Journey
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {/* ABPN Bihita */}
               <div className="bg-gradient-to-r from-white to-gray-200 text-black rounded-lg p-6 shadow-lg transform transition duration-700 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-l hover:from-orange-100 hover:to-white">
                    <div className="flex items-center mb-4">
                        <FaSchool className="text-orange-600 text-4xl mr-4 animate-bounce" />
                        <h3 className="text-xl font-bold">ABPN Bihita</h3>
                    </div>
                    <p className="text-sm mb-4">Prepared for JNV class 6th exam and got Qualified</p>
                    <div className="relative">
                        <img 
                            className="rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg"
                            src="https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/ABPN.jpg" 
                            alt="ABPN Bihita" 
                        />
                    </div>
                    <p className="text-sm mt-4 font-semibold"><span className="text-orange-600 text-lg">Year:</span> 2013 - 2015</p>
                    <p className="text-sm mt-1 font-semibold"><span className="text-orange-600 text-lg">Qualified:</span> JNV Exam</p>
                </div>

                 {/* JNV Bihiya */}
                <div className="bg-gradient-to-r from-white to-gray-200 text-black rounded-lg p-6 shadow-lg transform transition duration-700 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-l hover:from-orange-100 hover:to-white">
                    <div className="flex items-center mb-4">
                        <FaSchool className="text-orange-600 text-4xl mr-4 animate-bounce" />
                        <h3 className="text-xl font-bold">JNV Bihiya</h3>
                    </div>
                    <p className="text-sm mb-4">Studied class 6th-12th</p>
                    <div className="relative">
                        <img 
                            className="rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg"
                            src="https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/jnvBihiya4.jpg" 
                            alt="JNV Bihiya" 
                        />
                    </div>
                    <p className="text-sm mt-4 font-semibold"><span className="text-orange-600 text-lg">Year:</span> 2015 - 2021</p>
                    <p className="text-sm mt-1 font-semibold"><span className="text-orange-600 text-lg">10th:</span> 88.8%</p>
                    <p className="text-sm mt-1 font-semibold"><span className="text-orange-600 text-lg">12th:</span> 88.6%</p>
                </div>

                 {/* Parul University */}
                 <div className="bg-gradient-to-r from-white to-gray-200 text-black rounded-lg p-6 shadow-lg transform transition duration-700 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-l hover:from-orange-100 hover:to-white">
                    <div className="flex items-center mb-4">
                        <FaGraduationCap className="text-orange-600 text-4xl mr-4 animate-bounce" />
                        <h3 className="text-xl font-bold">Parul University</h3>
                    </div>
                    <p className="text-sm mb-4">B.Tech in Computer Science and Engineering</p>
                    <div className="relative">
                        <img 
                            className="rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg"
                            src="https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/PU.png" 
                            alt="Parul University" 
                        />
                    </div>
                    <p className="text-sm mt-4 font-semibold"><span className="text-orange-600 text-lg">Year:</span> 2022 - Present</p>
                    <p className="text-sm mt-1 font-semibold"><span className="text-orange-600 text-lg">Current Semester:</span> 5th</p>
                    <p className="text-sm mt-1 font-semibold"><span className="text-orange-600 text-lg">Current CGPA:</span> 8.7</p>
                </div>
            </div>
        </section>
    );
};

export default Education;
