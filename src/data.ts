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
  },
  // --- PAGE 2 BEDROOM PRODUCTS ---
  {
    id: 'bedroom-p2-1',
    name: 'Smart Living 10 Seater Solid Acacia Wood Jute U Corner Sofa',
    category: 'bedroom',
    price: 185000,
    woodType: 'Oak',
    materialDetails: 'Solid Acacia Wood framing with durable premium textured Jute-blend upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/10-Seat-Corner-Sofa-Set-600x420.jpg',
    badge: 'Grand Lounge',
    description: 'A luxurious, expansive U-shaped corner sectional sofa set designed for the grandest configurations. Built on a sturdy Acacia wood frame, upholstered in durable, premium-textured natural jute blend fabric, and detailed with elegant wooden accents.',
    dimensions: 'Left Side: 240cm L / Center Back: 340cm L / Right Side: 200cm L (All: 85cm D x 78cm H)',
    weight: '155 kg',
    buildTime: '6-9 Weeks',
    joinery: 'Interlocking sectional connectors with heavy corner blocks, glued and screwed.'
  },
  {
    id: 'bedroom-p2-2',
    name: 'Full Velvet Upholstery Wingback Sissoo Wood Bedroom Chairs Set',
    category: 'bedroom',
    price: 68000,
    woodType: 'Sheesham',
    materialDetails: 'Seasoned Sissoo (Sheesham) wood core with high-grade velvet upholstery and master-carved accents',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Full-Back-Poshish-Sheesham-Crafted-Bedroom-Chair-600x420.jpg',
    badge: 'Elegant Comfort',
    description: 'A premium bedroom reading corner set with two classic high-back wing chairs upholstered in plush full velvet, paired with a matching hand-turned pedestal coffee table.',
    dimensions: '75cm W x 72cm D x 110cm H (Chairs) / 50cm Diameter x 55cm H (Table)',
    weight: '45 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Double-pinned round mortise frame with high-tension wire-web support.'
  },
  {
    id: 'bedroom-p2-3',
    name: 'Walnut/ Akhroti Mate Polish Bedroom Furniture Set',
    category: 'bedroom',
    price: 265000,
    woodType: 'Walnut',
    materialDetails: 'Solid seasoned Persian Walnut wood structure with premium matte polyurethane protection',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Mate-Polish-Bedroom-Set-600x420.jpg',
    badge: 'Popular',
    description: 'An exquisite master bedroom suite set handcrafted from select dark Akhroti (Walnut) wood, featuring a gorgeous matte lacquer finish that accentuates natural wood grains. Includes king size bed, dressing table, and bedside cabinets.',
    dimensions: 'Bed: 215cm L x 195cm W x 135cm H / Dresser: 125cm W x 45cm D x 85cm H',
    weight: '185 kg',
    buildTime: '8-10 Weeks',
    joinery: 'Traditional hand-cut dovetail joints, heavy mortise structural lock systems.'
  },
  {
    id: 'bedroom-p2-4',
    name: 'Trapezium Curved Crafted Walnut Wood Bed & Dressing Set',
    category: 'bedroom',
    price: 295000,
    woodType: 'Walnut',
    materialDetails: 'Solid Walnut heartwood structure with premium smooth satin coat finish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Akhroti-Walnut-Bedroom-Furniture-Set-600x420.jpg',
    badge: 'Masterpiece',
    description: 'Stunning modern curves with organic geometry. Handcrafted from rich Persian Walnut wood, this premium bed and dressing console features custom trapezium curves and detailed wood carvings.',
    dimensions: 'Bed: 220cm L x 205cm W x 140cm H / Dresser: 135cm L x 45cm D x 190cm H',
    weight: '190 kg',
    buildTime: '8-11 Weeks',
    joinery: 'Interlocking double-miter jointing with heavy-duty structural steel fasteners.'
  },
  {
    id: 'bedroom-p2-5',
    name: 'Ladder Stick Self Craftred Sissoo Wood High Gloss Bed & Dressing Set',
    category: 'bedroom',
    price: 245000,
    woodType: 'Sheesham',
    materialDetails: 'Premium selected seasoned Sissoo (Sheesham) Wood structure with ultra-clear high-gloss coat',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Stick-Pattern-Furniture-600x420.jpg',
    badge: 'Unique Design',
    description: 'A self-crafted design masterpiece showcasing a beautiful vertical stick-pattern ladder headboard. Expertly polished in super high gloss premium luster, accentuating the golden-brown Sheesham grains.',
    dimensions: 'Bed: 212cm L x 195cm W x 130cm H / Dresser: 120cm L x 42cm D x 185cm H',
    weight: '175 kg',
    buildTime: '7-9 Weeks',
    joinery: 'Hand-grooved tongue-and-groove stick slat panels, heavy double-doweled frame support.'
  },
  {
    id: 'bedroom-p2-6',
    name: 'Curved Acacia Wood 6 Seater Sofa Set',
    category: 'bedroom',
    price: 145000,
    woodType: 'Oak',
    materialDetails: 'Acacia Wood frame with premium foam and high-grade breathable jacquard upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/6-Seater-Kikar-Wood-Curved-Sofa-Set-600x420.jpg',
    description: 'A majestic 6-seater sofa set built on seasoned Acacia (Kikar) wood. Features elegantly curved backrests, luxury fabric cushioning, and hand-finished solid timber detailing.',
    dimensions: '3-Seater: 210cm L x 88cm D / 2-Seater: 160cm L / Single: 105cm L',
    weight: '125 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Curved laminate timber bands, heavy doweled joints with internal steel plates.'
  },
  {
    id: 'bedroom-p2-7',
    name: 'Chester Field Hop In Silver 6 Seater Sofa Set',
    category: 'bedroom',
    price: 155000,
    woodType: 'Oak',
    materialDetails: 'Solid Acacia Wood structural framing, thick high-density Molty foam, silver plush velvet upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/6-Seater-Chester-Sofa-Set-600x420.jpg',
    badge: 'Best Seller',
    description: 'A luxurious silver-gray chesterfield sofa set featuring signature deep button tufting and plush velvet wrap. Sturdy seasoned Acacia frame provides incredible lifelong strength.',
    dimensions: '3-Seater: 225cm L x 95cm D / 2-Seater: 175cm L / Chair: 115cm L',
    weight: '135 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Double-screwed and glued corner blocks with heavy-duty zig-zag spring suspension.'
  },
  {
    id: 'bedroom-p2-8',
    name: 'Inlay Cobra Shisham Wood High Gloss 7 Seater Sofa Set',
    category: 'bedroom',
    price: 215000,
    woodType: 'Sheesham',
    materialDetails: 'A-grade seasoned Shisham (Sheesham) wood frame, custom floral wood inlay work, high luster gloss coat',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Wooden-Inlay-Work-Sofa-Set-600x420.jpg',
    badge: 'Royal Design',
    description: 'A gorgeous 7-seater (3+2+1+1) sofa set detailed with traditional cobra hand carvings and intricate wood inlay designs. Finished in supreme high gloss premium lacquer.',
    dimensions: '3-Seater: 220cm L / 2-Seater: 170cm L / Chairs: 110cm L',
    weight: '165 kg',
    buildTime: '8-11 Weeks',
    joinery: 'Deep mortise-and-tenon framing with traditional hand-pegged structural column locking.'
  },
  {
    id: 'bedroom-p2-9',
    name: 'Royal Blue High Gloss Deco Sissoo Wood Settee',
    category: 'bedroom',
    price: 75000,
    woodType: 'Sheesham',
    materialDetails: 'Pure seasoned Sissoo (Sheesham) Wood frame with premium royal blue velvet and white high-gloss deco polish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/High-Deco-Gloss-Setty-for-Bedroom-Launge-600x420.jpg',
    badge: 'Elite Choice',
    description: 'A luxurious and vibrant royal blue tufted settee framed in solid Sissoo (Sheesham) wood with high gloss white deco paint accents. Perfect for lounges, lobbies, or bedroom ends.',
    dimensions: '155cm L x 55cm W x 52cm H',
    weight: '28 kg',
    buildTime: '4-5 Weeks',
    joinery: 'Curved leg joinery with steel corner plates and heavy doweled support columns.'
  },
  {
    id: 'bedroom-p2-10',
    name: 'Chinioti Crafted Shisham Wood Deco Moora Chair Set',
    category: 'bedroom',
    price: 42000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood, gold-leaf highlight lacquer coating, velvet cushioning',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Chinioti-Crafted-Moora-Set-600x420.jpg',
    badge: 'Craft Classic',
    description: 'An elegant pair of traditionally hand-turned Chinioti moora stool chairs with custom floral carving details and a gorgeous gold deco polish highlighting deep Sheesham grains.',
    dimensions: 'Stools: 48cm Diameter x 50cm H',
    weight: '14 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Interlocking wooden spindles with tight glue-set joints and dowel pegs.'
  },
  {
    id: 'bedroom-p2-11',
    name: 'The Art of Craftsman Hybrid Fancy Bedroom Set',
    category: 'bedroom',
    price: 285000,
    woodType: 'Oak',
    materialDetails: 'Solid wood frame mixed with ultra-dense MDF panels, masterfully sprayed with high-gloss white and gold deco lacquer',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Hybrid-Wood-Fiber-Lasani-Bedroom-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Hybrid-Wood-Fiber-Lasani-Bedroom-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Deco-Railing-Console-Drawer-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/High-Gloss-Deco-Furniture-600x420.jpg'
    ],
    badge: 'Ustad Signature',
    description: 'The masterpiece of true Pakistani craftsmanship. Features high-quality hybrid premium wood combined with high-grade density fiberboard, finished in stunning high-gloss deco white with golden trim. Includes king bed, gorgeous railing console dresser, and wardrobe.',
    dimensions: 'Bed: 215cm L x 200cm W x 145cm H / Dresser: 140cm L x 45cm D x 195cm H',
    weight: '210 kg',
    buildTime: '9-12 Weeks',
    joinery: 'Interlocking steel bracket rails with high-tension locking pins, doweled cabinetry.'
  },
  {
    id: 'bedroom-p2-12',
    name: 'Mate Polish Imported Sheet Shutter Bedroom Set',
    category: 'bedroom',
    price: 215000,
    woodType: 'Oak',
    materialDetails: 'Imported textured laminated sheet with solid wood corner framing and high-grade soft-close hardware',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Mate-Polish-Shutter-Bed-Dressing-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Mate-Polish-Shutter-Bed-Dressing-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Lasani-Sheet-Furniture-600x420.jpg'
    ],
    description: 'Modern minimal aesthetics with rich textures. Built with premium imported moisture-resistant sheet and designed with textured bed shutters and a flawless matching matte dresser set.',
    dimensions: 'Bed: 210cm L x 190cm W x 120cm H / Dresser: 115cm W x 40cm D x 180cm H',
    weight: '165 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Flat-pack cam lock systems with internal metal-on-metal frame braces.'
  },
  {
    id: 'bedroom-p2-13',
    name: 'Oak Wood High Living 2 Tone Panel Bed & Dressing Set',
    category: 'bedroom',
    price: 275000,
    woodType: 'Oak',
    materialDetails: 'A-grade European Oak timber, natural oil & beeswax rub combined with satin clear polyurethane protection',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Oak-Wood-Furniture-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Oak-Wood-Furniture-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/4-600x899.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Oak-Wood-Dressing-600x420.jpg'
    ],
    badge: 'Premium Suite',
    description: 'A premium bedroom set constructed from solid European Oak wood, featuring a gorgeous dual-tone contrast between dark and golden stains. Set contains a stunning king size bed, large mirror dresser, and nightstands.',
    dimensions: 'Bed: 218cm L x 198cm W x 135cm H / Dresser: 130cm L x 45cm D x 190cm H',
    weight: '185 kg',
    buildTime: '7-10 Weeks',
    joinery: 'Traditional mortise and tenon jointing, secret screw reinforcements, dovetailed drawers.'
  },
  {
    id: 'bedroom-p2-14',
    name: 'Vintage Elegance Sissoo Wood High Gloss Bed & Dressing Set',
    category: 'bedroom',
    price: 255000,
    woodType: 'Sheesham',
    materialDetails: 'Seasoned heartwood Sissoo (Sheesham), gold accented floral carving panels, multi-stage hand-rubbed glossy finish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Classic-Polish-Wooden-Bedroom-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Classic-Polish-Wooden-Bedroom-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/High-Gloss-Furniture-600x400.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Make-Up-Dressing-Console-600x420.jpg'
    ],
    badge: 'Classic Vintage',
    description: 'Classic vintage lines blended with rich hand-polish. Made with premium seasoned Sissoo (Sheesham) wood, showcasing high gloss classical walnut and amber tones and detailed handcarvings.',
    dimensions: 'Bed: 212cm L x 195cm W x 140cm H / Dresser: 125cm L x 45cm D x 185cm H',
    weight: '180 kg',
    buildTime: '8-11 Weeks',
    joinery: 'Dovetailed drawer channels, master-carved side frame locks with heavy structural bolts.'
  },
  {
    id: 'bedroom-p2-15',
    name: 'Chester Fill L Shape 7 Seater Velvet Full Gauge Solid Acacia Wood Sofa Set',
    category: 'bedroom',
    price: 195000,
    woodType: 'Oak',
    materialDetails: 'Solid Acacia wood core, dense high-resiliency Molty Foam, royal blue premium tufted velvet wraps',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Royal-Blue-Velvet-L-SHAPE-Sofa-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Royal-Blue-Velvet-L-SHAPE-Sofa-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Molty-Foam-Sofa-Set-600x420.jpg'
    ],
    badge: 'Cosy Luxury',
    description: 'A premium 7-seater L-shaped corner sofa set upholstered in plush royal blue velvet. Built using high-density Molty foam on a heavy-gauge seasoned Acacia wood frame for unparalleled strength and comfort.',
    dimensions: 'Main Length: 250cm L / Chaise: 180cm L (All: 90cm D x 82cm H)',
    weight: '145 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Reinforced doweled frames with dual corner steel brackets, heavy gauge steel serpentine spring grids.'
  },
  // --- PAGE 3 BEDROOM PRODUCTS ---
  {
    id: 'bedroom-p3-1',
    name: 'Sheesham Wood Embossed Motif Velvet Deewan',
    category: 'bedroom',
    price: 85000,
    woodType: 'Sheesham',
    materialDetails: 'Seasoned heartwood Sheesham frame with premium embroidered floral motif velvet upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Embroidered-Poshish-Deewan-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Embroidered-Poshish-Deewan-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Mughal-Deewan-600x420.jpg'
    ],
    badge: 'Embossed Motif',
    description: 'A majestic Mughal-style bedroom deewan, built from seasoned solid Sheesham timber, upholstered with premium embossed velvet and classic embroidery motifs.',
    dimensions: '160cm L x 55cm W x 72cm H',
    weight: '32 kg',
    buildTime: '4-6 Weeks',
    joinery: 'Traditional mortise-and-tenon joints, curved legs reinforced with internal dowels.'
  },
  {
    id: 'bedroom-p3-2',
    name: 'Acacia/ Kikar Wood 2 Seater Puffy Settee',
    category: 'bedroom',
    price: 35000,
    woodType: 'Oak',
    materialDetails: 'Seasoned Acacia (Kikar) Wood frame with thick Molty foam cushioning and premium textured jute-fabric',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/2-Seater-Foot-Rest-Puffy-Seat-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/2-Seater-Foot-Rest-Puffy-Seat-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Kikar-Wood-Furniture-600x420.jpg'
    ],
    badge: 'Double Puffy',
    description: 'A versatile 2-seater bedroom settee and footrest built on durable seasoned Acacia (Kikar) wood framing, featuring thick premium foam seating.',
    dimensions: '110cm L x 45cm W x 48cm H',
    weight: '15 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Corner block reinforced framing, glued and doweled legs.'
  },
  {
    id: 'bedroom-p3-3',
    name: 'Shisham Wood Embossed Motif Velvet Deewan',
    category: 'bedroom',
    price: 82000,
    woodType: 'Sheesham',
    materialDetails: 'Pure seasoned solid Shisham Wood frame, high-gloss luster finish, premium quilted velvet',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/2-Seater-Solid-Wood-Deewan-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/2-Seater-Solid-Wood-Deewan-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Sheesham-Wood-High-Gloss-600x420.jpg'
    ],
    badge: 'High Gloss',
    description: 'A beautifully handcrafted 2-seater solid wood deewan made from premium seasoned Shisham wood, polished with ultra-glossy multi-stage hand lacquer.',
    dimensions: '155cm L x 52cm W x 70cm H',
    weight: '28 kg',
    buildTime: '4-5 Weeks',
    joinery: 'Tenon locked frames, scroll-carved leg integrations.'
  },
  {
    id: 'bedroom-p3-4',
    name: 'Versace 2 Seater Velvet Luxury Box Settee',
    category: 'bedroom',
    price: 48000,
    woodType: 'Oak',
    materialDetails: 'Seasoned Acacia wood core frame, quilted plush velvet, high density Molty foam',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Box-2-Seater-Wood-Puffy-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Box-2-Seater-Wood-Puffy-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Quilted-Velvet-Molty-Foam-Puffy-600x420.jpg'
    ],
    badge: 'Luxury Box',
    description: 'An ultra-modern, elegant box-shaped 2-seater bedroom settee upholstered in rich quilted velvet, supported by solid internal wood framework.',
    dimensions: '115cm L x 48cm W x 45cm H',
    weight: '16 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Double-screwed and glued corner blocks with heavy-duty pine frame.'
  },
  {
    id: 'bedroom-p3-5',
    name: 'Velvet Rich Round Puffy Set',
    category: 'bedroom',
    price: 39000,
    woodType: 'Sheesham',
    materialDetails: 'Plush tufted velvet wraps on seasoned wooden round base frame',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Puffy-Wooden-Bedroom-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Puffy-Wooden-Bedroom-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Bedroom-Foot-Rest-600x420.jpg'
    ],
    badge: 'Round Comfort',
    description: 'A premium pair of round tufted bedroom puffies / stools, offering exquisite bedroom footrest seating with rich velvet textures.',
    dimensions: '50cm Diameter x 45cm H (each)',
    weight: '14 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Continuous structural round frame, reinforced with internal tension struts.'
  },
  {
    id: 'bedroom-p3-6',
    name: 'Ladder Sticks Hop In Sissoo Wood High Gloss Chair Set',
    category: 'bedroom',
    price: 78000,
    woodType: 'Sheesham',
    materialDetails: 'A-grade hand-turned Sissoo (Sheesham) wood frame, vertical ladder slats, high-gloss lacquer',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/3-Piece-Bedroom-Chair-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/3-Piece-Bedroom-Chair-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/High-Gloss-Polish-Bedroom-Chairs-600x420.jpg'
    ],
    badge: '3-Piece Set',
    description: 'An amazing 3-piece bedroom seating set comprising two high-gloss polished ladder-stick chairs and a matching hand-carved coffee table.',
    dimensions: '72cm W x 70cm D x 105cm H (Chairs) / 52cm Dia x 55cm H (Table)',
    weight: '42 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Deep mortise-and-tenon vertical stick joints, pegged horizontal support bars.'
  },
  {
    id: 'bedroom-p3-7',
    name: 'Classic Velvet Shisham Wood Bedroom Chair Set',
    category: 'bedroom',
    price: 74000,
    woodType: 'Sheesham',
    materialDetails: 'Seasoned Shisham Wood frame, velvet upholstered seating cushions, traditional smooth luster coat',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Vintage-Bedroom-Chair-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Vintage-Bedroom-Chair-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Sisso-Wood-Chairs-600x420.jpg'
    ],
    badge: 'Vintage Velvet',
    description: 'A classical pair of bedroom armchair seats made of heavy, solid Shisham wood, featuring plush velvet cushions and curved armrests.',
    dimensions: '75cm W x 74cm D x 102cm H',
    weight: '38 kg',
    buildTime: '4-6 Weeks',
    joinery: 'Traditional round mortise frame with high-grade interlocking brackets.'
  },
  {
    id: 'bedroom-p3-8',
    name: 'Crown Jewel Solid Wood Golden Deco Bedroom Chair Set',
    category: 'bedroom',
    price: 85000,
    woodType: 'Sheesham',
    materialDetails: 'Seasoned solid Sissoo wood frame, gold leaf paint and white high-gloss deco, floral carved crown headboard',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Crown-Bedroom-High-Gloss-Deco-Chairs-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Crown-Bedroom-High-Gloss-Deco-Chairs-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Crafted-Bedroom-Chair-600x420.jpg'
    ],
    badge: 'Deco Crown',
    description: 'Exquisite dual-chair reading set featuring an ornate carved crown backrest detailed in gold-leaf deco paint. Frames are crafted from premium Sissoo wood.',
    dimensions: '76cm W x 72cm D x 112cm H',
    weight: '40 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Interlocking wooden spindle assembly with tight glue-set joints and dowel pegs.'
  },
  {
    id: 'bedroom-p3-9',
    name: 'Heaven High Solid Wood Deco Paint Bed & Console Set',
    category: 'bedroom',
    price: 295000,
    woodType: 'Sheesham',
    materialDetails: 'Selected seasoned Sissoo Wood framing with dense high-grade panels, white deco lacquer and velvet headboard',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Velvet-Poshish-Low-Rise-Heaven-High-Bedroom-Bridal-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Velvet-Poshish-Low-Rise-Heaven-High-Bedroom-Bridal-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Quilted-Foot-Back-600x420.jpg'
    ],
    badge: 'Heaven Bridal',
    description: 'A majestic low-rise bridal bedroom suite showcasing a massive heaven-high headboard with premium quilted velvet poshish and elegant white-gold deco polishing.',
    dimensions: 'Bed: 218cm L x 205cm W x 165cm H / Console: 135cm W x 45cm D x 85cm H',
    weight: '215 kg',
    buildTime: '9-12 Weeks',
    joinery: 'Interlocking steel bracket rails with high-tension locking pins, doweled cabinetry.'
  },
  {
    id: 'bedroom-p3-10',
    name: 'Walnut Tapered Low Mate Polish Crafted Net Head Bed & Make Up Console',
    category: 'bedroom',
    price: 280000,
    woodType: 'Walnut',
    materialDetails: 'Solid seasoned Walnut wood structure, intricate net-pattern weaving headboard, matte polish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Mate-Polish-Furniture-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Mate-Polish-Furniture-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/2-Side-Mirror-Makeup-Dressing-600x420.jpg'
    ],
    badge: 'Tapered Walnut',
    description: 'A masterpiece of clean walnut timber featuring a stunning tapered low-bed design, intricate wood-woven net headboard, and a matching dual-mirror makeup dressing console.',
    dimensions: 'Bed: 215cm L x 198cm W x 120cm H / Dresser: 130cm L x 45cm D x 185cm H',
    weight: '195 kg',
    buildTime: '8-11 Weeks',
    joinery: 'Double-miter jointing with heavy-duty structural steel fasteners, doweled drawer boxes.'
  },
  {
    id: 'bedroom-p3-11',
    name: 'Rectangle Precision High Gloss Polish Fancy Bedroom Set',
    category: 'bedroom',
    price: 275000,
    woodType: 'Walnut',
    materialDetails: 'Seasoned dark Persian Walnut with premium clear high-gloss polyurethane finish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/2-Mirror-Makeup-Console-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/2-Mirror-Makeup-Console-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Walnut-Wood-Furniture-Design-600x420.jpg'
    ],
    badge: 'Precision Gloss',
    description: 'Modern geometric rectangle carvings paired with stunning walnut wood grain. Includes a grand king-size bed, high-gloss polish, and a luxury dual-mirror makeup console.',
    dimensions: 'Bed: 212cm L x 195cm W x 135cm H / Dresser: 125cm L x 45cm D x 190cm H',
    weight: '185 kg',
    buildTime: '7-10 Weeks',
    joinery: 'Traditional hand-cut dovetail joints, heavy mortise structural lock systems.'
  },
  {
    id: 'bedroom-p3-12',
    name: 'Fuzon All Over Quilted Poshish Bed With Vintage Dressing',
    category: 'bedroom',
    price: 290000,
    woodType: 'Sheesham',
    materialDetails: 'Solid wood structure, all-over thick quilted velvet poshish wraps, vintage hand-polished details',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Fuzon-Designer-Furniture-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Fuzon-Designer-Furniture-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/All-Over-Quilted-Poshish-Furniture-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Vintage-Make-Up-Dressing-600x420.jpg'
    ],
    badge: 'Fuzon Luxury',
    description: 'A luxury designer suite featuring all-over padded velvet quilted upholstery on the headboard and sides, matched with an elegant vintage-carved makeup dressing vanity.',
    dimensions: 'Bed: 220cm L x 205cm W x 140cm H / Dresser: 140cm L x 45cm D x 185cm H',
    weight: '205 kg',
    buildTime: '8-11 Weeks',
    joinery: 'Heavy-duty corner brackets with dual internal steel bolts, slide doweled drawer tracks.'
  },
  {
    id: 'bedroom-p3-13',
    name: 'Circle Crafted Elegant Walnut & Shisham Wood Fancy 2 Tone Bed Room Set',
    category: 'bedroom',
    price: 285000,
    woodType: 'Walnut',
    materialDetails: 'Combination of solid Persian Walnut and seasoned Shisham wood, premium two-tone luster coat',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Circle-Walnut-Wooden-Bridal-Bedroom-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Circle-Walnut-Wooden-Bridal-Bedroom-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/High-Gloss-Bed-Side-Table-600x420.jpg'
    ],
    badge: 'Two Tone Circle',
    description: 'Unique concentric circular wood carving details on the headboard and cabinets. Masterfully crafted using Walnut & Shisham wood to create a high-contrast two-tone luxury suite.',
    dimensions: 'Bed: 215cm L x 200cm W x 138cm H / Dresser: 125cm L x 42cm D x 190cm H',
    weight: '190 kg',
    buildTime: '8-10 Weeks',
    joinery: 'Traditional mortise-and-tenon joints with rear steel stabilizers, dovetailed cabinet structures.'
  },
  {
    id: 'bedroom-p3-14',
    name: 'Walnut Wood Glossy Self Polish Round Console Classic Bed Room Set',
    category: 'bedroom',
    price: 295000,
    woodType: 'Walnut',
    materialDetails: 'Seasoned Persian Walnut wood structure, high-gloss natural polish, elegant curved console vanity',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Walnut-Wood-Classic-Bedroom-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Walnut-Wood-Classic-Bedroom-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Round-Shape-Wooden-Dressing-Console-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Bedside-Table-Designs-600x420.jpg'
    ],
    badge: 'Classic Walnut',
    description: 'Rich, deep self-polished Persian Walnut wood is the star of this bedroom set. Features a matching classic rounded dressing console with curved brass pulls.',
    dimensions: 'Bed: 216cm L x 198cm W x 135cm H / Dresser: 135cm L x 48cm D x 185cm H',
    weight: '198 kg',
    buildTime: '8-11 Weeks',
    joinery: 'Secret-screw reinforcements, dual locked structural brackets, blind half-blind dovetailed dresser drawers.'
  },
  {
    id: 'bedroom-p3-15',
    name: 'Signature Chinioti High Back Canopy Bed',
    category: 'bedroom',
    price: 320000,
    woodType: 'Sheesham',
    materialDetails: 'Heartwood seasoned Sheesham with master-craft handcarvings',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80',
    badge: 'Ustad Masterpiece',
    description: 'The absolute crown jewel canopy bed. Features 4 tall, masterfully hand-turned canopy posts with floral carvings, and a beautiful carved headboard.',
    dimensions: '215cm L x 210cm W x 220cm H',
    weight: '145 kg',
    buildTime: '10-12 Weeks',
    joinery: 'Interlocking dual-locked column tenons, heavy steel brackets.'
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
  if (product.id.startsWith('bedroom-p2-')) {
    const num = parseInt(product.id.replace('bedroom-p2-', ''), 10) || 1;
    const p2Details: Record<number, { color: string; material: string; polish: string; style: string; pieces: string }> = {
      1: { color: 'Natural Jute', material: 'Acacia Wood', polish: 'Natural Coat', style: 'Modern Sectional', pieces: '10 Piece' },
      2: { color: 'Royal Sage', material: 'Shisham/ Sissoo Wood', polish: 'Velvet Upholstery', style: 'Wingback', pieces: '3 Piece' },
      3: { color: 'Walnut Brown', material: 'Walnut Wood', polish: 'Mate Polish', style: 'Crafted Suite', pieces: '3 Piece' },
      4: { color: 'Caramel Walnut', material: 'Walnut Wood', polish: 'Satin Finish', style: 'Trapezium Curved', pieces: '3 Piece' },
      5: { color: 'Golden Brown', material: 'Shisham/ Sissoo Wood', polish: 'High Gloss', style: 'Ladder Stick', pieces: '3 Piece' },
      6: { color: 'Honey Acacia', material: 'Acacia Wood', polish: 'Classic Polish', style: 'Modern Curved', pieces: '3 Piece' },
      7: { color: 'Silver Gray', material: 'Acacia Wood', polish: 'Velvet Upholstery', style: 'Chesterfield', pieces: '3 Piece' },
      8: { color: 'Dark Shisham', material: 'Shisham/ Sissoo Wood', polish: 'High Gloss', style: 'Cobra Carved', pieces: '4 Piece' },
      9: { color: 'Royal Blue', material: 'Shisham/ Sissoo Wood', polish: 'Deco', style: 'Modern Settee', pieces: '1 Piece' },
      10: { color: 'Gold Deco', material: 'Shisham/ Sissoo Wood', polish: 'Deco', style: 'Chinioti', pieces: '2 Piece' },
      11: { color: 'Deco White/Gold', material: 'Hybrid Wood/MDF', polish: 'Deco', style: 'Ustad Signature', pieces: '3 Piece' },
      12: { color: 'Textured Shutter', material: 'Laminated Sheet', polish: 'Mate Polish', style: 'Modern Minimal', pieces: '3 Piece' },
      13: { color: 'Golden & Dark Oak', material: 'Oak Wood', polish: 'Classic Polish', style: 'Two Tone Panel', pieces: '3 Piece' },
      14: { color: 'Classic Amber', material: 'Shisham/ Sissoo Wood', polish: 'High Gloss', style: 'Vintage Carved', pieces: '3 Piece' },
      15: { color: 'Royal Blue', material: 'Acacia Wood', polish: 'Velvet Upholstery', style: 'Chesterfield L Shape', pieces: '1 Piece' },
    };
    
    const item = p2Details[num] || {
      color: num % 3 === 0 ? 'Walnut Brown' : num % 3 === 1 ? 'Caramel Brown' : 'Golden Brown',
      material: num % 2 === 0 ? 'Shisham/ Sissoo Wood' : 'Walnut Wood',
      polish: num % 3 === 0 ? 'Mate Polish' : num % 3 === 1 ? 'Classic Polish' : 'High Gloss',
      style: 'Crafted',
      pieces: num % 3 === 0 ? '3 Piece' : '1 Piece'
    };
    
    return {
      ...item,
      popularity: 91 - (num * 0.5), // Popularity range: 90.5 down to 83
      date: `2026-04-${String(10 + num).padStart(2, '0')}`
    };
  }
  if (product.id.startsWith('bedroom-p3-')) {
    const num = parseInt(product.id.replace('bedroom-p3-', ''), 10) || 1;
    const p3Details: Record<number, { color: string; material: string; polish: string; style: string; pieces: string }> = {
      1: { color: 'Deep Maroon', material: 'Shisham/ Sissoo Wood', polish: 'Velvet Upholstery', style: 'Mughal Deewan', pieces: '1 Piece' },
      2: { color: 'Beige Textured', material: 'Acacia Wood', polish: 'Natural Polish', style: '2 Seater Puffy Settee', pieces: '1 Piece' },
      3: { color: 'Royal Maroon', material: 'Shisham/ Sissoo Wood', polish: 'High Gloss', style: '2 Seater Deewan', pieces: '1 Piece' },
      4: { color: 'Classic Gray', material: 'Acacia Wood', polish: 'Velvet Upholstery', style: 'Luxury Box Settee', pieces: '1 Piece' },
      5: { color: 'Emerald Velvet', material: 'Shisham/ Sissoo Wood', polish: 'Velvet Upholstery', style: 'Round Puffy Set', pieces: '2 Piece' },
      6: { color: 'Amber Brown', material: 'Shisham/ Sissoo Wood', polish: 'High Gloss', style: 'Ladder Sticks', pieces: '3 Piece' },
      7: { color: 'Crimson Red', material: 'Shisham/ Sissoo Wood', polish: 'Classic Polish', style: 'Classic Vintage', pieces: '3 Piece' },
      8: { color: 'Golden Deco', material: 'Shisham/ Sissoo Wood', polish: 'Deco Polish', style: 'Crown Deco', pieces: '3 Piece' },
      9: { color: 'White & Gold Deco', material: 'Shisham/ Sissoo Wood', polish: 'Deco Polish', style: 'Heaven High', pieces: '3 Piece' },
      10: { color: 'Walnut Brown', material: 'Walnut Wood', polish: 'Mate Polish', style: 'Tapered Net Head', pieces: '3 Piece' },
      11: { color: 'Classic Walnut', material: 'Walnut Wood', polish: 'High Gloss', style: 'Rectangle Precision', pieces: '3 Piece' },
      12: { color: 'Champagne Velvet', material: 'Shisham/ Sissoo Wood', polish: 'Velvet Upholstery', style: 'Fuzon Quilted', pieces: '3 Piece' },
      13: { color: 'Two-Tone Walnut', material: 'Walnut Wood', polish: 'Classic Polish', style: 'Circle Crafted', pieces: '3 Piece' },
      14: { color: 'Glossy Walnut', material: 'Walnut Wood', polish: 'High Gloss', style: 'Round Console Classic', pieces: '3 Piece' },
      15: { color: 'Dark Shisham', material: 'Shisham/ Sissoo Wood', polish: 'High Gloss', style: 'Canopy', pieces: '1 Piece' }
    };
    
    const item = p3Details[num] || {
      color: num % 3 === 0 ? 'Brown' : num % 3 === 1 ? 'Golden' : 'Royal Red',
      material: num % 2 === 0 ? 'Shisham/ Sissoo Wood' : 'Oak Wood',
      polish: num % 3 === 0 ? 'Velvet Upholstery' : num % 3 === 1 ? 'Classic Polish' : 'Deco',
      style: 'Crafted',
      pieces: num % 3 === 0 ? '3 Piece' : '1 Piece'
    };
    
    return {
      ...item,
      popularity: 81 - (num * 0.5), // Popularity range: 80.5 down to 73
      date: `2026-03-${String(10 + num).padStart(2, '0')}`
    };
  }

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
