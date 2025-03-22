import React, { useState, useRef, useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaArrowRight } from "react-icons/fa";
import { MdOutlineDownloadDone } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import emailjs from "emailjs-com";
import { toast } from 'react-hot-toast';

const Contact = () => {
    const [submitStatus, setSubmitStatus] = useState('normal');
    const [formValues, setFormValues] = useState({ from_name: '', from_email: '', message: '' });
    const [activeInput, setActiveInput] = useState(null);
    const formRef = useRef(null);
    const contactSectionRef = useRef(null);

    // Handle input focus/blur for floating label effect
    const handleFocus = (field) => {
        setActiveInput(field);
    };

    const handleBlur = (field) => {
        if (!formValues[field]) {
            setActiveInput(null);
        }
    };

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // Initialize animation on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    const contactCards = document.querySelectorAll('.contact-card');
                    contactCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('slide-in');
                        }, index * 200);
                    });
                }
            },
            { threshold: 0.2 }
        );

        if (contactSectionRef.current) {
            observer.observe(contactSectionRef.current);
        }

        return () => {
            if (contactSectionRef.current) {
                observer.unobserve(contactSectionRef.current);
            }
        };
    }, []);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitStatus("loading");
        const toastId = toast.loading("Sending your message...");
    
        // Send email using EmailJS
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                event.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                () => {
                    setSubmitStatus("sent");
                    toast.success("Message sent successfully!", { id: toastId });
                    setFormValues({ from_name: '', from_email: '', message: '' });
                    setActiveInput(null);
                    
                    setTimeout(() => {
                        setSubmitStatus("normal");
                    }, 3000);
                },
                (error) => {
                    console.error("Email sending failed:", error.text);
                    toast.error("Failed to send message. Please try again.", { id: toastId });
                    setSubmitStatus("normal");
                }
            );
    };
      
    return (
        <section 
            id="Contact" 
            ref={contactSectionRef}
            className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-pink-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-500/5 rounded-full blur-3xl"></div>
                
                {/* Animated particles */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/20"
                        style={{
                            width: `${Math.random() * 4 + 2}px`,
                            height: `${Math.random() * 4 + 2}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `floatingParticle ${Math.random() * 10 + 10}s linear infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold inline-block">
                        <span className="relative">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                                Get In Touch
                            </span>
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></span>
                        </span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    {/* Contact information cards */}
                    <div className="lg:w-1/3 space-y-6">
                        <div className="contact-card opacity-0 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/10">
                            <div className="flex items-start space-x-4">
                                <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-3 rounded-lg shadow-inner flex items-center justify-center">
                                    <FaEnvelope className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                                    <p className="text-gray-300">golukumarjaisidih@gmail.com</p>
                                    <a 
                                        href="mailto:golukumarjaisidih@gmail.com" 
                                        className="mt-2 inline-flex items-center text-orange-400 hover:text-orange-300 text-sm group"
                                    >
                                        Write an Email 
                                        <FaArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-card opacity-0 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/10">
                            <div className="flex items-start space-x-4">
                                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-lg shadow-inner flex items-center justify-center">
                                    <FaPhone className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                                    <p className="text-gray-300">+91 926414 7658</p>
                                    <a 
                                        href="tel:+919264147658" 
                                        className="mt-2 inline-flex items-center text-purple-400 hover:text-purple-300 text-sm group"
                                    >
                                        Call Me 
                                        <FaArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-card opacity-0 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/10">
                            <div className="flex items-start space-x-4">
                                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg shadow-inner flex items-center justify-center">
                                    <FaMapMarkerAlt className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                                    <p className="text-gray-300">Parul University, Vadodara, India</p>
                                    <a 
                                        href="https://maps.app.goo.gl/SYZMq5HpFgpvMkZz5" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-flex items-center text-blue-400 hover:text-blue-300 text-sm group"
                                    >
                                        View on Map 
                                        <FaArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="lg:w-2/3">
                        <div className="contact-card opacity-0 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-8 shadow-lg">
                            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
                            
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                {/* Name input with floating label */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        name="from_name"
                                        value={formValues.from_name}
                                        onChange={handleInputChange}
                                        onFocus={() => handleFocus('from_name')}
                                        onBlur={() => handleBlur('from_name')}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent peer"
                                        required
                                    />
                                    <label 
                                        htmlFor="name" 
                                        className={`absolute text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] left-4 peer-focus:text-orange-400 peer-focus:-translate-y-4 peer-focus:scale-75 ${
                                            activeInput === 'from_name' || formValues.from_name ? '-translate-y-4 scale-75 text-orange-400' : 'translate-y-0 scale-100'
                                        }`}
                                    >
                                        Your Name
                                    </label>
                                </div>

                                {/* Email input with floating label */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="from_email"
                                        value={formValues.from_email}
                                        onChange={handleInputChange}
                                        onFocus={() => handleFocus('from_email')}
                                        onBlur={() => handleBlur('from_email')}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent peer"
                                        required
                                    />
                                    <label 
                                        htmlFor="email" 
                                        className={`absolute text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] left-4 peer-focus:text-orange-400 peer-focus:-translate-y-4 peer-focus:scale-75 ${
                                            activeInput === 'from_email' || formValues.from_email ? '-translate-y-4 scale-75 text-orange-400' : 'translate-y-0 scale-100'
                                        }`}
                                    >
                                        Your Email
                                    </label>
                                </div>

                                {/* Message textarea with floating label */}
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formValues.message}
                                        onChange={handleInputChange}
                                        onFocus={() => handleFocus('message')}
                                        onBlur={() => handleBlur('message')}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent peer resize-none"
                                        required
                                    ></textarea>
                                    <label 
                                        htmlFor="message" 
                                        className={`absolute text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] left-4 peer-focus:text-orange-400 peer-focus:-translate-y-4 peer-focus:scale-75 ${
                                            activeInput === 'message' || formValues.message ? '-translate-y-4 scale-75 text-orange-400' : 'translate-y-0 scale-100'
                                        }`}
                                    >
                                        Your Message
                                    </label>
                                </div>

                                {/* Submit button with animated states */}
                                <button
                                    type="submit"
                                    disabled={submitStatus !== 'normal'}
                                    className={`
                                        relative overflow-hidden px-8 py-3 w-full rounded-lg text-white font-medium
                                        transition-all duration-300 transform
                                        ${submitStatus === 'normal' ? 'bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-105 active:scale-95' : 
                                          submitStatus === 'loading' ? 'bg-gray-700' :
                                          'bg-green-600'}
                                    `}
                                >
                                    <span className={`flex items-center justify-center gap-2 transition-all ${
                                        submitStatus !== 'normal' ? 'opacity-100' : ''
                                    }`}>
                                        {submitStatus === 'normal' && (
                                            <>
                                                Send Message
                                                <FaPaperPlane className="transition-transform group-hover:translate-x-1" />
                                            </>
                                        )}
                                        {submitStatus === 'loading' && (
                                            <>
                                                <AiOutlineLoading3Quarters className="animate-spin" />
                                                Sending...
                                            </>
                                        )}
                                        {submitStatus === 'sent' && (
                                            <>
                                                <MdOutlineDownloadDone />
                                                Message Sent!
                                            </>
                                        )}
                                    </span>
                                    
                                    {/* Animated background for button */}
                                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Social media links */}
                <div className="mt-16 flex flex-col items-center">
                    <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
                    <div className="flex justify-center space-x-5 reveal">
                        <a 
                            href="https://linkedin.com/in/golu-kumar-7079b5246" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group"
                            aria-label="LinkedIn profile"
                        >
                            <div className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-blue-500/30 hover:to-blue-700/30 hover:border-blue-500/50 group-hover:shadow-blue-500/20">
                                <FaLinkedin className="h-6 w-6 text-blue-400" />
                            </div>
                        </a>
                        <a 
                            href="https://github.com/golu7059" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group"
                            aria-label="GitHub profile"
                        >
                            <div className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-gray-600/30 hover:to-gray-800/30 hover:border-gray-500/50 group-hover:shadow-gray-500/20">
                                <FaGithub className="h-6 w-6 text-gray-300" />
                            </div>
                        </a>
                        <a 
                            href="https://twitter.com/golu7059" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group"
                            aria-label="Twitter profile"
                        >
                            <div className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-sky-500/30 hover:to-sky-700/30 hover:border-sky-500/50 group-hover:shadow-sky-500/20">
                                <FaTwitter className="h-6 w-6 text-sky-400" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Custom styles for animations */}
            <style jsx>{`
                @keyframes floatingParticle {
                    0%, 100% { transform: translate(0, 0); }
                    25% { transform: translate(10px, 10px); }
                    50% { transform: translate(0, 20px); }
                    75% { transform: translate(-10px, 10px); }
                }
                
                .contact-card.slide-in {
                    animation: slideIn 0.6s ease forwards;
                }
                
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}</style>
        </section>
    );
};

export default Contact;
