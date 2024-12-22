import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white p-4 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 reveal">
        <h1 className="text-2xl font-bold hover:text-red-600 cursor-pointer" onClick={() => window.open("https://golu7059.github.io/old-Portfolio/index.html", "_blank")}>Old Portfolio</h1>

        {/* Navigation Links (visible on larger screens) */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
          <li className=" active:text-orange-700 realtive">
              <div class="relative hover:text-orange-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-600 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-600 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <span><a href="#Home">Home</a></span>
              </div>
            </li>
            <li className=" active:text-orange-700 realtive">
              <div class="relative hover:text-orange-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-600 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-600 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <span><a href="#About">About</a></span>
              </div>
            </li>
            <li className=" active:text-orange-700 realtive">
              <div class="relative hover:text-orange-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-600 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-600 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <span><a href="#Education">Education</a></span>
              </div>
            </li>
            <li className=" active:text-orange-700 realtive">
              <div class="relative hover:text-orange-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-600 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-600 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <span><a href="#Certificates">Certificates</a></span>
              </div>
            </li>
            <li className=" active:text-orange-700 realtive">
              <div class="relative hover:text-orange-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-600 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-600 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <span><a href="#Projects">Projects</a></span>
              </div>
            </li>
            <li className=" active:text-orange-700 realtive">
              <div class="relative hover:text-orange-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-600 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-600 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <span><a href="#Contact">Contact</a></span>
              </div>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon (visible on smaller screens) */}
        <div
          className="md:hidden flex items-center justify-end"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FaTimes className="text-2xl cursor-pointer opacity-100 z-10 hover:text-red-600 active:text-green-800" />
          ) : (
            <FaBars className="text-2xl cursor-pointer hover:text-orange-700 active:text-orange-500" />
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`fixed top-0 left-0 w-full bg-black transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-1/2 opacity-85" : "max-h-0 opacity-0 overflow-hidden"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center space-y-2 py-6">
          <li className="text-center hover:text-orange-600 active:text-orange-700 hover:underline">
            <a href="#Home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li className="text-center hover:text-orange-600 active:text-orange-700 hover:underline">
            <a href="#About" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li className="text-center hover:text-orange-600 active:text-orange-700 hover:underline">
            <a href="#Education" onClick={toggleMenu}>
              Education
            </a>
          </li>
          <li className="text-center hover:text-orange-600 active:text-orange-700 hover:underline">
            <a href="#Projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li className="text-center hover:text-orange-600 active:text-orange-700 hover:underline">
            <a href="#Contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
