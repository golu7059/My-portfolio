import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center md:flex-row">
        <div className="text-center md:text-left">
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
            An enthusiastic Full Stack Web Developer with a strong set of technical as well as non-technical skills and a dedication towards creating useful and interactive web applications.
          </p>
          <div className="flex items-center justify-center md:justify-start mt-6">
            <a
              href="#resume"
              className="inline-block bg-red-500 text-white px-6 py-2 rounded-full font-bold hover:bg-red-600 transition duration-300"
            >
              Resume
            </a>
          </div>
          <div className="flex space-x-4 mt-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="path-to-linkedin-icon" alt="LinkedIn" className="h-8 w-8" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="path-to-github-icon" alt="GitHub" className="h-8 w-8" />
            </a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
              <img src="path-to-medium-icon" alt="Medium" className="h-8 w-8" />
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-12">
          <img
            src="path-to-profile-image.jpg"
            alt="Atul Kumar"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;