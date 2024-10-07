import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/rythmlogo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-black text-white'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        <img src={logo} alt="Rhythm House Logo" className='w-10 h-10' />
        
        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
          </svg>
        </button>

        {/* Navbar Links */}
        <ul className={`lg:flex gap-8 ${isOpen ? 'block' : 'hidden'} lg:block text-center lg:text-left`}>
          <li className=' hover:bg-gray-400 hover:text-black py-2 px-4 rounded-lg transition-all'><Link to='/'>Home</Link></li>
          <li className=' hover:bg-gray-400 hover:text-black py-2 px-4 rounded-lg transition-all'><Link to='/poems'>Poems</Link></li>
          <li className=' hover:bg-gray-400 hover:text-black py-2 px-4 rounded-lg transition-all'><Link to='/movies'>Movies</Link></li>
          <li className=' hover:bg-gray-400 hover:text-black py-2 px-4 rounded-lg transition-all'><Link to='/soloperformance'>Solo Performance</Link></li>
          <li className=' hover:bg-gray-400 hover:text-black py-2 px-4 rounded-lg transition-all'><Link to='/about'>About</Link></li>
          <li className=' hover:bg-gray-400 hover:text-black py-2 px-4 rounded-lg transition-all'><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
