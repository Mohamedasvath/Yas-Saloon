import React from "react";
import { 
  Scissors, 
  Sparkles, 
  Flame, 
  Smile, 
  Crown, 
  ShieldCheck, 
  Zap, 
  Award 
} from "lucide-react";

const ServicesMarquee = () => {
  const serviceItems = [
    { icon: <Scissors className="w-5 h-5 text-[#e3c68a]" />, title: "Precision Haircut" },
    { icon: <Flame className="w-5 h-5 text-[#e3c68a]" />, title: "Beard Sculpting" },
    { icon: <Zap className="w-5 h-5 text-[#e3c68a]" />, title: "Custom Tattoo Art" },
    { icon: <Sparkles className="w-5 h-5 text-[#e3c68a]" />, title: "Luxury Hair Spa" },
    { icon: <Crown className="w-5 h-5 text-[#e3c68a]" />, title: "VIP Grooming" },
    { icon: <Smile className="w-5 h-5 text-[#e3c68a]" />, title: "Skin Care & Facial" },
    { icon: <ShieldCheck className="w-5 h-5 text-[#e3c68a]" />, title: "Sterilized Equipment" },
    { icon: <Award className="w-5 h-5 text-[#e3c68a]" />, title: "Master Barbers" },
  ];

  // Seamless loop-kaga items-ah repeat pandrom
  const duplicatedItems = [...serviceItems, ...serviceItems];

  return (
    <div className="relative w-full bg-[#070707] py-6 border-y border-[#e3c68a]/20 overflow-hidden select-none">
      {/* Side Fade Gradients (Edge smooth-aa maraivatharku) */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#070707] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#070707] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 mx-4 md:mx-7 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#e3c68a]/50 px-5 py-2.5 rounded-full transition-all duration-300"
          >
            <span className="p-1 rounded-full bg-[#e3c68a]/10">
              {item.icon}
            </span>
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wider uppercase whitespace-nowrap">
              {item.title}
            </span>
            <span className="text-[#e3c68a]/40 text-xs pl-2">•</span>
          </div>
        ))}
      </div>

      {/* Inline Animation Style: Tailwind config thookama direct-aa work aaga */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ServicesMarquee;