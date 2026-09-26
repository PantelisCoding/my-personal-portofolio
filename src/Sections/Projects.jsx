import React, { useState } from 'react';
import carrent from "../assets/car-rent.png";
import cinema from "../assets/cinema.png";
import calculator from "../assets/calculator.png";
import todoapp from "../assets/myproject3.png";
import RevealOnScroll from '../Ui/RevealOnScroll';
import techshop from '../assets/techshop.png';
import bookmanager from "../assets/bookmanager.png";

function Projects() {
  const [projects] = useState([
    {
      image: carrent,
      name: "Car Rent Website",
      brief: "Scalable car-rent website service",
      link: "https://pantelisan2888.github.io/car-rent-website/",
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      image: cinema,
      name: "Cinema",
      brief: "Scalable cinema website service",
      link: "https://pantelisan.github.io/Academy-Cinemas-/",
      technologies: ["HTML", "Bootstrap"],
    },
    {
      image: calculator,
      name: "Calculator App",
      brief: "A simple and functional calculator app",
      link: "#",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: todoapp,
      name: "To-Do App",
      brief: "A task management app to organize your work",
      link: "#",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: techshop,
      name: "E-commerce tech",
      brief: "A fully working online tech-store",
      link: "https://eshop-frontend-fg0jb5kwx-pantelisdevs-projects.vercel.app/",
      technologies: ["tailwind", "React", "SQL", "Java"],
    },
    {
      image: bookmanager,
      name: "Book Manager Application",
      brief: "A fully working online tech-store",
      link: "https://github.com/PantelisCoding/Book-Manager.git",
      technologies: ["SQL", "tailwind", "React", "Java"],
    }
  ]);

  return (
    <section id='projects' className='min-h-screen flex items-center font-mono justify-center py-20'>
      <div className='max-w-3xl mx-auto px-4'>
        <h2 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent text-center'>
          Featured Projects
        </h2>
        <RevealOnScroll>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className='relative p-6 rounded-xl flex flex-col items-center text-center border-2 bg-[#1E1E1E] border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all group'
                onClick={(e) => {
                  if (project.link === "#") {
                    e.preventDefault();
                    alert("Project link coming soon!");
                  }
                }}
              >
                <div className='w-full aspect-video bg-[#0f0f0f] rounded-lg mb-4 flex items-center justify-center overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.name}
                    className='max-w-full max-h-full object-contain'
                  />
                </div>
                <h3 className='text-2xl font-bold text-gray-100 mb-2'>{project.name}</h3>
                <h3 className='text-gray-300 mb-4'>{project.brief}</h3>
                <div className='flex flex-wrap justify-center gap-2'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='absolute inset-0 flex items-start justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pt-25'>
                  <h3 className='text-white text-lg font-semibold'>Click here to view project</h3>
                </div>
              </a>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Projects;