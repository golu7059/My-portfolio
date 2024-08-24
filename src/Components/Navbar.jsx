import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center px-11 fixed w-full">
        <div className='w-1/3'>
        <h1 className="text-2xl font-bold">Portfolio</h1>
        </div>
      <nav className='w-1/2 '>
        <ul className="space-x-4 w-5/6 flex items-center justify-around gap-7">
          <li className=' hover:text-orange-600 active:text-orange-700 hover:underline'><a href="#Home">Home</a></li>
          <li className=' hover:text-orange-600 active:text-orange-700 hover:underline'><a href="#About">About</a></li>
          <li className=' hover:text-orange-600 active:text-orange-700 hover:underline'><a href="#Education">Education</a></li>
          <li className=' hover:text-orange-600 active:text-orange-700 hover:underline'><a href="#projects">Projects</a></li>
          <li className=' hover:text-orange-600 active:text-orange-700 hover:underline'><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
