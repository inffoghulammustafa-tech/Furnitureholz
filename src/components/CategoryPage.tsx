import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Product } from '../types';
import { INITIAL_PRODUCTS, getProductAttributes } from '../data';
import { getCategoryLabel } from './Catalog';

interface CategoryPageProps {
  category: string;
  onAddProductToQuote: (product: Product) => void;
  onConfigureProduct: (product: Product) => void;
}

export default function CategoryPage({ category, onAddProductToQuote, onConfigureProduct }: CategoryPageProps) {
  const [searchParams, setSearchParams] = useState({
    color: 'All',
    material: 'All',
    polish: 'All',
    style: 'All',
    pieces: 'All',
  });

  const [sortBy, setSortBy] = useState<string>('Sort by popularity');
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);

  const filteredProducts = useMemo(() => {
    let result = INITIAL_PRODUCTS.filter(p => {
      const matchesCategory = p.category === category;
      if (!matchesCategory) return false;

      const attrs = getProductAttributes(p);
      const matchesColor = searchParams.color === 'All' || attrs.color === searchParams.color;
      const matchesMaterial = searchParams.material === 'All' || attrs.material === searchParams.material;
      const matchesPolish = searchParams.polish === 'All' || attrs.polish === searchParams.polish;
      const matchesStyle = searchParams.style === 'All' || attrs.style === searchParams.style;
      const matchesPieces = searchParams.pieces === 'All' || attrs.pieces === searchParams.pieces;

      return matchesColor && matchesMaterial && matchesPolish && matchesStyle && matchesPieces;
    });

    // Sorting logic
    if (sortBy === 'Sort by price: low to high') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Sort by price: high to low') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'Sort by latest') {
      result = [...result].sort((a, b) => {
        const dateA = getProductAttributes(a).date;
        const dateB = getProductAttributes(b).date;
        return dateB.localeCompare(dateA);
      });
    } else {
      // Sort by popularity
      result = [...result].sort((a, b) => {
        const popA = getProductAttributes(a).popularity;
        const popB = getProductAttributes(b).popularity;
        return popB - popA;
      });
    }

    return result;
  }, [category, searchParams, sortBy]);

  const filterOptions = {
    color: [
      'All',
      'Caramel Brown',
      'Careem',
      'Chocolate Brown',
      'Dark Brown',
      'Golden',
      'Golden Brown',
      'Leather Brown',
      'Off White',
      'Polish Brown',
      'Royal Blue',
      'Royal Red',
      'Sea Green',
      'Silver',
      'Silver Brown',
      'Skin',
      'Skin Brown',
      'Walnut Brown',
      'Brown'
    ],
    material: [
      'All',
      'Acacia/ Kikar Wood',
      'MDF Malaysia',
      'Oak Wood',
      'Shisham/ Sissoo Wood',
      'Solid Wood',
      'Walnut Wood'
    ],
    polish: [
      'All',
      'All Over Upholstery',
      'Classic Polish',
      'Deco',
      'Glossy Polish',
      'High Gloss',
      'Jacquard Upholstery',
      'Leather Upholstery',
      'Mate Polish',
      'N/A',
      'Tone Polish',
      'Velvet Upholstery'
    ],
    style: [
      'All',
      'Carved Back',
      'Chinioti',
      'Circle',
      'Crafted',
      'Crown',
      'Crown Back',
      'Deewan',
      'Foam Quilt',
      'Gourmet',
      'Inlay',
      'L Shape',
      'Ladder',
      'Milia',
      'Moora',
      'Puffy Settee',
      'Round Seat',
      'Royal Crown',
      'Self Crafted',
      'Ship Deck',
      'Stick',
      'Stick Frame',
      'Velvet Upholstery'
    ],
    pieces: [
      'All',
      '1 Piece',
      '2 Piece',
      '3 Piece',
      '4 Piece',
      '5 Piece',
      'King'
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-charcoal text-ivory p-6 md:p-12 pt-28 md:pt-40"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center mb-12 text-4xl font-light text-ivory uppercase tracking-[0.2em]">
          {getCategoryLabel(category)} Luxury Collection
        </h1>

        {/* Filter Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12 bg-gradient-to-br from-amber-500/10 via-[#855B0A]/20 to-charcoal border border-amber-500/35 p-6 rounded-2xl shadow-xl backdrop-blur-md"
        >
          {Object.entries(filterOptions).map(([key, options]) => (
            <div key={key}>
              <label className="block text-[10px] uppercase tracking-widest text-ivory/80 mb-2 font-bold">{key}</label>
              <select
                value={searchParams[key as keyof typeof searchParams]}
                onChange={(e) => setSearchParams(prev => ({ ...prev, [key]: e.target.value }))}
                className="w-full bg-charcoal/90 border border-oak/30 py-2.5 px-2 text-xs rounded-lg text-ivory focus:outline-none focus:border-oak cursor-pointer"
              >
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
          ))}

          {/* Sort Dropdown */}
          <div className="relative">
            <label className="block text-[10px] uppercase tracking-widest text-ivory/80 mb-2 font-bold">Sort By</label>
            <button
              type="button"
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="w-full bg-gray-300 text-charcoal font-bold uppercase tracking-wider text-[10px] py-2.5 px-3 rounded-lg flex items-center justify-between cursor-pointer border border-transparent transition-colors hover:bg-gray-200"
            >
              <span className="truncate">{sortBy}</span>
              <span className="text-[9px] font-semibold flex-shrink-0 ml-1">
                {isSortOpen ? '▲' : '▼'}
              </span>
            </button>
            
            <AnimatePresence>
              {isSortOpen && (
                <>
                  {/* Invisible backdrop to close the dropdown when clicking outside */}
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsSortOpen(false)} 
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 left-0 mt-2 bg-white text-charcoal rounded-lg shadow-2xl border border-gray-200 z-20 py-1 overflow-hidden"
                  >
                    {[
                      'Sort by popularity',
                      'Sort by latest',
                      'Sort by price: low to high',
                      'Sort by price: high to low'
                    ].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setSortBy(option);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-[10px] font-medium font-sans hover:bg-gray-100 transition-colors ${
                          sortBy === option ? 'bg-gray-100 font-bold text-black' : 'text-gray-700'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1">
              <div className="relative h-64 bg-gray-800">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-sm text-ivory font-medium mb-6 min-h-[3rem]">
                  {product.name}
                </h3>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => onAddProductToQuote(product)}
                    className="inline-block border border-ivory text-ivory py-2 px-6 text-xs font-bold uppercase tracking-wide hover:bg-ivory hover:text-charcoal transition-all"
                  >
                    Add to Quote
                  </button>
                  <button
                    onClick={() => onConfigureProduct(product)}
                    className="inline-block text-gray-400 py-2 px-6 text-xs font-bold uppercase tracking-wide hover:text-ivory"
                  >
                    Configure
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
