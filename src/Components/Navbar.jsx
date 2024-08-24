import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center px-11">
        <div>
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        </div>
      <nav className=''>
        <ul className="space-x-4 flex items-center justify-between gap-6">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
