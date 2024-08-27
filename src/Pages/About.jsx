import React from 'react';

const About = () => {
  return (
    <div id="About" className="p-8 bg-black w-full flex items-center justify-center">
      <div className="relative w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
          <img 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500"
            src="https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/aboutCoding.png" 
            alt="coding_logo"
          />
        </div>
        <div className="flex flex-col md:flex-row mt-16">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold text-orange-600 font-mono text-center md:text-left">
              About Me
            </h2>
            <p className="text-black text-lg mt-5">
              As a passionate and dedicated Full Stack Developer, I am committed to leveraging my 
              diverse skill set to build innovative and efficient solutions. Currently pursuing a B.Tech 
              in <span className='text-orange-600'>Computer Science and Engineering</span> at Parul University, I have maintained a strong academic
              record with a CGPA of 8.7, which reflects my dedication and understanding of core technical concepts.

              I am an adaptable person, with a strong desire to learn and grow. 
              I am a <span className='text-orange-600'>quick learner</span>, and I am able to work well in a team environment.

              <span className='hidden md:block'>My technical repertoire includes proficiency in Java, JavaScript, Python, and C, along with expertise in frontend 
              technologies such as HTML, CSS, Tailwind, Bootstrap and React. On the backend, I excel in Node.js, 
              Express, Flask, and Django, complemented by hands-on experience with databases like MySQL, MongoDB, 
              and PostgreSQL.</span>
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <p className="text-black text-lg mt-5 hidden md:block">
              Throughout my journey, I have successfully developed and deployed a range of projects. 
              During my internship at Bharat Intern, I demonstrated my capability to work on complex projects,
              including implementing a drag-and-drop feature, creating a task manager, and developing a 
              video conferencing application. My project portfolio showcases my ability to create full-featured 
              applications, such as a Learning Management System with advanced functionalities, 
              a Pokedex app with seamless data integration, an advanced to-do app with secure user authentication, 
              and a virtual bank application with robust security features.

              My commitment to <span className='text-orange-600'>continuous learning</span> is evident from my current focus 
              on mastering Spring Boot, Docker, Microservices, and Kafka. I am also proud of my achievements,
              including a high rank on Leetcode and earning an <span className='text-orange-600'>Elite + Silver </span>
              certificate from an IIT Kharagpur NPTEL course.

              Driven by curiosity and a love for technology, I am always eager to take on new challenges
              and collaborate with like-minded professionals. I thrive in dynamic environments where
              I can contribute to impactful projects and grow both personally and professionally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
