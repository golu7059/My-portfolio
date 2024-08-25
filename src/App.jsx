import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Education from "./Pages/Education"
import Languages from "./Components/Languages"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Footer from "./Components/Footer"
import Certificates from "./Components/Certificates"
import Achievements from "./Components/Achivements"

function App() {

  return (
    <div className="bg-black">
       <Navbar/>
       <Home/>
       <About/>
       <Achievements/>
       <Certificates/>
       <Education/>
       <Languages/>
       <Projects/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App
