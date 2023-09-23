import Navbar from "./Navbar"
import Contact from "./Contact"
import Hero from "./Hero"
import Projects from "./Projects"
import Faq from "./Faq"
import Footer from "./Footer"
import Skills from "./Skills"
import {Zoom,Fade} from 'react-reveal';

const MainContent = () => {
  return (
    <div>  
      <Fade>
      <Navbar/>
        </Fade> 
      

<Fade left>
  <Hero/>
</Fade>

<Fade right>
<Skills/>
</Fade>
<Fade>
<Projects/>

</Fade>

<Zoom>
<Faq/>

</Zoom>
<Zoom>
<Contact/>

</Zoom>
<Fade bottom>
<Footer/>

</Fade>
    
    </div>
  )
}

export default MainContent