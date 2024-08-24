import Navbar from "./Components/Navbar"
import Contact from "./Pages/Contact"
import Education from "./Pages/Education"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"

function App() {

  return (
    <div className="bg-black">
       <Navbar/>
       <Home/>
       <Education/>
       <Projects/>
       <Contact/>
    </div>
  )
}

export default App
