import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-black text-white p-4 fixed w-full top-0 left-0 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">

                <h1 className="text-2xl font-bold hover:text-red-600 ">Portfolio</h1>

                {/* Navigation Links (visible on larger screens) */}
                <nav className="hidden md:flex space-x-6">
                    <ul className="flex space-x-6">
                        <li className="hover:text-orange-600 active:text-orange-700 hover:underline">
                            <a href="#Home">Home</a>
                        </li>
                        <li className="hover:text-orange-600 active:text-orange-700 hover:underline">
                            <a href="#About">About</a>
                        </li>
                        <li className="hover:text-orange-600 active:text-orange-700 hover:underline">
                            <a href="#Education">Education</a>
                        </li>
                        <li className="hover:text-orange-600 active:text-orange-700 hover:underline">
                            <a href="#Projects">Projects</a>
                        </li>
                        <li className="hover:text-orange-600 active:text-orange-700 hover:underline">
                            <a href="#Contact">Contact</a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Icon (visible on smaller screens) */}
                <div className="md:hidden flex items-center justify-end" onClick={toggleMenu}>
                    {isOpen ? <FaTimes className="text-2xl cursor-pointer" /> : <FaBars className="text-2xl cursor-pointer" />}
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <nav
                className={`fixed top-0 left-0 w-full bg-black transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-1/2 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                } md:hidden`}
            >
                <ul className="flex flex-col items-center space-y-2 py-6">
                    <li className="text-center hover:text-orange-600 active:text-orange-700 hover:underline">
                        <a href="#Home" onClick={toggleMenu}>Home</a>
                    </li>
                    <li className="text-center hover:text-orange-600 active:text-orange-700 hover:underline">
                        <a href="#About" onClick={toggleMenu}>About</a>
                    </li>
                    <li className="text-center hover:text-orange-600 active:text-orange-700 hover:underline">
                        <a href="#Education" onClick={toggleMenu}>Education</a>
                    </li>
                    <li className="text-center hover:text-orange-600 active:text-orange-700 hover:underline">
                        <a href="#Projects" onClick={toggleMenu}>Projects</a>
                    </li>
                    <li className="text-center hover:text-orange-600 active:text-orange-700 hover:underline">
                        <a href="#Contact" onClick={toggleMenu}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
