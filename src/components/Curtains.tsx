import React from 'react';
import { motion } from 'motion/react';

export default function Curtains() {
  const whatsappNumber = "923226638762";

  return (
    <section className="py-16 bg-transparent w-full overflow-hidden">
      <div className="w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center bg-[#f5f5f5] px-6 sm:px-12 md:px-20 lg:px-32 py-12 lg:py-16 shadow-lg relative"
        >
          {/* Left: Text Content */}
          <div className="lg:col-span-5 space-y-6 z-10 text-stone-900 font-poppins">
            <div className="space-y-4">
              <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] tracking-tight text-black">
                Elegant <span className="text-[#f39200]">Curtain</span><br />
                <span className="text-[#f39200]">Designs</span> for Your<br />
                Home
              </h2>
              <p className="text-base sm:text-lg text-stone-700 max-w-xl leading-relaxed font-light">
                Explore our exquisite collection of curtains, crafted to bring elegance, functionality, and comfort to any room in your home. Whether you're looking for classic drapes, modern sheers, or blackout options, we offer a variety of styles and fabrics to suit every taste and need.
              </p>
            </div>

            <div className="pt-2">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=I'm interested in Curtains.`}
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
              className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(243,146,0,0.4)] z-10 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] min-h-[400px] lg:min-h-[600px] w-full"
            >
              <motion.img 
                src="https://furnitureholz.com/wp-content/uploads/2023/01/curtains-showroom.jpg" 
                alt="Elegant Curtain Designs" 
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

        {/* Second Section: Customized Curtains */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center bg-white px-6 sm:px-12 md:px-20 lg:px-32 py-16 lg:py-24 relative mt-8"
        >
          {/* Left: Text Content */}
          <div className="lg:col-span-6 space-y-6 z-10 text-stone-900 font-poppins">
            <div className="space-y-4">
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold leading-[1.2] tracking-tight text-black">
                Your Style, Your Curtains
              </h2>
              <h3 className="font-playfair text-3xl sm:text-4xl font-semibold text-[#f39200]">
                Fully Customizable
              </h3>
              <p className="text-base text-stone-700 leading-relaxed font-light">
                Discover the world of Customized Designer Curtains in Faisalabad with our vast variety of unique designs, imported fabrics, and tailor-made stitching options. At our showroom, we offer free measurement and consultancy services to help you find the perfect curtains for your home. Whether you're looking for elegant sheer drapes, stylish valances, or practical blackout curtains, we've got you covered. Our team of experts will work with you to create the perfect curtains that fit your style and budget. Now you can get Complete curtains & furniture range under one roof in Faisalabad. Upgrade your home decor with our Customized Designer Curtains today!
              </p>
            </div>

            <div className="pt-2">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=I'm interested in Customized Curtains.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-none font-medium text-lg hover:bg-black/90 transition-all duration-300"
              >
                Order Now
              </a>
            </div>
          </div>

          {/* Right: Feature Image */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(243,146,0,0.4)] z-10 w-full max-w-md aspect-[3/4]"
            >
              <img 
                src="https://furnitureholz.com/wp-content/uploads/2023/01/curtains-2.jpeg" 
                alt="Customized Designer Curtains" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
