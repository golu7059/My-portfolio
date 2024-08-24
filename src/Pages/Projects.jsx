import React from "react";
import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <section id="Projects" className="p-8 bg-black text-white">
            <h2 className="text-3xl font-bold font-mono text-orange-600 text-center mb-10">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Movie Project Card */}
                <div className="bg-white text-black rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                        <FaCode className="text-orange-600 text-3xl mr-4" />
                        <h3 className="text-xl font-bold">Movie search</h3>
                    </div>
                    <p className="text-sm mb-4">
                        A movie search website build using HTML , CSS and JS . In this I have used IMDB API to fetch movie data as user start typing..
                    </p>
                    <div className="flex items-center justify-between mt-4">
                        <a href="https://github.com/golu7059/movies" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                            <FaGithub className="inline-block mr-2" /> View on GitHub
                        </a>
                        <a href="#Projects" rel="noopener noreferrer" className="text-orange-600 hover:underline cursor-not-allowed">
                            <FaExternalLinkAlt className="inline-block mr-2" /> Live Demo
                        </a>
                    </div>
                </div>

                {/* LMS Project Cards */}
                <div className="bg-white text-black rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                        <FaCode className="text-orange-600 text-3xl mr-4" />
                        <h3 className="text-xl font-bold">Learning Management System</h3>
                    </div>
                    <p className="text-sm mb-4">
                        A full-featured Learning Management System (LMS) built using the MERN stack. Features include user authentication, course management, and payment based subscription..
                    </p>
                    <div className="flex items-center justify-between mt-4">
                        <a href="https://github.com/golu7059/LMS" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                            <FaGithub className="inline-block mr-2" /> View on GitHub
                        </a>
                        <a href="#Projects" rel="noopener noreferrer" className="text-orange-600 hover:underline cursor-not-allowed">
                            <FaExternalLinkAlt className="inline-block mr-2" /> Live Demo
                        </a>
                    </div>
                </div>

                {/* Pokedex Project Card  */}
                <div className="bg-white text-black rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                        <FaCode className="text-orange-600 text-3xl mr-4" />
                        <h3 className="text-xl font-bold">Pokedex App</h3>
                    </div>
                    <p className="text-sm mb-4">
                        A responsive web application built using React and the PokeAPI to fetch and display information about different Pokémon characters.
                    </p>
                    <div className="flex items-center justify-between mt-4">
                        <a href="https://github.com/golu7059/Pokedex" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                            <FaGithub className="inline-block mr-2" /> View on GitHub
                        </a>
                        <a href="#Projects" rel="noopener noreferrer" className="text-orange-600 hover:underline cursor-not-allowed">
                            <FaExternalLinkAlt className="inline-block mr-2" /> Live Demo
                        </a>
                    </div>
                </div>

                {/* TODO Project Card  */}
                <div className="bg-white text-black rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                        <FaCode className="text-orange-600 text-3xl mr-4" />
                        <h3 className="text-xl font-bold">Auntication based To-Do App</h3>
                    </div>
                    <p className="text-sm mb-4">
                        An advanced to-do application featuring user authentication,  and real-time updates using Flask , Sql Lite and css.
                    </p>
                    <div className="flex items-center justify-between mt-4">
                        <a href="https://github.com/golu7059/flask-Todo" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                            <FaGithub className="inline-block mr-2" /> View on GitHub
                        </a>
                        <a href="https://golutodo.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                            <FaExternalLinkAlt className="inline-block mr-2" /> Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
