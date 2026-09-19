import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Check, ArrowRight } from "lucide-react";

// ==========================================
// BESPOKE ANIMATED SALOON & TATTOO ICONS
// (Zero generic graphics - 100% Saloon & Tattoo Craft)
// ==========================================

// Step 1: Realistic Snipping Barber Shears
const AnimatedScissors = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <svg viewBox="0 0 48 48" className="w-9 h-9 drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]" fill="none">
      {/* Top Cutting Blade */}
      <motion.g
        animate={{ rotate: [0, -18, 0, -18, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
        style={{ transformOrigin: "22px 24px" }}
      >
        <path
          d="M22 24 L42 10 C42 10 38 18 26 24"
          fill="#fbbf24"
          stroke="#fbbf24"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="14" r="6" stroke="#f59e0b" strokeWidth="2.5" />
        <line x1="17" y1="18" x2="22" y2="24" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      </motion.g>

      {/* Bottom Cutting Blade */}
      <motion.g
        animate={{ rotate: [0, 18, 0, 18, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
        style={{ transformOrigin: "22px 24px" }}
      >
        <path
          d="M22 24 L42 38 C42 38 38 30 26 24"
          fill="#fbbf24"
          stroke="#fbbf24"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="34" r="6" stroke="#f59e0b" strokeWidth="2.5" />
        <line x1="17" y1="30" x2="22" y2="24" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      </motion.g>

      {/* Center Pivot Stud */}
      <circle cx="22" cy="24" r="2.5" fill="#080808" stroke="#fef08a" strokeWidth="1.8" />
    </svg>
  </div>
);

// Step 2: Live Pulsing Phone Receiver (Call Confirmation)
const AnimatedPhone = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <motion.div
      animate={{
        rotate: [0, -14, 14, -14, 14, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1 }}
      className="text-[#38bdf8]"
    >
      <PhoneCall className="w-7 h-7 stroke-[2.2]" />
    </motion.div>
    <motion.span
      animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="absolute inset-0 rounded-full border border-[#38bdf8]/60 pointer-events-none"
    />
  </div>
);

// Step 3: Coil & Rotary Tattoo Gun with High-Frequency Needle Pulse
const AnimatedTattooMachine = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <svg viewBox="0 0 48 48" className="w-9 h-9 drop-shadow-[0_0_12px_rgba(45,212,191,0.5)]" fill="none">
      <path
        d="M10 16 L22 16 L26 22 L26 30 L18 30 L14 24 L10 24 Z"
        fill="#07151e"
        stroke="#2dd4bf"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="13" y="19" width="4" height="8" rx="1" fill="#0d9488" stroke="#2dd4bf" strokeWidth="1" />
      <rect x="19" y="19" width="4" height="8" rx="1" fill="#0d9488" stroke="#2dd4bf" strokeWidth="1" />
      <rect x="26" y="24" width="10" height="5" rx="1" fill="#07151e" stroke="#2dd4bf" strokeWidth="1.5" />

      {/* Reciprocating Needle */}
      <motion.line
        x1="36"
        y1="26.5"
        x2="45"
        y2="26.5"
        stroke="#5eead4"
        strokeWidth="2.2"
        strokeLinecap="round"
        animate={{ x: [0, 3.5, -1, 3.5, 0] }}
        transition={{ duration: 0.12, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        cx="46"
        cy="26.5"
        r="1.5"
        fill="#5eead4"
        animate={{ scale: [0.8, 1.5, 0.8], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </svg>
  </div>
);

// Step 4: Razor Edge & Precision Fade Blade
const AnimatedRazor = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <motion.div
      animate={{ rotate: [0, -12, 12, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      className="relative flex items-center justify-center"
    >
      <svg viewBox="0 0 48 48" className="w-8 h-8 drop-shadow-[0_0_12px_rgba(250,204,21,0.5)]" fill="none">
        {/* Barber Straight Razor Handle */}
        <path d="M12 36 L24 24" stroke="#a1a1aa" strokeWidth="3" strokeLinecap="round" />
        {/* Steel Razor Blade Body */}
        <path
          d="M24 24 L40 8 L44 12 L28 28 Z"
          fill="#fef08a"
          stroke="#eab308"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Razor Hollow Ground Edge */}
        <line x1="28" y1="28" x2="44" y2="12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </motion.div>
  </div>
);

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Pick Style or Ink",
      subtitle: "Fade Cut or Custom Tattoo",
      iconComponent: AnimatedScissors,
      tag: "Step 01 • Consultation",
      desktopPos: "top",
      accentColor: "#fbbf24",
    },
    {
      id: "02",
      title: "Call & Lock Slot",
      subtitle: "Instant Chair Confirmation",
      iconComponent: AnimatedPhone,
      tag: "Step 02 • Zero Waiting",
      desktopPos: "bottom",
      accentColor: "#38bdf8",
    },
    {
      id: "03",
      title: "Inking & Precision Cut",
      subtitle: "Sterile Needle & Master Fade",
      iconComponent: AnimatedTattooMachine,
      tag: "Step 03 • Certified Hygiene",
      desktopPos: "top",
      accentColor: "#2dd4bf",
    },
    {
      id: "04",
      title: "Fresh Walkout",
      subtitle: "Sharp Look & Finished Art",
      iconComponent: AnimatedRazor,
      tag: "Step 04 • Ready To Roll",
      desktopPos: "bottom",
      accentColor: "#facc15",
    },
  ];

  return (
    <section
      id="process"
      className="relative w-full min-h-screen bg-[#050505] text-white py-24 px-4 sm:px-8 md:px-14 lg:px-20 flex items-center justify-center border-t border-neutral-900 select-none overflow-hidden font-sans"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-8 w-[500px] h-[500px] bg-[#fbbf24]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#38bdf8]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* MASTER LUXURY CONTAINER (Location.jsx matching shell) */}
      <div className="relative z-10 max-w-[1320px] w-full bg-[#0a0a0a] border border-white/10 rounded-[38px] p-7 sm:p-12 md:p-16 lg:p-20 shadow-[0_35px_100px_rgba(0,0,0,0.95)] overflow-hidden">
        
        {/* Subtle Radial Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] opacity-[0.03] [background-size:24px_24px] pointer-events-none" />

        {/* 1. TOP FLOATING BADGE (Barber Shears Crown Emblem) */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30">
          <div className="relative flex items-center justify-center">
            <span className="absolute w-16 h-16 rounded-full bg-[#fbbf24]/20 animate-ping" />
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#fde68a] via-[#fbbf24] to-[#b45309] text-black flex items-center justify-center shadow-[0_12px_35px_rgba(251,191,36,0.45)] border-4 border-[#0a0a0a]">
              <span className="font-mono text-xs font-black tracking-tighter">VIP</span>
            </div>
          </div>
        </div>

        {/* 2. DUAL METALLIC WATERMARKS (Shears Left, Razor Right) */}
        <div className="absolute -left-12 bottom-0 sm:bottom-6 pointer-events-none opacity-[0.03] sm:opacity-[0.04] rotate-[25deg] select-none text-[#fbbf24]">
          <svg viewBox="0 0 100 100" className="w-64 h-64 sm:w-96 sm:h-96 md:w-[440px] md:h-[440px]" fill="currentColor">
            <path d="M30 40 L60 70 M60 40 L30 70" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute -right-16 top-10 sm:top-6 pointer-events-none opacity-[0.03] sm:opacity-[0.04] -rotate-[30deg] select-none text-[#38bdf8]">
          <svg viewBox="0 0 100 100" className="w-72 h-72 sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px]" fill="currentColor">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="4" fill="none" />
          </svg>
        </div>

        {/* SECTION HEADER */}
        <div className="relative z-10 text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[#fbbf24] text-[11px] sm:text-xs font-mono uppercase tracking-[0.35em] mb-4">
            <span>Execution Protocol • Yazhini Saloon</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.92] text-neutral-100 mb-5 font-['Bebas_Neue',sans-serif]">
            HOW YOUR APPOINTMENT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fae5be] via-[#fbbf24] to-[#d97706]">
              TAKES SHAPE
            </span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto">
            Direct coordination, sterile equipment, zero waiting queue. Pure craftsmanship from consultation to completion.
          </p>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP 4-STEP TIMELINE (SCREEN >= 1024px)                   */}
        {/* ============================================================ */}
        <div className="hidden lg:block relative w-full my-8 min-h-[380px]">
          
          {/* Animated Sine-Track SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            viewBox="0 0 1100 380"
            fill="none"
          >
            <path
              d="M 120 140 C 230 140, 290 250, 410 250 C 530 250, 590 140, 710 140 C 830 140, 890 250, 980 250"
              stroke="#1a202c"
              strokeWidth="2.5"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />
            <motion.path
              d="M 120 140 C 230 140, 290 250, 410 250 C 530 250, 590 140, 710 140 C 830 140, 890 250, 980 250"
              stroke="url(#protocolGradientTrack)"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />

            <defs>
              <linearGradient id="protocolGradientTrack" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="35%" stopColor="#38bdf8" />
                <stop offset="70%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#facc15" />
              </linearGradient>
            </defs>
          </svg>

          {/* 4 Alternating Interactive Nodes */}
          <div className="relative z-10 grid grid-cols-4 w-full h-full">
            {steps.map((step, idx) => {
              const IconComp = step.iconComponent;
              const isTop = step.desktopPos === "top";

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col items-center justify-center ${
                    isTop ? "translate-y-[-14px]" : "translate-y-[82px]"
                  }`}
                >
                  {/* TOP CARD LABEL */}
                  {isTop && (
                    <motion.div
                      initial={{ opacity: 0, y: -12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.12 }}
                      className="flex flex-col items-center mb-5 text-center max-w-[210px]"
                    >
                      <span
                        style={{ color: step.accentColor }}
                        className="text-[10px] font-mono uppercase tracking-wider block mb-1"
                      >
                        {step.tag}
                      </span>
                      <h4 className="text-2xl font-['Bebas_Neue',sans-serif] tracking-wider text-neutral-100 leading-tight">
                        {step.title}
                      </h4>
                      <span className="text-[11px] font-mono text-neutral-400 block mb-2 font-light">
                        {step.subtitle}
                      </span>
                      <div
                        style={{ borderColor: step.accentColor }}
                        className="w-5 h-5 rounded-full bg-[#0a0a0a] border-2 flex items-center justify-center shadow-lg"
                      >
                        <span
                          style={{ backgroundColor: step.accentColor }}
                          className="w-1.5 h-1.5 rounded-full animate-ping"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* 3D METALLIC NODE */}
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="relative flex items-center justify-center group cursor-pointer"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                      style={{ borderColor: `${step.accentColor}55` }}
                      className="absolute -inset-3.5 rounded-full border border-dashed group-hover:scale-105 transition-all"
                    />

                    <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#18181b] via-[#101012] to-[#080808] border border-white/15 flex items-center justify-center shadow-[0_18px_40px_rgba(0,0,0,0.95)] group-hover:scale-108 transition-all duration-300">
                      <IconComp />
                    </div>

                    <span
                      style={{ backgroundColor: step.accentColor }}
                      className="absolute -bottom-2.5 text-[10px] font-mono font-bold text-black px-2.5 py-0.5 rounded-full shadow-lg"
                    >
                      #{step.id}
                    </span>
                  </motion.div>

                  {/* BOTTOM CARD LABEL */}
                  {!isTop && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.12 }}
                      className="flex flex-col items-center mt-5 text-center max-w-[210px]"
                    >
                      <div
                        style={{ borderColor: step.accentColor }}
                        className="w-5 h-5 rounded-full bg-[#0a0a0a] border-2 flex items-center justify-center shadow-lg mb-2"
                      >
                        <span
                          style={{ backgroundColor: step.accentColor }}
                          className="w-1.5 h-1.5 rounded-full animate-ping"
                        />
                      </div>
                      <span
                        style={{ color: step.accentColor }}
                        className="text-[10px] font-mono uppercase tracking-wider block mb-0.5"
                      >
                        {step.tag}
                      </span>
                      <h4 className="text-2xl font-['Bebas_Neue',sans-serif] tracking-wider text-neutral-100 leading-tight">
                        {step.title}
                      </h4>
                      <span className="text-[11px] font-mono text-neutral-400 font-light">
                        {step.subtitle}
                      </span>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* MOBILE CURVED TIMELINE (SCREEN < 1024px)                     */}
        {/* ============================================================ */}
        <div className="lg:hidden relative py-4 px-2 my-4">
          <svg
            className="absolute top-0 bottom-0 left-[35px] w-12 h-full pointer-events-none z-0 overflow-visible"
            viewBox="0 0 50 520"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 25 35 Q 48 100 25 165 T 25 300 T 25 440"
              stroke="#1e293b"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
            <motion.path
              d="M 25 35 Q 48 100 25 165 T 25 300 T 25 440"
              stroke="#fbbf24"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
            />
          </svg>

          <div className="relative z-10 flex flex-col gap-7">
            {steps.map((step, idx) => {
              const IconComp = step.iconComponent;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="relative shrink-0">
                    <div
                      style={{ borderColor: `${step.accentColor}70` }}
                      className="w-16 h-16 rounded-full bg-[#111114] border flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.85)] relative z-10"
                    >
                      <IconComp />
                    </div>
                    <span
                      style={{ backgroundColor: step.accentColor }}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-black text-[10px] font-mono font-bold flex items-center justify-center shadow"
                    >
                      {step.id}
                    </span>
                  </div>

                  <div className="flex-1 bg-gradient-to-r from-[#141418] to-[#0a0a0c] border border-white/10 rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span
                        style={{ color: step.accentColor }}
                        className="text-[9px] font-mono uppercase tracking-widest"
                      >
                        {step.tag}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500">
                        Step {step.id}
                      </span>
                    </div>
                    <h4 className="text-xl font-['Bebas_Neue',sans-serif] tracking-wider text-white leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-xs text-neutral-400 font-light mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM PROTOCOL BAR (Guarantees & Highlights) */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-neutral-400 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#fbbf24]" />
            <span>Single-Use Sterile Needles & Blades</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#38bdf8]" />
            <span>Zero Queue Time Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#2dd4bf]" />
            <span>Kanchipuram Central Location</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;