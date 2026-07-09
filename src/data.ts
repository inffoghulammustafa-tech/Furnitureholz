/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, WoodProperty, Review } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'kirana-dining',
    name: 'Kirana Dining Table',
    category: 'dining',
    price: 148000,
    woodType: 'Sheesham',
    materialDetails: 'Sustainably sourced, kiln-dried seasoned Sheesham',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80',
    badge: 'New',
    description: 'A monument of solid joinery. Crafted with a full-thickness 40mm solid timber top featuring continuous planks that celebrate the deep, swirling red-brown grain of seasoned Sheesham. Supported by massive handcrafted chamfered pillar legs.',
    dimensions: '182cm L x 91cm W x 76cm H (6ft x 3ft)',
    weight: '72 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Through-mortise and tenon corners, with anti-warping metal support channels slotted underneath.'
  },
  {
    id: 'chase-ship-chair',
    name: 'Shisham Wood Chase Ship Bedroom Chair',
    category: 'bedroom',
    price: 85000,
    woodType: 'Sheesham',
    materialDetails: 'Premium hand-carved solid Sheesham (Indian Rosewood) frame with luxury upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Sissoo-Wood-Bedroom-Ship-Chair-600x420.jpg',
    description: 'Handcrafted from premium seasoned Sheesham wood, this chaise lounge bedroom ship chair features smooth curved ship-style framing, deep tufted cushioning, and traditional master-carved legs.',
    dimensions: '165cm L x 68cm W x 88cm H',
    weight: '34 kg',
    buildTime: '4-6 Weeks',
    joinery: 'Traditional mortise-and-tenon frame joints with hidden structural reinforcing pins.'
  },
  {
    id: 'carving-high-back-set',
    name: 'Carving Shisham Wood High Back Bedroom Chair Set',
    category: 'bedroom',
    price: 110000,
    woodType: 'Sheesham',
    materialDetails: 'Hand-sculpted solid Shisham wood frame (Includes 2 High Back Chairs + 1 Table)',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/High-Back-Shisham-Wood-Bedroom-Chair-600x420.jpg',
    badge: 'Bestseller',
    description: 'A beautiful bedroom set showcasing exquisite master chip-carving on the crown headrest of two tall elegant high back chairs, paired with a matching round side coffee table.',
    dimensions: '72cm W x 68cm D x 118cm H (Chairs) / 50cm Diameter x 55cm H (Table)',
    weight: '48 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Reinforced tenon framing with handcrafted round peg locks.'
  },
  {
    id: 'bergere-inlay-set',
    name: 'Bergere Sissoo Wood Inlay Work Bedroom Chair Set',
    category: 'bedroom',
    price: 125000,
    woodType: 'Sheesham',
    materialDetails: 'A-grade Sissoo Wood (Sheesham) with micro ivory-wood floral inlay (Includes 2 Chairs + 1 Table)',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Bergere-Chair-Set-In-Pakistan-600x420.jpg',
    description: 'Styled with French-classical Bergere influence, this bedroom chair set features detailed brass/ivory-wood linear inlay patterns across the backrests and table-tops. Fitted with luxury brocade upholstery.',
    dimensions: '68cm W x 64cm D x 95cm H (Chairs) / 48cm Diameter x 52cm H (Table)',
    weight: '42 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Sliding blind dowels, curved leg-to-seat continuous mortise.'
  },
  {
    id: 'chinar-console',
    name: 'Chinar Console Table',
    category: 'living-room',
    price: 76000,
    woodType: 'Sheesham',
    materialDetails: 'Handcarved solid heartwood Sheesham',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
    description: 'An elegant statement for entryways and corridors. The Chinar console is styled with minimalist geometric carving on the drawer facades, preserving the raw natural contrast of the sapwood. Features three hidden soft-close solid wood drawers.',
    dimensions: '135cm L x 38cm W x 78cm H',
    weight: '38 kg',
    buildTime: '4-6 Weeks',
    joinery: 'Dovetailed drawer boxes, integrated mortise frames with hidden pegging.'
  },
  {
    id: 'walnut-lounge',
    name: 'Walnut Lounge Chair',
    category: 'living-room',
    price: 92000,
    woodType: 'Walnut',
    materialDetails: 'Hand-sculpted prime Walnut timber',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=900&q=80',
    badge: 'Limited Run',
    description: 'Sculptural comfort. Each angle of this lounge chair is carefully hand-planed and carved to flow smoothly. Fitted with premium natural woven jute webbing or upholstered in premium raw Belgian linen, it is an ergonomic triumph.',
    dimensions: '74cm L x 82cm W x 78cm H',
    weight: '16 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Double-pinned round mortise-and-tenon joints, sculptured wood-on-wood integration.'
  },
  {
    id: 'ravi-sideboard',
    name: 'Ravi Credenza & Sideboard',
    category: 'dining',
    price: 125000,
    woodType: 'Oak',
    materialDetails: 'Sustainably harvested European White Oak',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=900&q=80',
    description: 'Constructed from select quarter-sawn White Oak exhibiting exceptional fleck patterns. Features four sliding slatted tambour doors that glide smoothly to reveal adjustable solid oak shelving, ideal for dining storage or media setups.',
    dimensions: '160cm L x 45cm W x 72cm H',
    weight: '55 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Half-lap frame construction, sliding groove track joinery with solid oak drawer glides.'
  },
  {
    id: 'shalimar-bench',
    name: 'Shalimar Garden Bench',
    category: 'outdoor',
    price: 68000,
    woodType: 'Oak',
    materialDetails: 'Sourced premium weather-treated White Oak',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&q=80',
    description: 'A classic English-style garden bench built with slatted drainage panels and a curved ergonomic seat. Double-waxed with premium marine-grade oil to withstand hot, humid climates and dry desert heat alike.',
    dimensions: '150cm L x 60cm W x 90cm H',
    weight: '32 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Drawbored tenon joints with solid oak pegs for maximum natural expansion allowance.'
  },
  {
    id: 'pigeon-foot-console',
    name: 'Pigeon Foot Carved Sissoo Wood Console',
    category: 'bedroom',
    price: 95000,
    woodType: 'Sheesham',
    materialDetails: 'Intricately handcarved heartwood Sissoo (Sheesham)',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Console-Shisham-Carved-Wood-600x420.jpg',
    description: 'A stunning luxury console table featuring majestic baroque carvings and the signature "pigeon foot" structural leg curve. Polished to a high-gloss finish highlighting deep organic swirls.',
    dimensions: '138cm L x 42cm W x 82cm H',
    weight: '45 kg',
    buildTime: '5-8 Weeks',
    joinery: 'Double-layered interlocking miter pegs with traditional underframe slots.'
  },
  {
    id: 'prince-red-velvet-chair',
    name: 'Sheesham Wood High Back Prince Red Velvet Bedroom Chair',
    category: 'bedroom',
    price: 72000,
    woodType: 'Sheesham',
    materialDetails: 'Sustainably seasoned solid Sheesham with Royal Crimson Red Velvet upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Thick-Foam-Sofa-Chairs-600x420.jpg',
    description: 'Epitome of royal comfort. A single tall majestic wingback prince chair upholstered in premium crimson-red velvet, framed with beautiful hand-polished seasoned Sheesham wood border accents.',
    dimensions: '76cm W x 72cm D x 128cm H',
    weight: '26 kg',
    buildTime: '4-5 Weeks',
    joinery: 'Heavy-duty mortise-and-tenon corner joints, wood-on-wood pegged.'
  },
  {
    id: 'carved-couch-settee',
    name: 'Carved Sheeham Wood Bedroom Couch Settee',
    category: 'bedroom',
    price: 88000,
    woodType: 'Sheesham',
    materialDetails: 'Premium handcarved solid Sheesham wood framed deewan settee',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Settee-Couch-600x420.jpg',
    badge: 'Masterpiece',
    description: 'An exquisite long bed-end settee or luxury deewan couch, handcrafted from solid Sheesham wood. Adorned with beautiful leaf/grape-motif baroque carvings along the entire wooden base with gold-leaf gilding highlights.',
    dimensions: '155cm L x 55cm W x 52cm H',
    weight: '30 kg',
    buildTime: '4-6 Weeks',
    joinery: 'Through-mortise frame joints with dual-locked corner dowels.'
  },
  {
    id: 'margalla-study',
    name: 'Margalla Executive Desk',
    category: 'living-room',
    price: 165000,
    woodType: 'Walnut',
    materialDetails: 'Highly figured center heartwood Walnut',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80',
    description: 'Commanding attention. This executive desk balances mid-century floating geometry with massive solid walnut construction. Includes integrated wireless inductive charging wood inlays and a heavy brass cord escape.',
    dimensions: '152cm L x 76cm W x 75cm H',
    weight: '62 kg',
    buildTime: '7-9 Weeks',
    joinery: 'Mitered waterfalls with matching continuous wood grain, reinforced with splines.'
  },
  {
    id: 'murree-bookcase',
    name: 'Murree Modular Library',
    category: 'living-room',
    price: 110000,
    woodType: 'Sheesham',
    materialDetails: 'High-density seasoned Sheesham panels',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=900&q=80',
    description: 'An open modular shelving unit showcasing stunning contrasts of amber sapwood and deep dark heartwood. Clean, sturdy shelves capable of holding massive book collections without sagging.',
    dimensions: '100cm L x 30cm W x 180cm H',
    weight: '48 kg',
    buildTime: '4-6 Weeks',
    joinery: 'Through-housing dados, reinforced with rear wooden tension cross-struts.'
  },
  {
    id: 'kalyar-dining-set',
    name: 'Kalyar Premium Dining Set',
    category: 'sets',
    price: 245000,
    woodType: 'Sheesham',
    materialDetails: 'Premium hand-seasoned Sheesham Wood (Includes Table + 6 Cushioned Chairs)',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=900&q=80',
    badge: 'Luxury Set',
    description: 'The ultimate culinary gathering hub. This signature dining set includes our famous heavy-plank Kirana Table paired with 6 ergonomically curved Sheesham chairs upholstered in premium high-density Pakistani khaddar fabric. Heavy-duty mortise lock framing.',
    dimensions: '182cm L x 91cm W x 76cm H (Table) / 45cm W x 95cm H (Chairs)',
    weight: '130 kg',
    buildTime: '8-10 Weeks',
    joinery: 'Blind tenoned chair framing, table with deep-locked interlocking bolt-through dowels.'
  },
  {
    id: 'marwa-bedroom-set',
    name: 'Marwa Master Bedroom Set',
    category: 'sets',
    price: 385000,
    woodType: 'Walnut',
    materialDetails: 'Highly-figured Wild Persian Walnut (Includes King Bed + 2 Nightstands + Dresser Mirror)',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=80',
    badge: 'Curated Suite',
    description: 'Elevate your private sanctuary. The Marwa Bedroom Set coordinates our premium Walnut floating-style king bed with two sleek soft-close nightstands and a multi-drawer matching dresser mirror console. Book-matched walnut grains curated from the same old-growth log.',
    dimensions: 'King Bed Layout / Side Tables: 55cm W x 45cm D x 50cm H',
    weight: '210 kg',
    buildTime: '10-12 Weeks',
    joinery: 'Sliding blind dovetail drawers, masterfully aligned book-matched grain panels.'
  },
  {
    id: 'chinar-lounge-set',
    name: 'Chinar Heritage Lounge Set',
    category: 'sets',
    price: 295000,
    woodType: 'Walnut',
    materialDetails: 'Solid hand-carved Walnut frames (Includes 3-Seater Sofa + 2 Sculptural Chairs)',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=80',
    badge: 'Ustad Special',
    description: 'Grace your living parlor with local ustad artistry. Consists of a three-seater walnut frame sofa upholstered in ivory Belgian linen, coupled with two hand-sculpted minimalist Walnut Lounge Chairs. Beautifully balanced modern lines with classical Pakistani chip-carving accents.',
    dimensions: 'Sofa: 210cm L x 85cm D x 75cm H / Chairs: 74cm L x 82cm W x 78cm H',
    weight: '115 kg',
    buildTime: '9-11 Weeks',
    joinery: 'Double-pinned round mortise-and-tenon frame connections, reinforced webbed supports.'
  },
  {
    id: 'shalimar-patio-set',
    name: 'Shalimar Outdoor Veranda Set',
    category: 'sets',
    price: 185000,
    woodType: 'Oak',
    materialDetails: 'Marine-grade weather-treated White Oak (Includes Rectangular Table + 2 Benches)',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80',
    badge: 'Veranda Special',
    description: 'Designed for lush evenings in Lahore gardens. A weather-ready dining setup comprising a high-drainage slatted White Oak outdoor table and two matching Shalimar benches. Sealed with dual-coat protective marine oils to withstand heavy sun and monsoon rain.',
    dimensions: 'Table: 160cm L x 80cm W x 75cm H / Benches: 140cm L x 35cm W x 45cm H',
    weight: '90 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Drawbored mortise and tenon joints with premium expandable white oak dowels.'
  },
  {
    id: 'sea-green-ottoman-puffy',
    name: 'Sea Green Round Cube Ottoman Puffy Set',
    category: 'bedroom',
    price: 45000,
    woodType: 'Sheesham',
    materialDetails: 'Premium hand-upholstered velvet with seasoned wood inner frame structures',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Round-Cube-Puffy-Set-600x420.jpg',
    badge: 'Trending',
    description: 'This chic, space-saving puffy set combines round and cubic geometric silhouettes. Upholstered in premium sea-green velvet with rich, high-density foam padding, offering exceptional lounging or seating versatility.',
    dimensions: '45cm Diameter x 45cm H (Round) / 40cm L x 40cm W x 45cm H (Cube)',
    weight: '14 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Internal reinforced solid wood framing with heavy-duty hidden corner braces.'
  },
  {
    id: 'circle-platted-deewan',
    name: 'Sheesham Wood Circle Platted Self Crafted Deewan',
    category: 'bedroom',
    price: 95000,
    woodType: 'Sheesham',
    materialDetails: 'Handcarved A-grade seasoned solid Sheesham with luxury floral cushioning',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Circular-Self-Crafted-Deewan-600x420.jpg',
    badge: 'Bespoke',
    description: 'A masterpiece of traditional craftsmanship. Features deep circle-platted wooden patterns meticulously carved by hand. A true signature of classic subcontinental bedroom design.',
    dimensions: '168cm L x 68cm W x 82cm H',
    weight: '38 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Traditional continuous mortise-and-tenon back and leg integration.'
  },
  {
    id: 'heart-back-shisham-deewan',
    name: 'Heart Back Shisham Made 3 Seater Deewan',
    category: 'bedroom',
    price: 120000,
    woodType: 'Sheesham',
    materialDetails: 'Pure seasoned Shisham (Indian Rosewood) frame with luxury jacquard upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Heart-Back-Shesham-Made-Dewan-600x420.jpg',
    badge: 'Exclusive',
    description: 'Crafted with an elegant open heart-shaped backrest carved entirely from solid Sheesham timber. This three-seater deewan provides premium seating while serving as a majestic bedroom statement.',
    dimensions: '185cm L x 72cm W x 92cm H',
    weight: '44 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Double-locked doweled framing with heavy tenon connections.'
  },
  {
    id: 'acacia-l-shape-sofa',
    name: 'Elegant Acacia Made 7 Seater L Shape Corner Leather Sofa',
    category: 'bedroom',
    price: 175000,
    woodType: 'Oak',
    materialDetails: 'Premium seasoned Acacia / Kikar wood frame with high-grade leather upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/7-Seater-Corner-L-Shape-Sofa-600x420.jpg',
    badge: 'Luxury Lounge',
    description: 'Uncompromising grand luxury. Built on a heavy-duty seasoned Acacia frame and upholstered in rich chocolate leather. This massive L-shaped sectional brings ultimate luxury and comfortable styling to high-end bedrooms.',
    dimensions: '280cm L x 220cm W x 85cm H',
    weight: '95 kg',
    buildTime: '7-9 Weeks',
    joinery: 'Heavy-gauge corner blocks, glued, screwed, and double-doweled.'
  },
  {
    id: 'chesterfield-royal-blue-sofa',
    name: 'Chester Field Royal Blue 6 Seater 3 Piece Sofa Set',
    category: 'bedroom',
    price: 195000,
    woodType: 'Sheesham',
    materialDetails: 'Heavy solid wood inner framing with plush royal blue velvet upholstery (Includes 3+2+1 Sofa Set)',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Chester-Field-Sofa-Set-600x420.jpg',
    badge: 'Royal Suite',
    description: 'An iconic Chesterfield design featuring deep diamond button tufting and rolled arms. Finished in rich royal blue velvet with polished Sheesham feet, this sofa set transforms any royal master bedroom into a palace suite.',
    dimensions: '3-Seater: 215cm L / 2-Seater: 165cm L / 1-Seater: 105cm L (All: 90cm D x 78cm H)',
    weight: '125 kg',
    buildTime: '8-10 Weeks',
    joinery: 'Individually pegged leg anchors with high-tension steel coil spring subframes.'
  },
  {
    id: 'gourmet-shisham-sofa',
    name: 'Gourmet Shisham Wood 6 Seater High Living Sofa Set',
    category: 'bedroom',
    price: 220000,
    woodType: 'Sheesham',
    materialDetails: 'kiln-dried solid Shisham wood frame with high-resiliency foam and premium gold upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Gourmet-Sofa-Set-600x420.jpg',
    badge: 'Ustad Special',
    description: 'The epitome of high living. Crafted from select dark heartwood Shisham timber, featuring delicate handcarved leaf patterns along the crowns. Fully upholstered in golden-threaded premium fabric with matching arm wraps.',
    dimensions: '3-Seater: 220cm L / 2-Seater: 170cm L / 1-Seater: 110cm L (All: 88cm D x 95cm H)',
    weight: '140 kg',
    buildTime: '8-11 Weeks',
    joinery: 'Traditional mortise lock frames with solid wood tension-pegged braces.'
  },
  {
    id: 'golden-deco-sofa-set',
    name: 'Golden Deco Crown Shisham Wood 7 Seater Sofa Set',
    category: 'bedroom',
    price: 245000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood frame with handcarved golden deco paint, premium foam, and luxury upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Jacquard-Velvet-Upholstery-Sofa-Set-600x420.jpg',
    badge: 'Sold Out',
    description: 'A majestic masterpiece featuring opulent golden hand-carved details along the crown and base. Handcrafted from top-grade seasoned Shisham Wood with dual-tone fabric seating. This premium 7-seater (3+2+1+1) sofa set brings royal luxury to master bedroom suites.',
    dimensions: '3-Seater: 218cm L x 88cm D x 105cm H / 2-Seater: 168cm L / Single: 108cm L',
    weight: '160 kg',
    buildTime: '8-12 Weeks',
    joinery: 'Heavy dual-locked Mortise and Tenon frame joinery with reinforced core structural brackets.'
  },
  {
    id: 'smart-living-sofa-bed',
    name: 'Smart Living Solid Acacia Wood Sofa Cum Bed',
    category: 'bedroom',
    price: 98000,
    woodType: 'Oak',
    materialDetails: 'Pure seasoned Solid Acacia Wood frame with luxury plush suede upholstery and multi-position folding mechanism',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Sofa-Cum-Bed-600x420.jpg',
    badge: 'Best Seller',
    description: 'The ultimate space-saving marvel. Converts effortlessly from a luxurious, deep-seated bedroom sofa into a spacious double bed. Upholstered in high-resiliency foam and premium wear-resistant velvet.',
    dimensions: 'Sofa: 200cm L x 90cm D x 85cm H / Bed: 200cm L x 150cm W x 45cm H',
    weight: '75 kg',
    buildTime: '4-6 Weeks',
    joinery: 'Hidden high-grade steel hinge mechanisms bolted directly to seasoned solid wood frame.'
  },
  {
    id: 'smart-living-u-sofa',
    name: 'Smart Living 10 Seater Solid Acacia Wood Jute U Corner Sofa',
    category: 'bedroom',
    price: 185000,
    woodType: 'Oak',
    materialDetails: 'Solid wood framing with durable premium textured Jute-blend upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/10-Seat-Corner-Sofa-Set-600x420.jpg',
    badge: 'Grand Lounge',
    description: 'A luxurious, expansive U-shaped corner sectional sofa set designed for the grandest bedroom or lounge configurations. Built on an Acacia wood frame, upholstered in beautiful high-contrast natural jute fabric, and detailed with wooden accents.',
    dimensions: 'Left Side: 240cm L / Center Back: 340cm L / Right Side: 200cm L (All: 85cm D x 78cm H)',
    weight: '155 kg',
    buildTime: '6-9 Weeks',
    joinery: 'Interlocking sectional connectors with heavy corner blocks, glued and screwed.'
  }
];

export const WOOD_PROPERTIES: Record<'Sheesham' | 'Walnut' | 'Oak', WoodProperty> = {
  Sheesham: {
    name: 'Indian Rosewood (Sheesham)',
    latinName: 'Dalbergia sissoo',
    hardness: 'Extremely Hard (Janka: 1,660 lbf)',
    grainPattern: 'Wild, highly defined, contrasting interlocking grain with dramatic golden-to-dark-brown waves.',
    colorRange: 'Golden yellow sapwood contrasting sharply with rich chesnut or dark red-brown heartwood.',
    humidityResponse: 'Highly stable once kiln-seasoned; exceptional resistance to dry rot and subterranean termites.',
    bestFor: 'Heavy-use dining tables, consoles, bed structures, and intricate traditional carvings.'
  },
  Walnut: {
    name: 'Persian / Wild Walnut',
    latinName: 'Juglans regia',
    hardness: 'Moderately Hard & Tough (Janka: 1,010 lbf)',
    grainPattern: 'Rich, tight, sometimes wavy or curly grain. Features soft, elegant, organic swirls.',
    colorRange: 'Deep chocolate browns, warm undertones of charcoal grey and highlights of creamy blonde.',
    humidityResponse: 'Very responsive to craftsmanship; moderate shrinkage, must be given dynamic joint clearances.',
    bestFor: 'Fine sculptural lounge chairs, master wardrobes, sleek floating beds, and luxury desktops.'
  },
  Oak: {
    name: 'European White Oak',
    latinName: 'Quercus robur',
    hardness: 'Hard & Wear-Resistant (Janka: 1,360 lbf)',
    grainPattern: 'Straight grain with a coarse texture; spectacular medullary rays or fleck patterns when quarter-sawn.',
    colorRange: 'Pale biscuit gold to soft honey-brown with contemporary muted, sandy undertones.',
    humidityResponse: 'Exceptional moisture resistance due to its cellular structure (tyloses), making it highly decay resistant.',
    bestFor: 'Outdoor benches, heavy-duty credenzas, modern dining sets, and bathroom cabinetry.'
  }
};

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Ayesha Raza',
    city: 'Lahore',
    rating: 5,
    comment: 'Two years in and the Kirana dining table looks even better than the day it arrived. The walnut-stain oil finish has just deepened and acquired a rich luster with family meals. A stunning piece.',
    productName: 'Kirana Dining Table',
    woodType: 'Sheesham',
    date: '2025-11-14'
  },
  {
    id: 'rev-2',
    name: 'Hamza Iqbal',
    city: 'Islamabad',
    rating: 5,
    comment: 'They took the time to talk us out of a design that would have warped in our humid monsoon months and recommended White Oak with customized drawbored pegs. That kind of master woodworking honesty is extremely rare.',
    productName: 'Shalimar Garden Bench',
    woodType: 'Oak',
    date: '2026-02-28'
  },
  {
    id: 'rev-3',
    name: 'Sana Malik',
    city: 'Karachi',
    rating: 5,
    comment: 'The Marwa bed frame is built like a fortress. Absolutely solid, no squeaking whatsoever, and the wood grain headboard is like a giant piece of abstract art in our bedroom. Worth every rupee.',
    productName: 'Carving Shisham Wood High Back Bedroom Chair Set',
    woodType: 'Walnut',
    date: '2026-05-01'
  },
  {
    id: 'rev-4',
    name: 'Dr. Tariq Jamil',
    city: 'Peshawar',
    rating: 5,
    comment: 'Ordered a customized Margalla executive desk with standard walnut but customized sizes for my double monitors. The integrated wireless charger block works flawlessly and is completely invisible. Master class.',
    productName: 'Margalla Executive Desk',
    woodType: 'Walnut',
    date: '2026-06-15'
  }
];

export const PAKISTAN_CITIES = [
  'Lahore',
  'Karachi',
  'Islamabad',
  'Rawalpindi',
  'Peshawar',
  'Faisalabad',
  'Multan',
  'Quetta',
  'Sialkot',
  'Gujranwala',
  'Sargodha',
  'Bahawalpur',
  'Hyderabad',
  'Sukkur'
];

export function getProductAttributes(product: Product) {
  switch (product.id) {
    case 'kirana-dining':
      return {
        color: 'Caramel Brown',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Classic Polish',
        style: 'Chinioti',
        pieces: '1 Piece',
        popularity: 95,
        date: '2026-01-10'
      };
    case 'chase-ship-chair':
      return {
        color: 'Caramel Brown',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Classic Polish',
        style: 'Ship Deck',
        pieces: '1 Piece',
        popularity: 91,
        date: '2026-04-10'
      };
    case 'carving-high-back-set':
      return {
        color: 'Brown',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Mate Polish',
        style: 'Crown Back',
        pieces: '3 Piece',
        popularity: 92,
        date: '2026-04-12'
      };
    case 'bergere-inlay-set':
      return {
        color: 'Golden Brown',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Classic Polish',
        style: 'Inlay',
        pieces: '3 Piece',
        popularity: 93,
        date: '2026-04-14'
      };
    case 'chinar-console':
      return {
        color: 'Walnut Brown',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Glossy Polish',
        style: 'Crafted',
        pieces: '1 Piece',
        popularity: 88,
        date: '2025-12-01'
      };
    case 'walnut-lounge':
      return {
        color: 'Chocolate Brown',
        material: 'Walnut Wood',
        polish: 'Tone Polish',
        style: 'Self Crafted',
        pieces: '1 Piece',
        popularity: 92,
        date: '2026-02-20'
      };
    case 'ravi-sideboard':
      return {
        color: 'Golden Brown',
        material: 'Oak Wood',
        polish: 'High Gloss',
        style: 'Ship Deck',
        pieces: '1 Piece',
        popularity: 85,
        date: '2026-01-05'
      };
    case 'shalimar-bench':
      return {
        color: 'Golden',
        material: 'Oak Wood',
        polish: 'Classic Polish',
        style: 'Stick Frame',
        pieces: '1 Piece',
        popularity: 80,
        date: '2025-11-15'
      };
    case 'pigeon-foot-console':
      return {
        color: 'Walnut Brown',
        material: 'Shisham/ Sissoo Wood',
        polish: 'High Gloss',
        style: 'Crafted',
        pieces: '1 Piece',
        popularity: 94,
        date: '2026-04-16'
      };
    case 'prince-red-velvet-chair':
      return {
        color: 'Royal Red',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Velvet Upholstery',
        style: 'Royal Crown',
        pieces: '1 Piece',
        popularity: 95,
        date: '2026-04-18'
      };
    case 'carved-couch-settee':
      return {
        color: 'Golden',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Velvet Upholstery',
        style: 'Crafted',
        pieces: '1 Piece',
        popularity: 96,
        date: '2026-04-20'
      };
    case 'margalla-study':
      return {
        color: 'Brown',
        material: 'Walnut Wood',
        polish: 'Tone Polish',
        style: 'Gourmet',
        pieces: '1 Piece',
        popularity: 94,
        date: '2026-02-10'
      };
    case 'murree-bookcase':
      return {
        color: 'Polish Brown',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Deco',
        style: 'Ladder',
        pieces: '1 Piece',
        popularity: 82,
        date: '2025-10-20'
      };
    case 'kalyar-dining-set':
      return {
        color: 'Brown',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Classic Polish',
        style: 'Crown Back',
        pieces: '3 Piece',
        popularity: 96,
        date: '2026-03-01'
      };
    case 'marwa-bedroom-set':
      return {
        color: 'Dark Brown',
        material: 'Walnut Wood',
        polish: 'Mate Polish',
        style: 'Crown',
        pieces: '4 Piece',
        popularity: 98,
        date: '2026-03-25'
      };
    case 'chinar-lounge-set':
      return {
        color: 'Off White',
        material: 'Walnut Wood',
        polish: 'Velvet Upholstery',
        style: 'Royal Crown',
        pieces: '3 Piece',
        popularity: 97,
        date: '2026-02-15'
      };
    case 'shalimar-patio-set':
      return {
        color: 'Silver Brown',
        material: 'Oak Wood',
        polish: 'Classic Polish',
        style: 'Stick Frame',
        pieces: '3 Piece',
        popularity: 87,
        date: '2026-01-20'
      };
    case 'sea-green-ottoman-puffy':
      return {
        color: 'Sea Green',
        material: 'Solid Wood',
        polish: 'Velvet Upholstery',
        style: 'Circle',
        pieces: '3 Piece',
        popularity: 91,
        date: '2026-04-22'
      };
    case 'circle-platted-deewan':
      return {
        color: 'Brown',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Classic Polish',
        style: 'Deewan',
        pieces: '1 Piece',
        popularity: 93,
        date: '2026-04-24'
      };
    case 'heart-back-shisham-deewan':
      return {
        color: 'Caramel Brown',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Classic Polish',
        style: 'Deewan',
        pieces: '1 Piece',
        popularity: 94,
        date: '2026-04-26'
      };
    case 'acacia-l-shape-sofa':
      return {
        color: 'Leather Brown',
        material: 'Acacia/ Kikar Wood',
        polish: 'Leather Upholstery',
        style: 'L Shape',
        pieces: '3 Piece',
        popularity: 95,
        date: '2026-04-28'
      };
    case 'chesterfield-royal-blue-sofa':
      return {
        color: 'Royal Blue',
        material: 'Solid Wood',
        polish: 'Velvet Upholstery',
        style: 'Crown Back',
        pieces: '3 Piece',
        popularity: 96,
        date: '2026-04-30'
      };
    case 'gourmet-shisham-sofa':
      return {
        color: 'Brown',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Classic Polish',
        style: 'Gourmet',
        pieces: '3 Piece',
        popularity: 97,
        date: '2026-05-02'
      };
    case 'golden-deco-sofa-set':
      return {
        color: 'Golden',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Deco',
        style: 'Crown Back',
        pieces: '3 Piece',
        popularity: 98,
        date: '2026-05-04'
      };
    case 'smart-living-sofa-bed':
      return {
        color: 'Polish Brown',
        material: 'Acacia/ Kikar Wood',
        polish: 'Glossy Polish',
        style: 'Smart Living',
        pieces: '1 Piece',
        popularity: 99,
        date: '2026-05-06'
      };
    case 'smart-living-u-sofa':
      return {
        color: 'Skin',
        material: 'Acacia/ Kikar Wood',
        polish: 'Textured Polish',
        style: 'L Shape',
        pieces: '3 Piece',
        popularity: 100,
        date: '2026-05-08'
      };
    default:
      return {
        color: 'Caramel Brown',
        material: 'Solid Wood',
        polish: 'Classic Polish',
        style: 'Crafted',
        pieces: '1 Piece',
        popularity: 50,
        date: '2025-01-01'
      };
  }
}
