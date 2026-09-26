import { useEffect, useState } from "react";
import Logo from "./Logo";
import { MdMenu } from "react-icons/md";
import { GoSun } from "react-icons/go";
import { GoMoon } from "react-icons/go";


function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.backgroundColor = isLightMode ? "white" : "";
  }, [isLightMode]);


useEffect(() => {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((p) => {
        p.style.color = isLightMode ? "black" : ""; 
    });
}, [isLightMode]);

useEffect(() => {
  const contactSection = document.querySelector("#contact");
  if (contactSection) {
      if (isLightMode) {
          contactSection.classList.remove("dark-mode");
      } else {
          contactSection.classList.add("dark-mode");
      }
  }
}, [isLightMode]);





  useEffect(() => {
    const homeElements = document.getElementsByClassName("about-me");
    if (homeElements.length > 0) {
      for (let element of homeElements) {
        element.style.color = isLightMode ? "black" : ""; 
      }
    }
  }, [isLightMode]);
  const toggleLightMode = () => {
    setIsLightMode((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg px-1 border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center font-mono h-16">
          <Logo />

         
          {!isMenuOpen && (
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-2xl absolute right-7 z-40 md:hidden cursor-pointer font-mono"
              aria-label="Open Menu"
            >
              <MdMenu />
            </button>
          )}

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="group text-gray-300 text-lg transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#4285F4] hover:via-[#DB4437] hover:to-[#F4B400] relative"
            >
              Home
              <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-gradient-to-r from-[#4285F4] via-[#DB4437] to-[#F4B400] group-hover:w-full group-focus:w-full transition-all duration-300 ease-in-out"></span>
            </a>

            <a
              href="#about"
              className="group text-gray-300 text-lg transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#4285F4] hover:via-[#DB4437] hover:to-[#F4B400] relative"
            >
              About
              <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-gradient-to-r from-[#4285F4] via-[#DB4437] to-[#F4B400] group-hover:w-full group-focus:w-full transition-all duration-300 ease-in-out"></span>
            </a>

            <a
              href="#projects"
              className="group text-gray-300 text-lg transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#4285F4] hover:via-[#DB4437] hover:to-[#F4B400] relative"
            >
              Projects
              <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-gradient-to-r from-[#4285F4] via-[#DB4437] to-[#F4B400] group-hover:w-full group-focus:w-full transition-all duration-300 ease-in-out"></span>
            </a>

            <a
              href="#contact"
              className="group text-gray-300 text-lg transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#4285F4] hover:via-[#DB4437] hover:to-[#F4B400] relative"
            >
              Contact
              <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-gradient-to-r from-[#4285F4] via-[#DB4437] to-[#F4B400] group-hover:w-full group-focus:w-full transition-all duration-300 ease-in-out"></span>
            </a>


          

            <button
              onClick={toggleLightMode}
              className="group rounded-lg p-1 hover:text-accent focus:text-accent focus:outline-none focus:bg-bg-secondary cursor-pointer w-fit transition-all duration-200"
            >
              <GoSun className="text-2xl group-hover:text-accent group-hover:scale-110 hover:text-[#F4B400] transition-all duration-200" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;