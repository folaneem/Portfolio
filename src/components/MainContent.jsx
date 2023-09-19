

import Navbar from "./Navbar"
import Contact from "./Contact"
import Hero from "./Hero"
import Projects from "./Projects"
import Faq from "./Faq"
import Footer from "./Footer"


const MainContent = () => {
  return (
    <div>   
    <Navbar />

    <Hero />
    <Projects/>
    <Faq/>
    <Contact/>
   <Footer/>
    </div>
  )
}

export default MainContent