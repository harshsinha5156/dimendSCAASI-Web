import React, { useRef, useEffect, useState } from 'react';

const ExploreSection = () => {
  const scrollContainerRef = useRef(null);
  const progressLineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const exploreItems = [
    { title: 'ENGAGEMENT RINGS', image: '/images/explorediamond1.webp' },
    { title: 'WEDDING RINGS', image: '/images/explorediamond2.webp' },
    { title: 'DIAMONDS', image: '/images/explorediamond3.webp' },
    { title: 'WATCHES', image: '/images/explorediamond4.webp' },
    { title: 'GEMSTONES', image: '/images/explorediamond5.webp' },
    { title: 'FINE JEWELRY', image: '/images/explorediamond7.webp' }
  ];

  // Check for mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Update progress line on scroll
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

  // Scroll function for buttons
  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = isMobile ? 240 : 320 + 32; // mobile: 1 card width
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="w-full overflow-hidden py-6 md:py-12 mt-4 md:mt-8 font-['Arapey']">
      {/* Heading */}
      <div className="mb-6 md:mb-10 flex justify-center">
        <h2 className="text-2xl md:text-3xl leading-[1.2] text-black text-center whitespace-nowrap">
          EXPLORE dimend <span className="text-black">SCAASI</span>
        </h2>
      </div>

      {/* Progress Line */}
      <div className="relative w-full flex justify-center mb-6 md:mb-12">
        <div
          className={`relative h-[2px] bg-gray-200`}
          style={{
            width: isMobile ? 'calc(100% - 70px)' : '1320px',
            marginLeft: isMobile ? '0px' : '20px',
            marginRight: isMobile ? '0px' : '20px'
          }}
        >
          <div
            ref={progressLineRef}
            className="absolute top-0 left-0 h-full bg-black transition-all duration-300"
            style={{ width: '0%' }}
          ></div>

          {/* Scroll Buttons - Desktop Only */}
          {!isMobile && (
            <div className="absolute -top-4 right-0 flex gap-3 ">
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
          )}
        </div>
      </div>

      {/* Image Scroller */}
      <div className="w-full overflow-hidden">
        <div
  ref={scrollContainerRef}
  className={`flex overflow-x-auto scroll-smooth hide-scrollbar ${
    isMobile ? 'px-0' : 'px-8'
  }`}
  style={{
    gap: '16px',
    scrollSnapType: isMobile ? 'x mandatory' : 'none',
    width: isMobile ? 'calc(100% - 70px)' : '100%',
    margin: isMobile ? '0 auto' : '0',
    paddingLeft: isMobile ? '0px' : '75px' // 👈 ye desktop me left gap dega
  }}
>
  {exploreItems.map((item, index) => (
    <div
      key={index}
      className="flex-shrink-0 relative group"
      style={{
        width: isMobile ? '220px' : '310px',
        height: isMobile ? '300px' : '450px',
        scrollSnapAlign: isMobile ? 'start' : 'none'
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
        <h3 className="text-white text-sm md:text-lg tracking-widest uppercase drop-shadow-lg">
          {item.title}
        </h3>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Scrollbar hide styles */}
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

export default ExploreSection;
