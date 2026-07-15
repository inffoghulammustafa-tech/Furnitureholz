import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ArrivalCardProps {
  item: {
    id: string;
    name: string;
    tag: string;
    image: string;
    status: string;
  };
  product: Product | undefined; // Full product details to get thumbnails
  onOpenDetail: (id: string) => void;
  onInquiry: (name: string) => void;
}

export default function ArrivalCard({ item, product, onOpenDetail, onInquiry }: ArrivalCardProps) {
  const allImages = product?.images && product.images.length > 0 ? product.images : [item.image];
  const [activeImage, setActiveImage] = useState(allImages[0]);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(2.5)',
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: 'center center',
      transform: 'scale(1)',
    });
  };

  return (
    <div className="group box-gradient rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between border border-line hover:border-oak/40">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onOpenDetail(item.id)}
        className="relative aspect-[3/4] overflow-hidden bg-stone-950 cursor-zoom-in"
      >
        <img 
          src={activeImage} 
          alt={item.name} 
          style={zoomStyle}
          className="w-full h-full object-cover transition-transform duration-300 ease-out opacity-90 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        
        {/* Thumbnails */}
        {allImages.length > 1 && (
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {allImages.map((img, idx) => (
              <button 
                key={idx}
                onClick={(e) => { e.stopPropagation(); setActiveImage(img); }}
                className={`w-12 h-12 rounded border-2 overflow-hidden transition-all ${activeImage === img ? 'border-oak' : 'border-transparent'}`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {item.status === 'Sold Out' ? (
          <span className="absolute top-3 right-3 bg-walnut text-[9px] text-white px-2.5 py-1 rounded-md font-bold uppercase tracking-wider border border-oak/30">
            Sold Out
          </span>
        ) : (
          <span className="absolute top-3 right-3 bg-[#060B18]/80 backdrop-blur-md text-[9px] text-oak px-2.5 py-1 rounded-md font-bold uppercase tracking-wider border border-line">
            {item.tag}
          </span>
        )}
      </div>
      
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h4 
          onClick={() => onOpenDetail(item.id)}
          className="text-xs font-semibold text-ivory leading-snug group-hover:text-oak transition-colors font-sans cursor-pointer mb-3"
        >
          {item.name}
        </h4>
        
        {item.status === 'Sold Out' ? (
          <button 
            onClick={() => onInquiry(`${item.name} (Backorder Request)`)} 
            className="w-full py-2 border border-line text-ivory-dim/60 hover:text-white hover:border-oak hover:bg-oak/10 text-[10px] font-bold uppercase tracking-wider transition-all rounded-lg cursor-pointer"
          >
            Backorder Query
          </button>
        ) : (
          <button 
            onClick={() => onInquiry(item.name)} 
            className="w-full py-2 border-2 border-oak hover:bg-oak hover:text-charcoal text-oak text-[10px] font-bold uppercase tracking-wider transition-all rounded-lg cursor-pointer"
          >
            Call For Price
          </button>
        )}
      </div>
    </div>
  );
}
