import profileImage from "../assets/profile.png";
import React from "react";
import { MdDownload, MdArrowOutward } from "react-icons/md";
import resume from "../assets/resume.pdf";
import RevealOnScroll from "../Ui/RevealOnScroll";

export default function Home() {
  return (
    <section
      id="home"
      className="home-section relative min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-16 overflow-hidden bg-[#0a0a0a] transition-colors duration-500"
    >
      {/* === AMBIENT ORBS === */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      {/* === SUBTLE GRID === */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 75%)",
        }}
      />

      {/* === TEXT (left on lg) === */}
      <div className="relative z-10 order-2 lg:order-1 text-center lg:text-left px-6 max-w-xl">
        <RevealOnScroll>
          <div className="mb-6 flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="status-pill-text text-[11px] font-medium tracking-wide text-white/60">
                Available for work
              </span>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h1 className="home-headline text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-teal-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Pantelis
            </span>
            .
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          {/* 👇 "about-me" class is what your Navbar's light mode effect already targets */}
          <p className="about-me text-white/60 text-base lg:text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            A front-end developer crafting interactive, scalable
            applications — with a focus on dynamic UI, high performance,
            and delightful user experience.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3">
            <a
              href="#contact"
              className="btn-primary group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
            >
              <span>Contact Me</span>
              <MdArrowOutward className="text-lg transition-transform duration-300 group-hover:rotate-45" />
            </a>

            <a
              href={resume}
              download
              className="btn-secondary group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
              <span>My Resume</span>
              <MdDownload className="text-lg transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </RevealOnScroll>
      </div>

      {/* === PHOTO (right on lg) === */}
      <div className="relative z-10 order-1 lg:order-2 px-4">
        <RevealOnScroll>
          <div className="group relative">
            {/* Soft glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-500/20 via-transparent to-indigo-500/20 blur-2xl opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Card */}
            <div className="photo-card relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
              <img
                src={profileImage}
                alt="Pantelis"
                className="w-[220px] lg:w-[280px] object-cover object-bottom transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Fade bottom */}
              <div className="photo-fade pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="photo-label-top font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">
                  Front-End Developer
                </p>
                <p className="photo-label-bottom mt-0.5 text-xs font-medium text-white">
                  Based in Greece · Remote
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}