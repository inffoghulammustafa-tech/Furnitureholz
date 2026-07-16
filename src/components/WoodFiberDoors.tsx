import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function WoodFiberDoors() {
  const whatsappNumber = "923226638762";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Assalam-o-Alaikum,%20I%20am%20interested%20in%20your%20Wood%20and%20Fibre%20Doors.`;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    "https://furnitureholz.com/wp-content/uploads/2025/04/d1.jpg",
    "https://furnitureholz.com/wp-content/uploads/2025/04/d2.jpg",
    "https://furnitureholz.com/wp-content/uploads/2025/04/d3.jpg",
    "https://furnitureholz.com/wp-content/uploads/2025/04/d4.jpg",
    "https://furnitureholz.com/wp-content/uploads/2025/04/d5.webp",
    "https://furnitureholz.com/wp-content/uploads/2025/04/d6.jpg"
  ];

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const closeLightbox = () => setSelectedIndex(null);

  return (
    <section className="py-16 bg-transparent w-full">
      <div className="w-full">
        {/* Top Hero Section - Contained */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center bg-[#f5f5f5] p-8 sm:p-12 md:p-16 rounded-[32px] border border-stone-200/50 shadow-lg relative overflow-hidden"
          >
          {/* Left: Text Content */}
          <div className="lg:col-span-6 space-y-8 z-10 text-stone-900">
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="font-display text-4xl sm:text-5xl md:text-[56px] font-bold text-stone-900 leading-[1.1] tracking-tight"
              >
                Quality <span className="text-[#f97316]">Wood and</span> <br />
                <span className="text-[#f97316]">Fibre Doors</span> for <br />
                Every Space
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                className="text-stone-600 text-sm sm:text-base font-sans leading-relaxed max-w-xl"
              >
                Discover the perfect blend of natural beauty and engineered strength with our Wood & Fibre Doors. Crafted to offer durability, style, and excellent performance, these doors are ideal for both modern and traditional interiors. Whether you're looking for a warm wooden finish or the enhanced stability of fibre construction, our range provides versatile options to suit any space.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="pt-2"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-stone-900 bg-white text-stone-900 hover:bg-stone-900 hover:text-white px-10 py-3.5 text-sm font-semibold tracking-wider transition-all duration-300 rounded-none shadow-sm uppercase"
              >
                <Send className="w-4 h-4" />
                Call Now
              </a>
            </motion.div>
          </div>

          {/* Right: Doors Image */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <motion.img 
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                x: 0,
                y: [0, -12, 0]
              }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { duration: 0.8, delay: 0.2 },
                x: { duration: 0.8, delay: 0.2 },
                y: {
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ scale: 1.05 }}
              src="https://furnitureholz.com/wp-content/uploads/2025/04/doors-5.png" 
              alt="Wood and Fibre Doors"
              className="w-full max-w-2xl object-contain drop-shadow-2xl transition-all duration-500 cursor-pointer"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1595526114937-251f043cc833?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </div>
        </motion.div>

        </div>

        {/* Crafted Designs Section - Extra Wide */}
        <div className="w-full">
          <section className="door-showcase-section w-full my-16 px-4 sm:px-8 py-16 text-center bg-stone-900 border-y border-white/5 shadow-2xl">
            <h2 className="showcase-title font-display text-4xl font-bold text-white mb-5 tracking-tight">Crafted Designs. Timeless Styles.</h2>
            <p className="showcase-para text-base leading-relaxed text-stone-300 max-w-4xl mx-auto mb-12 font-light">
              From sleek modern lines to timeless classics, our Wood & Fibre Doors come in a variety of styles to complement any interior. Choose from panel doors, flush designs, sliding options, or elegant folding doors—all crafted to enhance both functionality and aesthetics. Whether you're aiming for a minimalist look or a more traditional feel, we have designs to match every taste and space.
            </p>

            <div className="image-container relative w-full overflow-hidden shadow-lg cursor-pointer group border border-white/10">
              <img 
                src="https://i.pinimg.com/736x/89/74/b3/8974b320bcdcb8a81e3f7501e223081c.jpg" 
                alt="Doors Showroom" 
                className="showroom-img w-full h-auto block transition-transform duration-[800ms] group-hover:scale-105"
              />
            </div>
          </section>

          {/* Door Styles Gallery - Extra Wide */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="mt-20 bg-[#1a1918] p-4 sm:p-8 md:p-12 border-y border-stone-800 shadow-2xl w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group cursor-zoom-in"
                onClick={() => setSelectedIndex(i)}
              >
                <img 
                  src={img} 
                  alt={`Door style ${i+1}`}
                  className="w-full h-[500px] object-cover rounded-[32px] border border-white/5 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_0_30px_rgba(214,188,144,0.3)] group-hover:border-stone-500/30"
                />
                <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/10 group-hover:ring-stone-400/30 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Installation Section */}
        <section className="bg-white py-24 w-full">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center font-poppins"
            >
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#111111] mb-2 leading-[1.3]">
                Your Door, Perfectly Installed
              </h2>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#f39200] mb-6 leading-[1.3]">
                Support Always On Call
              </h2>
              
              <p className="text-base sm:text-lg leading-relaxed text-[#555555] mb-9 font-light">
                We offer professional installation services to ensure your Wood & Fibre Doors are fitted with precision and care. Our experienced team handles everything from delivery to final setup, making the process smooth and hassle-free. Plus, with dedicated after-sales support and warranty coverage, you can count on us for reliable service even after installation is complete.
              </p>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=I'm interested in professional door installation services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-10 py-4 rounded font-medium text-lg border border-black shadow-lg hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] w-fit text-center"
              >
                Order Now
              </a>
            </motion.div>

            {/* Right Side: Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:translate-y-[-5px] hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] group"
            >
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80" 
                alt="Professional Door Installation Guide" 
                className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02]"
              />
            </motion.div>

          </div>
        </section>

      </div>
    </div>

    {/* Lightbox Modal */}
    <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-10"
            onClick={closeLightbox}
          >
            <motion.button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <button
              className="absolute left-4 sm:left-10 text-white/50 hover:text-white transition-colors z-[110] bg-white/10 p-4 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex]}
                alt="Selected door"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>

            <button
              className="absolute right-4 sm:right-10 text-white/50 hover:text-white transition-colors z-[110] bg-white/10 p-4 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-medium tracking-widest text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
