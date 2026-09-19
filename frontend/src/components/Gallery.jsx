import React from "react";
import { ArrowRight } from "lucide-react";

export default function Gallery() {
  return (
    <section 
      id="gallery" 
      className="relative w-full bg-[#000000] py-10 px-4 sm:px-10 lg:px-16 flex flex-col font-sans select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto w-full">
        
        {/* 1. STAGGERED GRID (Forcing the Masonry look on ALL screen sizes) */}
        {/* On mobile: 2 columns to maintain viewability, on desktop: 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 md:-mt-8">
            <img 
              src="https://www.kaya.in/media/.renditions/wysiwyg/french-crop-men-short-fringe-haircut.png" 
              alt="Saloon Work 1" 
              className="w-full h-[180px] sm:h-[240px] md:h-[280px] object-cover rounded-[16px] sm:rounded-[24px]"
            />
            <img 
              src="https://img.magnific.com/free-photo/stylish-man-sitting-barbershop_1157-20487.jpg?semt=ais_hybrid&w=740&q=80" 
              alt="Saloon Work 2" 
              className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover rounded-[16px] sm:rounded-[24px]"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 pt-4 md:pt-0">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0_vobFW6uTPyENX7-fbXzWMEAQIt6ADv_DHy0Y3TFi-j32whAnqA1Ik&s=10" 
              alt="Saloon Work 3" 
              className="w-full h-[240px] sm:h-[300px] md:h-[340px] object-cover rounded-[16px] sm:rounded-[24px]"
            />
            <img 
              src="https://www.inkbolt.in/cdn/shop/files/The_Tribal_Sleeve_Tattoo_1800x1800.jpg?v=1781353714" 
              alt="Saloon Work 4" 
              className="w-full h-[160px] sm:h-[220px] md:h-[260px] object-cover rounded-[16px] sm:rounded-[24px]"
            />
          </div>

          {/* Column 3 (Moves to next row on mobile, keeps masonry feel) */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 md:-mt-12">
            <img 
              src="https://techstory.in/wp-content/uploads/2022/11/image1-3.jpg" 
              alt="Saloon Work 5" 
              className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover rounded-[16px] sm:rounded-[24px]"
            />
            <img 
              src="https://cdn.shopify.com/s/files/1/0672/0474/3306/files/Oni_mask_Tattoo_On_Hand.jpg?v=1781284110" 
              alt="Saloon Work 6" 
              className="w-full h-[260px] sm:h-[320px] md:h-[380px] object-cover rounded-[16px] sm:rounded-[24px]"
            />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 pt-6 md:pt-0 md:-mt-4">
            <img 
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600" 
              alt="Saloon Work 7" 
              className="w-full h-[240px] sm:h-[300px] md:h-[360px] object-cover rounded-[16px] sm:rounded-[24px]"
            />
           
          </div>

        </div>

        {/* 2. BOTTOM BAR (Scales cleanly on mobile) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-4">
          
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[46px] font-medium tracking-tight text-white leading-none">
              Styles for Standing Out
            </h2>
            <p className="text-[#a1a1aa] text-sm sm:text-[15px] lg:text-base font-normal tracking-wide">
              You imagine it, we craft it.
            </p>
          </div>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-3 sm:gap-4 bg-white rounded-full p-1.5 sm:p-2 pl-5 sm:pl-7 cursor-pointer hover:bg-neutral-200 transition-colors duration-300 active:scale-95 shrink-0"
          >
            <span className="text-black font-medium text-sm sm:text-[15px] tracking-tight">
              Book Slot
            </span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1c1c1e] flex items-center justify-center">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2} />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}