import React from 'react'
import jon from '../assets/jon.jpg'

const About = () => {
  return (
    <div className="text-black max-w-[1200px] mx-auto mmy-12" id="about">
      <div className="mt-4 md:grid-cols-2 sm:py-16">
        <div className="my-auto mx-6">
            <h2 className="text-6xl font-black mb-5 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
                "Hello Everyone My Name is John Vanrey Ramos Tagalog I'm Third Year Student At Cavite State Universit-Bacoor I lived in Hicban Compound Molino 6
                Bacoor Cavite My Course in Cvsu is Computer Science and I'm 20 years old,My Hobby are playing online games,listening music,playing soccer and My 
                Dream is to be come a successful Web Designer"
            </p>
        </div>
      </div> 
      <img className="mx-auto rounded-2xl py-8 md:py-0 " src={jon} alt="jon" width={500} height={500} />    
    </div>
  )
}

export default About
