import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Scissors, Percent, Phone, Calendar, X, CheckCircle, PenTool } from "lucide-react";
import logo from '../assets/logo.png';

const logoSrc = logo; 

const Hero = () => {
  const discountCardRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Booking Form State
  const [clientName, setClientName] = useState("");
  const [selectedService, setSelectedService] = useState("Haircut & Styling");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // GSAP floating animation with clean context scoping
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(discountCardRef.current, {
        y: -12,
        duration: 2.2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    // Updated WhatsApp Number
    const salonWhatsAppNumber = "919944313146"; 
    const message = `Hello Yazhini Saloon! 👋\n\nI would like to check slot availability and confirm my booking details:\n\n*Name:* ${clientName}\n*Service:* ${selectedService}\n*Date:* ${selectedDate}\n*Time:* ${selectedTime}\n\nKindly confirm if this slot is available. Thank you!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${salonWhatsAppNumber}?text=${encodedMessage}`, "_blank");
    setIsModalOpen(false);
  };

  return (
    <section className="relative w-full min-h-[92vh] bg-[#050505] flex items-center justify-center overflow-hidden py-16 md:py-0">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://im.whatshot.in/img/2021/Aug/istock-872361244-cropped-1624514729-1626177802-1629879745.jpg" 
          alt="Yazhini Saloon Interior" 
          className="w-full h-full object-cover object-center md:object-[78%_center] lg:object-[85%_center] brightness-70 md:brightness-100 md:contrast-110"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-0 bg-black/30 md:bg-gradient-to-r md:from-[#050505]/90 md:via-[#050505]/40 md:to-transparent w-full left-0 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent h-1/3 bottom-0 top-auto md:hidden pointer-events-none" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between h-full">
        
        {/* Left Section */}
        <div className="w-full md:w-[58%] flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0">
          
          {/* Logo Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full flex justify-center md:justify-start md:hidden items-center mb-1 md:mb-3"
          >
            {logoSrc ? (
              <img 
                src={logoSrc} 
                alt="Yazhini Saloon Logo" 
                className="h-28 sm:h-32 md:h-28 lg:h-32 w-auto max-w-[280px] sm:max-w-[320px] md:max-w-[360px] object-contain object-center md:object-left md:-ml-2.5 drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]"
              />
            ) : (
              <div className="flex items-center space-x-2 text-[#e3c68a]">
                <Scissors className="w-10 h-10 text-[#e3c68a]" />
                <span className="text-3xl font-['Bebas_Neue'] tracking-widest uppercase">Logo</span>
              </div>
            )}
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#e3c68a] text-4xl sm:text-4xl md:text-5xl lg:text-6xl mb-1"
            style={{ fontFamily: "'Great Vibes', cursive", textShadow: "0px 4px 15px rgba(0,0,0,0.9)" }}
          >
            📍Kanchipuram
          </motion.h3>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-[3.8rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7.5rem] leading-[0.85] tracking-normal mb-5 md:mb-6 drop-shadow-[0_5px_20px_rgba(0,0,0,0.95)]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            YAZHINI<br />SALOON
          </motion.h1>

          {/* Feature Badge */}
          <div className="flex items-center space-x-2 text-[#e3c68a] bg-[#0a0a0a]/80 border border-[#e3c68a]/40 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium mb-6 backdrop-blur-md shadow-lg">
            <Scissors className="w-4 h-4" />
            <span className="tracking-wider uppercase">Haircut • Tattoo • Spa • Grooming</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-[#e3c68a] hover:bg-white text-[#111] px-8 py-3.5 rounded-full font-bold text-sm shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span className="tracking-wide uppercase">Book Slot (WhatsApp)</span>
            </button>

            <a 
              href="tel:+919944313146"
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-[#0a0a0a]/80 backdrop-blur-md border-2 border-[#e3c68a]/70 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#e3c68a] hover:text-[#111] transition-all duration-300 shadow-lg"
            >
              <Phone className="w-4 h-4 text-[#e3c68a]" />
              <span className="tracking-wide uppercase">Call Now</span>
            </a>
          </motion.div>
        </div>

        {/* Right Section: Floating Discount Card */}
        <div className="w-full md:w-[35%] flex justify-center md:justify-end mt-10 md:mt-0 pb-4 md:pb-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            ref={discountCardRef}
            className="bg-[#0a0a0a]/90 backdrop-blur-md border border-[#e3c68a]/40 rounded-[2rem] p-6 md:p-8 flex flex-col items-center relative shadow-[0_20px_50px_rgba(0,0,0,0.9)] w-[220px] md:w-[250px]"
          >
            <div className="absolute -top-4 right-6 bg-gradient-to-b from-[#f2dca5] to-[#cca65a] p-2.5 rounded-xl shadow-lg">
              <Percent className="w-4 h-4 text-[#111] font-black" strokeWidth={3} />
            </div>

            <h2 
              className="text-white text-6xl md:text-7xl mt-4 mb-1 leading-none font-normal"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              -10<span className="text-3xl md:text-4xl">%</span>
            </h2>
            
            <div className="text-center mt-2 border-t border-white/10 pt-3 w-full">
              <p className="text-zinc-300 text-[11px] md:text-xs leading-relaxed uppercase tracking-widest font-semibold">
                On your first <br /> haircut & styling
              </p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* LUXURY BOOKING MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-gradient-to-b from-[#161616] to-[#0a0a0a] border border-[#e3c68a]/30 w-full max-w-md rounded-[2.5rem] p-6 md:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.9)] text-white overflow-hidden"
            >
              {/* WATERMARK BACKGROUND ICONS */}
              <div className="absolute -right-12 -bottom-10 opacity-[0.04] pointer-events-none rotate-45 select-none">
                <Scissors className="w-64 h-64 text-[#e3c68a]" strokeWidth={1} />
              </div>
              <div className="absolute -left-10 top-12 opacity-[0.03] pointer-events-none -rotate-12 select-none">
                <PenTool className="w-48 h-48 text-[#e3c68a]" strokeWidth={1} />
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-neutral-400 hover:text-white bg-white/5 hover:bg-[#e3c68a]/20 p-2.5 rounded-full transition-all duration-300 z-20"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative z-10 mb-7">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#e3c68a] block mb-1">
                  Appointment Desk
                </span>
                <h3 className="text-3xl font-['Bebas_Neue'] tracking-widest text-white leading-none">
                  LOCK YOUR SLOT
                </h3>
              </div>

              <form onSubmit={handleWhatsAppBooking} className="relative z-10 space-y-4">
                {/* Custom Glassmorphic Inputs */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1.5 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#e3c68a] focus:ring-1 focus:ring-[#e3c68a]/30 transition-all placeholder:text-neutral-600 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1.5 ml-1">Select Service</label>
                  <select 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#e3c68a] focus:ring-1 focus:ring-[#e3c68a]/30 transition-all backdrop-blur-sm appearance-none"
                  >
                    <option value="Haircut & Styling" className="bg-[#111]">Haircut & Styling</option>
                    <option value="Beard Trim & Grooming" className="bg-[#111]">Beard Trim & Grooming</option>
                    <option value="Hair Spa & Treatment" className="bg-[#111]">Hair Spa & Treatment</option>
                    <option value="Tattoo & Piercing" className="bg-[#111]">Tattoo & Piercing</option>
                    <option value="Full Grooming Package" className="bg-[#111]">Full Grooming Package (-10%)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1.5 ml-1">Date</label>
                    <input 
                      type="date" 
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-3 py-3.5 text-sm text-white focus:outline-none focus:border-[#e3c68a] focus:ring-1 focus:ring-[#e3c68a]/30 transition-all backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1.5 ml-1">Time</label>
                    <input 
                      type="time" 
                      required
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-3 py-3.5 text-sm text-white focus:outline-none focus:border-[#e3c68a] focus:ring-1 focus:ring-[#e3c68a]/30 transition-all backdrop-blur-sm"
                    />
                  </div>
                </div>

                {/* Premium WhatsApp Button */}
                <button 
                  type="submit" 
                  className="w-full mt-6 flex items-center justify-center space-x-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20ba5a] hover:to-[#0f7a6d] text-white py-4 rounded-2xl font-extrabold text-[13px] uppercase tracking-widest shadow-[0_10px_20px_rgba(37,211,102,0.2)] transition-all transform active:scale-95"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Send Request</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Hero;