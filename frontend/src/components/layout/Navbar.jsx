import React from "react";
import { Phone } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#home" className="flex items-center">
          {logo ? (
            <img
              src={logo}
              alt="Yazhini Saloon"
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            />
          ) : (
            <span className="text-xl sm:text-2xl font-bold font-['Bebas_Neue'] tracking-wider text-white">
              YAZHINI <span className="text-[#e3c68a]">SALOON</span>
            </span>
          )}
        </a>

        {/* DIRECT CONTACT BUTTON */}
        <a
          href="tel:+919876543210"
          className="flex items-center space-x-2 bg-[#e3c68a] hover:bg-white text-[#111] px-5 sm:px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          <Phone className="w-4 h-4" />
          <span>Contact</span>
        </a>

      </div>
    </header>
  );
};

export default Navbar;