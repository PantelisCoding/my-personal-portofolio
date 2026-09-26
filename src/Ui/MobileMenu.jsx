import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GoSun } from "react-icons/go";

function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
    document.body.style.backgroundColor = isLightTheme ? "" : "white";
  };

  

  return (
    <div
      className={`fixed w-full top-0 left-0 bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        isMenuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}

      
    >
    
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-7 text-2xl text-white focus:outline-none cursor-pointer hover:text-accent transition-colors duration-200"
        aria-label="Close Menu"
      >
        <RxCross2 />
      </button>
    
      <a
        onClick={() => setIsMenuOpen(false)}
        href="#home"
        className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } hover:text-accent`}
      >
        Home
      </a>
      <a
        onClick={() => setIsMenuOpen(false)}
        href="#about"
        className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } hover:text-accent`}
      >
        About
      </a>
      <a
        onClick={() => setIsMenuOpen(false)}
        href="#projects"
        className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } hover:text-accent`}
      >
        Projects
      </a>
      <a
        onClick={() => setIsMenuOpen(false)}
        href="#contact"
        className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } hover:text-accent`}
      >
        Contact
      </a>

    
         
      
    </div>
  );
}

export default MobileMenu;