import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Navigation,
  Clock,
  Phone,
  X,
  ArrowUpRight,
  MessageSquare,
  Scissors,
  PenTool,
  Sparkles,
  ExternalLink,
  ShieldCheck
} from "lucide-react";

export default function Location() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [activeCardPreview, setActiveCardPreview] = useState(null);

  // Studio direct navigation link
  const googleMapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Kanchipuram,Tamil+Nadu";

  const cardsData = [
    {
      id: "c1",
      tag: "New Look",
      title: "Gentlemen Grooming Suite",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
      desc: "Custom leather chairs, razor stations & hot-towel grooming lounge."
    },
    {
      id: "c2",
      tag: "Sterile Ink Sanctuary",
      title: "Bespoke Tattoo Studio",
      image:
        "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800",
      desc: "Certified hospital-grade hygienic tattoo booth & custom flash art parlor."
    }
  ];

  return (
    <section
      id="location"
      className="relative w-full min-h-screen bg-[#050505] text-white py-24 px-4 sm:px-8 md:px-14 lg:px-20 flex items-center justify-center border-t border-neutral-900 select-none overflow-hidden font-sans"
    >
      {/* Background Soft Gold Ambient Glows */}
      <div className="absolute top-1/3 left-8 w-[500px] h-[500px] bg-[#e3c68a]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#e3c68a]/3 rounded-full blur-[150px] pointer-events-none" />

      {}
      <div className="relative z-10 max-w-[1320px] w-full bg-[#0a0a0a] border border-white/10 rounded-[38px] p-7 sm:p-12 md:p-16 lg:p-20 shadow-[0_35px_100px_rgba(0,0,0,0.95)] overflow-hidden">
        
        {/* Subtle Radial Mesh on Card */}
        <div className="absolute inset-0 bg-[radial-gradient(#e3c68a_1px,transparent_1px)] opacity-[0.03] [background-size:24px_24px] pointer-events-none" />

        {/* 1. TOP FLOATING BADGE: Luxury Crossed Scissors & Barber Blade Emblem (Replaced Compass) */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30">
          <div className="relative flex items-center justify-center">
            {/* Pulsing Outer Aura */}
            <span className="absolute w-16 h-16 rounded-full bg-[#e3c68a]/20 animate-ping" />
            
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#f2dab0] via-[#e3c68a] to-[#a6894c] text-black flex items-center justify-center shadow-[0_12px_35px_rgba(227,198,138,0.45)] border-4 border-[#0a0a0a]">
              <Scissors className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5] -rotate-45" />
            </div>
          </div>
        </div>

        {/* 2. DUAL WATERMARK INSIDE CARD BACKGROUND: Scissors (Left) & Tattoo Needle (Right) */}
        {/* Left Scissors Watermark */}
        <div className="absolute -left-12 bottom-0 sm:bottom-6 pointer-events-none opacity-[0.03] sm:opacity-[0.045] rotate-[25deg] select-none">
          <Scissors className="w-64 h-64 sm:w-96 sm:h-96 md:w-[440px] md:h-[440px] text-[#e3c68a]" strokeWidth={0.7} />
        </div>

        {/* Right Tattoo Machine / Ink Needle Watermark */}
        <div className="absolute -right-16 top-10 sm:top-6 pointer-events-none opacity-[0.03] sm:opacity-[0.045] -rotate-[30deg] select-none">
          <PenTool className="w-72 h-72 sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] text-[#e3c68a]" strokeWidth={0.8} />
        </div>

        {}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Editorial Typography, Details & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Monospace Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 text-[#e3c68a] text-[11px] sm:text-xs font-mono uppercase tracking-[0.35em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Yas Saloon • Kanchipuram</span>
            </div>

            {/* High-Impact Heading */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.92] text-neutral-100 mb-6 font-['Bebas_Neue',sans-serif]">
              FIND YOUR WAY TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fae5be] via-[#e3c68a] to-[#a88a4c]">
                YAZHINI Saloon
              </span>
            </h2>

            {/* Address & Quick Intel Stack */}
            <div className="space-y-4 text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-8 max-w-lg">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <MapPin className="w-4 h-4 text-[#e3c68a] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Central Kanchipuram Hub</p>
                  <p className="text-neutral-400 text-xs mt-0.5">
                    Gandhi Road, Near City Bus Terminal, Central Kanchipuram, Tamil Nadu - 631501.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Clock className="w-4 h-4 text-[#e3c68a] shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">Working Hours</span>
                    <span className="text-xs font-bold text-neutral-200">08:30 AM – 09:30 PM</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Phone className="w-4 h-4 text-[#e3c68a] shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">Direct Desk</span>
                    <a href="tel:+919876543210" className="text-xs font-bold text-[#e3c68a] hover:underline">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5">
              {/* Main Modal Trigger Button */}
              <button
                onClick={() => setIsMapOpen(true)}
                className="px-7 py-4 rounded-full bg-gradient-to-r from-[#e3c68a] to-[#d4b472] hover:from-white hover:to-white text-black font-extrabold text-xs uppercase tracking-widest flex items-center gap-2.5 shadow-[0_12px_32px_rgba(227,198,138,0.25)] transition-all transform hover:scale-105 active:scale-95"
              >
                <Navigation className="w-4 h-4 fill-black" />
                <span>View Live Location</span>
              </button>

              {/* Direct WhatsApp Share Button */}
             
            </div>

          </div>

          {}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
            
            {/* Circular Graphic Accents Behind Cards */}
            <div className="absolute w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full border border-white/5 flex items-center justify-center pointer-events-none">
              <div className="w-[85%] h-[85%] rounded-full border border-[#e3c68a]/15 border-dashed" />
            </div>

            {/* PRIMARY ANGLED CARD (Front) */}
            <motion.div
              initial={{ rotate: -8, y: 15 }}
              whileHover={{ rotate: -2, y: -6, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative w-64 sm:w-72 aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-900 border-2 border-white/15 hover:border-[#e3c68a]/60 shadow-[0_30px_80px_rgba(0,0,0,0.95)] z-20 cursor-pointer group"
              onClick={() => setIsMapOpen(true)}
            >
              <img
                src={cardsData[0].image}
                alt={cardsData[0].title}
                className="w-full h-full object-cover brightness-90 contrast-110 group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
              
              {/* Floating Bottom Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/85 backdrop-blur-md border border-[#e3c68a]/30 flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#e3c68a] block">
                    {cardsData[0].tag}
                  </span>
                  <p className="text-xs font-bold text-white tracking-wide">
                    {cardsData[0].title}
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#e3c68a] text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            </motion.div>

            {/* SECONDARY TILTED CARD (Back Layered) */}
            <motion.div
              initial={{ rotate: 12, x: 55, y: -35 }}
              whileHover={{ rotate: 5, x: 45, y: -45, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="absolute w-56 sm:w-64 aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-[#e3c68a]/50 shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 opacity-80 hover:opacity-100 hidden sm:block cursor-pointer group"
              onClick={() => setIsMapOpen(true)}
            >
              <img
                src={cardsData[1].image}
                alt={cardsData[1].title}
                className="w-full h-full object-cover grayscale-[25%] contrast-110 group-hover:grayscale-0 group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[8px] font-mono uppercase tracking-widest text-[#e3c68a] block">
                    {cardsData[1].tag}
                  </span>
                  <p className="text-[11px] font-bold text-white truncate">
                    {cardsData[1].title}
                  </p>
                </div>
                <PenTool className="w-3.5 h-3.5 text-[#e3c68a]" />
              </div>
            </motion.div>

            {/* Floating Quality Seal Badge */}
            <div className="absolute -bottom-4 -left-3 sm:left-6 z-30 flex items-center gap-2 bg-[#121212] border border-[#e3c68a]/50 px-3.5 py-1.5 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#e3c68a]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-200">
                100% Sterile Studio
              </span>
            </div>

          </div>

        </div>

      </div>

      {}
      <AnimatePresence>
        {isMapOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative w-full max-w-[1080px] h-[82vh] bg-[#0c0c0c] border border-white/15 rounded-[32px] overflow-hidden shadow-[0_45px_120px_rgba(0,0,0,0.95)] flex flex-col"
            >
              {/* Modal Top Control Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/90">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-200 block leading-tight">
                      Yazhini Studio Coordinates
                    </span>
                    <span className="text-[10px] text-neutral-500 font-mono">
                      12.8342° N, 79.7036° E • Central Kanchipuram
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#e3c68a] text-black text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 hover:bg-white transition-colors shadow-md"
                  >
                    <span>Open In Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>

                  <button
                    onClick={() => setIsMapOpen(false)}
                    className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Actual Google Satellite / Road Map Iframe with Dark Studio Filter */}
              <div className="relative flex-1 w-full h-full bg-neutral-950">
                <iframe
                  title="Yazhini Saloon Live Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62237.94098939768!2d79.66440854402685!3d12.834173874312068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c2e0b57e79ef%3A0x6b44a956be602b9e!2sKanchipuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale-[80%] invert-[90%] contrast-[1.2] opacity-90 hover:opacity-100 hover:grayscale-0 hover:invert-0 transition-all duration-500"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Bottom Quick Bar in Modal */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3.5 flex items-center justify-between sm:justify-start gap-4 shadow-2xl">
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-[#e3c68a] uppercase tracking-wider block">Arrival Assist</span>
                    <span className="text-xs text-neutral-300 font-semibold">5 Mins from Bus Stand</span>
                  </div>
                  <a
                    href="https://wa.me/919876543210?text=Hello%20Yazhini%20Saloon!%20Please%20share%20your%20exact%20live%20location."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-[#25D366] text-white text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 hover:bg-[#20ba5a] transition-colors"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp Pin</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}