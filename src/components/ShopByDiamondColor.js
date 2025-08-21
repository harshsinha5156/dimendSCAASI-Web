import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const DiamondShapes = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const diamondShapes = [
    { name: 'Marquise', image: '/images/shopby1.webp' },
    { name: 'Radiant', image: '/images/shopby2.webp' },
    { name: 'Pear', image: '/images/shopby3.webp' },
    { name: 'Cushion', image: '/images/shopby4.webp' },
    { name: 'European', image: '/images/shopby5.webp', newTag: true },
    { name: 'Round', image: '/images/shopby6.webp' },
    { name: 'Oval', image: '/images/shopby7.webp' },
    { name: 'Old Miner', image: '/images/shopby8.webp', newTag: true },
    { name: 'Princess', image: '/images/shopby9.webp' },
    { name: 'Emarald', image: '/images/shopby10.webp' },
    { name: 'Asscher', image: '/images/shopby11.webp' },
    { name: 'Heart', image: '/images/shopby12.webp' },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 3) % diamondShapes.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 3 + diamondShapes.length) % diamondShapes.length);
  };

  const visibleShapes = diamondShapes.slice(currentSlide, currentSlide + 3);

  return (
    <>
      {/* Diamond Shapes Section */}
      <section className="w-full py-6 bg-white">
        <div className="container mx-auto px-4">
          {/* Responsive Heading */}
          <h2 className="text-center font-['Arapey'] text-xl md:text-3xl font-light mb-4 md:mb-8 tracking-wider">
            <span className="block md:inline">SHOP BY </span>
            <span className="block md:inline">DIAMOND SHAPE</span>
          </h2>
          
          {/* Desktop & Tablet View (all images side by side) */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-x-4 lg:gap-x-6">
            {diamondShapes.map((shape, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center relative group pt-2"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {shape.newTag && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#4d152d] text-white text-[8px] px-2 py-0.5 rounded-sm z-10 whitespace-nowrap">
                    NEW
                  </div>
                )}
                
                <div className="w-[75px] md:w-[80px] h-[60px] md:h-[60px] flex items-center justify-center relative mt-1">
                  <img 
                    src={shape.image} 
                    alt={shape.name} 
                    className={`w-full h-full object-contain transition-all duration-300 ${hoveredIndex === index ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
                  />
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="text-[9px] md:text-[10px] font-medium text-center px-1">{shape.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View (3 images with names below image) */}
          <div className="sm:hidden">
            <div className="flex items-center justify-center gap-x-6 relative">
              {visibleShapes.map((shape, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center relative group pt-2"
                >
                  {shape.newTag && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#4d152d] text-white text-[8px] px-2 py-0.5 rounded-sm z-10 whitespace-nowrap">
                      NEW
                    </div>
                  )}
                  
                  <div className="w-[75px] h-[55px] flex items-center justify-center relative mt-1">
                    <img 
                      src={shape.image} 
                      alt={shape.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Name below image */}
                  <span className="mt-1 text-[10px] font-medium text-center">{shape.name}</span>
                </div>
              ))}
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: Math.ceil(diamondShapes.length / 3) }).map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentSlide(i * 3)}
                  className={`w-2 h-2 rounded-full ${currentSlide === i * 3 ? 'bg-black' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* Our Bestsellers Section */}
<section className="w-full h-[400px] md:h-[600px] lg:h-[850px] flex flex-col md:flex-row relative mt-8 md:mt-12">
  
  {/* Desktop: side-by-side images */}
  <div className="hidden md:flex w-1/2 h-full">
    <img 
      src="/images/shopby13.webp"   
      alt="Bestseller Left" 
      className="w-full h-full object-cover"
    />
  </div>
  <div className="hidden md:flex w-1/2 h-full">
    <img 
      src="/images/shopby14.webp"  
      alt="Bestseller Right" 
      className="w-full h-full object-cover"
    />
  </div>

  {/* Mobile & Tablet: side-by-side images */}
  <div className="flex md:hidden w-full h-[300px]">
    <div className="w-1/2 h-full">
      <img 
        src="/images/shopby13.webp"   
        alt="Bestseller Left" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-1/2 h-full">
      <img 
        src="/images/shopby14.webp"  
        alt="Bestseller Right" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Desktop: Centered text and icon */}
  <div className="hidden md:flex absolute inset-0 flex-col items-center justify-center text-white">
    <h2 className="text-2xl lg:text-3xl font-light tracking-wide font-['Arapey']">
      OUR BESTSELLERS
    </h2>
    <div className="mt-4 lg:mt-8 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border border-white">
      <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6" />
    </div>
  </div>

  {/* Mobile: Text and icon below images */}
  <div className="md:hidden w-full py-6 flex flex-col items-center justify-center text-black bg-white">
    <h2 className="text-2xl font-light tracking-wide font-['Arapey']">
      OUR BESTSELLERS
    </h2>
    <div className="mt-4 w-10 h-10 flex items-center justify-center rounded-full border border-black">
      <ChevronDown className="w-5 h-5" />
    </div>
  </div>
</section>

    </>
  );
};

export default DiamondShapes;
