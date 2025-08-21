import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      {/* ---------------- DESKTOP VIEW ---------------- */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left Column */}
          <div className="flex flex-col h-full max-h-[300px] justify-between">
            {/* Logo */}
            <div>
              <img
                src="/images/footerlogo.png"
                alt="Logo"
                className="h-12 max-w-[200px] object-contain"
              />
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 justify-start my-4 flex-wrap md:flex-nowrap">
              <img src="/icons/facbookicon.png" alt="Facebook" className="h-6 w-6 rounded-full border-2 border-gray-300 p-0.5" />
              <img src="/icons/paragicon.png" alt="Pinterest" className="h-6 w-6 rounded-full border-2 border-gray-300 p-0.5" />
              <img src="/icons/instaicon.png" alt="Instagram" className="h-6 w-6 rounded-full border-2 border-gray-300 p-0.5" />
              <img src="/icons/youtubeicon.png" alt="YouTube" className="h-6 w-6 rounded-full border-2 border-gray-300 p-0.5" />
              <img src="/icons/doticon.png" alt="Yelp" className="h-6 w-6 rounded-full border-2 border-gray-300 p-0.5" />
              <img src="/icons/googleicon.png" alt="Google" className="h-6 w-6 rounded-full border-2 border-gray-300 p-0.5" />
            </div>

            {/* Certifications */}
            <div className="flex space-x-4 justify-start mb-2 flex-wrap md:flex-nowrap">
              <img src="/icons/giaicon.png" alt="GIA" className="h-8 w-18 border border-gray-300 rounded-sm" />
              <img src="/icons/jvc.png" alt="JVC" className="h-8 w-18 border border-gray-300 rounded-sm" />
              <img src="/icons/jewelryicon.png" alt="Jeweler of America" className="h-8 w-24 border border-gray-300 rounded-sm" />
            </div>
          </div>

          {/* Right Section */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Customer Care */}
            <div className="pl-10">
              <h3 className="mb-3 font-semibold">CUSTOMER CARE</h3>
              <ul className="space-y-3 text-xs text-[#3e3e3e]">
                <li>Live Chat</li>
                <li>Book Appointment</li>
                <li>1-888-502-1700</li>
                <li>sales@dscaasi.com</li>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Ring Size Chart</li>
                <li>DS Care Service Plan</li>
              </ul>
            </div>

            {/* About */}
            <div className="pl-4">
              <h3 className="mb-3 font-semibold">ABOUT dimend SCAASI</h3>
              <ul className="space-y-3 text-xs text-[#3e3e3e]">
                <li>Our Story</li>
                <li>Our Showroom</li>
                <li>Reviews</li>
                <li>Blog</li>
                <li>Lab Grown Diamonds</li>
                <li>Diamond Buying Guide</li>
              </ul>
            </div>

            {/* Why */}
            <div className="pl-8">
              <h3 className="mb-3 font-semibold">WHY dimend SCAASI</h3>
              <ul className="space-y-3 text-xs text-[#3e3e3e]">
                <li>Returns Are Free</li>
                <li>Conflict Free Diamonds</li>
                <li>Diamond Upgrade Program</li>
                <li>Financing And Free Shipping</li>
                <li>Delivery & Returns</li>
                <li>Jewelry Maintenance</li>
                <li>Luxury Watches</li>
                <li>Gemstones</li>
              </ul>
            </div>

            {/* Diamond Shapes */}
            <div className="pl-10">
              <h3 className="mb-3 font-semibold">DIAMOND SHAPES</h3>
              <div className="flex flex-col sm:flex-row sm:space-x-6">
                <ul className="space-y-3 text-xs text-[#3e3e3e]">
                  <li>Old Miner</li>
                  <li>European</li>
                  <li>Round</li>
                  <li>Princess</li>
                  <li>Marquise</li>
                  <li>Cushion</li>
                  <li>Oval</li>
                  <li>Emerald</li>
                </ul>
                <ul className="space-y-3 text-xs mt-3 sm:mt-0 text-[#3e3e3e]">
                  <li>Radiant</li>
                  <li>Pear</li>
                  <li>Asscher</li>
                  <li>Heart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE VIEW ---------------- */}





      {/* ---------------- ONLY DESKTOP ---------------- */}
      <div className="hidden md:flex justify-end mt-6 px-4 md:pr-10 mb-8 md:mr-14">
        <img src="/icons/visaall.png" alt="Payment Methods" className="h-10 w-auto object-contain rounded-lg" />
      </div>

      <div
  className="hidden md:flex w-full text-gray-200 text-xs sm:text-sm items-center justify-center px-3 sm:px-6 py-3 text-center space-x-6"
  style={{ backgroundColor: "#4d152d", minHeight: "60px" }}
>
  <span>© 1996-2024 dimend SCAASI Jewelers</span>
  <span className="hidden sm:inline-block">.</span>
  <span>All Rights Reserved</span>
  <span className="hidden sm:inline-block">.</span>
  <span>Privacy Policy</span>
  <span className="hidden sm:inline-block">.</span>
  <span>Term of Use</span>
  <span className="hidden sm:inline-block " >.</span>
  <span>Site Map</span>
</div>

    </footer>
  );
};

export default Footer;
