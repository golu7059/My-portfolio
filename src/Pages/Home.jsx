import React, { useState , useEffect} from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";
import { PiArrowCircleDownBold } from "react-icons/pi";
import { MdOutlineDownloadDone } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Home = () => {
    // State to track the download status
    const [downloadStatus, setDownloadStatus] = useState('normal');

    useEffect(() =>{
        document.title = "golu kumar portfolio"
    },[])

    // Function to handle resume download
    const handleDownload = () => {
        setDownloadStatus('loading');
        // Simulate download delay
        setTimeout(() => {
            setDownloadStatus('downloaded');
        }, 2000); // 2 seconds delay to simulate download
    };

    return (
        <section id='Home' className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="container mx-auto flex flex-col items-center md:flex-row">
                <div className="flex items-center justify-center mt-8 md:mt-0 lg:w-1/2 md:order-last">
                    <img
                        src="Public/profileImage.JPG"
                        alt="Golu Kumar"
                        className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-[0_0_15px_rgba(1,1,255,0.9)]"
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
                        at Parul University, I specialize in many programming languages <br />
                        like C, Java, Python,.. and
                        <span className='text-orange-600 text-2xl font-semibold font-mono text-center'> MERN Stack</span>,
                    </p>
                    <div className="flex items-center gap-3 justify-center md:justify-start mt-6 download">
                        <a
                            href="./Golu_Kumar_Resume.pdf"
                            download={"./Golu_Kumar_Resume.pdf"}
                            className="inline-block bg-red-500 text-white px-6 py-2 rounded-full font-bold hover:bg-red-600 transition duration-300"
                            onClick={handleDownload}
                        >
                            Resume
                        </a>
                        {/* Conditional rendering of icons based on download status */}
                        {downloadStatus === 'normal' && (
                            <PiArrowCircleDownBold className='text-orange-600 text-3xl animate-bounce' />
                        )}
                        {downloadStatus === 'loading' && (
                            <AiOutlineLoading3Quarters className='text-orange-600 text-3xl animate-spin' />
                        )}
                        {downloadStatus === 'downloaded' && (
                            <MdOutlineDownloadDone className='text-green-500 text-3xl animate-pulse' />
                        )}
                    </div>
                    <div className="flex space-x-4 mt-6">
                        <a href="https://www.linkedin.com/in/golu-kumar-7079b5246/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin alt="LinkedIn" className="h-8 w-8 text-white hover:text-orange-600 transform hover:scale-110 transition" />
                        </a>
                        <a href="https://github.com/golu7059" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="h-8 w-8 text-white hover:text-orange-600 transform hover:scale-110 transition" />
                        </a>
                        <a href="https://hashnode.com/@golu7059" target="_blank" rel="noopener noreferrer">
                            <SiHashnode alt="Medium" className="h-8 w-8 text-white hover:text-orange-600 transform hover:scale-110 transition" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
