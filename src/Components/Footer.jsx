import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Copyright Information */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Golu Kumar. All rights reserved.</p>
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center space-x-6 mb-4 md:mb-0">
                    <a href="#Home" className="text-sm hover:text-orange-600">Home</a>
                    <a href="#About" className="text-sm hover:text-orange-600">About</a>
                    <a href="#Projects" className="text-sm hover:text-orange-600">Projects</a>
                    <a href="#Education" className="text-sm hover:text-orange-600">Education</a>
                    <a href="#Contact" className="text-sm hover:text-orange-600">Contact</a>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-4">
                    <a href="https://linkedin.com/in/golu-kumar-7079b5246" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a href="https://github.com/golu7059" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
                        <FaGithub className="text-2xl" />
                    </a>
                    <a href="https://twitter.com/golu7059" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
                        <FaTwitter className="text-2xl" />
                    </a>
                    <a href="mailto:golukumar@example.com" className="hover:text-orange-600">
                        <FaEnvelope className="text-2xl" />
                    </a>
                </div>
            </div>

            {/* Footer Bottom Line */}
            <div className="border-t border-gray-800 mt-4">
                <p className="text-center text-sm text-gray-500 pt-2">Made with ❤️ by Golu Kumar</p>
            </div>
        </footer>
    );
};

export default Footer;
