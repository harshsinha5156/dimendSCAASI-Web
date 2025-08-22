export default function LuxurySection() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section
        className="relative w-full h-[550px] sm:h-[600px] md:h-[700px] lg:h-[780px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/shopby26.webp')",
        }}
      >
        {/* Mobile-specific background */}
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{
            backgroundImage: "url('/images/watch1.webp')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* ✅ Desktop + iPad Content */}
        <div className="hidden md:flex relative text-center text-white px-6 sm:px-8 max-w-3xl w-full flex-col items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Arapey'] mb-3 md:mb-4">
            BEST LUXURY WATCHES
          </h2>
          <p className="mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
            Explore our stunning collection of luxury watches, from{" "}
            <br className="hidden sm:block" />
            timeless classics to modern masterpieces and limited editions.
          </p>
         <button
  className="w-full sm:w-[280px] md:w-[320px] px-8 py-2 bg-white text-black border border-black font-medium uppercase hover:bg-gray-200 transition text-xs xs:text-base md:text-lg"
>
  SHOP WATCHES
</button>

        </div>

        {/* ✅ Mobile Content Only */}
        <div className="absolute bottom-6 left-0 right-0 px-6  text-center text-white md:hidden">
          <h2 className="text-xl sm:text-2xl font-['Arapey'] mb-2">
            BEST LUXURY WATCHES
          </h2>
          <p className="mb-4 text-xs sm:text-sm leading-relaxed">
            Explore our stunning collection of luxury watches, from <br/>
            timeless classics and modern masterpieces and limited <br/> editions.
          </p>
          <button
            className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white text-black border border-black 
            font-medium uppercase hover:bg-gray-200 transition text-xs sm:text-xs"
          >
            SHOP WATCHES
          </button>
        </div>
      </section>

      {/* LOGO SECTION */}
      {/* Desktop + iPad */}
      <section className="hidden md:flex w-full bg-[#121212] h-[90px] sm:h-[100px] md:h-[110px] items-center justify-center">
  <section className="hidden md:flex w-full bg-[#121212] h-[90px] sm:h-[100px] md:h-[110px] items-center justify-center">
  <div className="max-w-6xl lg:max-w-7xl mx-auto w-full flex flex-wrap justify-center gap-9 lg:gap-11 px-4">
    {Array.from({ length: 10 }, (_, i) => (
      <img
        key={i}
        src={`/icons/bestluxury${i + 1}.webp`}
        alt={`Logo ${i + 1}`}
        className="h-6 sm:h-7 md:h-8 lg:h-10 object-contain"
      />
    ))}
  </div>
</section>

</section>


      {/* Mobile Logos */}
      <section className="md:hidden w-full bg-[#121212] py-6 px-6">
        {/* Row 1 - 3 logos */}
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          <img src="/icons/bestluxury1.webp" className="h-6 sm:h-8 object-contain" />
          <img src="/icons/bestluxury2.webp" className="h-6 sm:h-8 object-contain" />
          <img src="/icons/bestluxury3.webp" className="h-6 sm:h-8 object-contain" />
        </div>
        <div className="w-full h-px bg-gray-700 my-5"></div>

        {/* Row 2 - 4 logos */}
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          <img src="/icons/bestluxury4.webp" className="h-6 sm:h-8 object-contain" />
          <img src="/icons/bestluxury5.webp" className="h-6 sm:h-8 object-contain" />
          <img src="/icons/bestluxury6.webp" className="h-6 sm:h-8 object-contain" />
          <img src="/icons/bestluxury7.webp" className="h-6 sm:h-8 object-contain" />
        </div>
        <div className="w-full h-px bg-gray-700 my-5"></div>

        {/* Row 3 - 3 logos */}
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          <img src="/icons/bestluxury8.webp" className="h-6 sm:h-8 object-contain" />
          <img src="/icons/bestluxury9.webp" className="h-6 sm:h-8 object-contain" />
          <img src="/icons/bestluxury10.webp" className="h-6 sm:h-8 object-contain" />
        </div>
      </section>
    </div>
  );
}
