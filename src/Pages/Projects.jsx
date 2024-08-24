import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-2xl font-bold">Projects</h2>
      {/* Example project card */}
      <div className="mt-4 bg-white p-4 shadow-md">
        <h3 className="text-xl font-bold">Project Title</h3>
        <p className="mt-2">A brief description of the project goes here. What technology was used, and what problem does it solve?</p>
      </div>
    </section>
  );
};

export default Projects;
