import React, { useRef, useEffect } from 'react';

const Events = () => {
  const eventImages = [
    '/e1/e1.png',
    '/e2/e2.png',
    '/e3/e3.png'
  ];
  const extendedEventImages = [...eventImages, ...eventImages];
  const scrollRef = useRef(null);
  const itemRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    const itemElement = itemRef.current;
    if (scrollElement && itemElement) {
      const itemWidth = itemElement.offsetWidth + 16; // gap-4 = 16px
      const initialScroll = itemWidth * eventImages.length;
      scrollElement.scrollLeft = initialScroll;

      const handleScroll = () => {
        const scrollLeft = scrollElement.scrollLeft;
        if (scrollLeft < itemWidth * 2) {
          scrollElement.scrollLeft = scrollLeft + itemWidth * eventImages.length;
        } else if (scrollLeft > itemWidth * (eventImages.length * 2 - 2)) {
          scrollElement.scrollLeft = scrollLeft - itemWidth * eventImages.length;
        }
      };

      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="events" className="py-24 px-8 md:px-12 lg:px-16 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white font-lalezar text-5xl md:text-5xl lg:text-6xl mb-20 text-left tracking-tight drop-shadow-2xl">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Events
        </h2>

        {/* Mobile Horizontal Scroll */}
        <div ref={scrollRef} className="md:hidden flex overflow-x-auto snap-x snap-proximity gap-4 px-2 mb-16">
          {extendedEventImages.map((image, index) => (
            <div
              key={index}
              ref={index === 0 ? itemRef : null}
              className="flex-shrink-0 w-4/5 snap-start aspect-[3/4] relative group cursor-pointer"
              style={{
                backgroundImage: `url(${image})`,
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
        <div className="hidden md:grid grid-cols-3 gap-8 lg:gap-10 px-8 mb-16">
          {eventImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full aspect-[4/5] group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1"
              style={{
                backgroundImage: `url(${image})`,
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

        <div className="flex justify-center">
          <button className="bg-[#ff69b4] text-white font-poppins text-sm px-8 py-2 rounded-2xl hover:bg-[#e60073] transition-colors flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <span>See More</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;