import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  "https://furnitureholz.com/wp-content/uploads/2025/04/hbx070123kitchenopener-001-65a7f137d3094-683x1024.jpg",
  "https://furnitureholz.com/wp-content/uploads/2025/04/hbx070123kitchen-meta-003-65a7f1005a901-683x1024.jpg",
  "https://furnitureholz.com/wp-content/uploads/2025/04/kitchen-cabinetry-trends-for-2023-1666731521-765x1024.png",
  "https://furnitureholz.com/wp-content/uploads/2025/04/ladwig-home-highres-27-1666963207-683x1024.jpg",
  "https://furnitureholz.com/wp-content/uploads/2025/04/hbx040124corrigan-001-665f81079f7a5-683x1024.jpg",
  "https://furnitureholz.com/wp-content/uploads/2025/04/hbx050124pfeffertorode-013-66606ab14b5b8-683x1024.jpg",
  "https://furnitureholz.com/wp-content/uploads/2025/04/hbx010124noznozawa-014-665f77c5792cb-776x1024.jpg",
  "https://furnitureholz.com/wp-content/uploads/2025/04/hbx090124thomasjames-004-6703f52d66f79.jpg"
];

export default function KitchenCabinets() {
  const whatsappNumber = "923226638762";
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage]);

  return (
    <section className="py-16 bg-transparent w-[100vw] max-w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden">
      <div className="w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row items-stretch bg-[#f5f5f5] w-full mb-16"
        >
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 px-6 sm:px-12 md:px-20 lg:px-32 py-16 lg:py-24 flex flex-col justify-center space-y-6 text-stone-900 font-poppins">
            <div className="space-y-4">
              <h2 className="font-playfair text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.1] tracking-tight text-black">
                Modern Kitchen<br />
                <span className="text-[#f39200]">Cabinets</span> & Elegant<br />
                <span className="text-[#f39200]">Wardrobes</span>
              </h2>
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-light pt-2">
                Transform your living spaces with our expertly crafted kitchen cabinets and wardrobes. Designed for both functionality and style, our solutions offer smart storage with a sleek, modern touch.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=I'm interested in Kitchen Cabinets & Wardrobes.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white px-8 py-3.5 rounded-none font-medium text-lg hover:bg-black/90 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right: Feature Image */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] overflow-hidden">
            <motion.img 
              src="https://furnitureholz.com/wp-content/uploads/2025/04/kithen2.jpg" 
              alt="Modern Kitchen Cabinets & Elegant Wardrobes" 
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Gallery Slider Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative mt-12 w-full max-w-[1920px] mx-auto"
        >
          <h3 className="text-center font-playfair text-3xl sm:text-4xl font-semibold mb-10 text-white">
            Discover the Art of Kitchen Cabinetry
          </h3>
          
          <div className="relative group pause-on-hover overflow-hidden py-8">
            {/* Slider Container */}
            <div 
              className="flex gap-6 w-max animate-auto-scroll"
            >
              {[...galleryImages, ...galleryImages].map((src, index) => (
                <motion.div
                  key={index}
                  className="min-w-[280px] sm:min-w-[320px] aspect-[3/4] flex-shrink-0 cursor-pointer group/item relative rounded-2xl overflow-hidden shadow-md hover:shadow-[0_0_40px_rgba(243,146,0,0.6)] transition-all duration-300"
                  whileHover={{ y: -10 }}
                  onClick={() => openLightbox(index % galleryImages.length)}
                >
                  <motion.img 
                    src={src} 
                    alt={`Kitchen Design ${(index % galleryImages.length) + 1}`}
                    className="w-full h-full object-cover"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="bg-white/90 text-stone-900 px-6 py-3 rounded-full font-medium opacity-0 group-hover/item:opacity-100 transform translate-y-4 group-hover/item:translate-y-0 transition-all duration-300 shadow-lg">
                      View Full
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-50 p-2"
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-50 p-4 hidden sm:block"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-50 p-4 hidden sm:block"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div 
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full h-full flex items-center justify-center p-4 sm:p-12 md:p-24"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[currentImageIndex]} 
                alt={`Gallery View ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 font-medium tracking-widest text-sm bg-black/50 px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
            
            {/* Mobile Swipe Navigation Areas */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-1/4 z-40 sm:hidden" 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            />
            <div 
              className="absolute right-0 top-0 bottom-0 w-1/4 z-40 sm:hidden" 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
