import React from "react";
import { motion } from "framer-motion";
import { Scissors, Calendar } from "lucide-react";

const Services = () => {
  const serviceCards = [
    {
      title: "Precision Haircut",
     
      image: "https://img.magnific.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg?semt=ais_hybrid&w=740&q=80",
      rotate: -7,
      delay: 0.1,
    },
    {
      title: "Royal Beard Sculpt",
     
      image: "https://media.istockphoto.com/id/872361244/photo/man-getting-his-beard-trimmed-with-electric-razor.jpg?s=612x612&w=0&k=20&c=_IjZcrY0Gp-2z6AWTQederZCA9BLdl-iqWkH0hGMTgg=",
      rotate: 4,
      delay: 0.2,
    },
    {
      title: "hair Wash",
      
      image: "https://i.pinimg.com/736x/6c/27/b3/6c27b3d9bae391e3df19b721cd853175.jpg",
      rotate: -5,
      delay: 0.3,
    },
    {
      title: "Custom Tattoo Art",
      image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800",
      rotate: 6,
      delay: 0.4,
    },
  ];

  return (
    <section id="services" className="relative w-full min-h-screen bg-[#060606] text-white py-24 px-4 sm:px-8 overflow-hidden">
      
      {/* Title Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <motion.h4
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#e3c68a] text-3xl sm:text-4xl md:text-5xl mb-1"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white text-4xl sm:text-6xl md:text-7xl font-['Bebas_Neue'] tracking-wider leading-none"
        >
          OUR MASTER SERVICES
        </motion.h2>
        <p className="text-zinc-400 text-xs sm:text-sm tracking-widest uppercase mt-3">
          Calculated precision • Hygienic excellence
        </p>
      </div>

      {/* HANGING ROPE & POLAROID CONTAINER */}
      <div className="relative max-w-[1300px] mx-auto pt-10 pb-16">
        
        {/* Curving Rope / String Wire */}
        <div className="absolute top-[28px] sm:top-[35px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8b7355] to-transparent shadow-[0_4px_12px_rgba(0,0,0,0.9)] z-10" />

        {/* Polaroid Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-6 items-start relative z-20">
          {serviceCards.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: service.delay }}
              style={{ rotate: service.rotate }}
              whileHover={{ rotate: 0, scale: 1.05, y: -8 }}
              className="relative flex flex-col items-center cursor-pointer transition-transform duration-300 origin-top"
            >
              
              {/* WOODEN CLOTHES PEG (CLIP) */}
              <div className="relative -mb-4 z-30 flex flex-col items-center">
                {/* Peg Top Head */}
                <div className="w-3.5 h-11 bg-gradient-to-r from-[#6b583f] via-[#947d5e] to-[#594732] rounded-[2px] shadow-[0_4px_10px_rgba(0,0,0,0.8)] border-x border-[#3b2d1d]" />
                {/* Peg Metal Spring Ring */}
                <div className="absolute top-5 w-4 h-1.5 bg-gradient-to-r from-[#aaa] via-[#fff] to-[#666] rounded-full shadow" />
              </div>

              {/* DARK POLAROID PHOTO FRAME */}
              <div className="w-full max-w-[270px] bg-[#121212] p-3.5 pb-5 rounded-sm border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.95)] hover:border-[#e3c68a]/50 transition-colors group">
                
                {/* Inner Image Frame */}
                <div className="relative aspect-square overflow-hidden bg-black rounded-xs">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover  contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-108 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Badge Price */}
                  <span className="absolute top-2 right-2 bg-black/80 backdrop-blur-md border border-[#e3c68a]/40 text-[#e3c68a] text-[11px] font-bold px-2 py-0.5 rounded">
                    {service.price}
                  </span>
                </div>

                {/* Polaroid Bottom Label */}
                <div className="mt-3.5 flex items-center justify-between">
                  <h3 className="text-white text-base sm:text-lg font-['Bebas_Neue'] tracking-wider group-hover:text-[#e3c68a] transition-colors">
                    {service.title}
                  </h3>
                  <Scissors className="w-3.5 h-3.5 text-[#e3c68a] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Quick Link */}
      <div className="mt-8 text-center">
        <a
          href="#book"
          className="inline-flex items-center space-x-2 bg-[#e3c68a] hover:bg-white text-[#111] px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Your Transformation</span>
        </a>
      </div>

    </section>
  );
};

export default Services;