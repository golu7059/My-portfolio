import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Components/About" // Changed from Pages to Components
import Education from "./Pages/Education"
import Languages from "./Components/Languages"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Footer from "./Components/Footer"
import Certificates from "./Components/Certificates"
import Achievements from "./Components/Achivements"
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
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