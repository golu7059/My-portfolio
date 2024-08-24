import React from "react";
import { FaSchool, FaGraduationCap, FaBook } from "react-icons/fa";

const Education = () => {
    return (
        <section id="Education" className="p-8 bg-black text-white">
            <h2 className="text-3xl font-bold font-mono text-orange-600 text-center mt-10 mb-10">Education</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* ABPN Bihita */}
                <div className="bg-white text-black rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                        <FaSchool className="text-orange-600 text-3xl mr-4" />
                        <h3 className="text-xl font-bold">ABPN Bihita</h3>
                    </div>
                    <p className="text-sm mb-4">Prepared for JNV calss 6th exam and get Qualified </p>
                    <img 
                    className="rounded-lg"
                    src="Public/ABPN.jpg" 
                    alt="image" />
                     <p className="text-sm mt-4 font-semibold"><span className="text-orange-600 text-lg">Year : </span>2013 - 2015</p>
                    <p className="text-sm mt-1 font-semibold"><span className="text-orange-600 text-lg">Qualified : </span>JNV Exam</p>
                    
                </div>
                {/* JNV Bihiya Card */}
                <div className="bg-white text-black rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                        <FaSchool className="text-orange-600 text-3xl mr-4" />
                        <h3 className="text-xl font-bold">JNV Bihiya</h3>
                    </div>
                    <p className="text-sm mb-4">Studied class 6th-12th </p>
                    <img 
                    className="rounded-lg"
                    src="Public/jnvBihiya4.jpg" 
                    alt="image" />
                    <p className="text-sm mt-4 font-semibold"><span className="text-orange-600 text-lg">Year : </span>2015 - 2021</p>
                    <p className="text-sm mt-1 font-semibold"><span className="text-orange-600 text-lg">10th : </span>88.8%</p>
                    <p className="text-sm mt-1 font-semibold"><span className="text-orange-600 text-lg">12th : </span>88.6%</p>
                   
                </div>
                
                {/* Example of another education card */}
                <div className="bg-white text-black rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                        <FaGraduationCap className="text-orange-600 text-3xl mr-4" />
                        <h3 className="text-xl font-bold">Parul University</h3>
                    </div>
                    <p className="text-sm mb-4">B.Tech in Computer Science and Engineering.</p>
                    <img 
                    className="rounded-lg "
                    src="Public/PU.png" 
                    alt="image" />
                    <p className="text-sm mt-2 font-semibold"><span className="text-orange-600 text-lg">Year : </span>2022 - present</p>
                    <p className="text-sm mt-2 font-semibold"><span className="text-orange-600 text-lg">current Semester : </span>5th</p>
                    <p className="text-sm mt-2 font-semibold"><span className="text-orange-600 text-lg">current CGPA : </span>8.7</p>

                </div>

                {/* More education cards can be added similarly */}
            </div>
        </section>
    );
};

export default Education;
