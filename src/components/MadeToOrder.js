"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";

export default function Sections() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ----------------- Made To Order Section ----------------- */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-16">
          
          {/* Left Part - 2 Images Side by Side (Desktop) */}
          <div className="hidden md:grid w-full md:w-[680px] h-[500px] grid-cols-2 gap-0">
            <img
              src="/images/dimondcolor12.webp"
              alt="Made to Order 1"
              className="w-full h-full object-cover shadow-md"
            />
            <img
              src="/images/diamondcolor11.webp"
              alt="Made to Order 2"
              className="w-full h-full object-cover shadow-md"
            />
          </div>

          {/* Right Part - Content (Desktop Only) */}
          <div className="hidden md:flex flex-1 items-center justify-center text-center md:text-left px-6 md:pl-12">
            <div>
              <p className="uppercase text-sm tracking-widest mb-2">
                From a dream to reality
              </p>
              <h2 className="text-3xl md:text-4xl font-['Arapey'] mb-4">
                Made To Order
              </h2>
              <p className="text-gray-700 text-base mb-6">
                Tailored to your preferences, each piece is crafted <br /> with precision, 
                ensuring a unique experience tailored for you.
              </p>
              <a
                href="#"
                className="text-sm font-medium underline hover:opacity-80"
                style={{ color: "#4d152d" }}
              >
                Book A Virtual Appointment
              </a>

              {/* Buttons - Under Book Appointment */}
              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                <button className="w-12 h-12 border border-gray-800 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 border border-gray-800 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Mobile Version (2 Images + Accordion Overlay) ---------- */}
        <div className="relative md:hidden mt-8">
          {/* Left and Right Images */}
         <div className="w-full h-[750px]">
  <img
    src="/images/mobile750.jpg"
    alt="Made to Order"
    className="w-full h-full object-cover"
  />
</div>


          {/* Overlay Accordion Box - start at 400px */}
         <div className="absolute top-[380px] left-5 right-5 bg-[#4d152d] font-['Arapey'] flex flex-col justify-center px-4 py-6 text-white ">
  <div className="uppercase text-sm tracking-widest mb-4">
    From a dream to reality
  </div>

  {[
   {
    title: "MADE TO ORDER",
    content: (
      <>
        Return your purchase within a reasonable timeframe if you are not completely satisfied. <br />
       <a
  href="#"
  className="underline font-semibold hover:opacity-80 mt-2 block"
  style={{ color: "#fff" }}
>
  Book A Virtual Appointment
</a>

      </>
    ),
  },
      {
    title: "MADE RESPONSIBLY",
    content: (
      <>
        Our jewelry is made responsibly, reflecting our commitment to ethical sourcing and sustainable practices. <br />
       <a
  href="#"
  className="underline font-semibold hover:opacity-80 mt-2 block"
  style={{ color: "#fff" }}
>
  Conflict Free Diamonds
</a>

      </>
    ),
  },
      {
    title: "MADE TO LAST",
    content: (
      <>
        Crafted to stand the test of time, our jewelry is made to last . Meticulously designed and crafted with precision.<br />
       <a
  href="#"
  className="underline font-semibold hover:opacity-80 mt-2 block"
  style={{ color: "#fff" }}
>
  Designed, Fabrication and Materials
</a>

      </>
    ),
  },
  ].map((item, index, arr) => (
    <div
      key={index}
      className={index !== arr.length - 1 ? "border-b border-white/30" : ""}
    >
      <button
        onClick={() => toggleAccordion(index)}
        className="w-full flex justify-between items-center py-4 px-2 text-left font-semibold"
      >
        {item.title}
        {openIndex === index ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      {openIndex === index && (
        <div className="px-2 pb-4 text-sm text-white/90">
          {item.content}
        </div>
      )}
    </div>
  ))}
</div>

        </div>
      </section>

      {/* ----------------- Handmade In Chicago Section ----------------- */}
      <section className="relative w-full mt-10">
        {/* Desktop Layout */}
        <div className="hidden md:grid w-full h-[850px] grid-cols-2">
          {/* Left Side - 2 Images (Top + Bottom) */}
          <div className="grid grid-rows-2">
            <img
              src="/images/handmade1.webp"
              alt="Chicago Street"
              className="w-full h-full object-cover"
            />
            <img
              src="/images/handmade2.webp"
              alt="Chicago Landmark"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - 1 Image Full Height */}
          <div>
            <img
              src="/images/handmade3.webp"
              alt="Jewelry Store"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col bg-gray400">
          <img
            src="/images/handmade2.webp"
            alt="Chicago Landmark"
            className="w-full h-[250px] object-cover"
          />

          <div className="bg-gray-200 text-center px-6 py-10 shadow-lg">
  <h2 className="text-3xl font-['Arapey'] mb-6">
    HANDMADE IN CHICAGO
  </h2>
  <p className="text-gray-700 mb-6">
    We look forward to meeting you and catering to your jewelry needs.
    Need to design your own? Let us help bring your idea to life.
  </p>
  <a
    href="#"
    className="inline-block px-6 py-3 text-sm font-semibold tracking-wide transition mb-6"
    style={{ backgroundColor: "#4d152d", color: "#fff" }}
  >
    BOOK AN IN-STORE APPOINTMENT
  </a>
  <div>
    <a
      href="#"
      className="text-sm font-medium underline hover:opacity-80"
      style={{ color: "#4d152d" }}
    >
      Directions ↗
    </a>
  </div>
</div>


          <img
            src="/images/handmade3.webp"
            alt="Jewelry Store"
            className="w-full h-[250px] object-cover"
          />
        </div>

        {/* Center Content Box - Desktop */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center">
          <div className="bg-white max-w-[500px] w-full text-center px-10 py-14 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-['Arapey'] mb-6">
              HANDMADE IN CHICAGO
            </h2>
            <p className="text-gray-700 mb-6">
              We look forward to meeting you and catering to your jewelry needs.
              Need to design your own? Let us help bring your idea to life.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 text-sm font-semibold tracking-wide transition mb-6"
              style={{ backgroundColor: "#4d152d", color: "#fff" }}
            >
              BOOK AN IN-STORE APPOINTMENT
            </a>
            <div>
              <a
                href="#"
                className="text-sm font-medium underline hover:opacity-80"
                style={{ color: "#4d152d" }}
              >
                Directions ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
