import React, { useRef, useEffect } from 'react';

const Discography = () => {
  const posters = [
    '/disco1/disco1.png',
    '/disco2/disco2.png',
    '/disco3/disco3.png',
    '/disco4/disco4.png'
  ];
  const extendedPosters = [...posters, ...posters];
  const scrollRef = useRef(null);
  const itemRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    const itemElement = itemRef.current;
    if (scrollElement && itemElement) {
      const itemWidth = itemElement.offsetWidth + 16; // gap-4 = 16px
      const initialScroll = itemWidth * posters.length;
      scrollElement.scrollLeft = initialScroll;

      const handleScroll = () => {
        const scrollLeft = scrollElement.scrollLeft;
        if (scrollLeft < itemWidth * 2) {
          scrollElement.scrollLeft = scrollLeft + itemWidth * posters.length;
        } else if (scrollLeft > itemWidth * (posters.length * 2 - 2)) {
          scrollElement.scrollLeft = scrollLeft - itemWidth * posters.length;
        }
      };

      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="discography" className="py-10 px-8 md:px-8 lg:px-12 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white font-lalezar text-5xl md:text-5xl lg:text-6xl mb-20 text-left tracking-tight drop-shadow-2xl">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Discography
        </h2>

        {/* Mobile Horizontal Scroll */}
        <div ref={scrollRef} className="md:hidden flex overflow-x-auto snap-x snap-proximity gap-4 px-2">
          {extendedPosters.map((poster, index) => (
            <div
              key={index}
              ref={index === 0 ? itemRef : null}
              className="flex-shrink-0 w-4/5 snap-start aspect-[3/4] relative group cursor-pointer"
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