import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function WoodFiberDoors() {
  const whatsappNumber = "923226638762";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Assalam-o-Alaikum,%20I%20am%20interested%20in%20your%20Wood%20and%20Fibre%20Doors.`;

  return (
    <section className="py-16 bg-transparent w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
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
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              src="https://furnitureholz.com/wp-content/uploads/2021/04/Wood-Fiber-Doors-Banner.jpg" 
              alt="Wood and Fibre Doors"
              className="w-full max-w-xl object-contain drop-shadow-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1595526114937-251f043cc833?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
