import React from "react";

import { Star } from "lucide-react"; // for star icons

const testimonials = [
  {
    name: "Amanda Stark",
    image: "/images/heartfelt1.webp",
    review:
      "We had a wonderful experience at Dimend SCAASI! Susan and Issac were both so patient and responsive throughout the entire engagement ring selection process.",
  },
  {
    name: "Bree Langer",
    image: "/images/heartfelt2.webp",
    review:
      "Thank you go Isaac and the dimend SCAASI team for the engagement ring of my dreams!!",
  },
  {
    name: "Jess Siebener",
    image: "/images/heartfelt3.webp",
    review:
      "I had an absolutely incredible experience at dimend SCAASI! My fiancé found my dream engagement ring at this store, and we later returned to find my wedding band.",
  },
  {
    name: "Izzy Lucero",
    image: "/images/heartfelt4.webp",
    review:
      "We loved our experience working with Isaac. Isaac made sure the engagement ring was exactly what my fiancée was looking for while making sure it fit our budget without sacrificing quality.",
  },
];

const HeartFelt = () => {
  return (
    <>
      {/* ================= HEARTFELT SECTION ================= */}
      <section className="py-16 bg-white">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Arapey'] font-light text-[#3e3e3e] mb-6 px-4 md:px-20 text-center whitespace-nowrap">
          HEARTFELT TESTIMONIALS
        </h2>

        {/* Horizontal line: MOBILE ONLY */}
        <div className="sm:hidden mx-auto w-[85%] border-t border-gray-300 mb-6"></div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-20">
          {testimonials.map((t, idx) => (
            <div key={idx} className="text-left">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-72 object-cover mb-4 rounded"
              />
              <div className="flex items-center gap-3 mt-6">
                <h3 className="font-medium">{t.name}</h3>
                <img src="/icons/googleicon.webp" alt="Google" className="w-5 h-5" />
              </div>
              <div className="flex text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{t.review}</p>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="sm:hidden px-6">
          <div
            className="
              flex gap-4 overflow-x-auto snap-x snap-mandatory
              [scrollbar-width:none] [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex-none w-72 snap-start text-left">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-72 object-cover mb-4 rounded"
                />
                <div className="flex items-center gap-3 mt-6">
                  <h3 className="font-medium">{t.name}</h3>
                  <img src="/icons/googleicon.webp" alt="Google" className="w-5 h-5" />
                </div>
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{t.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMAGE GRID SECTION ================= */}
      <section className="relative w-full bg-white pt-0 pb-0">
        {/* ✅ Desktop / Tablet */}
        <div className="hidden md:grid grid-cols-2 w-full h-[800px] gap-0">
          <div className="flex flex-col gap-0">
            <img src="/images/review1.webp" alt="Left Top" className="w-full h-[400px] object-cover" />
            <img src="/images/review3.webp" alt="Left Bottom" className="w-full h-[400px] object-cover" />
          </div>
          <div className="flex flex-col gap-0">
            <img src="/images/review2.webp" alt="Right Top" className="w-full h-[400px] object-cover" />
            <img src="/images/review4.webp" alt="Right Bottom" className="w-full h-[400px] object-cover" />
          </div>
        </div>

        {/* Center Content Box */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/images/centercontenbox.webp" alt="Reviews" className="w-[400px] shadow-xl" />
        </div>

        {/* ✅ Mobile */}
        <div className="block md:hidden w-full relative overflow-hidden">
          <img src="/images/reviewmobile.webp" alt="Mobile Top" className="w-full h-[820px] object-cover" />
          <img
            src="/images/reviewmobilecenter.webp"
            alt="Mobile Bottom"
            className="absolute top-[350px] left-1/2 transform -translate-x-1/2 w-[80%] h-[450px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* ================= MOBILE FOOTER SECTION ================= */}
      <footer className="block md:hidden bg-[#faf6e9] relative pt-10 pb-0 m-0">
        {/* Accordion */}
       <div className="w-[85%] mx-auto divide-y divide-gray-300">
  <details className="py-4 group">
    <summary className="flex justify-between items-center font-semibold text-[#3e3e3e] cursor-pointer">
      CUSTOMER CARE
      <img
        src="/icons/downicon.png"
        alt="Toggle"
        className="h-7 w-9 ml-2 inline-block transition-transform duration-300 group-open:rotate-180"
      />
    </summary>
    <ul className="mt-3 space-y-2 text-sm text-gray-600 pl-2">
      <li>Live Chat</li>
      <li>Book Appointment</li>
      <li>1-88-502-1700</li>
      <li>sales@dscaasi.com</li>
      <li>Contact Us</li>
      <li>FAQs</li>
      <li>Ring Size Chart</li>
      <li>DS Care Service Plan</li>
    </ul>
  </details>

  <details className="py-4 group">
    <summary className="flex justify-between items-center font-semibold text-[#3e3e3e] cursor-pointer">
      ABOUT dimend SCAASI
      <img
        src="/icons/downicon.png"
        alt="Toggle"
        className="h-7 w-9 ml-2 inline-block transition-transform duration-300 group-open:rotate-180"
      />
    </summary>
    <ul className="mt-3 space-y-2 text-sm text-gray-600 pl-2">
      <li>Our Story</li>
      <li>Our Showroom</li>
      <li>Reviews</li>
      <li>Blog</li>
      <li>Lab Grown Diamond</li>
      <li>Diamond Buying Guide</li>
    </ul>
  </details>

  <details className="py-4 group">
    <summary className="flex justify-between items-center font-semibold text-[#3e3e3e] cursor-pointer">
      WHY dimend SCAASI
      <img
        src="/icons/downicon.png"
        alt="Toggle"
        className="h-7 w-9 ml-2 inline-block transition-transform duration-300 group-open:rotate-180"
      />
    </summary>
    <ul className="mt-3 space-y-2 text-sm text-gray-600 pl-2">
      <li>Returns Are Free</li>
      <li>Conflict Free Diamond</li>
      <li>Diamond Upgrade Program</li>
      <li>Financing And Free Shipping</li>
      <li>Delivery And Return</li>
      <li>Jewelry And Maintenance</li>
      <li>Luxury And Watches</li>
      <li>Gemstones</li>
    </ul>
  </details>

  <details className="py-4 group">
    <summary className="flex justify-between items-center font-semibold text-[#3e3e3e] cursor-pointer">
      DIAMOND SHAPES
      <img
        src="/icons/downicon.png"
        alt="Toggle"
        className="h-7 w-9 ml-2 inline-block transition-transform duration-300 group-open:rotate-180"
      />
    </summary>
    <ul className="mt-3 space-y-2 text-sm text-gray-600 pl-2">
      <li>Old Miner</li>
      <li>European</li>
      <li>Round</li>
      <li>Princess</li>
      <li>Marquise</li>
      <li>Cushion</li>
      <li>Oval</li>
      <li>Emarald</li>
      <li>Radiant</li>
      <li>Pear</li>
      <li>Asscher</li>
      <li>Heart</li>
    </ul>
  </details>
</div>


        {/* Social */}
        <div className="flex justify-center space-x-3 mt-4">
          <img src="/icons/facbookicon.png" alt="Facebook" className="h-6 w-6 rounded-full border border-gray-300 p-1" />
          <img src="/icons/paragicon.png" alt="Pinterest" className="h-6 w-6 rounded-full border border-gray-300 p-1" />
          <img src="/icons/instaicon.png" alt="Instagram" className="h-6 w-6 rounded-full border border-gray-300 p-1" />
          <img src="/icons/youtubeicon.png" alt="YouTube" className="h-6 w-6 rounded-full border border-gray-300 p-1" />
          <img src="/icons/doticon.png" alt="Yelp" className="h-6 w-6 rounded-full border border-gray-300 p-1" />
          <img src="/icons/googleicon.png" alt="Google" className="h-6 w-6 rounded-full border border-gray-300 p-1" />
        </div>

        {/* Partners Dropdown */}
 <div className="mt-5 mx-auto flex justify-center">
  {/* ✅ Box grows from 60% → 90% */}
  <details className="group border border-gray-300 w-[60%] transition-all duration-500 open:w-[80%]">
   <summary className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-gray-700 cursor-pointer">
    {/* ✅ Heading center me */}
    <span>Partners & Associations</span>

    {/* ✅ Arrow heading ke just bagal me */}
    <img
      src="/icons/downicon.png"
      alt="Expand"
      className="h-5 w-5 transition-transform "
    />
  </summary>

    {/* Grid of logos */}
  <div className="p-4 flex justify-center">
  <img
    src="/icons/boxinside.webp"
    alt="Partners & Associations"
    className="w-full max-w-[500px] object-contain"
  />
</div>

  </details>
</div>




        {/* Footer Bottom */}
        <div className="mt-6 w-full bg-[#4d152d] text-white py-6 px-4 text-center">
          <div className="text-xs space-x-3">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Use</a>
            <span>•</span>
            <a href="#">Site Map</a>
          </div>
          <p className="text-xs mt-2">
            © 1996-2024 dimend SCAASI Jewelers. <br /> All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default HeartFelt;
