import React from "react";
import mainImage from "../assets/images/mainimage.webp";

const MainSection = () => {
  // Button component to avoid repetition
  const ActionButton = ({ children }) => (
  <button 
  className="bg-white text-black border border-black md:border-none 
             px-6 py-2 text-xs  shadow 
             w-[300px] h-[50px] 
             md:w-[240px] md:h-[42px] 
             md:ml-[-10px]  
             hover:bg-[#4d152d] hover:text-white 
             transition-colors duration-300 
             focus:outline-none focus:ring-2 focus:ring-[#4d152d]"
>
  {children}
</button>


  );

  return (
    <section className="w-full overflow-hidden">
      {/* Desktop/Tablet View */}
      <div 
        className="hidden md:flex h-[600px] relative items-center justify-start bg-cover bg-center"
        style={{ backgroundImage: `url(${mainImage})` }}
        role="img"
        aria-label="Sparkling jewelry collection background"
      >
        {/* Overlay with reduced opacity */}
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
        
        {/* Content container */}
        <div className="relative z-10 ml-8 max-w-lg px-16">
          <p className="uppercase text-xs ml-6 tracking-widest text-black mb-2">
            Up to 40% Off Jewelry, 25% Off Ring Settings
          </p>
          <h1 className="text-4xl px-25 ml-6 text-black mb-6 font-['Arapey']">
            Discover Your Sparkle
          </h1>

          <div className="flex flex-col ml-10 gap-4 w-[220px] items-center">
  <ActionButton>SHOP ENGAGEMENT RING</ActionButton>
  <ActionButton>SHOP JEWELRY</ActionButton>
</div>

        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col md:hidden">
        <img 
          src={mainImage} 
          alt="Sparkling jewelry collection" 
          className="w-full h-[408px] object-cover" 
          loading="eager"
        />
        
       <div className="px-6 py-8 flex flex-col items-center text-center bg-white w-[400px] mx-auto">
  <p className="uppercase text-sm tracking-widest text-black mb-2 width-[400px]">
    Up to 40% Off Jewelry, 25% Off <br/> Ring Settings
  </p>
  <h1 className="text-2xl font-['Arapey'] text-black mb-6 w-[400px] h-10">
    DISCOVER YOUR SPARKLE
  </h1>

  <div className="flex flex-col gap-4 w-full items-center">
    <ActionButton>SHOP ENGAGEMENT RING</ActionButton>
    <ActionButton>SHOP JEWELRY</ActionButton>
  </div>
</div>
      </div>
    </section>
  );
};

export default MainSection;