import React, { useState } from 'react';

const Discography = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const posters = [
    '/disco1/disco1.png',
    '/disco2/disco2.png',
    '/disco3/disco3.png',
    '/disco4/disco4.png'
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % posters.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + posters.length) % posters.length);

  return (
    <section id="discography" className="py-10 px-8 md:px-8 lg:px-12 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white font-lalezar text-5xl md:text-5xl lg:text-6xl mb-20 text-left tracking-tight drop-shadow-2xl">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Discography
        </h2>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {posters.map((poster, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 aspect-[3/4] relative group cursor-pointer"
                  style={{
                    backgroundImage: `url(${poster})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 rounded-xl"></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-hover:ring-pink-500/50 transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            ›
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {posters.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-pink-500' : 'bg-gray-500'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-8 lg:gap-10 px-8">
          {posters.map((poster, index) => (
            <div
              key={index}
              className="relative w-full aspect-[3/4] group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
              style={{
                backgroundImage: `url(${poster})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay for hover effect */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 rounded-xl"></div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-hover:ring-pink-500/50 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discography;