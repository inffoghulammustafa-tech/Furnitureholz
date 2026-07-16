import React from 'react';
import { motion } from 'motion/react';

const sliderImages = [
  "https://furnitureholz.com/wp-content/uploads/2025/04/wall-decor-ideas-andrewbrowninteriors-birmighamcondo09222020-0149-2-copy-3-1649429839-683x1024.jpg",
  "https://furnitureholz.com/wp-content/uploads/2025/04/hbx050124charlottelucas-009-663d653450dfa.jpg",
  "https://furnitureholz.com/wp-content/uploads/2025/04/wall-decor-ideas-ed1c299f-21b8-44a1-a794-4d0d1387172c-rw-1920-copy-copy-1649426836-766x1024.jpg",
  "https://furnitureholz.com/wp-content/uploads/2025/04/gallery-wall-decor-ideas-hbx100121studiodiaa-005-1649431007-791x1024.jpg",
  "https://furnitureholz.com/wp-content/uploads/2025/04/hbx010124katiehodges-009-663d69d4ebb8a-815x1024.jpg",
  "https://furnitureholz.com/wp-content/uploads/2025/04/wall-decor-ideas-hbx110116edletter01-copy-1619637885-830x1024.jpg",
  "https://furnitureholz.com/wp-content/uploads/2025/04/wall-decor-ideas-hbx040122ceciliacasagrande-004-1-copy-1649426230-655x1024.jpg",
  "https://furnitureholz.com/wp-content/uploads/2025/04/hbx010124colleensaglimbeni-007-663d6e046d1db-768x1024.jpg",
  "https://furnitureholz.com/wp-content/uploads/2025/04/wall-decor-ideas-hbx020121krystalmattews-003-1619637186-683x1024.jpg",
];

export default function WallArtTvUnits() {
  const whatsappNumber = "923226638762";

  return (
    <section className="py-16 bg-transparent w-full overflow-hidden">
      <div className="w-full mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center bg-[#f5f5f5] px-6 sm:px-12 md:px-20 lg:px-32 py-16 lg:py-24 shadow-lg relative overflow-hidden"
        >
          {/* Left: Text Content */}
          <div className="lg:col-span-5 space-y-8 z-10 text-stone-900 font-poppins">
            <div className="space-y-4">
              <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] tracking-tight text-black">
                Design-Driven <span className="text-[#f39200]">Wall</span><br />
                <span className="text-[#f39200]">Decor</span> <span className="text-black">&</span> <span className="text-[#f39200]">TV Units</span>
              </h2>
              <p className="text-base sm:text-lg text-stone-700 max-w-xl leading-relaxed font-light">
                Add personality and purpose to your living space with our stunning wall arts and modern TV units. Whether you're looking to make a bold statement or keep things minimal, our curated designs offer the perfect balance of style and functionality. Create a space that's uniquely yours.
              </p>
            </div>

            <div className="pt-2">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=I'm interested in Wall Decor and TV Units.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-none font-medium text-lg hover:bg-black/90 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right: Feature Image */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl z-10 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] w-full"
            >
              <motion.img 
                src="https://furnitureholz.com/wp-content/uploads/2025/04/bedroom.jpg" 
                alt="Modern TV Unit and Wall Decor Design" 
                className="w-full h-full object-cover"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
            
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-oak/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-stone-300/20 rounded-full blur-3xl -z-0" />
          </div>
        </motion.div>
      </div>

      {/* Slider Section */}
      <div className="w-full relative mt-12 pb-8">
        <h3 className="text-center font-playfair text-3xl sm:text-4xl font-semibold mb-10 text-stone-100">
          Explore Inspiration
        </h3>

        <div className="flex w-full overflow-hidden relative group">
          <motion.div
            className="flex gap-4 sm:gap-6 pr-4 sm:pr-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Double the array for infinite loop effect */}
            {[...sliderImages, ...sliderImages].map((imgSrc, index) => (
              <div 
                key={index} 
                className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0 rounded-2xl overflow-hidden aspect-[3/4] relative shadow-md group-hover:pause"
              >
                <img 
                  src={imgSrc} 
                  alt={`Wall Decor Inspiration ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
