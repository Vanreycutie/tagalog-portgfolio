import React from 'react'
import hon   from '../assets/hon.jpg'
import { TypeAnimation } from 'react-type-animation'
const Hero = () => {
  return (
    <div className='grid grid-cols-3 sm:grid-cols-8 gap-5 max-w[1200px] h-[70vh] mx-auto py-7 bg-blue-300'>

      <div className='my-auto mx-auto'>
        <div className='w[250x] h-auto lg:w-[300px]'>
        <img src={hon} alt="hon" className="rounded-full w-lg h-full object-cover" />
        </div>
      </div>

      <div className='col-span-4 px-20 my-auto'>
       <h1 className="text-500 text-5xl sm:text-5xl lg:text-7xl font-black">
           <span className="primary-color">
            I'm A
           </span> <br/>
           <TypeAnimation
           sequence={[
            "Computer Science",
            1000,
            "Futsal Player",
            1000,
            "Web Designer",
            1000,
           ]}
           wrapper='span'
           speed={50}
           repeat={Infinity}
           />
           </h1>
           <p className="text-white sm:text-lg my-5 lg:text-3xl">
            My Name Is John Vanrey Ramos Tagalog And My course is Computer Science I want to expand my learning about Programming langauage
           </p>
           <div className='my-8'>
            <a href="/" className="px-7 py-4 w-full rounded-xl mr-4
            bg-gradient-to-br from-violet-400 to bg-blue-400 text-white">
              Download CV
            </a>
            <a href="#Contact" className="px-5 py-3 w-full rounded-xl mr-4
            border-violet-400 hover:bg-gradient-to-br from-gray-600 to-blue-300 text-white hover:border-none">
              Contact
            </a>
           </div>
           </div>
      </div>
  )
}

export default Hero
