import React from "react";
import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

const BookNow = () => {
  const phone = "+919876543210";
  const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Gandhi+Road,Kanchipuram,Tamil+Nadu";

  return (
    <section 
      id="book-now" 
      className="relative w-screen left-1/2 right-1/2 -mx-[50vw] min-h-[380px] sm:min-h-[420px] flex flex-col justify-between overflow-hidden  text-white select-none border-y border-neutral-900"
    >
      {/* 1. REAL SALON BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1920"
        alt="Yazhini Saloon Interior"
        className="absolute  w-full h-full object-cover object-center brightness-[0.50] contrast-100 scale-105 pointer-events-none"
      />

      {/* Cinematic Dark Gradient Layers for Crisp Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[260px] bg-[#e3c68a]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* 2. CENTER CONTENT (PURE SIMPLE ENGLISH) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 pt-14 pb-8 flex flex-col items-center text-center">
        
        <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-[#e3c68a] mb-2 font-semibold">
          Yazhini Saloon • Kanchipuram
        </span>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-['Bebas_Neue'] tracking-wider text-white mb-2 leading-none">
          BOOK YOUR HAIRCUT
        </h2>

        <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light max-w-md mx-auto mb-8 leading-relaxed">
          Skip the waiting line. Call us directly to confirm your haircut or grooming slot.
        </p>

        {/* ULTRA SHINING GOLD CALL BUTTON */}
        <div className="relative group">
          {/* Animated Gold Aura Backlight */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#e3c68a] via-[#fff1cc] to-[#e3c68a] opacity-80 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-300 animate-pulse" />

          {/* Action Button */}
          <a
            href={`tel:${phone}`}
            className="relative flex items-center justify-center gap-2.5 px-8 sm:px-12 py-4 rounded-full bg-gradient-to-r from-[#d4b26f] via-[#fff2d4] to-[#d4b26f] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 transform group-hover:scale-105 active:scale-95 shadow-[0_15px_35px_rgba(227,198,138,0.35)] overflow-hidden"
          >
            {/* Shimmer Light Reflection Sweep */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

            <Phone className="w-4 h-4 fill-black stroke-none shrink-0" />
            <span>CALL TO BOOK NOW</span>
          </a>
        </div>

      </div>

      {/* 3. BOTTOM SLIM ADDRESS BAR */}
      <div className="relative pt-3 z-10 w-full bg-black/70 backdrop-blur-md border-t border-white/10 py-3.5 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          
          {/* Address with Google Maps Link */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-neutral-300 hover:text-[#e3c68a] transition-colors text-center md:text-left"
          >
            <MapPin className="w-4 h-4 text-white shrink-0" />
            <span className="font-light text-[11px] sm:text-xs">
              Gandhi Road, Near City Bus Stand, Central Kanchipuram – 631501
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#e3c68a] opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
          </a>

          {/* Timings & Direct Contact Number */}
          <div className="flex items-center gap-4 text-[11px] font-mono text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#e3c68a]" /> Open All 7 Days: 08:30 AM – 09:30 PM
            </span>
            <span className="hidden sm:inline text-neutral-600">•</span>
            <span>
              Call: <a href={`tel:${phone}`} className="text-white font-bold hover:underline">{phone}</a>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookNow;