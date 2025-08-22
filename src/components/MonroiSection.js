import React, { useRef, useEffect, useState } from "react";

const MonroiSection = () => {
  const scrollContainerRef = useRef(null);
  const progressLineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showDiamondOptions, setShowDiamondOptions] = useState(false);

  const exploreItems = [
    {
      title: "MONROE CATHEDRAL",
      image: "/images/shopby15.webp",
      hoverImage: "/images/ring1.webp",
      price: "STARTING AT $2,100",
    },
    {
      title: "HOOP EARRING",
      image: "/images/shopby16.webp",
      hoverImage: "/images/ring2.webp",
      price: "STARTING AT $190",
    },
    {
      title: "TENNIS NECKLACE",
      image: "/images/shopby17.webp",
      hoverImage: "/images/ring3.webp",
      price: "STARTING AT $16,500",
    },
    {
      title: "JOY PAVE",
      image: "/images/shopby18.webp",
      hoverImage: "/images/ring4.webp",
      price: "STARTING AT $1,300",
    },
    {
      title: "STUD EARRING",
      image: "/images/shopby19.webp",
      hoverImage: "/images/ring5.webp",
      price: "STARTING AT $450",
    },
    {
      title: "DIAMOND BRACELET",
      image: "/images/shopby50.webp",
      hoverImage: "/images/ring6.webp",
      price: "STARTING AT $3,200",
    },
  ];

  // screen check
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // progress line
  useEffect(() => {
    const container = scrollContainerRef.current;
    const progressLine = progressLineRef.current;

    const updateProgress = () => {
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const scrollPosition = container.scrollLeft;
      const progress =
        scrollWidth > 0 ? (scrollPosition / scrollWidth) * 100 : 0;
      progressLine.style.width = `${progress}%`;
    };

    container.addEventListener("scroll", updateProgress);
    return () => container.removeEventListener("scroll", updateProgress);
  }, [isMobile]);

  // buttons scroll
  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = isMobile ? 250 : 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* ===== SCROLL SECTION ===== */}
      <section className="w-full overflow-hidden py-6 md:py-12 mt-4 md:mt-8 font-['Arapey']">
        {/* Progress line with buttons */}
        <div className="relative mt-6 mb-12 w-[80%] sm:w-[85%] md:w-[85%] mx-auto h-[2px] bg-gray-200">
          <div
            ref={progressLineRef}
            className="absolute top-0 left-0 h-full bg-black transition-all duration-300"
            style={{ width: "0%" }}
          ></div>

          {/* Scroll Buttons - Desktop Only */}
          {!isMobile && (
            <div className="absolute -top-4 right-0 flex gap-3 ">
              <button
                onClick={() => handleScroll("left")}
                className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center bg-white hover:bg-black hover:text-white transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 18l-6-6 6-6"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center bg-white hover:bg-black hover:text-white transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 18l6-6-6-6"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Scrollable Items */}
        <div className="w-full overflow-hidden">
          <div
            ref={scrollContainerRef}
            className={`flex scroll-smooth hide-scrollbar ${
              isMobile
                ? "overflow-x-scroll gap-4 mx-auto w-[80%]" // 👈 mobile me line ke equal
                : "overflow-hidden justify-center gap-6 pl-[550px]"
            }`}
          >
            {exploreItems.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative group text-center"
                style={{
                  width: isMobile ? "calc(40% + 80px)" : "280px", // 👈 ek pura image + thoda next
                }}
              >
                <div
                  className={`relative w-full ${
                    isMobile ? "h-[280px] -mt-4" : "h-[420px]"
                  } overflow-hidden`}
                >
                  {/* Default image */}
                  <img
                    src={process.env.PUBLIC_URL + item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${
                      isMobile
                        ? "opacity-100 active:opacity-0 object-top"
                        : "opacity-100 group-hover:opacity-0"
                    }`}
                  />
                  {/* Hover image */}
                  <img
                    src={process.env.PUBLIC_URL + item.hoverImage}
                    alt={`${item.title} Hover`}
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${
                      isMobile
                        ? "opacity-0 active:opacity-100 object-top"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </div>

                <h3 className="mt-4 text-sm md:text-base font-semibold tracking-wide uppercase">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  {item.price}
                </p>
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

      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full mt-16 md:mt-24">
        <div className="flex flex-col md:flex-row w-full h-auto md:h-[850px]">
          {/* Left image */}
          <div className="w-full md:w-1/2 h-[300px] md:h-full">
            <img
              src="/images/shopby51.webp"
              alt="Left"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right image */}
          <div className="hidden md:block w-1/2 h-full">
            <img
              src="/images/shopby52.webp"
              alt="Right"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center text for desktop */}
       <div className="absolute inset-0 hidden md:flex flex-col justify-center items-center text-center text-white px-4">
  <h1 className="text-3xl md:text-3xl font-['Arapey'] mb-4 leading-snug">
    DESIGN YOUR OWN RING
  </h1>
  <p className="text-[10px] md:text-base max-w-xl mb-6 leading-relaxed">
    With a commitment to both sustainability and tradition, we <br /> offer
    a diverse selection of lab and mined diamonds <br /> Chicago customers
    can choose from with confidence.
  </p>

  {/* Buttons */}
  <div className="flex flex-col gap-3 w-full max-w-[250px]">
    <button className="px-4 py-2 bg-white text-black font-xs uppercase hover:bg-gray-200 transition w-full">
      START WITH A SETTING
    </button>

    {/* Dropdown */}
   <div
      className="relative w-full"
      onMouseEnter={() => setShowDiamondOptions(true)}
      onMouseLeave={() => setShowDiamondOptions(false)}
    >
      <button className="px-4 py-2 bg-white text-black font-xs uppercase hover:bg-gray-200 transition w-full">
        START WITH A DIAMOND ▼
      </button>

      {showDiamondOptions && (
        <div className="absolute top-full left-0 mt-2 flex flex-col bg-white text-black  shadow-lg w-full z-10">
          <button className="px-4 py-2 hover:bg-gray-100">LAB</button>
           <div className="w-full border-b border-gray-300 mt-2"></div>
          <button className="px-4 py-2 hover:bg-gray-100">NATURAL</button>
           <div className="w-full border-b border-gray-300 mt-2"></div>
          <button className="px-4 py-2 hover:bg-gray-100">LAB COLORED</button>
           <div className="w-full border-b border-gray-300 mt-2"></div>
        </div>
      )}
    </div>
  </div>
</div>


        {/* Mobile Layout */}
       <div className="flex flex-col md:hidden text-center text-black mt-6 px-2  max-w-[90%] text-center mx-auto  ">
  <h1 className="text-2xl font-['Arapey'] mb-3">
    DESIGN YOUR OWN RING
  </h1>
  <p className="text-sm leading-relaxed mb-4">
    With a commitment to both sustainability and tradition, we offer a
    diverse selection of lab and mined diamonds Chicago customers can
    choose from with confidence.
  </p>

  <div className="flex flex-col gap-3 mb-6">
    <button className="px-6 py-3 bg-white text-black border border-black font-sm uppercase  hover:bg-gray-100 transition">
      START WITH A SETTING
    </button>

    <div className="relative w-full">
      <button
        onClick={() => setShowDiamondOptions(!showDiamondOptions)}
        className="flex items-center justify-between px-6 py-3 bg-white  text-black border border-black font-sm uppercase  hover:bg-gray-100 transition w-full"
      >
        <span>START WITH A DIAMOND</span>
        <img
          src="/icons/downicon.png"
          alt="Down"
          className={`w-7 h-7 mr-4 ml-2 transition-transform duration-300 ${
            showDiamondOptions ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {showDiamondOptions && (
        <div className="absolute top-full left-0 mt-2 flex flex-col bg-white text-black rounded shadow-lg w-full z-10">
          <button className="px-6 py-2 hover:bg-gray-100">LAB</button>
          <button className="px-6 py-2 hover:bg-gray-100">NATURAL</button>
          <button className="px-6 py-2 hover:bg-gray-100">LAB COLORED</button>
        </div>
      )}
    </div>
  </div>
  <div className="w-full h-[300px] mt-6 flex justify-center">
  <img
    src="/images/shopby52.webp"
    alt="Right Mobile"
    className="w-full max-w-[100%] h-full object-cover"
  />
</div>



</div>



      </section>
    </div>
  );
};

export default MonroiSection;
