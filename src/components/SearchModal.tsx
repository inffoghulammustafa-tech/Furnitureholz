import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ShoppingBag, Eye, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { Product } from '../types';
import { INITIAL_PRODUCTS } from '../data';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProductToQuote: (product: Product) => void;
  onOpenCategory: (cat: string, subCat?: string | null) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  onAddProductToQuote,
  onOpenCategory
}: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
      setSelectedProduct(null);
    }
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedProduct) {
          setSelectedProduct(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProduct, onClose]);

  // Quick suggestions for easy exploration
  const popularKeywords = ['Bed', 'Sofa', 'Dining', 'Chair', 'Table', 'Console', 'Shisham', 'Walnut', 'Oak'];

  // Search filter logic
  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean);
    
    return INITIAL_PRODUCTS.filter((prod) => {
      const name = prod.name.toLowerCase();
      const desc = prod.description.toLowerCase();
      const wood = prod.woodType.toLowerCase();
      const cat = prod.category.toLowerCase();
      
      // All search terms must be found in at least one field of the product
      return searchTerms.every(
        (term) =>
          name.includes(term) ||
          desc.includes(term) ||
          wood.includes(term) ||
          cat.includes(term)
      );
    });
  }, [query]);

  const formatPrice = (price: number) => {
    return `Rs. ${price.toLocaleString()}`;
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleNavigateToProduct = (product: Product) => {
    onClose();
    // Use the category of the product to navigate
    onOpenCategory(product.category, null);
    
    // We can dispatch an event or rely on normal state update
    setTimeout(() => {
      // Find the element and scroll
      const element = document.getElementById('catalog');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="search-modal-container" className="fixed inset-0 z-[160] overflow-hidden flex items-start justify-center pt-[5vh] pb-10 px-4">
          
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0e1118]/90 backdrop-blur-md cursor-zoom-out"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-4xl bg-[#141822] border border-[#2b3346] rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden z-10"
          >
            {/* Header / Search Input Area */}
            <div className="p-6 border-b border-[#2b3346] flex items-center gap-4 relative">
              <Search className="w-5 h-5 text-oak shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search premium wood furniture... (e.g. Bed, Sofa, Shisham)"
                className="w-full bg-transparent text-white border-0 outline-none focus:ring-0 text-base sm:text-lg placeholder:text-gray-500 font-sans"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-full hover:bg-[#2b3346] text-gray-400 hover:text-white transition-all cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#2b3346] text-gray-400 hover:text-white transition-all border border-[#2b3346] bg-[#141822] cursor-pointer shrink-0 ml-1"
                aria-label="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-stone-800">
              <AnimatePresence mode="wait">
                {selectedProduct ? (
                  /* Expanded Product Detail view inside Search Modal */
                  <motion.div
                    key="product-detail"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    {/* Left Column: Image with back button overlay */}
                    <div className="relative">
                      <button
                        onClick={() => setSelectedProduct(null)}
                        className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-[#0e1118]/80 hover:bg-black text-white text-xs font-mono tracking-widest uppercase border border-[#2b3346] rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <ArrowRight className="w-3.5 h-3.5 rotate-180" /> Back to Results
                      </button>
                      <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[#2b3346] bg-[#0e1118]">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {selectedProduct.badge && (
                        <span className="absolute top-4 right-4 bg-oak text-charcoal font-sans text-[10px] font-extrabold uppercase px-3 py-1 tracking-widest rounded-full shadow-lg">
                          {selectedProduct.badge}
                        </span>
                      )}
                    </div>

                    {/* Right Column: Specs & Actions */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] uppercase tracking-widest text-sage font-mono">
                            {selectedProduct.category}
                          </span>
                          <span className="text-gray-600">•</span>
                          <span className="text-[10px] uppercase tracking-widest text-oak font-mono">
                            {selectedProduct.woodType} wood
                          </span>
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-white mb-3">
                          {selectedProduct.name}
                        </h3>
                        <p className="text-2xl font-mono text-oak font-semibold mb-4">
                          {formatPrice(selectedProduct.price)}
                        </p>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                          {selectedProduct.description}
                        </p>

                        {/* Specs list */}
                        <div className="grid grid-cols-2 gap-4 border-t border-[#2b3346]/50 pt-4 mb-6">
                          <div>
                            <span className="text-[10px] uppercase text-gray-500 font-mono block">Dimensions</span>
                            <span className="text-xs text-white font-medium">{selectedProduct.dimensions || 'Customizable'}</span>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase text-gray-500 font-mono block">Joinery</span>
                            <span className="text-xs text-white font-medium">{selectedProduct.joinery || 'Handcrafted'}</span>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase text-gray-500 font-mono block">Weight</span>
                            <span className="text-xs text-white font-medium">{selectedProduct.weight || 'Solid Wood'}</span>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase text-gray-500 font-mono block">Build Time</span>
                            <span className="text-xs text-white font-medium">{selectedProduct.buildTime || '4-6 Weeks'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#2b3346]/40">
                        <button
                          onClick={() => {
                            onAddProductToQuote(selectedProduct);
                          }}
                          className="flex-1 py-3 bg-oak hover:bg-[#b07f3c] text-charcoal font-sans text-xs uppercase tracking-widest font-extrabold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer rounded-xl"
                        >
                          <ShoppingBag className="w-4 h-4" /> Add to Quote
                        </button>
                        <button
                          onClick={() => handleNavigateToProduct(selectedProduct)}
                          className="flex-1 py-3 border border-[#2b3346] hover:border-oak hover:text-oak text-white bg-transparent font-sans text-xs uppercase tracking-widest font-extrabold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer rounded-xl"
                        >
                          <Eye className="w-4 h-4" /> View full catalog
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : !query.trim() ? (
                  /* Initial Welcome / Suggestion Screen */
                  <motion.div
                    key="suggestions"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#2b3346]/40 text-oak flex items-center justify-center mb-4 border border-[#2b3346]/50">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h4 className="font-display text-base font-medium text-white mb-2">
                      Search Wood Artisan Portfolio
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm max-w-md mb-6 font-sans">
                      Type any keyword to search across bed sets, dining tables, lounge sofas, and customized solid timber products.
                    </p>

                    {/* Quick Search Tag Suggestions */}
                    <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl">
                      {popularKeywords.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="px-3 py-1.5 bg-[#1b212f] hover:bg-oak hover:text-charcoal border border-[#2b3346] text-gray-300 text-xs font-mono rounded-lg transition-all cursor-pointer"
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : filteredProducts.length > 0 ? (
                  /* Search Results Grid */
                  <motion.div
                    key="results-grid"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between text-xs text-gray-500 font-mono pb-2 border-b border-[#2b3346]/40">
                      <span>Found {filteredProducts.length} matching products</span>
                      <span>Type more to filter results</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                      {filteredProducts.map((prod) => (
                        <motion.div
                          key={prod.id}
                          layout
                          onClick={() => handleSelectProduct(prod)}
                          className="group bg-[#11151e] border border-[#232a39] hover:border-oak/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-lg flex flex-col"
                        >
                          {/* Card Thumbnail */}
                          <div className="relative aspect-[16/11] bg-[#0e1118] overflow-hidden">
                            <img
                              src={prod.image}
                              alt={prod.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                            />
                            {prod.badge && (
                              <span className="absolute top-3 right-3 bg-oak/90 text-charcoal font-sans text-[8px] font-black uppercase px-2 py-0.5 tracking-wider rounded-full shadow-md">
                                {prod.badge}
                              </span>
                            )}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-white text-xs font-mono bg-charcoal/90 border border-oak/30 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                                <Eye className="w-3.5 h-3.5" /> View Details
                              </span>
                            </div>
                          </div>

                          {/* Card Text & Metadata */}
                          <div className="p-4 flex flex-col justify-between flex-1">
                            <div>
                              <div className="flex items-center gap-1.5 mb-1.5">
                                <span className="text-[9px] uppercase tracking-wider text-sage font-mono">
                                  {prod.category}
                                </span>
                                <span className="text-gray-700">•</span>
                                <span className="text-[9px] uppercase tracking-wider text-oak font-mono">
                                  {prod.woodType}
                                </span>
                              </div>
                              <h5 className="font-display text-sm font-medium text-white line-clamp-1 group-hover:text-oak transition-colors">
                                {prod.name}
                              </h5>
                              <p className="text-xs text-gray-500 line-clamp-2 mt-1 font-sans">
                                {prod.description}
                              </p>
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#232a39]/50">
                              <span className="text-sm font-mono text-oak font-semibold">
                                {formatPrice(prod.price)}
                              </span>
                              <span className="text-[10px] text-gray-400 font-mono flex items-center gap-1 group-hover:text-white transition-colors">
                                Specs <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  /* Empty State */
                  <motion.div
                    key="empty-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#3b1c1c]/40 text-red-500 flex items-center justify-center mb-4 border border-red-500/20">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <h4 className="font-display text-base font-medium text-white mb-2">
                      No Products Found
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm max-w-xs mb-6 font-sans">
                      We couldn't find any wood art matching "{query}". Try checking your spelling or search for broader keywords like 'chair' or 'bed'.
                    </p>
                    <button
                      onClick={() => setQuery('')}
                      className="px-4 py-2 bg-[#2b3346]/40 hover:bg-[#2b3346] text-white text-xs font-mono border border-[#2b3346] rounded-xl transition-all cursor-pointer"
                    >
                      Reset Search
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
