import { useState } from "react";
import {
  FaStar,
  FaInstagram,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaHeart,
  FaRegEnvelope,
  FaSearch,
  FaBars,
  FaTimes,
  FaShoppingBag,
  
} from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineShoppingBag, HiOutlineMenu, HiOutlineSearch, HiUser, HiHeart, HiOutlineMail,  } from "react-icons/hi";

import '../index.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { label: "ENGAGEMENT RINGS", href: "#" },
    { label: "WEDDING RINGS", href: "#" },
    { label: "DIAMONDS", href: "#" },
    { label: "GEMSTONES", href: "#" },
    { label: "JEWELRY", href: "#" },
    { label: "GIFTS", href: "#" },
    { label: "WATCHES", href: "#" },
    { label: "ABOUT", href: "#" },
  ];

  return (
    <header className="w-full overflow-x-hidden m-0 p-0 sticky top-0 z-50 transition-shadow duration-300">
      {/* Top Bar - Same for all screens */}
      <div className="bg-[#4d152d] h-10 flex justify-between items-center px-4 md:px-6 text-white text-xs">
        <div className="hidden sm:flex items-center gap-1 ml-7">
          <span>5.0</span>
          
          <span className="text-yellow-400 gap-1"> ★★★★★</span>
          <span>1200+ Reviews</span>
        </div>

       <p className="text-center mx-auto px-2 sm:px-0">
  Our Biggest Sale of the Year.{" "}
  <a href="#" className="underline hover:text-gray-200 transition">
    Sign up
  </a>{" "}
  for details.
</p>


        <div className="hidden sm:flex items-center gap-1 mr-7">
  {/* Instagram */}
  <FaInstagram className="hover:text-pink-400 cursor-pointer transition" />
  <span className="hidden md:inline">11,300+ Followers</span>

  
  <img
    src="/icons/signticlogo.webp"   // yaha apne logo ka path do
    alt="Custom Logo"
    className="h-6 w-6"      
  />
</div>

      </div>

      {/* Desktop Header - Shows from 768px up */}
      <div className="hidden md:block">
        {/* Middle Bar */}
        <div className="bg-white h-[50px] flex justify-between items-center px-6">
          <div className="flex items-center gap-4 lg:gap-6 text-xs ml-7">
            <button className="flex items-center gap-2 hover:text-blue-600 transition whitespace-nowrap">
              <FaCalendarAlt /> BOOK APPOINTMENT
            </button>
            <button className="flex items-center gap-2 hover:text-blue-600 transition whitespace-nowrap">
              <HiOutlineLocationMarker className="text-lg"/> STORE
            </button>
          </div>

          <div className="flex items-center justify-center">
  {/* Logo image */}
  <img
    src="/images/headerlogo.webp"   // ✅ apna logo path yaha lagao
    alt="dimend SCAASI Logo"
    className="h-7 w-auto mr-2"  // height fix aur width auto
  />
          </div>

   <div className="flex items-center gap-3 lg:gap-4 text-xs mr-7">
  <button className="flex items-center gap-2 hover:text-blue-600 transition whitespace-nowrap">
    <HiUser className="text-lg" /> JOHN DOE
  </button>
  <button className="flex items-center gap-1 hover:text-blue-600 transition">
    <HiHeart className="text-lg" /> 7
  </button>
  <button className="flex items-center gap-1 hover:text-blue-600 transition">
    <HiOutlineShoppingBag className="text-lg" /> 4
  </button>
  <button className="hover:text-blue-600 transition">
    <HiOutlineSearch className="text-lg" />
  </button>
</div>
        </div>

        {/* Navigation Bar */}
        <div className="bg-white h-[47px] border-b-4  flex items-center justify-center">
          <nav className="flex gap-4 lg:gap-8 text-xs  uppercase tracking-wide px-2">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="hover:text-blue-600 transition whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Header - Shows below 768px */}
      <div className="md:hidden bg-white h-[77px] border-b-4  flex items-center justify-between px-4">
         <div className="flex items-center gap-3">
      {/* Menu Button */}
      <button 
        onClick={toggleMenu}
        aria-label="Open menu"
        className="focus:outline-none"
      >
        <HiOutlineMenu size={24} className="text-gray-700" />
      </button>

      {/* Search Button */}
      <button className="focus:outline-none">
        <HiOutlineSearch size={24} className="text-gray-700" />
      </button>
    </div>

        <div>
         {/* Logo image */}
  <img
    src="/images/headerlogo.webp"   // ✅ apna logo path yaha lagao
    alt="dimend SCAASI Logo"
    className="h-7 w-auto mr-2"  // height fix aur width auto
  />
        </div>

         <div className="flex items-center gap-4">
      {/* Location Icon */}
      <button className="focus:outline-none">
        <HiOutlineLocationMarker size={22} className="text-gray-700" />
      </button>

      {/* Shopping Bag with Count */}
      <div className="relative">
        <button className="focus:outline-none">
          <HiOutlineShoppingBag size={22} className="text-gray-700" />
        </button>
        <span className="absolute  -right-2 text-sm font-medium text-gray-800">
          3
        </span>
      </div>
    </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-3 border-b shadow-md">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="py-2 hover:text-blue-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;








