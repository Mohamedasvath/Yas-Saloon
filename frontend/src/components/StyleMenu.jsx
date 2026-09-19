import React, { useState, useRef } from "react";
import { Scissors, Flame, ArrowUpRight, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

const StyleGalleryApp = () => {
  const [activeTab, setActiveTab] = useState("haircuts");
  const scrollRef = useRef(null);

  const haircutStyles = [
    { id: "h1", name: "Low Skin Taper Fade",  category: "Barber Cut", image: "https://lowtaperstyle.com/wp-content/uploads/2026/05/Untitled-design-2026-05-13T063414.460.webp" },
    { id: "h2", name: "Textured Crop & Blunt Fringe",  category: "Modern", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj-zWTot8_7Is-aWZwTOnJeBvuc1f5ZROpWX1osH5CAr9fbpJa-E-mY7o&s=10" },
    { id: "h3", name: "Executive Side Part",  category: "Classic", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTecfYpnYs9_UuHEFeMClrV4ZMrtAE64oA06qzPV0SXYzN_VlMuy7UVMsOs&s=10" },
    { id: "h4", name: "Buzz Cut + Razor Lineup", category: "Minimal", image: "https://i.pinimg.com/736x/4d/d5/3c/4dd53c2eed4305d3ad609a111c0ef719.jpg" },
    { id: "h5", name: "Modern Tapered Mullet",  category: "Edgy", image: "https://i.pinimg.com/736x/74/b7/15/74b7159ce94a721967a614ad0246a207.jpg" },
    { id: "h6", name: "Slick Back Undercut",  category: "Vintage", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPxM3DRJDJs7snuUSyVPZ43Q-UhvqdciUtkjRIT-TOe3hSjS3E8bztR-8&s=10" },
    { id: "h7", name: "Curl Hair Cut",  category: "Texture", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7i8NQY_OsHim6_aJlojXvje_9EYCPN-PyZ6Q4NTvkkRNHhsZC4-IUGMq&s=10" },
    { id: "h8", name: "Drop Fade Curls",  category: "Afro/Curl", image: "https://cdn.shopify.com/s/files/1/0029/0868/4397/files/medium-length-undercut-hairstyle-men.webp?v=1769522759" },
    { id: "h9", name: "Messy Faux Hawk",  category: "Casual", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=700" },
    { id: "h10", name: "Burst Fade Mohawk",  category: "Signature", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBEotRMhVfeUrkpK_JunzB-Eu7BokYN8TbGnH0c-XkxeNfV8-PFY7w4M&s=10" }
  ];

  const tattooStyles = [
    { id: "t1", name: "Fine Line Sacred Geometry", category: "Fine Line", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQht38ZlMnCWft14-5pm8FZY4oeVgGKqy2h6TDMTj9gjwxL13knpshvVcdO&s=10" },
    { id: "t2", name: "Solid Blackwork Arm Band", category: "Blackwork", image: "https://amazetattoo.com/wp-content/uploads/2025/12/Geometric-Animal-Design-677x1024.webp" },
    { id: "t3", name: "Micro Realism Portrait",  category: "Realism", image: "https://amazetattoo.com/wp-content/uploads/2026/01/Winged-Lion-Full-Back-Tattoo-683x1024.webp" },
    { id: "t4", name: "Calligraphy & Tamil Script",  category: "Script", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-guk2QyUMkKkhrQ-oKxic2eOXpOmZptdrKwvOHdTFufEsOxlNkDquDha&s=10" },
    { id: "t5", name: "Dotwork Mandala Sleeve",  category: "Dotwork", image: "https://i.pinimg.com/736x/b6/59/59/b659594b84737f9087cf457329032383.jpg" },
    { id: "t6", name: "Traditional Neo Dagger",  category: "Neo Trad", image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&q=80&w=700" },
    { id: "t7", name: "Minimalist Botanical Leaves", category: "Minimal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHG4xjog7Ocpe5qRWP0r6E2agu1M-_Oq31Qi3-SG_OQAje9FJCcS18lJnq&s=10" },
    { id: "t8", name: "Gothic Lettering Chest",category: "Lettering", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-JbuGuVat2WtdqTYTdNFighpq65-LXYZvg-LaBGQM7W6T1-VnOD6AK0&s=10" },
    { id: "t9", name: "Japanese Irezumi Waves",  category: "Oriental", image: "https://cdn.shopify.com/s/files/1/0672/0474/3306/files/Dual_Wolf_Instinct_tattoo_on_Arm.jpg?v=1781350199" },
    { id: "t10", name: "Minimalist Constellation", category: "Line Art", image: "https://img.blackink.ai/tattoos/63ZKtrkbB9eQ3CzTmeYrkA/show-the-tattoo-created-on-a-mans-1-magic.webp" }
  ];

  const currentList = activeTab === "haircuts" ? haircutStyles : tattooStyles;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handleBookViaWhatsApp = (item) => {
    const salonWhatsApp = "919876543210";
    const msg = `Hello Yazhini Saloon! 👋\n\nNjan gallery-il ninnu ee look select cheythu:\n*Style:* ${item.name}\n*Price:* ${item.price}\n\nEe look book cheyyan slot undonn ariyikkamo?`;
    window.open(`https://wa.me/${salonWhatsApp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="relative w-full bg-[#050505] text-white py-20 border-t border-neutral-900 overflow-hidden select-none">
      
      {/* Top Header & App Controls */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[#e3c68a] text-xs uppercase tracking-[0.3em] font-mono mb-2">
            <span className="w-2 h-2 rounded-full bg-[#e3c68a]" />
            Choose Your Style
          </div>
          <h2 className="text-4xl sm:text-6xl font-['Bebas_Neue'] tracking-tight leading-none text-neutral-100">
            We Make Perfect
          </h2>
        </div>

        {/* Minimal Tab Switcher & Navigation Buttons */}
        <div className="flex items-center gap-4">
          <div className="inline-flex p-1 bg-neutral-950 border border-neutral-800 rounded-lg">
            <button
              onClick={() => setActiveTab("haircuts")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeTab === "haircuts"
                  ? "bg-[#e3c68a] text-black font-bold shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Scissors className="w-3.5 h-3.5" />
              <span>Hair (10)</span>
            </button>

            <button
              onClick={() => setActiveTab("tattoos")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeTab === "tattoos"
                  ? "bg-[#e3c68a] text-black font-bold shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Tattoo (10)</span>
            </button>
          </div>

          {/* Desktop Arrow Nav */}
          <div className="hidden sm:flex items-center gap-2">
            <button 
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Natural Swipe Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-5 sm:gap-6 overflow-x-auto px-6 sm:px-10 pb-8 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {currentList.map((item, idx) => (
          <div
            key={item.id}
            className="snap-start shrink-0 w-[260px] sm:w-[300px] flex flex-col justify-between group cursor-pointer"
            onClick={() => handleBookViaWhatsApp(item)}
          >
            {/* Editorial Frame Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800/80 group-hover:border-[#e3c68a]/50 transition-all duration-500">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover grayscale-[30%] contrast-[1.05] brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Subtle Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Minimal Top Index & Category */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                  #{String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#e3c68a] bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded">
                  {item.category}
                </span>
              </div>

              {/* Hover Quick Action Indicator */}
              <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#e3c68a] text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>

            {/* Typography Section (Editorial Clean Layout) */}
            <div className="pt-4 pb-2">
              <div className="flex items-baseline justify-between gap-2 border-b border-neutral-800/70 pb-2">
                <h3 className="text-lg sm:text-xl font-['Bebas_Neue'] tracking-wider text-neutral-200 group-hover:text-[#e3c68a] transition-colors truncate">
                  {item.name}
                </h3>
                <span className="text-sm font-mono font-medium text-neutral-300 shrink-0">
                  {item.price}
                </span>
              </div>
              
              <div className="flex items-center justify-between text-[11px] text-neutral-500 font-mono pt-2">
                <span>Direct Studio Booking</span>
                <span className="flex items-center gap-1 group-hover:text-neutral-300 transition-colors">
                  <MessageSquare className="w-3 h-3" /> WhatsApp
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Swipe Indication text for Mobile */}
      <div className="flex items-center justify-center gap-2 text-neutral-600 text-xs font-mono uppercase tracking-widest pt-2 sm:hidden">
        <span>← Swipe lookbook →</span>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default StyleGalleryApp;