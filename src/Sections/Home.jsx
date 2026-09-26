import profileImage from "../assets/profile.png";
import React from "react";
import { MdDownload } from "react-icons/md";
import resume from "../assets/resume.pdf";
import RevealOnScroll from "../Ui/RevealOnScroll";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15">

      <div className="text-center z-10 px-4">
        <RevealOnScroll>
          <img
            className="w-[200px] border-0 mt-20 lg:m-0 lg:max-w-[250px] object-cover object-bottom hover:-translate-y-1 transition-all"
            src={profileImage}
            alt="Profile Image"
          />
        </RevealOnScroll>
      </div>

      <div className="text-center rounded-2xl p-7 font-mono z-10 px-4">
        <RevealOnScroll>
          <h1 className="text-4xl md:text-5xl lg:text-6xl lg:max-w-[500px] font-semibold mb-6 px-1 bg-gradient-to-r from-[#4285F4] via-[#DB4437] to-[#F4B400] bg-clip-text text-transparent">
            My Name Is Pantelis
          </h1>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className="about-me text-white text-lg mb-8 max-w-lg mx-auto">
            I'm a front-end developer who loves creating interactive, scalable
            applications. My purpose is to build solutions that offer dynamic
            UI, high performance, and delightful UX.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex justify-center items-center space-x-4">
            <a
              className="bg-gradient-to-r flex flex-row items-center from-teal-500 to-indigo-600 py-3 px-6 rounded-full hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(66,133,244,0.4)] font-medium transition-all relative overflow-hidden"
              href="#contact"
            >
              <h3 className="text-l">Contact Me</h3>
            </a>

            <a
              className="bg-gradient-to-r flex flex-row items-center from-teal-500 to-indigo-600 py-3 px-6 rounded-full hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(66,133,244,0.4)] font-medium transition-all relative overflow-hidden"
              href={resume}
              download
            >
              <h3 className="text-l">My Resume</h3>
              <span>
                <MdDownload className="text-2xl mt-1.5 ml-1.5" />
              </span>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}