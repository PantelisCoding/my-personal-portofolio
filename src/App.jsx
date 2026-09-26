import { useState } from "react";
import Navbar from "./Ui/NavBar";
import MobileMenu from "./Ui/MobileMenu";
import LoadingScreenAnimation from "./Ui/LoadingScreenAnimation";
import Home from "./Sections/Home";
import AnimationWaves from "./Ui/AnimationWaves";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import { Contact } from "./Sections/Contact";
import RevealOnScroll from "./Ui/RevealOnScroll";
import Footer from "./Sections/Footer";




function App() {
  const[isLoading, setIsLoading] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      
      {!isLoading && (
      <LoadingScreenAnimation onComplete={() => setIsLoading(true)} />
      )}
      
      
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home />
      <AnimationWaves />
      <About />
      <Projects />
      <Contact />
      <RevealOnScroll />
      <Footer />
   
      

      
    </>
  );
}

export default App;