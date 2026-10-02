import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GoSun } from "react-icons/go";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    const next = !isLightTheme;
    setIsLightTheme(next);
    document.body.style.backgroundColor = next ? "white" : "";
  };

  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-out md:hidden ${
        isMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop — glass over everything */}
      <div className="absolute inset-0 bg-[rgba(10,10,10,0.85)] backdrop-blur-xl" />

      {/* Ambient orbs (behind content, above backdrop) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[-20%] h-[400px] w-[400px] rounded-full bg-teal-500/15 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-20%] h-[400px] w-[400px] rounded-full bg-indigo-500/15 blur-[120px]" />
      </div>

      {/* Close button */}
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-6 z-10 rounded-full border border-white/10 bg-white/5 p-2 text-white/80 backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
        aria-label="Close Menu"
      >
        <RxCross2 className="text-xl" />
      </button>

      {/* Nav links */}
      <nav className="relative z-10 flex flex-col items-center gap-1">
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.label}
            onClick={() => setIsMenuOpen(false)}
            href={link.href}
            style={{ transitionDelay: isMenuOpen ? `${i * 60 + 100}ms` : "0ms" }}
            className={`group relative px-6 py-3 text-3xl font-semibold tracking-tight text-white transition-all duration-500 ease-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <span className="relative z-10 transition-colors duration-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-300 group-hover:via-sky-400 group-hover:to-indigo-400">
              {link.label}
            </span>
            {/* Underline sweep */}
            <span className="absolute bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-300 to-indigo-400 transition-all duration-300 group-hover:w-12" />
          </a>
        ))}
      </nav>

      {/* Theme toggle — glass pill at bottom */}
      <div
        style={{ transitionDelay: isMenuOpen ? "360ms" : "0ms" }}
        className={`relative z-10 mt-12 transition-all duration-500 ease-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <GoSun className="text-lg transition-transform duration-300 hover:scale-110 hover:text-amber-400" />
          <span className="font-mono text-xs uppercase tracking-widest">
            Theme
          </span>
        </button>
      </div>

      {/* Bottom meta line */}
      <div
        style={{ transitionDelay: isMenuOpen ? "420ms" : "0ms" }}
        className={`absolute bottom-6 z-10 font-mono text-[10px] uppercase tracking-[0.35em] text-white/30 transition-all duration-500 ease-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        Portfolio · 2026
      </div>
    </div>
  );
}

export default MobileMenu;