import React from "react";
import { motion } from "framer-motion";
import { Scissors, ArrowRight, MapPin, PhoneCall } from "lucide-react";

export default function About() {
  // Brand specific paragraph reflecting the board details
  const aboutText = "Welcome to YAS — Kanchipuram's premier destination for the modern gentleman. We seamlessly blend classic barbering with custom tattoo artistry and premium spa therapies. From sharp razor fades to intricate ink, every detail is crafted with absolute precision.";
  
  // Split the text into an array of words
  const words = aboutText.split(" ");

  // Framer Motion Variants for the staggering container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.05, 
        delayChildren: 0.1 * i 
      },
    }),
  };

  // Framer Motion Variants for each individual word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 35,
      rotate: 4,
    },
  };

  return (
    <section 
      id="about" 
      className="relative w-full bg-[#030303] text-white py-24 sm:py-32 px-4 sm:px-10 lg:px-16 flex flex-col font-sans select-none overflow-hidden border-t border-neutral-900"
    >
      {/* Background Subtle Accent Glow (Matching the YAS board Yellow/Gold) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#fbbf24]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
        
        {/* LEFT COLUMN: Brand Identity */}
        <div className="lg:w-1/3 flex flex-row lg:flex-col justify-between items-start w-full gap-8">
          
          <div className="flex flex-col gap-4">
            {/* Clean Label without Sparkles */}
            <div className="inline-flex items-center gap-2 text-[#fbbf24] text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em]">
              <Scissors className="w-3.5 h-3.5" />
              <span>The YAS Standard</span>
            </div>
            
            {/* Exact Board Headings */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-['Bebas_Neue',sans-serif] tracking-wider text-white leading-none mb-1">
                YAZHINI SALOON
              </h2>
              <h3 className="text-2xl sm:text-3xl font-['Bebas_Neue',sans-serif] tracking-widest text-[#a1a1aa] leading-none">
                TATTOO & SPA
              </h3>
            </div>
          </div>

          {/* Premium Rotating Circular Text Badge */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center shrink-0 hidden sm:flex">
            <motion.svg 
              animate={{ rotate: 360 }} 
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              viewBox="0 0 100 100" 
              className="w-full h-full text-white/30"
            >
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text fontSize="11" letterSpacing="2.5" className="font-mono uppercase fill-current font-semibold">
                <textPath href="#circlePath" startOffset="0%">
                  • YAS • SALOON • TATTOO • SPA 
                </textPath>
              </text>
            </motion.svg>
            <div className="absolute w-2 h-2 bg-[#fbbf24] rounded-full" />
          </div>

        </div>

        {/* RIGHT COLUMN: Massive Animated Text Reveal & Board Details */}
        <div className="lg:w-2/3">
          
          {/* Text Reveal Paragraph */}
          <motion.h3 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[52px] leading-[1.2] font-medium tracking-tight text-[#52525b] flex flex-wrap gap-x-2 sm:gap-x-3 lg:gap-x-4 mb-16"
          >
            {words.map((word, index) => {
              // Highlight specific brand words in Pure White
              const isHighlight = ["YAS", "premier", "barbering", "tattoo", "artistry", "spa", "precision."].includes(word);
              
              return (
                <span className="overflow-hidden inline-flex" key={index}>
                  <motion.span 
                    variants={child} 
                    className={`inline-block ${isHighlight ? "text-white" : ""}`}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </motion.h3>

          {/* Bottom Action / Exact Board Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            {/* Address & Phone from the Board */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-[#fbbf24]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-medium tracking-wide">Indira Nagar</span>
                  <span className="text-[#a1a1aa] text-xs mt-1 max-w-[180px] leading-relaxed">
                    No.238, Indira Nagar, Kanchipuram - 631 501.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <PhoneCall className="w-3.5 h-3.5 text-[#fbbf24]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-medium tracking-wide">Direct Booking</span>
                  <a href="tel:9944313146" className="text-[#a1a1aa] hover:text-white transition-colors text-xs mt-1 font-mono tracking-widest">
                    +91 9944313146
                  </a>
                </div>
              </div>

            </div>

            {/* Action Button */}
            <a
              href="#gallery"
              className="flex items-center gap-3 bg-white/5 hover:bg-white rounded-full p-1.5 pl-6 cursor-pointer transition-all duration-300 active:scale-95 group shrink-0 border border-white/10"
            >
              <span className="text-white group-hover:text-black font-medium text-sm tracking-tight transition-colors">
                View Gallery
              </span>
              <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#1c1c1e] text-black group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </div>
            </a>

          </motion.div>
        </div>

      </div>
    </section>
  );
}