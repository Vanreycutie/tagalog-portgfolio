import React from 'react'
import css from '../assets/css.jpeg';
import tailwind from '../assets/tailwind.jpeg';
import javascript from '../assets/javascrpt.jpeg'

const Learning = () => {
  return (
    
      <div className='bg bg-red-400 text-black-400 md:h-[135px] max-x[1000px] mx-auto grid grid-cols-3
    place-items-center md:flex md:justify-between md:items-center'>

    <h2 className="text-yelllow-600 text-5xl md:text-4xl font-serif m-6"> 
         Learning
    </h2>
    <div className="flex flex-col items-center m-4 sm:my-0 w[80px] md:w-[100px]">
        <img src={css} alt="css"/>
        <p className="mt-2">Css</p>
    </div>
    <div className="flex flex-col items-center m-4 sm:my-0 w[80px] md:w-[100px]">
        <img src={tailwind} alt="tailwind"/>
        <p className="mt-2">Tailwind</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w[80px] md:w-[100px]">
        <img src={javascript} alt="javascript"/>
        <p className="mt-2">Javascript</p>
        </div>
    </div>
  )
}

export default Learning
