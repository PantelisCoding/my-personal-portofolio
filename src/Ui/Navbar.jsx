import { useEffect, useState } from "react";
import Logo from "./Logo";
import { MdMenu } from "react-icons/md";
import { GoSun } from "react-icons/go";

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const [isLightMode, setIsLightMode] = useState(false);

  // ===== ORIGINAL LIGHT MODE LOGIC — untouched =====
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
  // ===== END ORIGINAL LOGIC =====

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
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

          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 rounded-full bg-gradient-to-r from-teal-300 to-indigo-400 transition-all duration-300 group-hover:w-5" />
              </a>
            ))}

            <button
              onClick={toggleLightMode}
              aria-label="Toggle theme"
              className="ml-2 rounded-full border border-white/10 bg-white/5 p-2 text-white/70 backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <GoSun className="text-lg transition-transform duration-300 hover:scale-110 hover:text-amber-400" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;