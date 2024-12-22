// Contact.jsx
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdOutlineDownloadDone } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import emailjs from "emailjs-com";
import { toast } from 'react-hot-toast';

const Contact = () => {
    const [submitStatus, setSubmitStatus] = useState('normal');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitStatus("loading");
        const toastId = toast.loading("Sending email, please wait...");
    
        emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID, // EmailJS service ID
          import.meta.env.VITE_TEMPLATE_ID, // EmailJS template ID
          event.target,
          import.meta.env.VITE_PUBLIC_KEY // EmailJS public key
        )
      
          
          .then(
            () => {
              setSubmitStatus("sent");
              toast.success("Email sent successfully!", { id: toastId });
              event.target.reset();
              setTimeout(() => {
                setSubmitStatus("normal");
              }, 2000);
            },
            (error) => {
              console.error("Email sending failed:", error.text);
              toast.error("Failed to send email.", { id: toastId });
              setSubmitStatus("normal");
            }
          );
      };
      
    return (
        <section id="Contact" className="p-8 bg-black text-white ">
            <h2 className="text-3xl font-bold text-slate-300 text-center font-mono mt-1 mb-10 reveal">
                Let<span className="text-red-700">'</span>s Connect
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {/* Get In Touch Section */}
                <div className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full md:w-1/3 reveal">
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

                {/* Send a Message Section */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full md:w-1/3 reveal">
                    <h3 className="text-xl font-bold mb-4 text-center">Send a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="from_name"
                                className="w-full p-2 border bg-stone-700 text-white border-gray-600 rounded focus:border-orange-600 focus:outline-none transition"
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
                                name="from_email"
                                className="w-full p-2 border bg-stone-700 text-white border-gray-600 rounded focus:border-orange-600 focus:outline-none transition"
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
                                name="message"
                                rows="4"
                                className="w-full p-2 border bg-stone-700 text-white border-gray-600 rounded focus:border-orange-600 focus:outline-none transition"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                            disabled={submitStatus === 'loading' || submitStatus === 'sent'}
                        >
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

            {/* Social Media Links */}
            <div className="mt-8 flex justify-center space-x-6 reveal">
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
