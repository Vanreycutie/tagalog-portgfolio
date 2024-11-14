import React, { useState } from 'react';
import homepage from '../assets/homepage.png';
import order from '../assets/order.png';
import orderreports from'../assets/orderreports.png';
import admin from '../assets/admin.png';
import adminsetting from '../assets/adminsetting.png';
import loginform from '../assets/loginform.jpeg';
import loginsuccess from '../assets/loginsuccess.jpeg';
import registerform from '../assets/registerform.jpeg';
import success from '../assets/success.jpeg';
import act from '../assets/act.jpeg';
import act1 from '../assets/act1.jpeg';
import act2 from '../assets/act2.jpeg';
import act3 from '../assets/act3.jpeg';
import act4 from '../assets/act4.jpeg';
import act5 from '../assets/act5.jpeg';

const Work = () => {
  const [isCafeOpen, setIsCafeOpen] = useState(false);
  const [isLogOpen, setIsLogOpen] = useState(false);
  const [isBellaOpen, setIsBellaOpen] = useState(false);
  const [currentCafeSlide, setCurrentCafeSlide] = useState(0);
  const [currentLogSlide, setCurrentLogSlide] = useState(0);
  const [currentBellaSlide, setCurrentBellaSlide] = useState(0);

  // Image arrays for each project
  const cafeImages = [homepage, order, orderreports, admin, adminsetting];
  const logImages = [loginform, loginsuccess, registerform, success];
  const bellaImages = [act,act1,act2,act3, act4,act5];

  // Toggle modals for each project
  const toggleCafeModal = () => {
    setIsCafeOpen(!isCafeOpen);
    setCurrentCafeSlide(0);
  };

  const toggleLogModal = () => {
    setIsLogOpen(!isLogOpen);
    setCurrentLogSlide(0);
  };

  const toggleBellaModal = () => {
    setIsBellaOpen(!isBellaOpen);
    setCurrentBellaSlide(0);
  };

  // Navigation for each project’s slides
  const nextCafeSlide = () => setCurrentCafeSlide((prevSlide) => (prevSlide + 1) % cafeImages.length);
  const prevCafeSlide = () => setCurrentCafeSlide((prevSlide) => (prevSlide - 1 + cafeImages.length) % cafeImages.length);

  const nextLogSlide = () => setCurrentLogSlide((prevSlide) => (prevSlide + 1) % logImages.length);
  const prevLogSlide = () => setCurrentLogSlide((prevSlide) => (prevSlide - 1 + logImages.length) % logImages.length);

  const nextBellaSlide = () => setCurrentBellaSlide((prevSlide) => (prevSlide + 1) % bellaImages.length);
  const prevBellaSlide = () => setCurrentBellaSlide((prevSlide) => (prevSlide - 1 + bellaImages.length) % bellaImages.length);

  return (
    <div className='font-mono'>
      <div className='max-w-[2000x] mx-auto p-5 bg-blue-400 rounded-lg shadow-lg shadow-orange-400' id='work'>
        <div className='pb-8 text-center'>
          <h1 className="bg-gradient-to-r from-violet-500 to-violet-600 text-transparent bg-clip-text md:text-5xl font-extrabold mb-8 ">
            Projects
          </h1>
          <p className='text-gray-600 sm:text-lg my-6 lg:text-xl'>
            Let's See My School Projects
          </p>
        </div>

        <div className='flex justify-center gap-[10%]'>
          {/* Cafe Project */}
          <div 
            onClick={toggleCafeModal} 
            className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-orange-400 group rounded-md flex justify-center items-center w-[500px] h-[300px] bg-cover relative cursor-pointer'
          >
            <img src={homepage} alt="Cafe Project" className="w-full h-full object-cover" />
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
              <span className='text-2xl font-bold text-white tracking-wider'> Cafe Project </span>
            </div>
          </div>

          {/* Log Project */}
          <div 
            onClick={toggleLogModal} 
            className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-orange-400 group rounded-md flex justify-center items-center w-[500px] h-[300px] bg-cover relative cursor-pointer'
          >
            <img src={loginform} alt="Log Project" className="w-full h-full object-cover" />
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
              <span className='text-2xl font-bold text-white tracking-wider'> Log Project </span>
            </div>
          </div>

          {/* My Activities */}
          <div 
            onClick={toggleBellaModal} 
            className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-orange-400 group rounded-md flex justify-center items-center w-[500px] h-[300px] bg-cover relative cursor-pointer'
          >
            <img src={act} alt="BellaVita Project" className="w-full h-full object-cover" />
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
              <span className='text-2xl font-bold text-white tracking-wider'> My Activity </span>
            </div>
          </div>
        </div>

        {/* Modal for Cafe Project */}
        {isCafeOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
            <div className='relative w-[90vw] max-w-[800px] h-auto'>
              <img 
                src={cafeImages[currentCafeSlide]} 
                alt={`Cafe Slide ${currentCafeSlide + 1}`} 
                className='w-full h-auto max-h-[80vh] object-cover rounded-lg' 
              />
              <button 
                onClick={toggleCafeModal} 
                className='absolute top-4 right-4 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ✕
              </button>
              <button 
                onClick={prevCafeSlide} 
                className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ‹
              </button>
              <button 
                onClick={nextCafeSlide} 
                className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ›
              </button>
            </div>
          </div>
        )}

        {/* Modal for Log Project */}
        {isLogOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
            <div className='relative w-[90vw] max-w-[800px] h-auto'>
              <img 
                src={logImages[currentLogSlide]} 
                alt={`Log Slide ${currentLogSlide + 1}`} 
                className='w-full h-auto max-h-[80vh] object-cover rounded-lg' 
              />
              <button 
                onClick={toggleLogModal} 
                className='absolute top-4 right-4 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ✕
              </button>
              <button 
                onClick={prevLogSlide} 
                className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ‹
              </button>
              <button 
                onClick={nextLogSlide} 
                className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ›
              </button>
            </div>
          </div>
        )}

        {/* Modal for My Activities */}
        {isBellaOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
            <div className='relative w-[90vw] max-w-[800px] h-auto'>
              <img 
                src={act[currentBellaSlide]} 
                alt={`BellaVita Slide ${currentBellaSlide + 1}`} 
                className='w-full h-auto max-h-[80vh] object-cover rounded-lg' 
              />
              <button 
                onClick={toggleBellaModal} 
                className='absolute top-4 right-4 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ✕
              </button>
              <button 
                onClick={prevBellaSlide} 
                className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ‹
              </button>
              <button 
                onClick={nextBellaSlide} 
                className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2'
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;