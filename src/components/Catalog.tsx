/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Heart, Info, SlidersHorizontal, Eye, ShoppingBag, X, Calendar, Hammer, Scale, Move } from 'lucide-react';
import { Product, QuoteItem } from '../types';
import { INITIAL_PRODUCTS, WOOD_PROPERTIES, getProductAttributes } from '../data';

const getOptionHoverClass = (opt: string) => {
  const norm = opt.trim().toLowerCase();
  if (norm === 'all') return 'hover:bg-orange-600 hover:text-white';
  if (norm === 'caramel brown') return 'hover:bg-blue-600 hover:text-white';
  const colors = [
    'hover:bg-emerald-600 hover:text-white',
    'hover:bg-purple-600 hover:text-white',
    'hover:bg-rose-600 hover:text-white',
    'hover:bg-indigo-600 hover:text-white',
    'hover:bg-teal-600 hover:text-white',
    'hover:bg-amber-500 hover:text-black',
    'hover:bg-pink-600 hover:text-white',
    'hover:bg-violet-600 hover:text-white',
    'hover:bg-sky-600 hover:text-white',
    'hover:bg-red-600 hover:text-white',
    'hover:bg-cyan-600 hover:text-white',
    'hover:bg-lime-600 hover:text-white',
    'hover:bg-fuchsia-600 hover:text-white',
  ];
  let hash = 0;
  for (let i = 0; i < norm.length; i++) {
    hash = norm.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

interface CatalogProps {
  selectedCategory: string;
  onSetCategory: (cat: string) => void;
  onAddProductToQuote: (product: Product) => void;
  onConfigureProduct: (product: Product) => void;
  cart: QuoteItem[];
}

export const getCategoryLabel = (cat: string) => {
  switch (cat) {
    case 'all': return 'All Portfolio';
    case 'living-room': return 'Lounge';
    case 'dining': return 'Dining';
    case 'bedroom': return 'Bedroom';
    case 'outdoor': return 'Outdoor';
    case 'sets': return 'Sets';
    default: return cat.replace('-', ' ');
  }
};

export default function Catalog({
  selectedCategory,
  onSetCategory,
  onAddProductToQuote,
  onConfigureProduct,
  cart
}: CatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWood, setSelectedWood] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(250000);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const [selectedColor, setSelectedColor] = useState<string>('All');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('All');
  const [selectedPolish, setSelectedPolish] = useState<string>('All');
  const [selectedStyle, setSelectedStyle] = useState<string>('All');
  const [selectedPieces, setSelectedPieces] = useState<string>('All');

  const [sortBy, setSortBy] = useState<string>('Sort by popularity');
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Toggle favorite helper
  const toggleFavorite = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  // Check if product is in cart
  const isProductInCart = (productId: string) => {
    return cart.some(item => item.product?.id === productId && !item.customConfig);
  };

  // Filter logic
  const filteredProducts = useMemo(() => {
    let result = INITIAL_PRODUCTS.filter(prod => {
      const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
      const matchesWood = selectedWood === 'all' || prod.woodType === selectedWood;
      const matchesPrice = prod.price <= maxPrice;
      const matchesSearch =
        prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prod.woodType.toLowerCase().includes(searchTerm.toLowerCase());

      if (!(matchesCategory && matchesWood && matchesPrice && matchesSearch)) {
        return false;
      }

      // Advanced filters
      const attrs = getProductAttributes(prod);
      const matchesColor = selectedColor === 'All' || attrs.color === selectedColor;
      const matchesMaterial = selectedMaterial === 'All' || attrs.material === selectedMaterial;
      const matchesPolish = selectedPolish === 'All' || attrs.polish === selectedPolish;
      const matchesStyle = selectedStyle === 'All' || attrs.style === selectedStyle;
      const matchesPieces = selectedPieces === 'All' || attrs.pieces === selectedPieces;

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
  }, [
    selectedCategory,
    selectedWood,
    maxPrice,
    searchTerm,
    selectedColor,
    selectedMaterial,
    selectedPolish,
    selectedStyle,
    selectedPieces,
    sortBy
  ]);

  // Wood info sidebar trigger/toggle inside catalog filters
  const [showWoodInfoTab, setShowWoodInfoTab] = useState<string | null>(null);

  const formatPrice = (p: number) => {
    return `Rs. ${p.toLocaleString()}`;
  };

  return (
    <section id="catalog" className="py-24 border-b border-line relative bg-grain">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sage block mb-3">Woodwork Catalog</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory">
              Handcrafted solid timber portfolio
            </h2>
          </div>
          <p className="text-ivory-dim text-sm sm:text-base max-w-sm font-sans leading-relaxed">
            Our seasonal runs of solid furniture. Add pieces straight to your quote request, or customize sizing to suit your layout.
          </p>
        </div>

        {/* Filter Toolbar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-40 mb-10 p-[1px] rounded-2xl overflow-visible bg-gradient-to-br from-blue-500 via-blue-800 to-[#060B18]/20"
        >
          <div className="bg-gradient-to-br from-blue-500/15 via-[#2563EB]/15 to-[#060B18] p-6 rounded-[calc(1rem-1px)] border border-blue-500/10 shadow-xl backdrop-blur-md">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-line/50 pb-4 mb-6">
              {['all', 'bedroom', 'dining', 'living-room', 'outdoor', 'sets'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => onSetCategory(cat)}
                  className={`px-4 py-2 text-xs font-sans uppercase tracking-widest border transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-oak text-charcoal border-oak font-semibold'
                      : 'text-ivory-dim border-line hover:text-ivory hover:border-ivory-dim'
                  }`}
                >
                  {getCategoryLabel(cat)}
                </button>
              ))}
            </div>

            {/* Advanced Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
              {[
                { label: 'Color', value: selectedColor, onChange: setSelectedColor, options: ['All', 'Caramel Brown', 'Careem', 'Chocolate Brown', 'Dark Brown', 'Golden', 'Golden Brown', 'Leather Brown', 'Off White', 'Polish Brown', 'Royal Blue', 'Royal Red', 'Sea Green', 'Silver', 'Silver Brown', 'Skin', 'Skin Brown', 'Walnut Brown', 'Brown'] },
                { label: 'Material', value: selectedMaterial, onChange: setSelectedMaterial, options: ['All', 'Acacia/ Kikar Wood', 'MDF Malaysia', 'Oak Wood', 'Shisham/ Sissoo Wood', 'Solid Wood', 'Walnut Wood'] },
                { label: 'Polish', value: selectedPolish, onChange: setSelectedPolish, options: ['All', 'All Over Upholstery', 'Classic Polish', 'Deco', 'Glossy Polish', 'High Gloss', 'Jacquard Upholstery', 'Leather Upholstery', 'Mate Polish', 'N/A', 'Tone Polish', 'Velvet Upholstery'] },
                { label: 'Style', value: selectedStyle, onChange: setSelectedStyle, options: ['All', 'Carved Back', 'Chinioti', 'Circle', 'Crafted', 'Crown', 'Crown Back', 'Deewan', 'Foam Quilt', 'Gourmet', 'Inlay', 'L Shape', 'Ladder', 'Milia', 'Moora', 'Puffy Settee', 'Round Seat', 'Royal Crown', 'Self Crafted', 'Ship Deck', 'Stick', 'Stick Frame', 'Velvet Upholstery'] },
                { label: 'Pieces', value: selectedPieces, onChange: setSelectedPieces, options: ['All', '1 Piece', '2 Piece', '3 Piece', '4 Piece', '5 Piece', 'King'] }
              ].map((filter, index) => {
                const isOpen = openDropdown === filter.label;
                return (
                  <motion.div 
                    key={filter.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    <label className="block text-[10px] uppercase tracking-widest text-ivory mb-2 font-mono">
                      {filter.label}
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setOpenDropdown(isOpen ? null : filter.label);
                        setIsSortOpen(false);
                      }}
                      className="w-full bg-[#060B18] text-ivory font-semibold text-[13px] py-3 px-3.5 rounded-lg flex items-center justify-between cursor-pointer border border-oak/30 transition-all hover:border-oak/80 hover:bg-[#0e1626] active:scale-95 shadow-md text-left"
                    >
                      <span className="truncate">{filter.value}</span>
                      <span className="text-[10px] font-semibold text-oak flex-shrink-0 ml-1.5">
                        {isOpen ? '▲' : '▼'}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <>
                          <div 
                            className="fixed inset-0 z-10" 
                            onClick={() => setOpenDropdown(null)} 
                          />
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 mt-2 bg-[#0e1626] text-ivory rounded-lg shadow-2xl border border-oak/40 z-50 py-1 max-h-60 overflow-y-auto custom-scrollbar w-max min-w-full"
                          >
                            {filter.options.map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => {
                                  filter.onChange(opt);
                                  setOpenDropdown(null);
                                }}
                                className={`w-full text-left px-4 py-2.5 text-[13px] font-medium font-sans transition-colors duration-150 whitespace-nowrap ${getOptionHoverClass(opt)} ${
                                  filter.value === opt ? 'bg-oak/20 text-oak font-bold' : 'text-ivory-dim'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              {/* Sort Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="relative z-30"
              >
                <label className="block text-[10px] uppercase tracking-widest text-ivory mb-2 font-mono">
                  Sort By
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setIsSortOpen(!isSortOpen);
                    setOpenDropdown(null);
                  }}
                  className="w-full bg-[#060B18] text-ivory font-semibold text-[13px] py-3 px-3.5 rounded-lg flex items-center justify-between cursor-pointer border border-oak/30 transition-all hover:border-oak/80 hover:bg-[#0e1626] active:scale-95 shadow-md"
                >
                  <span className="truncate">{sortBy}</span>
                  <span className="text-[10px] font-semibold text-oak flex-shrink-0 ml-1.5">
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
                        className="absolute right-0 w-max min-w-full md:left-0 md:right-auto mt-2 bg-[#0e1626] text-ivory rounded-lg shadow-2xl border border-oak/40 z-50 py-1 overflow-hidden"
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
                            className={`w-full text-left px-4 py-3 text-[13px] font-medium font-sans hover:bg-oak hover:text-charcoal transition-colors duration-150 whitespace-nowrap ${
                              sortBy === option ? 'bg-oak/20 text-oak font-bold' : 'text-ivory-dim'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Wood Properties Overlay Banner */}
        <AnimatePresence>
          {showWoodInfoTab && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-walnut/40 border border-oak/30 p-6 mb-8 relative"
            >
              <button
                onClick={() => setShowWoodInfoTab(null)}
                className="absolute top-4 right-4 text-ivory-dim hover:text-oak"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-3">
                  <span className="font-mono text-[10px] uppercase text-oak tracking-widest">TIMBER FOCUS</span>
                  <h4 className="font-display text-xl font-semibold text-ivory mt-1">
                    {WOOD_PROPERTIES[showWoodInfoTab as 'Sheesham' | 'Walnut' | 'Oak'].name}
                  </h4>
                  <em className="text-xs text-sage block font-mono mt-0.5">
                    {WOOD_PROPERTIES[showWoodInfoTab as 'Sheesham' | 'Walnut' | 'Oak'].latinName}
                  </em>
                </div>
                <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                  <div>
                    <span className="text-sage font-mono uppercase text-[9px] tracking-wider block mb-1">Density & Hardness</span>
                    <p className="text-ivory-dim">{WOOD_PROPERTIES[showWoodInfoTab as 'Sheesham' | 'Walnut' | 'Oak'].hardness}</p>
                  </div>
                  <div>
                    <span className="text-sage font-mono uppercase text-[9px] tracking-wider block mb-1">Grain & Texture</span>
                    <p className="text-ivory-dim">{WOOD_PROPERTIES[showWoodInfoTab as 'Sheesham' | 'Walnut' | 'Oak'].grainPattern}</p>
                  </div>
                  <div>
                    <span className="text-sage font-mono uppercase text-[9px] tracking-wider block mb-1">Color Palette</span>
                    <p className="text-ivory-dim">{WOOD_PROPERTIES[showWoodInfoTab as 'Sheesham' | 'Walnut' | 'Oak'].colorRange}</p>
                  </div>
                  <div>
                    <span className="text-sage font-mono uppercase text-[9px] tracking-wider block mb-1">Moisture & Climate Stability</span>
                    <p className="text-ivory-dim">{WOOD_PROPERTIES[showWoodInfoTab as 'Sheesham' | 'Walnut' | 'Oak'].humidityResponse}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="border border-dashed border-line p-16 text-center text-ivory-dim">
            <SlidersHorizontal className="w-8 h-8 mx-auto text-oak/40 mb-4" />
            <p className="font-display text-lg font-medium">No matching designs found</p>
            <p className="text-xs font-sans mt-1">Try resetting search filters or relaxing your budget.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedWood('all');
                setMaxPrice(250000);
              }}
              className="mt-4 px-4 py-2 border border-line text-xs uppercase tracking-widest hover:border-oak hover:text-oak transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod, idx) => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative"
              >
                {/* Product Image Frame */}
                <div className="aspect-[4/5] overflow-hidden bg-walnut/10 border border-line relative mb-4">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover saturate-90 group-hover:scale-120 group-hover:saturate-100 transition-all duration-700 ease-out"
                  />

                  {/* Badges */}
                  {prod.badge && (
                    <span className="absolute top-4 left-4 bg-sage text-ivory font-mono text-[9px] tracking-widest uppercase py-1 px-2.5 z-10 shadow-md">
                      {prod.badge}
                    </span>
                  )}

                  {/* Actions overlay panel */}
                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="p-3 bg-charcoal/90 border border-line hover:border-oak text-ivory hover:text-oak rounded-full transition-colors shadow-lg"
                      title="Inspect timber joinery & detail"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onAddProductToQuote(prod)}
                      className="p-3 bg-charcoal/90 border border-line hover:border-oak text-ivory hover:text-oak rounded-full transition-colors shadow-lg"
                      title="Add direct to Quote Request"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Save to favorite / Heart button */}
                  <button
                    onClick={(e) => toggleFavorite(prod.id, e)}
                    className="absolute top-4 right-4 w-9 h-9 bg-charcoal/70 backdrop-blur-xs border border-line/40 flex items-center justify-center rounded-full text-ivory hover:text-oak transition-all duration-200 z-10"
                  >
                    <Heart
                      className={`w-4 h-4 ${favorites.includes(prod.id) ? 'fill-oak text-oak' : 'text-ivory-dim'}`}
                    />
                  </button>
                </div>

                {/* Info block */}
                <div className="flex justify-between items-start gap-4 px-1">
                  <div>
                    <h4
                      onClick={() => setSelectedProduct(prod)}
                      className="font-display text-lg font-semibold hover:text-oak transition-colors cursor-pointer text-ivory"
                    >
                      {prod.name}
                    </h4>
                    <span className="text-xs text-ivory-dim/70 flex items-center gap-1.5 mt-1 font-sans">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage" />
                      {prod.woodType} heartwood · {getCategoryLabel(prod.category)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-sm font-semibold text-oak block">{formatPrice(prod.price)}</span>
                    {prod.originalPrice && (
                      <span className="font-mono text-[10px] text-ivory-dim/50 line-through block mt-0.5">
                        {formatPrice(prod.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Product Inspection Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
              {/* Scrim */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/85 backdrop-blur-xs"
                onClick={() => setSelectedProduct(null)}
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="box-gradient w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl custom-scrollbar z-10 rounded-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 p-2 rounded-full border border-line text-ivory-dim hover:text-oak hover:border-oak transition-all duration-200 z-20 bg-charcoal"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left Column: Image with inlay border */}
                  <div className="aspect-[4/5] md:aspect-auto md:h-full relative overflow-hidden bg-walnut/25">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover saturate-90"
                    />
                    <div className="absolute inset-4 border border-oak/20 pointer-events-none" />
                  </div>

                  {/* Right Column: Spec Sheet */}
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      {/* Category Label */}
                      <span className="font-mono text-[10px] uppercase text-sage tracking-widest block mb-2">
                        {getCategoryLabel(selectedProduct.category)} collection
                      </span>

                      {/* Name */}
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ivory mb-2">
                        {selectedProduct.name}
                      </h3>

                      {/* Pricing */}
                      <div className="flex items-baseline gap-3 mb-6 border-b border-line pb-4">
                        <span className="font-mono text-xl font-bold text-oak">
                          {formatPrice(selectedProduct.price)}
                        </span>
                        {selectedProduct.originalPrice && (
                          <span className="font-mono text-sm text-ivory-dim/50 line-through">
                            {formatPrice(selectedProduct.originalPrice)}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-ivory-dim text-sm font-sans leading-relaxed mb-6">
                        {selectedProduct.description}
                      </p>

                      {/* Technical Specs Checklist */}
                      <div className="space-y-4 mb-8">
                        <h4 className="font-mono text-[10px] uppercase text-sage tracking-widest">
                          Workshop Specifications
                        </h4>
                        
                        <div className="grid grid-cols-2 gap-y-3 gap-x-4 border-t border-line/50 pt-3 text-xs">
                          <div className="flex gap-2 items-start">
                            <Move className="w-3.5 h-3.5 text-oak shrink-0 mt-0.5" />
                            <div>
                              <span className="text-ivory-dim/60 block">Dimensions</span>
                              <span className="text-ivory font-medium">{selectedProduct.dimensions}</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2 items-start">
                            <Scale className="w-3.5 h-3.5 text-oak shrink-0 mt-0.5" />
                            <div>
                              <span className="text-ivory-dim/60 block">Average Weight</span>
                              <span className="text-ivory font-medium">{selectedProduct.weight}</span>
                            </div>
                          </div>

                          <div className="flex gap-2 items-start">
                            <Calendar className="w-3.5 h-3.5 text-oak shrink-0 mt-0.5" />
                            <div>
                              <span className="text-ivory-dim/60 block">Est. Build Lead-Time</span>
                              <span className="text-ivory font-medium">{selectedProduct.buildTime}</span>
                            </div>
                          </div>

                          <div className="flex gap-2 items-start">
                            <Hammer className="w-3.5 h-3.5 text-oak shrink-0 mt-0.5" />
                            <div>
                              <span className="text-ivory-dim/60 block">Timber Type</span>
                              <span className="text-ivory font-medium">{selectedProduct.materialDetails}</span>
                            </div>
                          </div>
                        </div>

                        {/* Joinery Spotlight */}
                        <div className="box-gradient p-4 text-xs font-sans rounded-xl">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-oak block mb-1">
                            Ustad's Joinery Signature
                          </span>
                          <p className="text-ivory-dim/95 leading-relaxed italic">
                            "{selectedProduct.joinery}"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-line/40">
                      <button
                        onClick={() => {
                          onAddProductToQuote(selectedProduct);
                          setSelectedProduct(null);
                        }}
                        className="flex-1 py-3 bg-oak hover:bg-ivory text-charcoal text-xs uppercase tracking-widest font-semibold transition-all duration-300 text-center flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        {isProductInCart(selectedProduct.id) ? 'Add Another to Quote' : 'Add to Quote Basket'}
                      </button>
                      <button
                        onClick={() => {
                          onConfigureProduct(selectedProduct);
                          setSelectedProduct(null);
                        }}
                        className="flex-1 py-3 border border-line hover:border-oak text-ivory hover:text-oak text-xs uppercase tracking-widest font-semibold transition-all duration-300 text-center flex items-center justify-center gap-2"
                      >
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        Configure Sizing
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
