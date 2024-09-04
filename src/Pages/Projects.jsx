import React from "react";
import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Movie Search",
    description: "A movie search website built using HTML, CSS, and JavaScript. Fetches movie data from the IMDB API as you type.",
    imgSrc: "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/movieProject.png", 
    githubLink: "https://github.com/golu7059/movies",
    liveDemoLink: "https://golu-movies.vercel.app/",
  },
  {
    title: "Learning Management System",
    description: "A full-featured LMS built with the MERN stack. Includes user authentication, course management, and subscription features.",
    imgSrc: "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/Lms.png", 
    githubLink: "https://github.com/golu7059/LMS",
    liveDemoLink: "",
  },
  {
    title: "Pokedex App",
    description: "A responsive web app using React and PokeAPI to display Pokémon information.",
    imgSrc: "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/PokedexProject.png", 
    githubLink: "https://github.com/golu7059/Pokedex",
    liveDemoLink: "https://golu-pokedex-project.vercel.app/",
  },
  {
    title: "Authenticated To-Do App",
    description: "An advanced to-do application with user authentication and real-time updates using Flask and SQLite.",
    imgSrc: "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/todoProject.png",
    githubLink: "https://github.com/golu7059/flask-Todo",
    liveDemoLink: "https://golutodo.onrender.com/",
  },
  {
    title: "Tic-tac-Toe game",
    description: "A Tic-tac-toe game build using React, Tailwind and currently I am integreating socket.io so users can play oline also",
    imgSrc: "https://raw.githubusercontent.com/golu7059/My-portfolio/master/Public/tic-tac-toe.png",
    githubLink: "https://github.com/golu7059/tic-tac-toe",
    liveDemoLink: "https://tic-tac-toe-dun-seven.vercel.app/",
  }
];

const Projects = () => {
  return (
    <section id="Projects" className="p-8 bg-gradient-to-b from-black via-gray-800 to-black text-white">
      <h2 className="text-3xl font-bold font-mono text-center mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white text-black rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FaCode className="text-orange-600 text-3xl mr-4" />
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
              <p className="text-sm mb-4">{project.description}</p>
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="flex justify-between items-center">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline flex items-center"
                >
                  <FaGithub className="mr-2 text-orange-500" /> View on GitHub
                </a>
                {project.liveDemoLink && (
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:underline flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2 text-orange-500" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
