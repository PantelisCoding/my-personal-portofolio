import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




 function Footer() {
  return (
    <footer>
        <div className='min-h-[100px] flex flex-col justify-center gap-6 text-center text-xl text-gray-300
        font-mono mb-10'>
            <div className='flex gap-10 p-4 justify-center text-white'>
                <a href='https://www.linkedin.com/in/pantelis-dev-70b7b030b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className='border p-2 text-2xl rounded hover:-translate-y-2 
                transition-all bg-blue-500 text-white' 
                target='_blank'>
                <FaLinkedin />
                </a>

                <a href='https://github.com/PantelisDev' className='border p-2 text-2xl rounded hover:-translate-y-2 
                transition-all bg-gray-500 text-white' 
                target='_blank'>
                <FaGithub />
                </a>


                <a href='' className='border p-2 text-2xl rounded hover:-translate-y-2 
                transition-all bg-pink-500 text-white' 
                target='_blank'>
                <FaInstagram />

                </a>

            </div>
            <p>© 2025 All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;

