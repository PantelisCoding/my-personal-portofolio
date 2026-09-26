import React from 'react';
import RevealOnScroll from '../Ui/RevealOnScroll.jsx'; 

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TailwindCSS",
  "NodeJs",
  "mySQL"
];

export default function About() {
  return (
    <section id='about' className='min-h-screen font-mono flex items-center justify-center py-20'>
      <div className='max-w-3xl mx-auto px-4'>
        <RevealOnScroll>
          <h2 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-tr from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center'>
            About Me
          </h2>
          <div className='p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all hover:shadow-[0_4px_12px_rgba(59,130,246,0.2)]'>
            <p className='text-gray-300 mb-5 text-xl'>
            As a skilled and experienced developer in building websites and CRUD applications, I'm dedicated to creating top-notch web applications for clients.

            With a passion for coding and a deep understanding, I excel in crafting robust and user-friendly solutions tailored to meet client needs. My expertise in Java, MongoDB, Express.js, React.js, Node.js, React Native, and Next.js, Vue js, enables me to deliver efficient, scalable, and high-performance applications.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all border-white/10 border-2 hover:shadow-[0_4px_12px_rgba(59,130,246,0.2)]'>
            <h3 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-tr from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center'>
            Skills</h3>
              <div className='flex justify-center flex-wrap gap-2'>
                {skills.map((skill, index) => (
                  <span
                    className='bg-blue-500/10 text-blue-600 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition'
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all border-white/10 border-2 hover:shadow-[0_4px_12px_rgba(59,130,246,0.2)]'>
              <h3 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-tr from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center'>Education</h3>
              <div className='text-gray-300 text-center'>
                <p className='text-lg'>Software Developer</p>
                <p className='text-sm text-gray-400'>IEK Akmi 2024 - 2026</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}