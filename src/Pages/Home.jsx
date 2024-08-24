import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";

const Home = () => {
    return (
        <section className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="container mx-auto flex flex-col items-center md:flex-row">
                <div className="flex items-center justify-center mt-8 md:mt-0 lg:w-1/2 md:order-last">
                    <img
                        src="Public/profileImage.JPG"
                        alt="Golu Kumar"
                        className=" rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-[0_0_15px_rgba(1,1,255,0.9)]"
                    />
                </div>
                
                <div className="text-center md:text-left lg:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Hi, I am <span className="text-red-500">Golu Kumar</span>,
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-red-500 mt-2">
                        <Typewriter
                            words={['Frontend Developer', 'Backend Developer', 'Full Stack Developer']}
                            loop={0}
                            cursor
                            cursorStyle=".."
                            typeSpeed={140}
                            deleteSpeed={25}
                            delaySpeed={2000}
                        />
                    </h2>
                    <p className="mt-4 text-lg md:text-xl">
                        As a passionate Full Stack Developer pursuing a B.Tech in Computer Science
                        at Parul University, I specialize in many programming languages <br/>
                        like C, Java, Python,.. and
                        <span className='text-orange-600 text-2xl font-semibold font-mono text-center'> MERN Stack</span>,
                    </p>
                    <div className="flex items-center justify-center md:justify-start mt-6 download">
                        <a
                            href="./Golu_Kumar_Resume.pdf"
                            download={"./Golu_Kumar_Resume.pdf"}
                            className="inline-block bg-red-500 text-white px-6 py-2 rounded-full font-bold hover:bg-red-600 transition duration-300"
                        >
                            Resume
                        </a>
                    </div>
                    <div className="flex space-x-4 mt-6">
                        <a href="https://www.linkedin.com/in/golu-kumar-7079b5246/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin alt="LinkedIn" className="h-8 w-8" />
                        </a>
                        <a href="https://github.com/golu7059" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="h-8 w-8" />
                        </a>
                        <a href="https://hashnode.com/@golu7059" target="_blank" rel="noopener noreferrer">
                            <SiHashnode alt="Medium" className="h-8 w-8" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
