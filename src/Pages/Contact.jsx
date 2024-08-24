import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdOutlineDownloadDone } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Contact = () => {
    // State to track the submission status
    const [submitStatus, setSubmitStatus] = useState('normal');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form from submitting the traditional way
        setSubmitStatus('loading');

        // Simulate sending delay
        setTimeout(() => {
            setSubmitStatus('sent');
        }, 2000); // 2 seconds delay to simulate sending the message

        // Reset to normal state after a delay
        setTimeout(() => {
            setSubmitStatus('normal');
            event.target.reset(); // Reset form fields
        }, 4000); // 4 seconds total to reset the button and form
    };

    return (
        <section id="Contact" className="p-8 bg-black text-white">
            {/* Section Heading with Animation */}
            <h2 className="text-3xl font-bold text-orange-600 text-center font-mono mt-6 mb-10">Let's Connect</h2>

            {/* Flex Container for Contact Info and Form */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {/* Contact Information Card */}
                <div className="flex flex-col items-center bg-white text-black p-6 rounded-lg shadow-lg w-full md:w-1/3">
                    <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
                    <p className="text-sm text-center mb-4">
                        Feel free to reach out to me via email or phone. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    <div className="flex items-center mb-2">
                        <FaEnvelope className="text-orange-600 mr-2" />
                        <span>golukumarjaisidih@gmail.com</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <FaPhone className="text-orange-600 mr-2" />
                        <span>+91 926414 7658</span>
                    </div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-orange-600 mr-2" />
                        <span>Parul University, Vadodara, India</span>
                    </div>
                </div>

                {/* Contact Form with Animation on Submit */}
                <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full md:w-1/3">
                    <h3 className="text-xl font-bold mb-4 text-center">Send a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-2 border bg-stone-800 text-white border-gray-300 rounded focus:border-orange-600 focus:outline-none transition"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border bg-stone-800 text-white border-gray-300 rounded focus:border-orange-600 focus:outline-none transition"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full p-2 border bg-stone-800 text-white border-gray-300 rounded focus:border-orange-600 focus:outline-none transition"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button
                            id="message-button"
                            type="submit"
                            className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                        >
                            {/* Conditional rendering of button text and icon */}
                            {submitStatus === 'normal' && 'Send Message'}
                            {submitStatus === 'loading' && (
                                <>
                                    <AiOutlineLoading3Quarters className="animate-spin" />
                                    Sending...
                                </>
                            )}
                            {submitStatus === 'sent' && (
                                <>
                                    <MdOutlineDownloadDone />
                                    Message Sent
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>

            {/* Animated Social Media Links */}
            <div className="mt-8 flex justify-center space-x-6">
                <a href="https://linkedin.com/in/golu-kumar-7079b5246" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-600 transform hover:scale-110 transition">
                    <FaLinkedin className="text-3xl" />
                </a>
                <a href="https://github.com/golu7059" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-600 transform hover:scale-110 transition">
                    <FaGithub className="text-3xl" />
                </a>
                <a href="https://twitter.com/golu7059" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-600 transform hover:scale-110 transition">
                    <FaTwitter className="text-3xl" />
                </a>
            </div>
        </section>
    );
};

export default Contact;
