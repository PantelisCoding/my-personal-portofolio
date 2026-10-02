import React, { useState } from 'react';
import carrent from "../assets/car-rent.png";
import furniturestore from "../assets/furniturestore.png";
import dealestate from "../assets/dealestate.png";
import techshop from "../assets/techshop.png";
import bookmanager from "../assets/bookmanager.png";
import RevealOnScroll from '../Ui/RevealOnScroll';
import { MdArrowOutward } from "react-icons/md";

function Projects() {
  const [projects] = useState([
    {
      image: carrent,
      name: "Car Rent Website",
      brief: "Scalable car-rent website service",
      link: "https://panteliscoding.github.io/PantelisCoding-Car-Rental-Service-Template/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: furniturestore,
      name: "Furniture Store",
      brief: "An online furniture store front-end",
      link: "#",
      technologies: ["HTML", "Bootstrap"],
    },
    {
      image: dealestate,
      name: "Real Estate",
      brief: "A real estate listing website",
      link: "#",
      technologies: ["HTML", "Bootstrap"],
    },
    {
      image: techshop,
      name: "E-commerce Tech",
      brief: "A fully working online tech store",
      link: "https://eshop-frontend-aq3kz81mz-pantelisdevs-projects.vercel.app/",
      technologies: ["Tailwind", "React", "SQL", "Java"],
    },
    {
      image: bookmanager,
      name: "Book Manager",
      brief: "A CRUD app for managing your book collection",
      link: "https://github.com/PantelisCoding/Book-Manager.git",
      technologies: ["SQL", "Tailwind", "React", "Java"],
    },
  ]);

  return (
    <section
      id="projects"
      className="projects-section relative min-h-screen flex items-center justify-center py-24 lg:py-32 px-5 sm:px-6"
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-[130px]" />
        <div className="absolute bottom-[10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-[130px]" />
      </div>

      <div className="w-full max-w-5xl mx-auto">
        {/* Eyebrow + heading */}
        <RevealOnScroll>
          <div className="mb-10 lg:mb-14 text-center">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.35em] text-teal-400/80">
              Selected Work
            </p>
            <h2 className="projects-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-teal-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-white/50">
              A handful of things I've built — from small utilities to
              full-stack apps.
            </p>
          </div>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 60}>
              <a
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!project.link || project.link === "#") {
                    e.preventDefault();
                    alert("Project link coming soon!");
                  }
                }}
                className="project-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
              >
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-black/40">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-40" />

                  <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/80 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
                    View
                    <MdArrowOutward className="text-xs" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="project-title text-lg font-semibold tracking-tight text-white">
                      {project.name}
                    </h3>
                    <span className="mt-1 shrink-0 font-mono text-[10px] uppercase tracking-widest text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="project-brief mb-4 text-sm leading-relaxed text-white/50">
                    {project.brief}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="tech-chip rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;