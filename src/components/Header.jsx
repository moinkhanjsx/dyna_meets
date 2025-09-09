import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="w-[90%] bg-gradient-to-r from-black to-gray-900 rounded-[30px] border border-zinc-400 mx-auto mt-4 flex justify-between items-center px-8 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="/logo/logo.png" alt="Dynameets Logo" className="w-12 h-12" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-white font-poppins text-sm hover:text-pink-400 transition-colors">HOME</a>
          <a href="#about" className="text-white font-poppins text-sm hover:text-pink-400 transition-colors">ABOUT</a>
          <a href="#music" className="text-white font-poppins text-sm hover:text-pink-400 transition-colors">MUSIC</a>
          <a href="#events" className="text-white font-poppins text-sm hover:text-pink-400 transition-colors">EVENTS</a>
          <a href="#contact" className="text-white font-poppins text-sm hover:text-pink-400 transition-colors">CONTACT</a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <a href="#login" className="text-white font-poppins text-sm hover:text-pink-400 transition-colors">LOGIN</a>
          <button className="bg-[#96818b] text-white font-poppins text-sm px-4 py-2 rounded-xl hover:bg-[#e60073] transition-colors">
            SIGN UP
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;