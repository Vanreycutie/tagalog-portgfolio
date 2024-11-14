import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-blue-300 text-pink-400 h-[180px] w-full flex justify-between items-center p-8 rounded-lg border-b-2 border-gr -400">
      <span 
        className="bg-clip-text text-transparent bg-gradient-to-r from bg-violet-500 to-blue-600 text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold leading-none p-10"
        style={{ fontFamily: 'Comic Sans, ms Bold' }}
      >
        John Vanrey 
      </span>

      <ul className="hidden md:flex space-x-8">
        <li>
          <a className="-600 text-xl font-serif hover:text-violet-600" href="#about">About</a>
        </li>
        <li>
          <a className="text-violet-500text-xl font-serif hover:text-violet-600" href="#apps">Apps</a>
        </li>
        <li>
          <a className="text- text-xl font-serif hover:text-blue-500" href="#contact">Contact</a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={50} /> : <AiOutlineMenu size={50} />}
      </div>

      <div className={nav ? 'z-10 fixed top-0 left-0 w-[30%] h-full bg-black ease-in-out duration-500 rounded-lg border-4 border-white' : 'fixed left-[100%]'}>
        <ul className="flex flex-col p-3 text-xl">
          <li className="mb-6">
            <a className="text-white text-xl font-serif font-bold hover:text-pink-600" href="#home" onClick={handleNav}>Home</a>
          </li>
          <li className="mb-6">
            <a className="text-white text-xl font-serif font-bold hover:text-pink-600" href="#about" onClick={handleNav}>About</a>
          </li>
          <li className="mb-6">
            <a className="text-white text-xl font-serif font-bold hover:text-pink-600" href="#contact" onClick={handleNav}>Learning</a>
          </li>
          <li className="mb-6">
            <a className="text-white text-xl font-serif font-bold hover:text-pink-600" href="#contact" onClick={handleNav}>Contact</a>
          </li>
        </ul>
      </div>
      <button 
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-gradient-to-r from-red-500 to-blue-500 text-yellow p-4 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-yellow-600"
      >
        ↑
      </button>
    </div>
  );
};

export default Navbar;