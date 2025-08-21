import React, { useRef, useEffect, useState } from 'react';

const ShopByMaterial = () => {
  const scrollContainerRef = useRef(null);
  const progressLineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const exploreItems = [
    { title: 'YELLOW GOLD', image: '/images/shopby21.webp' },
    { title: 'WHITE GOLD', image: '/images/shopby22.webp' },
    { title: 'ROSE GOLD ', image: '/images/shopby23.webp' },
    { title: 'PLATINUM', image: '/images/shopby24.webp' },
    { title: 'TANTALUM', image: '/images/shopby25.webp' },
    { title: '', image: '/images/shopby55.webp' },
   
    
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const progressLine = progressLineRef.current;

    const updateProgress = () => {
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const scrollPosition = container.scrollLeft;
      const progress = scrollWidth > 0 ? (scrollPosition / scrollWidth) * 100 : 0;
      progressLine.style.width = `${progress}%`;
    };

    container.addEventListener('scroll', updateProgress);
    return () => container.removeEventListener('scroll', updateProgress);
  }, [isMobile]);

  // Center first item on mobile on initial render
  useEffect(() => {
    if (isMobile && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstItemWidth = 200; // Mobile image width
      const centerPosition = (container.clientWidth - firstItemWidth) / 2;
      
      container.scrollTo({
        left: centerPosition,
        behavior: 'auto'
      });
    }
  }, [isMobile]);

  const handleScroll = (direction) => {
    if (!isMobile) {
      const container = scrollContainerRef.current;
      const scrollAmount = 280 + 24; // image width + gap
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full overflow-hidden py-6 md:py-12 mt-4 md:mt-8 font-['Arapey']">
      {/* Modified heading for mobile */}
    <div className="mb-6 md:mb-10 flex justify-center">
  <h2 className="font-['Arapey'] text-2xl md:text-3xl leading-[1.2] text-black text-center">
    <span className="block md:inline">SHOP BY MATERIAL</span>
   
  </h2>
</div>

      {/* Progress indicator line - different for mobile/desktop */}
      {isMobile ? (
        <div className="relative mb-6 w-[200px] mx-auto h-[2px] bg-gray-200">
          <div 
            ref={progressLineRef}
            className="absolute top-0 left-0 h-full bg-black transition-all duration-300"
            style={{ width: '0%' }}
          ></div>
        </div>
      ) : (
        <div className="relative mb-12 w-[calc(280px*4+24px*3)] mx-auto h-[2px] bg-gray-200">
          <div 
            ref={progressLineRef}
            className="absolute top-0 left-0 h-full bg-black transition-all duration-300"
            style={{ width: '0%' }}
          ></div>
          <div className="absolute right-0 -top-3 flex gap-3">
            <button 
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center bg-white hover:bg-black hover:text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center bg-white hover:bg-black hover:text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Image container */}
      <div className="w-full overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className={`flex overflow-x-auto scroll-smooth hide-scrollbar ${
            isMobile ? 'px-4' : 'px-8'
          }`}
          style={{ 
            gap: isMobile ? '16px' : '24px',
            scrollSnapType: isMobile ? 'x mandatory' : 'none',
            paddingLeft: isMobile ? 'calc(50% - 100px)' : 'calc((100% - (280px*4 + 24px*3))/2)'
          }}
        >
          {exploreItems.map((item, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 relative group" 
              style={{ 
                width: isMobile ? '200px' : '280px',
                height: isMobile ? '280px' : '450px',
                scrollSnapAlign: isMobile ? 'center' : 'none'
              }}
            >
              <img
                src={process.env.PUBLIC_URL + item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-center">
                <h3 className="font-['Arapey'] text-white text-sm md:text-lg tracking-widest uppercase drop-shadow-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ShopByMaterial;


