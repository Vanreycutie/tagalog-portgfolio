import React from 'react'
import insta from '../assets/Insta.png';
import discord from '../assets/discord.webp'
import facebook from '../assets/facebook.jpeg';
import github from '../assets/github.png';
const Apps = () => {
  return (
    <div className='bg bg-red-400 text-yellow-400 md:h-[200px] max-x[1200px] mx-auto grid grid-cols-3
    place-items-center md:flex md:justify-between md:items-center'>

    <h2 className="text-yelllow-600 text-5xl md:text-4xl font-serif m-6"> 
         My Social Apps
    </h2>
    <a href="https://www.instagram.com/dpwjan_/"
           target="_blank" 
           rel="noopener noreferrer" 
           className="transition-transform transform hover:scale-110">
          <img src={insta} alt="Insta" 
               className="w-16 h-16 md:w-20 md:h-20 border-4 border-red-400 rounded-full bg-transparent hover:bg-violet-500 transition-all duration-300" />
        </a>
        <a href="https://discord.com/channels/@me"
           target="_blank" 
           rel="noopener noreferrer" 
           className="transition-transform transform hover:scale-110">
          <img src={discord} alt="Discord" 
               className="w-16 h-16 md:w-20 md:h-20 border-4 border-red-400 rounded-full bg-transparent hover:bg-violet-500 transition-all duration-300" />
        </a>
        <a href="https://www.facebook.com/johnvanrey.tagalog"
           target="_blank" 
           rel="noopener noreferrer" 
           className="transition-transform transform hover:scale-110">
          <img src={facebook} alt="Facebook" 
               className="w-16 h-16 md:w-20 md:h-20 border-4 border-red-400 rounded-full bg-transparent hover:bg-violet-500 transition-all duration-300" />
        </a>
        <a href="https://github.com/Vanreycutie/"
           target="_blank" 
           rel="noopener noreferrer" 
           className="transition-transform transform hover:scale-110">
          <img src={github} alt="Insta" 
               className="w-16 h-16 md:w-20 md:h-20 border-4 border-red-400 rounded-full bg-transparent hover:bg-violet-500 transition-all duration-300" />
        </a>

        
    </div>
    
  )
}
export default Apps
