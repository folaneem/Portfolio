import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden text-white font-kreon">
   
 
    <Navbar/>
    <Hero/>
    <Projects/>
    <Faq/>
    <Contact/>
   <Footer/>
  </div>
  );
}

export default App;
