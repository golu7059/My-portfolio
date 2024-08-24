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
                {/* Logo */}
                <h1 className="text-2xl font-bold hover:text-red-600">Portfolio</h1>

                {/* Mobile Menu Icon */}
                <div className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <FaTimes className="text-2xl cursor-pointer" /> : <FaBars className="text-2xl cursor-pointer" />}
                </div>

                {/* Navigation Links */}
                <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} w-full md:w-auto mt-4 md:mt-0`}>
                    <ul className="md:flex md:space-x-6 space-y-4 md:space-y-0">
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
            </div>
        </header>
    );
};

export default Navbar;
