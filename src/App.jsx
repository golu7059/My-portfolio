import React, { useState, useEffect } from 'react';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import About from "./Components/About";
import Education from "./Pages/Education";
import Languages from "./Components/Languages";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Certificates from "./Components/Certificates";
import Achievements from "./Components/Achivements";
import { Toaster } from 'react-hot-toast';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    // Function to check which section is currently in view
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100; // Add offset for header

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        
        // Initial check when page loads
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Toaster position="top-center" />
            <Navbar activeSection={activeSection} />
            <Home />
            <About />
            <Achievements />
            <Certificates />
            <Education />
            <Languages />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;