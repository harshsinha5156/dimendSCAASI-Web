export default function LuxurySection() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section
        className="relative w-full h-[680px] md:h-[780px] bg-cover bg-center flex items-center justify-center sm:h-[750px]"
        style={{
          backgroundImage:
            "url('/images/shopby26.webp')", // 👈 Desktop image by default
        }}
      >
        {/* Mobile-specific background */}
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{
            backgroundImage: "url('/images/shopby-mobile.webp')", // 👈 Mobile image
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* ✅ Desktop Content Only */}
        <div className="hidden md:flex relative text-center text-white px-4 max-w-2xl w-full flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-['Arapey'] mb-3 md:mb-4">
            BEST LUXURY WATCHES
          </h2>
          <p className="mb-6 text-sm md:text-base leading-relaxed">
            Explore our stunning collection of luxury watches, from{" "}
            <br className="hidden sm:block" />
            timeless classics to modern masterpieces and limited editions.
          </p>
          <button
            className="w-full sm:w-auto px-10 py-5 bg-white text-black border border-black 
            font-medium uppercase hover:bg-gray-200 transition text-base md:text-lg"
          >
            SHOP WATCHES
          </button>
        </div>

        {/* ✅ Mobile Bottom Content Only */}
        <div className="absolute bottom-6 left-0 right-0 px-6 text-center text-white md:hidden">
          <h2 className="text-2xl font-['Arapey'] mb-2">
            BEST LUXURY WATCHES
          </h2>
          <p className="mb-4 text-sm leading-relaxed">
            Explore our stunning collection of luxury watches,
            timeless classics and modern masterpieces.
          </p>
          <button
            className="w-full px-8 py-4 bg-white text-black border border-black 
            font-medium uppercase hover:bg-gray-200 transition text-sm"
          >
            SHOP WATCHES
          </button>
        </div>
      </section>

      {/* LOGO SECTION */}
      {/* Desktop View */}
      <section className="hidden md:flex w-full bg-[#121212] h-[110px] items-center justify-center">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4">
          <img src="/icons/bestluxury1.webp" alt="Logo 1" className="h-8 md:h-10 object-contain" />
          <img src="/icons/bestluxury2.webp" alt="Logo 2" className="h-8 md:h-10 object-contain" />
          <img src="/icons/bestluxury3.webp" alt="Logo 3" className="h-8 md:h-10 object-contain" />
          <img src="/icons/bestluxury4.webp" alt="Logo 4" className="h-8 md:h-10 object-contain" />
          <img src="/icons/bestluxury5.webp" alt="Logo 5" className="h-8 md:h-10 object-contain" />
          <img src="/icons/bestluxury6.webp" alt="Logo 6" className="h-8 md:h-10 object-contain" />
          <img src="/icons/bestluxury7.webp" alt="Logo 7" className="h-8 md:h-10 object-contain" />
          <img src="/icons/bestluxury8.webp" alt="Logo 8" className="h-8 md:h-10 object-contain" />
          <img src="/icons/bestluxury9.webp" alt="Logo 9" className="h-8 md:h-10 object-contain" />
          <img src="/icons/bestluxury10.webp" alt="Logo 10" className="h-8 md:h-10 object-contain" />
        </div>
      </section>

      {/* Mobile Logos */}
      <section className="md:hidden w-full bg-[#121212] py-6 px-6">
        {/* Row 1 - 3 logos */}
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          <img src="/icons/bestluxury1.webp" className="h-8 object-contain" />
          <img src="/icons/bestluxury2.webp" className="h-8 object-contain" />
          <img src="/icons/bestluxury3.webp" className="h-8 object-contain" />
        </div>
        <div className="w-full h-px bg-gray-700 my-5"></div>

        {/* Row 2 - 4 logos */}
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          <img src="/icons/bestluxury4.webp" className="h-8 object-contain" />
          <img src="/icons/bestluxury5.webp" className="h-8 object-contain" />
          <img src="/icons/bestluxury6.webp" className="h-8 object-contain" />
          <img src="/icons/bestluxury7.webp" className="h-8 object-contain" />
        </div>
        <div className="w-full h-px bg-gray-700 my-5"></div>

        {/* Row 3 - 3 logos */}
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          <img src="/icons/bestluxury8.webp" className="h-8 object-contain" />
          <img src="/icons/bestluxury9.webp" className="h-8 object-contain" />
          <img src="/icons/bestluxury10.webp" className="h-8 object-contain" />
        </div>
      </section>
    </div>
  );
}
