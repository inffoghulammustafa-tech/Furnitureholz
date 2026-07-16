import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sofa, Armchair, LampFloor, BookOpen, Coffee } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [loadingText, setLoadingText] = useState('CRAFTING MODERN LIVING...');
  const [iconIndex, setIconIndex] = useState(0);
  const icons = [Sofa, Armchair, LampFloor, Coffee, BookOpen];

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = 'hidden';
    
    const textTimer = setTimeout(() => setLoadingText('Loading Premium Collection...'), 2500);
    const completeTimer = setTimeout(() => {
      document.body.style.overflow = 'unset';
      onComplete();
    }, 5500); // Plays for ~5.5s then triggers exit
    
    const iconInterval = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % icons.length);
    }, 1200);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
      clearInterval(iconInterval);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  const CurrentIcon = icons[iconIndex];

  return (
    <motion.div
      className="fixed inset-0 z-[100000] flex flex-col items-center justify-center overflow-hidden bg-[#081B3A]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,76,255,0.25)_0%,_rgba(255,199,44,0.08)_40%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl px-6 flex flex-col items-center">
        
        {/* Animated Line and Icon Section */}
        <div className="relative w-full max-w-lg h-32 flex items-center justify-center mb-10 overflow-hidden">
          
          {/* Base Track Line */}
          <div className="absolute bottom-10 w-full h-[1px] bg-white/10" />
          
          {/* Moving icon and glowing trail */}
          <motion.div
            className="absolute bottom-6 flex items-center z-10"
            initial={{ left: "-20%" }}
            animate={{ left: "120%" }}
            transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity }}
          >
            {/* Trail */}
            <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-[#FFC72C] to-[#FFC72C] shadow-[0_0_20px_rgba(255,199,44,0.9)] mr-2" />
            
            {/* Morphing Icon */}
            <AnimatePresence mode="wait">
              <motion.div
                key={iconIndex}
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 15 }}
                transition={{ duration: 0.3 }}
                className="text-[#FFC72C] filter drop-shadow-[0_0_15px_rgba(255,199,44,1)] relative z-20"
              >
                <CurrentIcon strokeWidth={1.5} size={36} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Brand Name */}
        <motion.div 
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          <span className="font-display font-extrabold text-3xl md:text-5xl tracking-[0.2em] text-[#FFC72C] drop-shadow-[0_0_15px_rgba(255,199,44,0.3)]">
            FURNITURE
          </span>
          <span className="font-sans font-bold text-3xl md:text-5xl tracking-[0.2em] text-white">
            HOLZ
          </span>
        </motion.div>

        {/* Loading Text */}
        <div className="h-10 flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={loadingText}
              className="font-mono text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-center"
              style={{ color: loadingText.includes('CRAFTING') ? '#FFC72C' : '#FFFFFF' }}
              initial={{ opacity: 0, filter: 'blur(5px)', y: 5 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, filter: 'blur(5px)', y: -5 }}
              transition={{ duration: 0.6 }}
            >
              {loadingText}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-72 h-[2px] bg-white/10 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#FFC72C] shadow-[0_0_15px_rgba(255,199,44,1)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5.5, ease: "circOut" }}
          />
        </div>

      </div>

      {/* Subtle Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#FFC72C] rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
              filter: 'blur(1px)'
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, Math.random() * 0.6, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
