"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ShopByDiamond() {
  const diamonds = [
    { name: "Yellow ", img: "/images/diamondcolor1.webp" },
    { name: "Pink ", img: "/images/diamondcolor2.webp" },
    { name: "Purple ", img: "/images/diamondcolor3.webp" },
    { name: "Red ", img: "/images/diamondcolor4.webp" },
    { name: "Blue ", img: "/images/diamondcolor5.webp" },
    { name: "Green ", img: "/images/diamondcolor6.webp" },
    { name: "Orange ", img: "/images/diamondcolor7.webp" },
    { name: "Brown", img: "/images/diamondcolor8.webp" },
    { name: "Black ", img: "/images/diamondcolor9.webp" },
    { name: "White", img: "/images/diamondcolor10.webp" },
  ];

  return (
    <section className="w-full bg-white mt-16 py-8">
      {/* Desktop Heading */}
      <h2 className="hidden md:block text-center text-3xl md:text-4xl font-['Arapey'] mb-10">
        SHOP BY DIAMOND COLOR
      </h2>

      {/* Mobile Heading */}
      <div className="md:hidden text-center mb-8">
        <h2 className="text-2xl font-['Arapey'] leading-tight">SHOP BY</h2>
        <h2 className="text-2xl font-['Arapey'] leading-tight">
          DIAMOND COLOR
        </h2>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex justify-center gap-12 flex-wrap">
  {diamonds.map((diamond, idx) => (
    <div
      key={idx}
      className="relative group w-14 h-14 lg:w-20 lg:h-20"
    >
      <img
        src={diamond.img}
        alt={diamond.name}
        className="w-full h-full object-contain cursor-pointer transition-opacity duration-300 group-hover:opacity-0"
      />
      <div
        className="absolute inset-0 flex items-center justify-center 
        text-gray-800 text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 
        transition duration-300 rounded-full text-center px-2"
      >
        {diamond.name}
      </div>
    </div>
  ))}
</div>


      {/* Mobile Swiper */}
     <div className="md:hidden px-6">
  <Swiper
    slidesPerView={3}
    spaceBetween={20}
    pagination={{ clickable: true }}
    modules={[Pagination]}
  >
    {diamonds.map((diamond, idx) => (
      <SwiperSlide key={idx}>
        <div className="relative group w-20 h-20 mx-auto">
          <img
            src={diamond.img}
            alt={diamond.name}
            className="w-full h-full object-contain cursor-pointer"
          />
          {/* Name below image */}
          <div className="mt-2 text-center text-gray-800 text-xs font-medium">
            {diamond.name}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* dots niche */}
  <style jsx global>{`
    .swiper-pagination {
      position: relative !important;
      margin-top: 40px; /* thoda aur niche */
      text-align: center;
    }
  `}</style>
</div>

    </section>
  );
}
