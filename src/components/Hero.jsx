import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[120vh] bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute left-1/2 top-[35%] md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-80 md:w-[600px] md:h-[400px] lg:w-[800px] lg:h-[500px]"
        style={{
          backgroundImage: 'url(/image%20above%20dyna%20meets/image%20above%20dyna%20meets.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          zIndex: 20
        }}
      ></div>

      {/* Gradient Overlay */}
      <div
        className="absolute left-1/2 top-[35%] md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[700px] md:h-[700px] lg:w-[1000px] lg:h-[1000px] opacity-70"
        style={{
          backgroundImage: 'url(/gredient/gredientt.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* DYNA MEETS Text - Positioned at start of bottom 50% on mobile */}
      <div className="absolute top-[60%] md:top-[25%] left-1/2 transform -translate-x-1/2 text-center px-6 z-10">
        <div className="flex flex-row md:flex-row items-center justify-center gap-4 md:gap-0 space-y-6 md:space-y-0 md:space-x-40">
          {/* DYNA */}
          <h1 className="text-white font-lalezar text-6xl md:text-7xl lg:text-[182px] leading-none tracking-tight drop-shadow-lg mb-0" style={{height: '182px', lineHeight: '182px'}}>
            &nbsp;&nbsp;DYNA
          </h1>
          {/* MEETS */}
          <h1 className="text-white font-lalezar text-6xl md:text-7xl lg:text-[182px] leading-none tracking-tight drop-shadow-lg" style={{height: '182px', lineHeight: '182px'}}>
            MEETS
          </h1>
        </div>
      </div>

      {/* Tagline and Button - Centered in bottom 50% on mobile, right bottom on desktop */}
      <div className="absolute bottom-12 left-1/2 md:bottom-16 md:right-12 lg:bottom-20 lg:right-16 transform -translate-x-1/2 md:translate-x-0 md:left-auto z-10 max-w-sm">
        {/* Tagline */}
        <p className="text-white font-poppins text-xs mb-6 leading-relaxed drop-shadow-lg text-center md:text-right">
          Where rhythm meets refinement, and culture becomes couture. Dynameets elevates every gathering into an exclusive sonic experience.
        </p>

        {/* Sign Up Button */}
        <div className="flex justify-center md:justify-end">
          <button className="bg-[#f869b1e3] text-white font-poppins text-sm px-5 py-2 rounded-xl hover:bg-[#ee1984] transition-colors flex items-center space-x-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <span>SIGN UP</span>
            <div className="w-4 h-4 bg-gradient-radial from-white to-pink-500 rounded-full"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;