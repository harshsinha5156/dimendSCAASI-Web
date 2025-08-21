import React, { useRef, useEffect, useState } from 'react';

const GetInspired = () => {
  const scrollContainerRef = useRef(null);
  const progressLineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const exploreItems = [
    {  image: '/images/getinspired.webp' },
    {  image: '/images/getinpired2.webp' },
    {  image: '/images/getinspired3.webp' },
    {  image: '/images/getinspired4.webp' },
    {  image: '/images/getinspired5.webp' },
    {  image: '/images/getinspired6.webp' }
  ];

  const followUsImages = [
    '/icons/number2.webp',
    '/icons/number1.webp',
    '/icons/number5.webp',
    '/icons/number3.webp',
    '/icons/number4.webp'
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

  useEffect(() => {
    if (isMobile && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstItemWidth = 200;
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
      const scrollAmount = 280 + 24;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* ---------------- MOBILE: Simplified Layout ---------------- */}
      <section className="block md:hidden w-full px-4 py-8 text-center">
        <h2 className="text-2xl font-['Arapey'] text-black mb-2">
          GET INSPIRED
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          Discover engagement moments of our clients.
        </p>
        <div className="w-full">
         <img
  src={process.env.PUBLIC_URL + "/images/mobilenumer1.webp"}
  alt="Engagement Moments"
  className="mx-auto object-cover mt-8"  // 👈 Added top margin
  style={{ height: "350px", width: "100%", maxWidth: "90%" }}
/>

        </div>
      </section>

      {/* ---------------- DESKTOP: Original Layout ---------------- */}
      <section className="hidden md:flex w-full py-6 md:py-12 flex-col items-center gap-4 mt-[180px]">
        <h2 className="text-3xl font-['Arapey'] text-black mb-4">
          GET INSPIRED
        </h2>
        <div className="flex flex-col items-center mb-4 relative">
          <p className="text-center md:text-xs mb-2">
            Discover engagement moments of our clients
          </p>
          <div className="flex items-center relative">
            <div className="flex -space-x-5">
              {followUsImages.map((img, idx) => (
                <img
                  key={idx}
                  src={process.env.PUBLIC_URL + img}
                  alt={`Follow ${idx + 1}`}
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover border-2 border-gray-200"
                />
              ))}
            </div>
            <button className="ml-[-12px] px-4 py-1.5 md:px-6 md:py-2.5 bg-[#4d152d] text-white rounded-full hover:bg-opacity-90 transition-colors duration-300 z-10">
              Follow Us
            </button>
          </div>
        </div>
      </section>

     
        {/* ---------------- Explore Section (Desktop only) ---------------- */}
<section className="hidden md:block w-full overflow-hidden py-6 md:py-12 font-['Arapey']">

        {/* Progress Line */}
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

        {/* Scrollable Image Cards */}
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
    </>
  );
};

export default GetInspired;
