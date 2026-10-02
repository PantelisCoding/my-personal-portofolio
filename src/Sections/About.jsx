import React from 'react';
import RevealOnScroll from '../Ui/RevealOnScroll.jsx';

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TailwindCSS",
  "NodeJs",
  "MySQL",
];

export default function About() {
  return (
    <section
      id="about"
      className="about-section relative min-h-screen flex items-center justify-center py-24 lg:py-32 px-5 sm:px-6"
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[15%] right-[-10%] h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-[130px]" />
        <div className="absolute bottom-[15%] left-[-10%] h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-[130px]" />
      </div>

      <div className="w-full max-w-4xl mx-auto">
        {/* Eyebrow + heading */}
        <RevealOnScroll>
          <div className="mb-10 lg:mb-14 text-center">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.35em] text-teal-400/80">
              Get to know me
            </p>
            <h2 className="about-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              About{" "}
              <span className="bg-gradient-to-r from-teal-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Bio card */}
        <RevealOnScroll delay={100}>
          <div className="about-card mb-5 rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:p-9 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]">
            <p className="about-text text-base leading-relaxed text-white/70 sm:text-lg">
              As a skilled and experienced developer in building websites
              and CRUD applications, I'm dedicated to creating top-notch
              web applications for clients.
            </p>
            <p className="about-text mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              With a passion for coding and a deep understanding of the
              modern stack, I excel in crafting robust and user-friendly
              solutions tailored to meet client needs. My expertise spans
              Java, MongoDB, Express.js, React.js, Node.js, React Native,
              Next.js, and Vue.js — enabling me to deliver efficient,
              scalable, and high-performance applications.
            </p>
          </div>
        </RevealOnScroll>

        {/* Skills + Education grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {/* Skills */}
          <RevealOnScroll delay={200}>
            <div className="about-card h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="about-subheading text-lg font-semibold tracking-tight text-white">
                  Skills
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                  {String(skills.length).padStart(2, "0")} total
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="tech-chip rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white/70 transition-colors duration-200 hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Education */}
          <RevealOnScroll delay={300}>
            <div className="about-card h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="about-subheading text-lg font-semibold tracking-tight text-white">
                  Education
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                  Degree
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <p className="about-text text-base font-medium text-white/90">
                  Software Developer
                </p>
                <p className="about-text font-mono text-xs uppercase tracking-widest text-white/40">
                  IEK Akmi · 2024 – 2026
                </p>
              </div>

              {/* Small decorative progress hint */}
              <div className="mt-6 h-[2px] w-full overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-teal-300 to-indigo-400" />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}