import React, { useEffect } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";

// Components Import
import Hero from "../components/Hero";
import Navbar from "../components/layout/Navbar";
import ServicesMarquee from "../components/TrustPartners";
import About from "../components/About";
import Services from "../components/layout/Services";
import StyleMenuApp from "../components/StyleMenu";
import StudioLocation from "../components/Location";
import BookNow from "../components/Booknow";
import Gallery from "../components/Gallery";

const Home = () => {
  // Initialize Lenis Smooth Scroll (Optimized for light, natural scrolling)
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // Lower value = smoother but heavier. 0.08 - 0.1 is the sweet spot.
      wheelMultiplier: 1.2, // Increases scroll speed slightly so it doesn't feel hard
      smoothWheel: true,
      smoothTouch: false, // Mobile-la default touch scroll thaan best
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Framer Motion Page Transition Variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    },
  };

  return (
    <main className="relative w-full min-h-screen bg-[#050505] overflow-x-hidden text-white">
      
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content wrapped in Framer Motion for load animations */}
      <motion.div 
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={sectionVariants}><Hero /></motion.div>
        <motion.div variants={sectionVariants}><ServicesMarquee /></motion.div>
        <motion.div variants={sectionVariants}><About /></motion.div>
        <motion.div variants={sectionVariants}><Gallery /></motion.div>
        <motion.div variants={sectionVariants}><Services /></motion.div>
        <motion.div variants={sectionVariants}><StyleMenuApp /></motion.div>
        <motion.div variants={sectionVariants}><StudioLocation /></motion.div>
        <motion.div variants={sectionVariants}><BookNow /></motion.div>
      </motion.div>

      {/* ========================================================= */}
      {/* GLOBAL FIXED FLOATING "BOOK NOW" BUTTON                   */}
      {/* ========================================================= */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring", bounce: 0.5 }}
        className="fixed bottom-5 right-5 sm:bottom-8 sm:right-10 z-[100]"
      >
        {/* Subtle Outer Glow (Reduced intensity for medium visibility) */}
        <div className="absolute -inset-1.5 rounded-full bg-[#d4b26f] opacity-20 blur-md pointer-events-none" />

        {/* Floating Action Button */}
        <a
          href="tel:+919944313146" 
          className="relative flex items-center justify-center gap-3 w-12 h-12 sm:w-auto sm:h-auto sm:px-6 sm:py-3.5 rounded-full bg-[#d4b26f]/90 backdrop-blur-md text-black font-extrabold text-[11px] sm:text-xs uppercase tracking-widest shadow-[0_8px_20px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 group overflow-hidden border border-white/20 hover:border-white/60 hover:bg-[#d4b26f] opacity-90 hover:opacity-100"
        >
          {/* Shimmer Sweep Animation */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          
          <Phone className="w-6 h-4 sm:w-4 sm:h-3 fill-black/10" strokeWidth={2} />
          
          {/* Text is HIDDEN on mobile (w-14 h-14 handles the circle), SHOWN on sm and above */}
          <span className="hidden sm:flex flex-col items-start leading-none text-left">
            <span className="text-[5px] sm:text-[9px] font-mono tracking-widest text-black/70 mb-0.5">Quick Dial</span>
            <span>Book Slot</span>
          </span>
        </a>
      </motion.div>

    </main>
  );
};

export default Home;