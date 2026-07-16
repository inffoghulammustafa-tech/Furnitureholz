import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X } from 'lucide-react';
import { Product } from '../types';
import { INITIAL_PRODUCTS, getProductAttributes } from '../data';
import { getCategoryLabel } from './Catalog';
import WoodFiberDoors from './WoodFiberDoors';
import WallArtTvUnits from './WallArtTvUnits';
import Curtains from './Curtains';
import KitchenCabinets from './KitchenCabinets';

interface BedroomProductDetail {
  id: string;
  tmr: string;
  sku: string;
  badge?: string;
  status: 'Sold Out' | 'Available';
  bulletPoints: string[];
  categories: string;
  color: string;
  material: string;
  polish: string;
  style: string;
  pieces: string;
}

const BEDROOM_DETAILS: Record<string, BedroomProductDetail> = {
  'carving-high-back-set': {
    id: 'carving-high-back-set',
    tmr: '614252',
    sku: 'FH-10182',
    badge: 'SOLD OUT',
    status: 'Sold Out',
    bulletPoints: [
      'Made of Solid Shisham Wood',
      'Molty Foam Seating & Stuffing',
      'Velvet Quilted Upholstery/ Poshish',
      'Suitable for Bedroom, Lounge and Outdoor',
      'Customer can Customize Fabric',
      'Design May Vary Slightly from Given Picture',
      'Prices are Negotiable'
    ],
    categories: 'Chair & Tables, Sofa, Chair & Deewan',
    color: 'Teak Brown, Ivory Cushion',
    material: 'Solid Shisham Wood',
    polish: 'High Gloss Classic Lacquer',
    style: 'Chinioti Handcarved',
    pieces: '3 Pieces (2 Chairs + 1 Table)'
  },
  'chase-ship-chair': {
    id: 'chase-ship-chair',
    tmr: '614253',
    sku: 'FH-10183',
    status: 'Available',
    bulletPoints: [
      'Made of Solid Shisham Wood',
      'Molty Foam Seating & Stuffing',
      'Velvet Quilted Upholstery/ Poshish',
      'Suitable for Bedroom, Lounge and Outdoor',
      'Customer can Customize Fabric',
      'Design May Vary Slightly from Given Picture',
      'Prices are Negotiable'
    ],
    categories: 'Chair & Tables, Sofa, Chair & Deewan',
    color: 'Dark Walnut, Golden Brocade',
    material: 'Solid Shisham Wood',
    polish: 'Classic Wood Polish',
    style: 'Classic Ship Curve',
    pieces: '1 Piece'
  },
  'bergere-inlay-set': {
    id: 'bergere-inlay-set',
    tmr: '614254',
    sku: 'FH-10184',
    status: 'Available',
    bulletPoints: [
      'Made of Solid Shisham Wood',
      'Molty Foam Seating & Stuffing',
      'Velvet Quilted Upholstery/ Poshish',
      'Suitable for Bedroom, Lounge and Outdoor',
      'Customer can Customize Fabric',
      'Design May Vary Slightly from Given Picture',
      'Prices are Negotiable'
    ],
    categories: 'Chair & Tables, Sofa, Chair & Deewan',
    color: 'Off-White Deco, Royal Blue Cushion',
    material: 'Solid Shisham Wood',
    polish: 'Silver/Ivory Wood Inlay',
    style: 'French Bergere',
    pieces: '3 Pieces (2 Chairs + 1 Table)'
  },
  'pigeon-foot-console': {
    id: 'pigeon-foot-console',
    tmr: '614255',
    sku: 'FH-10185',
    status: 'Available',
    bulletPoints: [
      'Made of Solid Shisham Wood',
      'Premium High-Gloss Finish',
      'Exquisite Baroque Pigeon Foot leg carve',
      'Suitable for Bedroom, Lounge and Outdoor',
      'Customer can Customize Dimensions',
      'Design May Vary Slightly from Given Picture',
      'Prices are Negotiable'
    ],
    categories: 'Console & Tables, Lobby Luxury',
    color: 'Glossy Honey Brown',
    material: 'Solid Shisham Wood',
    polish: 'Glossy Melamine Polish',
    style: 'Baroque Handcarved',
    pieces: '1 Piece'
  },
  'prince-red-velvet-chair': {
    id: 'prince-red-velvet-chair',
    tmr: '614256',
    sku: 'FH-10186',
    status: 'Available',
    bulletPoints: [
      'Made of Solid Shisham Wood',
      'Molty Foam Seating & Stuffing',
      'Velvet Quilted Upholstery/ Poshish',
      'Suitable for Bedroom, Lounge and Outdoor',
      'Customer can Customize Fabric',
      'Design May Vary Slightly from Given Picture',
      'Prices are Negotiable'
    ],
    categories: 'Chair & Tables, Sofa, Chair & Deewan',
    color: 'Teak Polish, Crimson Red Cushion',
    material: 'Solid Shisham Wood',
    polish: 'Crimson Red Velvet',
    style: 'Prince Wingback',
    pieces: '1 Piece'
  },
  'carved-couch-settee': {
    id: 'carved-couch-settee',
    tmr: '614257',
    sku: 'FH-10187',
    status: 'Available',
    bulletPoints: [
      'Made of Solid Shisham Wood',
      'Molty Foam Seating & Stuffing',
      'Velvet Quilted Upholstery/ Poshish',
      'Suitable for Bedroom, Lounge and Outdoor',
      'Customer can Customize Fabric',
      'Design May Vary Slightly from Given Picture',
      'Prices are Negotiable'
    ],
    categories: 'Chair & Tables, Sofa, Chair & Deewan',
    color: 'Teak Brown with Gold Leaf Accents',
    material: 'Solid Shisham Wood',
    polish: 'Gold-Leaf Highlighted Polish',
    style: 'Baroque Settee Deewan',
    pieces: '1 Piece'
  }
};

const getBedroomDetail = (product: Product): BedroomProductDetail => {
  const existing = BEDROOM_DETAILS[product.id];
  if (existing) return existing;

  const attrs = getProductAttributes(product);
  const isSofa = product.name.toLowerCase().includes('sofa') || product.name.toLowerCase().includes('settee');
  const categories = isSofa ? 'Sofa, Chair & Deewan, Lobby Luxury' : 'Beds & Wardrobes, Master Bedroom Suite';

  const numIndex = product.id.startsWith('bedroom-p2-')
    ? parseInt(product.id.replace('bedroom-p2-', ''), 10)
    : product.id.startsWith('bedroom-p3-')
      ? parseInt(product.id.replace('bedroom-p3-', ''), 10) + 15
      : 1;

  // Generate fallback detail dynamically based on attributes
  return {
    id: product.id,
    tmr: String(614250 + numIndex),
    sku: `FH-${10180 + numIndex}`,
    status: product.badge?.toLowerCase().includes('sold') ? 'Sold Out' : 'Available',
    bulletPoints: [
      `Made of ${attrs.material || `Solid ${product.woodType || 'Shisham'} Wood`}`,
      'Molty Foam Seating & Stuffing',
      attrs.polish.toLowerCase().includes('velvet') || attrs.polish.toLowerCase().includes('poshish')
        ? 'Velvet Quilted Upholstery/ Poshish'
        : 'Premium Handcrafted Polishing & Finish',
      'Suitable for Bedroom, Lounge and Living Rooms',
      'Customer can Customize Dimensions and Fabric',
      'Design May Vary Slightly from Given Picture',
      'Prices are Negotiable'
    ],
    categories: categories,
    color: attrs.color,
    material: attrs.material,
    polish: attrs.polish,
    style: attrs.style,
    pieces: attrs.pieces
  };
};

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

const SUBCATEGORIES_MAP: Record<string, string[]> = {
  bedroom: ['All', 'Bed', 'Bedroom Chairs', 'Dressing', 'Almirah', 'Sofa & Deewan'],
  dining: ['All', 'Dining Table Set', 'Sofa & Chairs', 'Almirah', 'Trolley'],
  'living-room': ['All', 'Console, Tables & Chester', 'Sofa, Chair & Deewan', 'Swing & Wooden Jhula'],
  outdoor: ['All', 'Chair & Tables', 'Picnic Set', 'Ring Swing & Wooden Jhula', 'Sofa, Chair & Deewan', 'Net Set'],
  sets: ['All', 'Bridal Sets', 'Sofa Set', 'Table & Chair Sets', 'Net Set'],
  interior: ['All', 'Wood & Fiber Doors', 'Wall Art & TV Units', 'Curtains', 'Kitchen Cabinets & Wardrobes']
};

export function getProductSubcategory(product: { name: string; description: string; category: string }): string {
  const name = product.name.toLowerCase();
  const desc = product.description.toLowerCase();
  
  if (product.category === 'bedroom') {
    // Explicit override for the 6 Sofa & Deewan products
    if (
      name.includes('moora chair') || 
      name.includes('chase ship') || 
      name.includes('couch settee') || 
      name.includes('circle platted') || 
      name.includes('3 seater deewan') || 
      name.includes('l shape corner leather sofa') ||
      name.includes('acacia made 7 seater')
    ) {
      return 'Sofa & Deewan';
    }

    if (name.includes('chair') || name.includes('puffy') || name.includes('stool') || desc.includes('chair')) {
      return 'Bedroom Chairs';
    }
    if (name.includes('almirah') || name.includes('wardrobe') || name.includes('cupboard')) {
      return 'Almirah';
    }
    if (name.includes('settee') || name.includes('deewan') || name.includes('sofa') || name.includes('setty') || name.includes('couch')) {
      return 'Sofa & Deewan';
    }
    if (name.includes('dressing') || name.includes('dresser') || name.includes('console') || name.includes('vanity') || name.includes('makeup') || name.includes('mirror')) {
      if (name.includes('bed') || name.includes('bedroom') || name.includes('bridal') || name.includes('suite')) {
        return 'Bed';
      }
      return 'Dressing';
    }
    return 'Bed';
  }

  if (product.category === 'dining') {
    if (name.includes('table')) {
      return 'Dining Table Set';
    }
    if (name.includes('chair') || name.includes('sofa') || name.includes('moora') || name.includes('couch') || name.includes('ottoman') || name.includes('puffy') || name.includes('deewan') || name.includes('settee')) {
      return 'Sofa & Chairs';
    }
    if (name.includes('set')) {
      return 'Dining Table Set';
    }
    if (name.includes('almirah') || name.includes('cabinet') || name.includes('console')) {
      return 'Almirah';
    }
    if (name.includes('trolley') || name.includes('cart')) {
      return 'Trolley';
    }
    return 'Dining Table Set';
  }

  if (product.category === 'living-room') {
    if (name.includes('swing') || name.includes('jhula')) {
      return 'Swing & Wooden Jhula';
    }
    if (name.includes('sofa') || name.includes('chair') || name.includes('deewan') || name.includes('couch') || name.includes('settee')) {
      return 'Sofa, Chair & Deewan';
    }
    if (name.includes('console') || name.includes('table') || name.includes('chester') || name.includes('stool') || name.includes('desk')) {
      return 'Console, Tables & Chester';
    }
    return 'Sofa, Chair & Deewan';
  }

  if (product.category === 'outdoor') {
    if (name.includes('net set')) {
      return 'Net Set';
    }
    if (name.includes('picnic') || name.includes('ladder sticks')) {
      return 'Picnic Set';
    }
    if (name.includes('swing') || name.includes('jhula') || name.includes('ring')) {
      return 'Ring Swing & Wooden Jhula';
    }
    if (name.includes('deewan') || name.includes('settee') || name.includes('chair') || name.includes('sofa') || name.includes('puffy') || name.includes('moora') || name.includes('couch')) {
      return 'Sofa, Chair & Deewan';
    }
    if (name.includes('table')) {
      return 'Chair & Tables';
    }
    return 'Chair & Tables';
  }

  if (product.category === 'sets') {
    if (name.includes('net set')) {
      return 'Net Set';
    }
    if (name.includes('bedroom') || name.includes('bridal') || name.includes('suite') || name.includes('bed')) {
      return 'Bridal Sets';
    }
    if (name.includes('sofa') || name.includes('lounge') || name.includes('moora') || name.includes('settee') || name.includes('deewan') || name.includes('puffy') || name.includes('ottoman')) {
      return 'Sofa Set';
    }
    if (name.includes('dining') || name.includes('patio') || name.includes('table & chair') || name.includes('chair set') || name.includes('dining table') || name.includes('table set') || name.includes('table') || name.includes('chair')) {
      return 'Table & Chair Sets';
    }
    return 'Table & Chair Sets';
  }

  return 'General';
}

interface CategoryPageProps {
  category: string;
  initialSubCategory?: string | null;
  onAddProductToQuote: (product: Product) => void;
  onConfigureProduct: (product: Product) => void;
}

export default function CategoryPage({ category, initialSubCategory, onAddProductToQuote, onConfigureProduct }: CategoryPageProps) {
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(initialSubCategory || null);

  useEffect(() => {
    if (selectedDetailProduct) {
      setActiveImage(selectedDetailProduct.image);
    } else {
      setActiveImage('');
    }
  }, [selectedDetailProduct]);

  const [searchParams, setSearchParams] = useState({
    color: 'All',
    material: 'All',
    polish: 'All',
    style: 'All',
    pieces: 'All',
  });

  const [sortBy, setSortBy] = useState<string>('Sort by popularity');
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Reset parameters, apply initial subcategory, and scroll to top when category changes
  useEffect(() => {
    setSelectedSubCategory(initialSubCategory || null);
    setCurrentPage(1);
    setSearchParams({
      color: 'All',
      material: 'All',
      polish: 'All',
      style: 'All',
      pieces: 'All',
    });
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [category, initialSubCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchParams, sortBy, selectedSubCategory]);

  const filteredProducts = useMemo(() => {
    let result = INITIAL_PRODUCTS.filter(p => {
      const matchesCategory = p.category === category;
      if (!matchesCategory) return false;

      if (selectedSubCategory) {
        const subCat = getProductSubcategory(p);
        if (subCat !== selectedSubCategory) return false;
      }

      const attrs = getProductAttributes(p);
      
      const matchesColor = searchParams.color === 'All' || 
        attrs.color === searchParams.color ||
        attrs.color.toLowerCase().includes(searchParams.color.toLowerCase()) ||
        searchParams.color.toLowerCase().includes(attrs.color.toLowerCase());

      const matchesMaterial = searchParams.material === 'All' || 
        attrs.material === searchParams.material ||
        attrs.material.toLowerCase().includes(searchParams.material.replace('/ Kikar', '').toLowerCase()) ||
        searchParams.material.toLowerCase().includes(attrs.material.toLowerCase());

      const matchesPolish = searchParams.polish === 'All' || 
        attrs.polish === searchParams.polish ||
        attrs.polish.toLowerCase().includes(searchParams.polish.toLowerCase()) ||
        searchParams.polish.toLowerCase().includes(attrs.polish.toLowerCase());

      const matchesStyle = searchParams.style === 'All' || 
        attrs.style === searchParams.style ||
        attrs.style.toLowerCase().includes(searchParams.style.toLowerCase()) ||
        searchParams.style.toLowerCase().includes(attrs.style.toLowerCase());

      const matchesPieces = searchParams.pieces === 'All' || 
        attrs.pieces === searchParams.pieces ||
        attrs.pieces.toLowerCase().includes(searchParams.pieces.toLowerCase()) ||
        searchParams.pieces.toLowerCase().includes(attrs.pieces.toLowerCase());

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

  const PRODUCTS_PER_PAGE = category === 'dining' ? 8 : (category === 'living-room' ? 12 : (category === 'outdoor' ? 10 : (category === 'sets' ? 9 : 15)));

  const paginatedProducts = useMemo(() => {
    if (category !== 'bedroom' && category !== 'dining' && category !== 'living-room' && category !== 'outdoor' && category !== 'sets') {
      return filteredProducts;
    }
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [filteredProducts, currentPage, category, PRODUCTS_PER_PAGE]);

  const totalPages = useMemo(() => {
    if (category !== 'bedroom' && category !== 'dining' && category !== 'living-room' && category !== 'outdoor' && category !== 'sets') return 1;
    return Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  }, [filteredProducts, category, PRODUCTS_PER_PAGE]);

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

        {/* Dynamic & Beautiful Sub-Category Tabs */}
        {SUBCATEGORIES_MAP[category] && (
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3.5 mb-10 pb-6 border-b border-stone-800/60">
            {SUBCATEGORIES_MAP[category].map((subCat) => {
              const isActive = (subCat === 'All' && !selectedSubCategory) || (selectedSubCategory === subCat);
              return (
                <button
                  key={subCat}
                  type="button"
                  onClick={() => {
                    setSelectedSubCategory(subCat === 'All' ? null : subCat);
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-600 to-amber-700 border-amber-500 text-white shadow-lg shadow-amber-900/30'
                      : 'bg-stone-900/40 hover:bg-stone-800 border-stone-800 text-stone-400 hover:text-white hover:border-amber-700/40'
                  }`}
                >
                  {subCat}
                </button>
              );
            })}
          </div>
        )}

        {/* Filter Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12 bg-gradient-to-br from-blue-500/10 via-[#2563EB]/20 to-charcoal border border-blue-500/35 p-6 rounded-2xl shadow-xl backdrop-blur-md relative z-40"
        >
          {Object.entries(filterOptions).map(([key, options]) => {
            const currentValue = searchParams[key as keyof typeof searchParams];
            const isOpen = openDropdown === key;
            return (
              <div key={key} className="relative">
                <label className="block text-[10px] uppercase tracking-widest text-ivory/80 mb-2 font-bold">{key}</label>
                <button
                  type="button"
                  onClick={() => {
                    setOpenDropdown(isOpen ? null : key);
                    setIsSortOpen(false);
                  }}
                  className="w-full bg-[#060B18] text-ivory font-semibold text-[13px] py-2.5 px-3 rounded-lg flex items-center justify-between cursor-pointer border border-oak/30 transition-all hover:border-oak/80 hover:bg-[#0e1626] active:scale-95 shadow-md"
                >
                  <span className="truncate">{currentValue}</span>
                  <span className="text-[10px] font-semibold text-oak flex-shrink-0 ml-1.5">
                    {isOpen ? '▲' : '▼'}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <>
                      {/* Invisible backdrop to close the dropdown when clicking outside */}
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
                        {options.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              setSearchParams(prev => ({ ...prev, [key]: opt }));
                              setOpenDropdown(null);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-[13px] font-medium font-sans transition-colors duration-150 whitespace-nowrap ${getOptionHoverClass(opt)} ${
                              currentValue === opt ? 'bg-oak/20 text-oak font-bold' : 'text-ivory-dim'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Sort Dropdown */}
          <div className="relative z-30">
            <label className="block text-[10px] uppercase tracking-widest text-ivory/80 mb-2 font-bold">Sort By</label>
            <button
              type="button"
              onClick={() => {
                setIsSortOpen(!isSortOpen);
                setOpenDropdown(null);
              }}
              className="w-full bg-[#060B18] text-ivory font-semibold text-[13px] py-2.5 px-3.5 rounded-lg flex items-center justify-between cursor-pointer border border-oak/30 transition-all hover:border-oak/80 hover:bg-[#0e1626] active:scale-95 shadow-md"
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
          </div>
        </motion.div>

        {filteredProducts.length === 0 ? (
          <div className="w-full">
            {selectedSubCategory === 'Wood & Fiber Doors' ? (
              <WoodFiberDoors />
            ) : selectedSubCategory === 'Wall Art & TV Units' ? (
              <WallArtTvUnits />
            ) : selectedSubCategory === 'Curtains' ? (
              <Curtains />
            ) : selectedSubCategory === 'Kitchen Cabinets & Wardrobes' ? (
              <KitchenCabinets />
            ) : (
              <>
                <div className="text-center py-24 px-6 border border-dashed border-stone-800 rounded-2xl bg-stone-900/20 max-w-lg mx-auto my-12 shadow-inner">
                  <div className="text-amber-500/80 text-4xl mb-4 font-light">∅</div>
                  <h3 className="text-lg font-sans font-medium text-amber-500 mb-2 uppercase tracking-wider">
                    No Products Available
                  </h3>
                  <p className="text-stone-400 font-sans text-xs max-w-sm mx-auto leading-relaxed">
                    We currently do not have any {selectedSubCategory || 'matching'} products in our {getCategoryLabel(category)} collection. Please check back later or contact us to custom order!
                  </p>
                </div>
                {(category === 'interior' && (!selectedSubCategory || selectedSubCategory === 'All')) && (
                  <>
                    <WoodFiberDoors />
                    <WallArtTvUnits />
                    <Curtains />
                    <KitchenCabinets />
                  </>
                )}
              </>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProducts.map((product) => (
              <div key={product.id} className="bg-[#0e1626] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1">
                {/* Clickable Image Wrapper with View Details Overlay */}
                <div 
                  onClick={() => setSelectedDetailProduct(product)}
                  className="relative h-64 bg-gray-800 cursor-pointer overflow-hidden group/img"
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover/img:scale-120 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-[#060B18]/95 text-amber-500 border border-amber-500/30 px-4 py-2 rounded text-xs font-mono tracking-widest uppercase shadow-lg">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  {/* Clickable Title for easy exploration */}
                  <h3 
                    onClick={() => setSelectedDetailProduct(product)}
                    className="text-sm text-ivory font-medium mb-6 min-h-[3rem] cursor-pointer hover:text-amber-500 transition-colors"
                  >
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
        )}

        {/* Pagination Controls */}
        {(category === 'bedroom' || category === 'dining' || category === 'living-room' || category === 'outdoor' || category === 'sets') && totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mt-16 font-sans">
            <button
              onClick={() => {
                setCurrentPage(prev => Math.max(prev - 1, 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentPage === 1}
              className={`text-base font-bold cursor-pointer transition-colors p-2 ${
                currentPage === 1 ? 'text-stone-600 cursor-not-allowed' : 'text-stone-400 hover:text-amber-500'
              }`}
              aria-label="Previous page"
            >
              &larr;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => {
                  setCurrentPage(pageNum);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all cursor-pointer ${
                  currentPage === pageNum
                    ? 'bg-gray-300 text-charcoal shadow-md font-bold'
                    : 'text-stone-400 hover:text-amber-500 hover:bg-stone-800/40'
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() => {
                setCurrentPage(prev => Math.min(prev + 1, totalPages));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentPage === totalPages}
              className={`text-base font-bold cursor-pointer transition-colors p-2 ${
                currentPage === totalPages ? 'text-stone-600 cursor-not-allowed' : 'text-stone-400 hover:text-amber-500'
              }`}
              aria-label="Next page"
            >
              &rarr;
            </button>
          </div>
        )}

        {/* Dynamic & Beautiful Description Block at the bottom of the Bedroom Collection page */}
        {category === 'bedroom' && (
          <div className="max-w-5xl mx-auto mt-20 pt-16 border-t border-amber-500/10 text-center">
            <p className="text-sm md:text-base text-stone-400 leading-relaxed font-sans font-light max-w-4xl mx-auto">
              Bedroom is the most important space of any home. In fact, the core essence of a home building is to have a comfortable, coziest and luxurious corner spot for sleep, share and relax. Furniture Holz is your comfort partner, providing complete bedroom interior and furniture solutions with option of personalization and customization. Our designer bedroom collection offer all kinds of beds, bed sets and other complimentary bedroom furniture. Live smart with our solid wood sustainable furniture. For all types of bed designs, visit our furniture showrooms in Faisalabad and Lahore. We also provide furniture maintenance and polishing services at purpose build furniture workshops in biggest cities of Pakistan, which includes Faisalabad and Lahore.
            </p>
          </div>
        )}
      </div>

      {/* Magnificent Product Specification & Multi-view Detail Overlay Modal */}
      <AnimatePresence>
        {selectedDetailProduct && (() => {
          const product = selectedDetailProduct;
          const detail = getBedroomDetail(product);
          const whatsappUrl = `https://wa.me/923226638762?text=Assalam-o-Alaikum,%20I%20am%20inquiring%20about%20the%20bedroom%20product%20"${encodeURIComponent(product.name)}"%20(SKU:%20${detail.sku})`;
          
          return (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
              {/* Backdrop Scrim */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDetailProduct(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-xs"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl bg-[#060B18] text-[#f4efe6] rounded-2xl border border-amber-500/35 overflow-hidden shadow-2xl p-6 md:p-10 z-10 max-h-[90vh] overflow-y-auto custom-scrollbar"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedDetailProduct(null)}
                  className="absolute top-6 right-6 p-1.5 rounded-full border border-amber-500/10 text-ivory-dim/60 hover:text-amber-500 hover:border-amber-500/30 transition-all duration-200 z-20 bg-[#0e1626]"
                  aria-label="Close product details"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {/* Left Column: Image Area & Multi-angle views */}
                  <div className="space-y-4">
                    <div className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden border border-[#1e293b] bg-[#0b1120] group">
                      <img
                        src={activeImage || product.image}
                        alt={product.name}
                        className={`w-full h-full object-cover transition-all duration-500 ease-out origin-center ${
                          (activeImage || product.image).endsWith('#flipped')
                            ? 'scale-x-[-1] hover:scale-x-[-1.25] hover:scale-y-[1.25]'
                            : 'scale-100 hover:scale-125'
                        }`}
                      />

                      {/* Hover status/hint badge */}
                      <div className="absolute bottom-3 left-3 bg-[#060B18]/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-mono border border-amber-500/20 tracking-wider text-sage uppercase">
                        🔍 Hover to Zoom
                      </div>

                      {/* Status/Badge overlay */}
                      {detail.status === 'Sold Out' ? (
                        <span className="absolute top-4 right-4 bg-amber-600 text-[#11100c] font-mono text-[9px] tracking-widest uppercase py-1 px-2.5 font-bold shadow-md rounded-sm">
                          SOLD OUT
                        </span>
                      ) : (
                        product.badge && (
                          <span className="absolute top-4 right-4 bg-amber-500 text-[#11100c] font-mono text-[9px] tracking-widest uppercase py-1 px-2.5 font-bold shadow-md rounded-sm">
                            {product.badge}
                          </span>
                        )
                      )}
                    </div>

                    {/* Thumbnail multi-view selection row */}
                    <div className="flex gap-3">
                      {product.images && product.images.length > 0 ? (
                        product.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImage(img)}
                            className={`relative w-24 h-16 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                              activeImage === img
                                ? 'border-amber-500 ring-1 ring-amber-500'
                                : 'border-[#2a2720] hover:border-amber-500/50'
                            }`}
                          >
                            <img src={img} className="w-full h-full object-cover" />
                            <span className="absolute bottom-1 right-1 text-[8px] bg-stone-950/90 text-ivory/90 px-1 py-0.5 rounded font-mono leading-none border border-line/40">
                              View {idx + 1}
                            </span>
                          </button>
                        ))
                      ) : (
                        <>
                          {/* Front View Thumb */}
                          <button
                            onClick={() => setActiveImage(product.image)}
                            className={`relative w-24 h-16 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                              activeImage === product.image || !activeImage.endsWith('#flipped')
                                ? 'border-amber-500 ring-1 ring-amber-500'
                                : 'border-[#2a2720] hover:border-amber-500/50'
                            }`}
                          >
                            <img src={product.image} className="w-full h-full object-cover" />
                            <span className="absolute bottom-1 right-1 text-[8px] bg-stone-950/90 text-ivory/90 px-1 py-0.5 rounded font-mono leading-none border border-line/40">
                              Front View
                            </span>
                          </button>

                          {/* Left Angle (Flipped) Thumb */}
                          <button
                            onClick={() => setActiveImage(product.image + '#flipped')}
                            className={`relative w-24 h-16 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                              activeImage === (product.image + '#flipped')
                                ? 'border-amber-500 ring-1 ring-amber-500'
                                : 'border-[#2a2720] hover:border-amber-500/50'
                            }`}
                          >
                            <img src={product.image} className="w-full h-full object-cover scale-x-[-1]" />
                            <span className="absolute bottom-1 right-1 text-[8px] bg-stone-950/90 text-ivory/90 px-1 py-0.5 rounded font-mono leading-none border border-line/40">
                              Left Angle
                            </span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Spec Sheet */}
                  <div className="flex flex-col justify-between text-left space-y-6">
                    <div>
                      {/* Title */}
                      <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#f4efe6] tracking-tight mb-2">
                        {product.name}
                      </h2>

                      {/* TMR & SKU row */}
                      <div className="text-xs font-mono text-amber-500 mb-4 flex items-center gap-2">
                        <span>TMR #{detail.tmr}</span>
                        <span className="text-amber-500/30">|</span>
                        <span>SKU: {detail.sku}</span>
                      </div>

                      {/* Button: BACKORDER QUERY or CALL FOR PRICE */}
                      <div className="mb-6">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-2.5 bg-[#0e1626] hover:bg-[#1a2436] border border-amber-500/40 text-[#f4efe6] text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
                        >
                          {detail.status === 'Sold Out' ? 'BACKORDER QUERY' : 'CALL FOR PRICE'}
                        </a>
                      </div>

                      {/* Bullet list of features */}
                      <ul className="space-y-2 text-xs md:text-sm text-ivory-dim/80 list-disc pl-4 leading-relaxed font-sans mb-6">
                        {detail.bulletPoints.map((pt, index) => (
                          <li key={index}>{pt}</li>
                        ))}
                      </ul>

                      {/* Base Info */}
                      <div className="text-xs text-ivory-dim/60 font-mono space-y-1.5 pt-4 border-t border-amber-500/10">
                        <div><strong>SKU:</strong> <span className="text-amber-500">{detail.sku}</span></div>
                        <div><strong>Categories:</strong> <span className="text-[#8e8574]">{detail.categories}</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information Table Section */}
                <div className="mt-12 pt-8 border-t border-amber-500/10">
                  <div className="text-center font-mono font-medium text-xs tracking-widest text-amber-500 uppercase mb-6">
                    Additional Information
                  </div>

                  <div className="overflow-hidden rounded-xl border border-amber-500/20 bg-[#0e1626]">
                    <table className="w-full text-left border-collapse font-sans text-xs md:text-sm">
                      <tbody>
                        <tr className="border-b border-amber-500/10 hover:bg-white/2">
                          <td className="p-4 w-1/3 font-bold uppercase text-[10px] tracking-wider text-ivory-dim/70">Color</td>
                          <td className="p-4 text-ivory">{detail.color}</td>
                        </tr>
                        <tr className="border-b border-amber-500/10 hover:bg-white/2">
                          <td className="p-4 font-bold uppercase text-[10px] tracking-wider text-ivory-dim/70">Material</td>
                          <td className="p-4 text-ivory">{detail.material}</td>
                        </tr>
                        <tr className="border-b border-amber-500/10 hover:bg-white/2">
                          <td className="p-4 font-bold uppercase text-[10px] tracking-wider text-ivory-dim/70">Polish/ Upholstery</td>
                          <td className="p-4 text-ivory">{detail.polish}</td>
                        </tr>
                        <tr className="border-b border-amber-500/10 hover:bg-white/2">
                          <td className="p-4 font-bold uppercase text-[10px] tracking-wider text-ivory-dim/70">Style</td>
                          <td className="p-4 text-ivory">{detail.style}</td>
                        </tr>
                        <tr className="hover:bg-white/2">
                          <td className="p-4 font-bold uppercase text-[10px] tracking-wider text-ivory-dim/70">Size/ Pieces</td>
                          <td className="p-4 text-ivory">{detail.pieces}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </motion.div>
  );
}
