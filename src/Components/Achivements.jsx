import React from "react";
import "tailwindcss/tailwind.css";

const Achievements = () => {
  return (
    <section className="bg-black py-16 px-8  bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left side content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-4">
            <q> Where <span className="text-pink-500">Achievements</span> Meet Expectations </q>
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Dive into my accomplishments, including my coding journey, hackathon participation, and contributions to open source projects. These experiences showcase my commitment to continuous learning and problem-solving in the tech industry.
          </p>
          <div className="space-x-4">
            <a href="#Projects">
            <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition duration-300">
              Explore My Work
            </button>
            </a>
            <a href="#Contact">
            <button className="border-2 border-orange-500 text-orange-500 px-6 py-2 rounded hover:bg-orange-600 hover:text-white transition duration-300">
              Contact Me
            </button>
            </a>
            
          </div>
        </div>

        {/* Right side images */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            {/* Each image in a circular mask */}
            <div className="transform hover:scale-105 transition duration-500">
              <img
                src="https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/leetcodeScreenshot.png"
                alt="LeetCode Profile"
                className="w-full rounded-3xl shadow-lg hover:shadow-orange-500"
              />
            </div>
            <div className="transform hover:scale-105 transition duration-500">
              <img
                src="https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/githubScreenshot.png"
                alt="GitHub Activity"
                className="w-full rounded-3xl shadow-lg hover:shadow-orange-500"
              />
            </div>
            <div className="transform hover:scale-105 transition duration-500">
              <img
                src="https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/hackathoneCertificate.png"
                alt="Hackathon Participation"
                className="w-full rounded-3xl shadow-lg hover:shadow-orange-500"
              />
            </div>
            <div className="transform hover:scale-105 transition duration-500">
              <img
                src="https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/linkedinScreenshot.png"
                alt="LinkedIn Profile"
                className="w-full rounded-2xl shadow-lg hover:shadow-orange-500"
              />
            </div>
            <div className="transform hover:scale-105 transition duration-500">
              <img
                src="https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/codeRazers_certificate.jpg"
                alt="codeRazers certificate"
                className="w-full rounded-2xl shadow-lg hover:shadow-orange-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
