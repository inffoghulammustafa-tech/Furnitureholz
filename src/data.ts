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
    id: 'lounge-royal-blue-settee',
    name: 'Royal Blue High Gloss Deco Sissoo Wood Settee',
    category: 'living-room',
    price: 75000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Sissoo (Sheesham) Wood, high-gloss navy-blue deco lacquer, premium royal velvet cushioning',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/High-Deco-Gloss-Setty-for-Bedroom-Launge-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/High-Deco-Gloss-Setty-for-Bedroom-Launge-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Deco-Solid-Shisham-Wood-Deewan-600x420.jpg'
    ],
    badge: 'High Gloss',
    description: 'An elegant luxury settee/deewan featuring high-gloss navy-blue deco lacquer over solid Sissoo wood framework, complemented with deep tufted royal blue velvet seating.',
    dimensions: '160cm L x 60cm W x 65cm H',
    weight: '28 kg',
    buildTime: '4-6 Weeks',
    joinery: 'Integrated mortise-and-tenon corner blocks, wood pegged.'
  },
  {
    id: 'lounge-moora-set',
    name: 'Chinioti Crafted Shisham Wood Deco Moora Chair Set',
    category: 'living-room',
    price: 42000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood, silver-leaf highlight lacquer coating, velvet cushioning',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Chinioti-Crafted-Moora-Set-600x420.jpg',
    badge: 'Craft Classic',
    description: 'An elegant pair of traditionally hand-turned Chinioti moora stool chairs with custom floral carving details and a gorgeous silver deco polish highlighting deep Sheesham grains. Perfect addition to your drawing room or luxury lounge.',
    dimensions: 'Stools: 48cm Diameter x 50cm H',
    weight: '14 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Traditional joinery with solid round pegging.'
  },
  {
    id: 'lounge-embossed-motif-deewan',
    name: 'Sheesham Wood Embossed Motif Velvet Deewan',
    category: 'living-room',
    price: 85000,
    woodType: 'Sheesham',
    materialDetails: 'Hand-selected seasoned premium Sheesham (Indian Rosewood), master embroidered motif velvet upholstery, high gloss finish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Embroidered-Poshish-Deewan-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Embroidered-Poshish-Deewan-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Sissoo-Wood-Embroidered-Poshish-Deewan-600x420.jpg'
    ],
    badge: 'New Launch',
    description: 'A gorgeous low-floor traditional deewan handcrafted from seasoned solid Sheesham wood. Adorned with detailed hand-carving and upholstered in premium velvet with embossed/embroidered back motifs.',
    dimensions: '185cm L x 72cm W x 82cm H',
    weight: '45 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Thick double-dowel mortise-and-tenon frame joinery.'
  },
  {
    id: 'lounge-acacia-2seater-puffy',
    name: 'Acacia/ Kikar Wood 2 Seater Puffy Settee',
    category: 'living-room',
    price: 48000,
    woodType: 'Oak',
    materialDetails: 'Seasoned high-density solid Acacia (Kikar) wood framework, plush wear-resistant velvet fabric, premium Molty Foam',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/2-Seater-Foot-Rest-Puffy-Seat-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/2-Seater-Foot-Rest-Puffy-Seat-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Kikar-Wood-Furniture-600x420.jpg'
    ],
    badge: 'Comfort Seating',
    description: 'A highly durable and beautifully quilted 2-seater footrest puffy settee. Crafted from premium solid Kikar wood with a reinforced base, perfect as a stylish footrest or complementary seating.',
    dimensions: '110cm L x 50cm W x 45cm H',
    weight: '18 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Slotted tongue-and-groove seat framing with structural corner blocking.'
  },
  {
    id: 'lounge-shisham-motif-deewan',
    name: 'Shisham Wood Embossed Motif Velvet Deewan',
    category: 'living-room',
    price: 88000,
    woodType: 'Sheesham',
    materialDetails: '100% Solid seasoned Shisham wood, high gloss lacquer finish, embroidered backrest and luxury velvet poshesh',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/2-Seater-Solid-Wood-Deewan-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/2-Seater-Solid-Wood-Deewan-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Sheesham-Wood-High-Gloss-600x420.jpg'
    ],
    badge: 'Exquisite Carving',
    description: 'An outstanding masterpiece of traditional seating. This deewan features classical Mughal chip carvings, a high-gloss dark walnut polish, and premium quilted velvet upholstery with beautiful embossed floral motif borders.',
    dimensions: '180cm L x 70cm W x 80cm H',
    weight: '42 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Traditional sliding dovetails and wood-pegged tenon framing.'
  },
  {
    id: 'lounge-velvet-puffy-set',
    name: 'Velvet Rich Round Puffy Set',
    category: 'living-room',
    price: 32000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham wood base, velvet wrap with hand-pressed buttons',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Puffy-Wooden-Bedroom-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Puffy-Wooden-Bedroom-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Bedroom-Foot-Rest-600x420.jpg'
    ],
    badge: 'Velvet Puffy',
    description: 'An adorable pair of round luxury puffies. Crafted from seasoned wood and wrapped in quilted, highly comfortable velvet upholstery. Perfect accent pieces.',
    dimensions: '52cm Diameter x 45cm H (each)',
    weight: '12 kg',
    buildTime: '2-3 Weeks',
    joinery: 'Through-mortise seat support.'
  },
  {
    id: 'lounge-ladder-sticks',
    name: 'Ladder Sticks Hop In Sissoo Wood High Gloss Chair Set',
    category: 'living-room',
    price: 58000,
    woodType: 'Sheesham',
    materialDetails: 'Pure solid seasoned Sissoo (Sheesham) wood with high-gloss mirror finish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/3-Piece-Bedroom-Chair-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/3-Piece-Bedroom-Chair-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Furniture-600x420.png',
      'https://furnitureholz.com/wp-content/uploads/2021/04/High-Gloss-Polish-Bedroom-Chairs-600x420.jpg'
    ],
    badge: 'Ladder Back',
    description: 'A magnificent classic pair of ladder-back accent chairs with matching side table. Featuring sleek hand-turned spindles and a gorgeous mirror high-gloss polish.',
    dimensions: 'Chairs: 62cm W x 58cm D x 98cm H / Table: 45cm Diameter x 50cm H',
    weight: '34 kg',
    buildTime: '4-5 Weeks',
    joinery: 'Traditional interlocking round doweled sockets.'
  },
  {
    id: 'lounge-classic-velvet-chairs',
    name: 'Classic Velvet Shisham Wood Bedroom Chair Set',
    category: 'living-room',
    price: 65000,
    woodType: 'Sheesham',
    materialDetails: 'Solid Shisham wood, premium velvet cushion, high gloss polish (Includes 2 Chairs + 1 Table)',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Vintage-Bedroom-Chair-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Vintage-Bedroom-Chair-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Sisso-Wood-Chairs-600x420.jpg'
    ],
    badge: 'Vintage Class',
    description: 'A premium set of two vintage style high-back bedroom/lounge chairs handcrafted from seasoned solid Shisham wood, featuring beautiful scrollwork and comfortable velvet upholstery, paired with a matching round side coffee table.',
    dimensions: 'Chairs: 65cm W x 60cm D x 105cm H / Table: 45cm Diameter x 50cm H',
    weight: '36 kg',
    buildTime: '4-5 Weeks',
    joinery: 'Classic blind mortise-and-tenon joint with hardwood reinforcement.'
  },
  {
    id: 'lounge-crown-jewel-deco-chairs',
    name: 'Crown Jewel Solid Wood Golden Deco Bedroom Chair Set',
    category: 'living-room',
    price: 125000,
    woodType: 'Sheesham',
    materialDetails: 'Solid wood frame with high-gloss premium golden deco paint and royal velvet cushioning (Includes 2 Chairs + 1 Table)',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Crown-Bedroom-High-Gloss-Deco-Chairs-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Crown-Bedroom-High-Gloss-Deco-Chairs-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Crafted-Bedroom-Chair-600x420.jpg'
    ],
    badge: 'Royal Deco',
    description: 'An ultra-luxurious 3-piece bedroom and lounge seating group featuring two magnificent hand-carved crown chairs in golden deco paint and a matching central table. Handcrafted with traditional Chinioti artistry.',
    dimensions: 'Chairs: 70cm W x 65cm D x 115cm H / Table: 50cm Diameter x 55cm H',
    weight: '44 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Interlocking tenon framework with master-level hand-pinned doweled corners.'
  },
  {
    id: 'lounge-leather-net-set',
    name: 'Texture Leather Solid Structure 3 Piece Net Set',
    category: 'living-room',
    price: 38000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood structure, premium textured leather table top insert, gloss lacquer coating',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/3-Piece-Net-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/3-Piece-Net-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Leather-Top-Net-Set-600x420.jpg'
    ],
    badge: 'Modern Nest',
    description: 'A gorgeous set of 3 nested coffee tables. Crafted with a premium textured leather inlay on top of solid Shisham wood, featuring space-saving nesting capabilities.',
    dimensions: 'Large: 55cm x 40cm x 50cm H / Medium: 45cm x 35cm x 45cm H / Small: 35cm x 30cm x 40cm H',
    weight: '22 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Slotted groove joints with hidden wood screws for maximum stability.'
  },
  {
    id: 'lounge-inlay-net-set',
    name: 'Inlay Top Solid Wood Classic Finish 3 Table Net Set',
    category: 'living-room',
    price: 45000,
    woodType: 'Sheesham',
    materialDetails: 'Handcarved solid heartwood Sheesham wood with brass/ivory-wood inlaid patterns',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Solid-Wood-Inlay-Net-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Solid-Wood-Inlay-Net-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Plastic-Wooden-Copper-Inlay-Work-3-Table-Set-600x420.jpg'
    ],
    badge: 'Inlay Craft',
    description: 'A luxury set of three nesting tables, featuring traditional Pakistani wood and brass wire inlay designs on each table surface, showcasing high-level artisan craftsmanship.',
    dimensions: 'Large: 56cm x 40cm x 52cm H / Medium: 46cm x 36cm x 47cm H / Small: 36cm x 32cm x 42cm H',
    weight: '24 kg',
    buildTime: '4-5 Weeks',
    joinery: 'Double-pivoted block support frame with flush wood-on-wood sliding.'
  },
  {
    id: 'lounge-p2-chinioti-swing',
    name: 'Shisham Wood Chinioti Swing/ Jhula',
    category: 'living-room',
    price: 145000,
    woodType: 'Sheesham',
    materialDetails: '100% Solid Seasoned Shisham (Indian Rosewood), brass chains, handcrafted pillars',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Chinioti-Shisham-Wood-Jhola-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Chinioti-Shisham-Wood-Jhola-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Jhula-Chair-Made-of-Solid-Wood-600x420.png',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Fancy-Wooden-Swing-Jhola-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Chinioti-Jhola-600x420.jpg'
    ],
    badge: 'Royal Swing',
    description: 'A breathtakingly beautiful Chinioti wooden swing handcrafted from seasoned pure Shisham wood. Featuring intricate hand-carving in classical patterns, high-gloss premium polish, heavy-duty brass chains, and comfortable cushioning. Perfect for your lounge or living area.',
    dimensions: 'Frame: 182cm L x 90cm W x 205cm H / Seat: 120cm L x 55cm W x 60cm H',
    weight: '120 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Heavy interlocking mortise-and-tenon framing with load-bearing iron support dowels.'
  },
  {
    id: 'lounge-p2-gourmet-sofa',
    name: 'Gourmet Shisham Wood 6 Seater High Living Sofa Set',
    category: 'living-room',
    price: 175000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham wood, high-density comfort foam, luxury upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Gourmet-Sofa-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Gourmet-Sofa-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Embroidered-Back-Sofa-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Moustache-Back-Sofa-Set-600x420.jpg'
    ],
    badge: 'High Living',
    description: 'A luxurious 6-seater sofa set featuring exquisite embroidery on the back and a stylish moustache curve design. Handcrafted with premium seasoned Shisham wood for unmatched durability.',
    dimensions: '3-Seater: 198cm L x 84cm W x 88cm H / 2-Seater: 148cm L x 84cm W x 88cm H / 1-Seater: 98cm L x 84cm W x 88cm H',
    weight: '110 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Classic mortise-and-tenon joints with reinforced metal bracket stabilizers.'
  },
  {
    id: 'lounge-p2-golden-deco-crown',
    name: 'Golden Deco Crown Shisham Wood 7 Seater Sofa Set',
    category: 'living-room',
    price: 215000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood framework, premium gold leaf deco paint, royal velvet wraps',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Jacquard-Velvet-Upholstery-Sofa-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Jacquard-Velvet-Upholstery-Sofa-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Golden-Crown-Shisham-Wood-Sofa-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Deco-Paint-Furniture-IN-Faisalabad-600x420.jpg'
    ],
    badge: 'Royal Crown',
    description: 'An absolute showstopper. Features hand-carved crown accents highlighted with premium gold-leaf deco finish and royal jacquard velvet upholstery. Full solid Shisham wood frame.',
    dimensions: '3-Seater: 210cm L x 85cm W x 95cm H / 2-Seater (x2): 150cm L x 85cm W x 95cm H',
    weight: '135 kg',
    buildTime: '7-9 Weeks',
    joinery: 'Traditional interlocking tenons with hand-pinned solid dowels.'
  },
  {
    id: 'lounge-p2-sofa-cum-bed',
    name: 'Smart Living Solid Acacia Wood Sofa Cum Bed',
    category: 'living-room',
    price: 95000,
    woodType: 'Oak',
    materialDetails: 'Seasoned high-density solid Acacia wood framework, premium wear-resistant fabric, Molty Foam',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Sofa-Cum-Bed-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Sofa-Cum-Bed-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Smart-Home-Furniture-600x420.jpg'
    ],
    badge: 'Smart Space',
    description: 'Space-saving elegance at its best. Converts effortlessly from a stylish 3-seater sofa into a spacious double bed. Crafted from heavy-duty solid Acacia wood for regular everyday use.',
    dimensions: 'Sofa: 200cm L x 90cm W x 85cm H / Bed: 200cm L x 150cm W x 45cm H',
    weight: '85 kg',
    buildTime: '4-6 Weeks',
    joinery: 'Smooth heavy-duty metal slider rail system anchored securely with deep-threaded bolts.'
  },
  {
    id: 'lounge-p2-u-corner-sofa',
    name: 'Smart Living 10 Seater Solid Acacia Wood Jute U Corner Sofa',
    category: 'living-room',
    price: 265000,
    woodType: 'Oak',
    materialDetails: 'Solid Acacia wood framing, organic high-density jute and cotton-blend fabric, premium foam',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/10-Seat-Corner-Sofa-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/10-Seat-Corner-Sofa-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Acacia-Kikar-Wood-Corner-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Bed-Sofa-Set-600x420.jpg'
    ],
    badge: '10-Seater',
    description: 'A majestic U-shaped sectional designed for large gatherings and modern lounge setups. Beautifully wrapped in highly breathable natural jute fabric over a rigid solid wood frame.',
    dimensions: 'Left Section: 210cm / Center Section: 320cm / Right Section: 210cm / Depth: 85cm',
    weight: '180 kg',
    buildTime: '8-11 Weeks',
    joinery: 'Interlocking modular sectional clips with heavy structural bracket reinforcement.'
  },
  {
    id: 'lounge-p2-wingback-chairs-set',
    name: 'Full Velvet Upholstery Wingback Sissoo Wood Bedroom Chairs Set',
    category: 'living-room',
    price: 72000,
    woodType: 'Sheesham',
    materialDetails: 'Premium solid Sissoo (Sheesham) Wood legs and frame, high-resilience foam, luxury velvet upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Full-Back-Poshish-Sheesham-Crafted-Bedroom-Chair-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Full-Back-Poshish-Sheesham-Crafted-Bedroom-Chair-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Jacquard-Motif-Seating-600x420.jpg'
    ],
    badge: 'Wingback',
    description: 'A premium pair of high-back wing chairs upholstered in ultra-plush velvet. Features exquisitely carved Sissoo wood feet and hand-tufted jacquard motifs.',
    dimensions: 'Chairs: 76cm W x 74cm D x 108cm H / Table: 45cm Diameter x 50cm H',
    weight: '38 kg',
    buildTime: '4-5 Weeks',
    joinery: 'Double-dowelled mortise joints with solid wood corner block bracing.'
  },
  {
    id: 'lounge-p2-pizza-dining-set',
    name: 'Low Rise Round Pizza Solid Shisham Wood Dining Table Set',
    category: 'living-room',
    price: 135000,
    woodType: 'Sheesham',
    materialDetails: 'Seasoned premium Shisham wood, high-gloss protective lacquer coating',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Dining-Table-With-Four-Chairs-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Dining-Table-With-Four-Chairs-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Solid-Wood-Round-Dining-Table-600x420.jpg'
    ],
    badge: 'Pizza Round',
    description: 'An intimate and cozy low-rise dining experience. Crafted with a beautiful pizza-slice wood-grain top configuration and four perfectly nested low-back chairs.',
    dimensions: 'Table: 110cm Diameter x 65cm H / Chairs: 46cm W x 46cm D x 75cm H',
    weight: '65 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Radial spline top joinery, slotted tongue-and-groove chair seat framing.'
  },
  {
    id: 'lounge-p2-curved-sofa-set',
    name: 'Curved Acacia Wood 6 Seater Sofa Set',
    category: 'living-room',
    price: 155000,
    woodType: 'Oak',
    materialDetails: 'Solid Acacia wood skeleton, pocket spring seating core, rich textured upholstery fabric',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/6-Seater-Kikar-Wood-Curved-Sofa-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/6-Seater-Kikar-Wood-Curved-Sofa-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/3-Seater-Modern-Sofa-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Solid-Wood-Curved-Sofa-Set-600x420.jpg'
    ],
    badge: 'Curved Design',
    description: 'Modern meets traditional with a stunning curved design. Built with premium solid Acacia wood and wrapped with luxurious textured cream fabric.',
    dimensions: '3-Seater: 215cm L x 90cm W x 82cm H / 2-Seater: 165cm L x 90cm W x 82cm H / 1-Seater: 110cm L x 90cm W x 82cm H',
    weight: '115 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Curved laminated wood framing reinforced with high-gauge interior metal brackets.'
  },
  {
    id: 'lounge-p2-silver-chesterfield',
    name: 'Chester Field Hop In Silver 6 Seater Sofa Set',
    category: 'living-room',
    price: 185000,
    woodType: 'Oak',
    materialDetails: 'Heavy solid wood framing, dense Molty foam, silver gray velvet upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/6-Seater-Chester-Sofa-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/6-Seater-Chester-Sofa-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/2-Seat-Sofa-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Quilted-Low-Rise-Back-Sofa-600x420.jpg'
    ],
    badge: 'Chesterfield',
    description: 'A gorgeous silver gray chesterfield set featuring deeply tufted diamond quilting and high-resiliency foam for supreme long-lasting comfort.',
    dimensions: '3-Seater: 220cm L x 92cm W x 78cm H / 2-Seater: 170cm L x 92cm W x 78cm H / 1-Seater: 115cm L x 92cm W x 78cm H',
    weight: '125 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Rigid double-blocked corner frames with heavy pocket-screws.'
  },
  {
    id: 'lounge-p2-royal-blue-settee',
    name: 'Royal Blue High Gloss Deco Sissoo Wood Settee',
    category: 'living-room',
    price: 75000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Sissoo (Sheesham) Wood, high-gloss navy-blue deco lacquer, premium royal velvet cushioning',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/High-Deco-Gloss-Setty-for-Bedroom-Launge-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/High-Deco-Gloss-Setty-for-Bedroom-Launge-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Deco-Solid-Shisham-Wood-Deewan-600x420.jpg'
    ],
    badge: 'High Gloss',
    description: 'An elegant luxury settee/deewan featuring high-gloss navy-blue deco lacquer over solid Sissoo wood framework, complemented with deep tufted royal blue velvet seating.',
    dimensions: '160cm L x 60cm W x 65cm H',
    weight: '28 kg',
    buildTime: '4-6 Weeks',
    joinery: 'Integrated mortise-and-tenon corner blocks, wood pegged.'
  },
  {
    id: 'lounge-p2-chester-l-shape',
    name: 'Chester Fill L Shape 7 Seater Velvet Full Gauge Solid Acacia Wood Sofa Set',
    category: 'living-room',
    price: 195000,
    woodType: 'Oak',
    materialDetails: 'Heavy solid Acacia wood skeleton, premium high-resiliency Molty Foam, velvet upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Royal-Blue-Velvet-L-SHAPE-Sofa-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Royal-Blue-Velvet-L-SHAPE-Sofa-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Molty-Foam-Sofa-Set-600x420.jpg'
    ],
    badge: 'L-Shape',
    description: 'A robust Chesterfield L-shape 7-seater sectional. Features royal blue tufted velvet wrap over high-density molty foam and a massive solid Acacia framework.',
    dimensions: '265cm x 210cm W x 82cm H',
    weight: '140 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Dual lock mortise and solid corner dowels.'
  },
  {
    id: 'lounge-p2-versace-settee',
    name: 'Versace 2 Seater Velvet Luxury Box Settee',
    category: 'living-room',
    price: 62000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood, gold-leaf borders, quilted cream velvet upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Box-2-Seater-Wood-Puffy-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Box-2-Seater-Wood-Puffy-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Laser-Cut-Versace-All-Over-Puffy-600x420.jpg'
    ],
    badge: 'Versace Box',
    description: 'Bespoke two-seater designer box settee. Inspired by classical Versace motifs with laser-cut golden border accents and luxurious cream velvet tufting.',
    dimensions: '125cm L x 50cm W x 55cm H',
    weight: '24 kg',
    buildTime: '4-5 Weeks',
    joinery: 'Box joinery with half-lap frame locks.'
  },
  {
    id: 'lounge-p2-velvet-puffy-set',
    name: 'Velvet Rich Round Puffy Set',
    category: 'living-room',
    price: 32000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham wood base, velvet wrap with hand-pressed buttons',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Puffy-Wooden-Bedroom-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Puffy-Wooden-Bedroom-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Bedroom-Foot-Rest-600x420.jpg'
    ],
    badge: 'Velvet Puffy',
    description: 'An adorable pair of round luxury puffies. Crafted from seasoned wood and wrapped in quilted, highly comfortable velvet upholstery. Perfect accent pieces.',
    dimensions: 'Each Puffy: 45cm Diameter x 45cm H',
    weight: '12 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Solid dowelled circular frames with load-bearing support blocks.'
  },
  {
    id: 'lounge-p2-ladder-sticks',
    name: 'Ladder Sticks Hop In Sissoo Wood High Gloss Chair Set',
    category: 'living-room',
    price: 58000,
    woodType: 'Sheesham',
    materialDetails: 'Pure solid seasoned Sissoo (Sheesham) wood with high-gloss mirror finish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/3-Piece-Bedroom-Chair-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/3-Piece-Bedroom-Chair-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Furniture-600x420.png',
      'https://furnitureholz.com/wp-content/uploads/2021/04/High-Gloss-Polish-Bedroom-Chairs-600x420.jpg'
    ],
    badge: 'Ladder Back',
    description: 'A traditional masterpiece bedroom chairs set featuring elegant wooden stick-work back design, finished in an incredibly glossy premium mirror polish. Perfect accent chairs.',
    dimensions: 'Chairs: 58cm W x 54cm D x 98cm H / Table: 45cm Diameter x 50cm H',
    weight: '26 kg',
    buildTime: '4-5 Weeks',
    joinery: 'Traditional interlocking round doweled sockets.'
  },

  {
    id: 'outdoor-p2-chinioti-swing',
    name: 'Shisham Wood Chinioti Swing/ Jhula',
    category: 'outdoor',
    price: 145000,
    woodType: 'Sheesham',
    materialDetails: '100% Solid Seasoned Shisham (Indian Rosewood), brass chains, handcrafted pillars',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Chinioti-Shisham-Wood-Jhola-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Chinioti-Shisham-Wood-Jhola-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Jhula-Chair-Made-of-Solid-Wood-600x420.png',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Fancy-Wooden-Swing-Jhola-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Chinioti-Jhola-600x420.jpg'
    ],
    badge: 'Royal Swing',
    description: 'A breathtakingly beautiful Chinioti wooden swing handcrafted from seasoned pure Shisham wood. Featuring intricate hand-carving in classical patterns, high-gloss premium polish, heavy-duty brass chains, and comfortable cushioning. Perfect for your lounge or living area.',
    dimensions: 'Frame: 182cm L x 90cm W x 205cm H / Seat: 120cm L x 55cm W x 60cm H',
    weight: '120 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Heavy interlocking mortise-and-tenon framing with load-bearing iron support dowels.'
  },
  {
    id: 'outdoor-p2-versace-settee',
    name: 'Versace 2 Seater Velvet Luxury Box Settee',
    category: 'outdoor',
    price: 62000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood, gold-leaf borders, quilted cream velvet upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Box-2-Seater-Wood-Puffy-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Box-2-Seater-Wood-Puffy-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Laser-Cut-Versace-All-Over-Puffy-600x420.jpg'
    ],
    badge: 'Versace Box',
    description: 'Bespoke two-seater designer box settee. Inspired by classical Versace motifs with laser-cut golden border accents and luxurious cream velvet tufting.',
    dimensions: '125cm L x 50cm W x 55cm H',
    weight: '24 kg',
    buildTime: '4-5 Weeks',
    joinery: 'Box joinery with half-lap frame locks.'
  },
  {
    id: 'outdoor-p2-velvet-puffy-set',
    name: 'Velvet Rich Round Puffy Set',
    category: 'outdoor',
    price: 32000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham wood base, velvet wrap with hand-pressed buttons',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Puffy-Wooden-Bedroom-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Puffy-Wooden-Bedroom-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Bedroom-Foot-Rest-600x420.jpg'
    ],
    badge: 'Velvet Puffy',
    description: 'An adorable pair of round luxury puffies. Crafted from seasoned wood and wrapped in quilted, highly comfortable velvet upholstery. Perfect accent pieces.',
    dimensions: 'Each Puffy: 45cm Diameter x 45cm H',
    weight: '12 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Solid dowelled circular frames with load-bearing support blocks.'
  },
  {
    id: 'outdoor-p2-ladder-sticks',
    name: 'Ladder Sticks Hop In Sissoo Wood High Gloss Chair Set',
    category: 'outdoor',
    price: 58000,
    woodType: 'Sheesham',
    materialDetails: 'Pure solid seasoned Sissoo (Sheesham) wood with high-gloss mirror finish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/3-Piece-Bedroom-Chair-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/3-Piece-Bedroom-Chair-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Furniture-600x420.png',
      'https://furnitureholz.com/wp-content/uploads/2021/04/High-Gloss-Polish-Bedroom-Chairs-600x420.jpg'
    ],
    badge: 'Ladder Back',
    description: 'A traditional masterpiece bedroom chairs set featuring elegant wooden stick-work back design, finished in an incredibly glossy premium mirror polish. Perfect accent chairs.',
    dimensions: 'Chairs: 58cm W x 54cm D x 98cm H / Table: 45cm Diameter x 50cm H',
    weight: '26 kg',
    buildTime: '4-5 Weeks',
    joinery: 'Traditional interlocking round doweled sockets.'
  },
  {
    id: 'outdoor-leather-net-set',
    name: 'Texture Leather Solid Structure 3 Piece Net Set',
    category: 'outdoor',
    price: 38000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood structure, premium textured leather table top insert, gloss lacquer coating',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/3-Piece-Net-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/3-Piece-Net-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Leather-Top-Net-Set-600x420.jpg'
    ],
    badge: 'Modern Nest',
    description: 'A gorgeous set of 3 nested coffee tables. Crafted with a premium textured leather inlay on top of solid Shisham wood, featuring space-saving nesting capabilities.',
    dimensions: 'Large: 55cm x 40cm x 50cm H / Medium: 45cm x 35cm x 45cm H / Small: 35cm x 30cm x 40cm H',
    weight: '22 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Slotted groove joints with hidden wood screws for maximum stability.'
  },
  {
    id: 'outdoor-inlay-net-set',
    name: 'Versace Inlay Crafted Sissoo Wood 3 Table Net Set',
    category: 'outdoor',
    price: 45000,
    woodType: 'Sheesham',
    materialDetails: 'Handcarved solid heartwood Sheesham wood with brass/ivory-wood inlaid patterns',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Plastic-Wooden-Copper-Inlay-Work-3-Table-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Plastic-Wooden-Copper-Inlay-Work-3-Table-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Solid-Wood-Inlay-Net-Set-600x420.jpg'
    ],
    badge: 'Inlay Craft',
    description: 'A luxury set of three nesting tables, featuring traditional Pakistani wood and brass wire inlay designs on each table surface, showcasing high-level artisan craftsmanship.',
    dimensions: 'Large: 56cm x 40cm x 52cm H / Medium: 46cm x 36cm x 47cm H / Small: 36cm x 32cm x 42cm H',
    weight: '24 kg',
    buildTime: '4-5 Weeks',
    joinery: 'Slotted groove joints with hidden wood screws for maximum stability.'
  },
  {
    id: 'outdoor-inlay-top-net-set',
    name: 'Inlay Top Solid Wood Classic Finish 3 Table Net Set',
    category: 'outdoor',
    price: 45000,
    woodType: 'Sheesham',
    materialDetails: 'Handcarved solid heartwood Sheesham wood with brass/ivory-wood inlaid patterns',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Solid-Wood-Inlay-Net-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Solid-Wood-Inlay-Net-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Plastic-Wooden-Copper-Inlay-Work-3-Table-Set-600x420.jpg'
    ],
    badge: 'Inlay Craft',
    description: 'A luxury set of three nesting tables, featuring traditional Pakistani wood and brass wire inlay designs on each table surface, showcasing high-level artisan craftsmanship.',
    dimensions: 'Large: 56cm x 40cm x 52cm H / Medium: 46cm x 36cm x 47cm H / Small: 36cm x 32cm x 42cm H',
    weight: '24 kg',
    buildTime: '4-5 Weeks',
    joinery: 'Double-pivoted block support frame with flush wood-on-wood sliding.'
  },
  {
    id: 'outdoor-chase-ship-chair',
    name: 'Shisham Wood Chase Ship Bedroom Chair',
    category: 'outdoor',
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
    id: 'outdoor-carving-high-back-set',
    name: 'Carving Shisham Wood High Back Bedroom Chair Set',
    category: 'outdoor',
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
    id: 'outdoor-bergere-inlay-set',
    name: 'Bergere Sissoo Wood Inlay Work Bedroom Chair Set',
    category: 'outdoor',
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
    id: 'outdoor-prince-red-velvet-chair',
    name: 'Sheesham Wood High Back Prince Red Velvet Bedroom Chair',
    category: 'outdoor',
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
    id: 'outdoor-heart-back-deewan',
    name: 'Heart Back Shisham Made 3 Seater Deewan',
    category: 'outdoor',
    price: 120000,
    woodType: 'Sheesham',
    materialDetails: 'Pure seasoned Shisham (Indian Rosewood) frame with luxury jacquard upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Heart-Back-Shesham-Made-Dewan-600x420.jpg',
    badge: 'Exclusive',
    description: 'Crafted with an elegant open heart-shaped backrest carved entirely from solid Sheesham timber. This three-seater deewan provides premium seating while serving as a majestic bedroom statement.',
    dimensions: '185cm L x 72cm W x 92cm H',
    weight: '44 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Traditional continuous mortise-and-tenon back and leg integration.'
  },
  {
    id: 'outdoor-vintage-rocking-chair',
    name: 'Shisham Wood Vintage Ladder Rocking Chair',
    category: 'outdoor',
    price: 38000,
    woodType: 'Sheesham',
    materialDetails: 'Premium solid seasoned Shisham (Indian Rosewood) frame with high-gloss polished finish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Sissoo-Wood-Rocking-Chair-600x420.png',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Sissoo-Wood-Rocking-Chair-600x420.png'
    ],
    description: 'Beautifully balanced hand-carved rocking chair featuring a supportive high-slat ladder-back design, turned spindle wood details, and smooth contoured rockers.',
    dimensions: '105cm H x 62cm W x 82cm D',
    weight: '16 kg',
    buildTime: '4-5 Weeks',
    joinery: 'Precision pocket screws and interlocking doweled joints for quiet, sturdy rocking.'
  },
  {
    id: 'outdoor-royal-blue-settee',
    name: 'Royal Blue High Gloss Deco Sissoo Wood Settee',
    category: 'outdoor',
    price: 75000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Sissoo (Sheesham) Wood, high-gloss navy-blue deco lacquer, premium royal velvet cushioning',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/High-Deco-Gloss-Setty-for-Bedroom-Launge-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/High-Deco-Gloss-Setty-for-Bedroom-Launge-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Deco-Solid-Shisham-Wood-Deewan-600x420.jpg'
    ],
    badge: 'High Gloss',
    description: 'An elegant luxury settee/deewan featuring high-gloss navy-blue deco lacquer over solid Sissoo wood framework, complemented with deep tufted royal blue velvet seating.',
    dimensions: '160cm L x 60cm W x 65cm H',
    weight: '28 kg',
    buildTime: '4-6 Weeks',
    joinery: 'Integrated mortise-and-tenon corner blocks, wood pegged.'
  },
  {
    id: 'outdoor-moora-set',
    name: 'Chinioti Crafted Shisham Wood Deco Moora Chair Set',
    category: 'outdoor',
    price: 42000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood, silver-leaf highlight lacquer coating, velvet cushioning',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Chinioti-Crafted-Moora-Set-600x420.jpg',
    badge: 'Craft Classic',
    description: 'An elegant pair of traditionally hand-turned Chinioti moora stool chairs with custom floral carving details and a gorgeous silver deco polish highlighting deep Sheesham grains. Perfect addition to your drawing room or luxury lounge.',
    dimensions: 'Stools: 48cm Diameter x 50cm H',
    weight: '14 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Traditional joinery with solid round pegging.'
  },
  {
    id: 'outdoor-embossed-motif-deewan',
    name: 'Sheesham Wood Embossed Motif Velvet Deewan',
    category: 'outdoor',
    price: 85000,
    woodType: 'Sheesham',
    materialDetails: 'Hand-selected seasoned premium Sheesham (Indian Rosewood), master embroidered motif velvet upholstery, high gloss finish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Embroidered-Poshish-Deewan-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Embroidered-Poshish-Deewan-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Sissoo-Wood-Embroidered-Poshish-Deewan-600x420.jpg'
    ],
    badge: 'New Launch',
    description: 'A gorgeous low-floor traditional deewan handcrafted from seasoned solid Sheesham wood. Adorned with detailed hand-carving and upholstered in premium velvet with embossed/embroidered back motifs.',
    dimensions: '185cm L x 72cm W x 82cm H',
    weight: '45 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Traditional mortise-and-tenon design.'
  },
  {
    id: 'outdoor-kikar-puffy-settee',
    name: 'Acacia/ Kikar Wood 2 Seater Puffy Settee',
    category: 'outdoor',
    price: 48000,
    woodType: 'Oak',
    materialDetails: 'Seasoned high-density solid Acacia (Kikar) wood framework, plush wear-resistant velvet fabric, premium Molty Foam',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/2-Seater-Foot-Rest-Puffy-Seat-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/2-Seater-Foot-Rest-Puffy-Seat-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Kikar-Wood-Furniture-600x420.jpg'
    ],
    badge: 'Comfort Seating',
    description: 'A highly durable and beautifully quilted 2-seater footrest puffy settee. Crafted from premium solid Kikar wood with a reinforced base, perfect as a stylish footrest or complementary seating.',
    dimensions: '110cm L x 50cm W x 45cm H',
    weight: '18 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Slotted tongue-and-groove seat framing with structural corner blocking.'
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
    id: 'kalyar-dining-set',
    name: 'Kalyar Premium Dining Set',
    category: 'dining',
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
    category: 'bedroom',
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
    category: 'living-room',
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
    category: 'outdoor',
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
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Mate-Polish-Bedroom-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Mate-Polish-Dressing-600x420.jpg'
    ],
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
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Akhroti-Walnut-Bedroom-Furniture-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Modern-Bed-Design-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Trapezium-Shape-Furniture-600x420.jpg'
    ],
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
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Stick-Pattern-Furniture-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Make-Up-Console-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Wooden-Crafted-Furniture-600x420.jpg'
    ],
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
    name: 'Chinioti Crafted Silver Deco Moora Chair Set',
    category: 'bedroom',
    price: 42000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood, silver-leaf highlight lacquer coating, velvet cushioning',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Chinioti-Crafted-Moora-Set-600x420.jpg',
    badge: 'Craft Classic',
    description: 'An elegant pair of traditionally hand-turned Chinioti moora stool chairs with custom floral carving details and a gorgeous silver deco polish highlighting deep Sheesham grains.',
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
      'https://furnitureholz.com/wp-content/uploads/2021/04/Versace-Wood-Crafted-Bed-Back-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/2-Mirror-Dressing-Console-1-600x420.jpg'
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
      'https://furnitureholz.com/wp-content/uploads/2021/04/Oak-Wood-Texture-Bed-600x420.jpg'
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
      'https://furnitureholz.com/wp-content/uploads/2021/04/Holz-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/High-Gloss-Furniture-600x400.jpg'
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
    category: 'outdoor',
    price: 295000,
    woodType: 'Sheesham',
    materialDetails: 'Selected seasoned Sissoo Wood framing with dense high-grade panels, white deco lacquer and velvet headboard',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Velvet-Poshish-Low-Rise-Heaven-High-Bedroom-Bridal-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Velvet-Poshish-Low-Rise-Heaven-High-Bedroom-Bridal-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Quilted-Foot-Back-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Deco-Paint-Furniture-600x420.jpg'
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
    category: 'outdoor',
    price: 280000,
    woodType: 'Walnut',
    materialDetails: 'Solid seasoned Walnut wood structure, intricate net-pattern weaving headboard, matte polish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Mate-Polish-Furniture-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Mate-Polish-Furniture-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/2-Side-Mirror-Makeup-Dressing-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Side-Tables-600x420.jpg'
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
    category: 'outdoor',
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
    category: 'outdoor',
    price: 290000,
    woodType: 'Sheesham',
    materialDetails: 'Solid wood structure, all-over thick quilted velvet poshish wraps, vintage hand-polished details',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Fuzon-Designer-Furniture-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Fuzon-Designer-Furniture-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Velvet-Foam-Quilted-Poshish-Bed-600x420.jpg',
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
    category: 'outdoor',
    price: 285000,
    woodType: 'Walnut',
    materialDetails: 'Combination of solid Persian Walnut and seasoned Shisham wood, premium two-tone luster coat',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Circle-Walnut-Wooden-Bridal-Bedroom-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Circle-Walnut-Wooden-Bridal-Bedroom-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/High-Gloss-Bed-Side-Table-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Double-Mirror-Walnut-Wood-Furniture-600x420.jpg'
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
    category: 'outdoor',
    price: 295000,
    woodType: 'Walnut',
    materialDetails: 'Seasoned Persian Walnut wood structure, high-gloss natural polish, elegant curved console vanity',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Walnut-Wood-Classic-Bedroom-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Walnut-Wood-Classic-Bedroom-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Round-Shape-Wooden-Dressing-Console-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Wooden-Bed-Designs-600x420.jpg',
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
  },
  {
    id: 'dining-moora-set',
    name: 'Chinioti Crafted Silver Deco Moora Chair Set',
    category: 'dining',
    price: 42000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood, silver-leaf highlight lacquer coating, velvet cushioning',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Chinioti-Crafted-Moora-Set-600x420.jpg',
    badge: 'Craft Classic',
    description: 'An elegant pair of traditionally hand-turned Chinioti moora stool chairs with custom floral carving details and a gorgeous silver deco polish highlighting deep Sheesham grains.',
    dimensions: 'Stools: 48cm Diameter x 50cm H',
    weight: '14 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Traditional joinery with solid round pegging.'
  },
  {
    id: 'dining-classic-velvet-chairs',
    name: 'Classic Velvet Shisham Wood Bedroom Chair Set',
    category: 'dining',
    price: 110000,
    woodType: 'Sheesham',
    materialDetails: 'Pure seasoned Shisham (Indian Rosewood) frame, high-density comfort foam, luxury velvet cushioning',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Vintage-Bedroom-Chair-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Vintage-Bedroom-Chair-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Sisso-Wood-Chairs-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Velvet-Cushioning-1-600x420.jpg'
    ],
    badge: 'Classic Vintage',
    description: 'An exceptionally crafted vintage-style bedroom chair set made from premium solid seasoned Shisham wood, featuring custom-turned legs, elegant backrest hand-carvings, and plush luxury velvet cushioning.',
    dimensions: 'Chairs: 72cm W x 68cm D x 110cm H / Table: 50cm Diameter x 55cm H',
    weight: '44 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Traditional mortise-and-tenon frame with round peg locks.'
  },
  {
    id: 'dining-crown-jewel-deco-chairs',
    name: 'Crown Jewel Solid Wood Golden Deco Bedroom Chair Set',
    category: 'dining',
    price: 125000,
    woodType: 'Sheesham',
    materialDetails: 'Solid wood frame with high-gloss premium golden deco paint and royal velvet cushioning',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Crown-Bedroom-High-Gloss-Deco-Chairs-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Crown-Bedroom-High-Gloss-Deco-Chairs-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Crafted-Bedroom-Chair-600x420.jpg'
    ],
    badge: 'Crown Deco',
    description: 'A truly royal addition. Hand-sculpted crown details on high-gloss golden deco painted solid wood, complete with masterfully tailored plush velvet poshish seating.',
    dimensions: 'Chairs: 75cm W x 70cm D x 115cm H / Table: 52cm Diameter x 55cm H',
    weight: '46 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Heavy reinforced double-doweled frame with glued corner blocks.'
  },
  {
    id: 'dining-black-golden-8-chair',
    name: 'Black & Golden 8 Chairs Solid Acacia Wood Fancy Dining Table Set',
    category: 'dining',
    price: 195000,
    woodType: 'Oak',
    materialDetails: 'Solid Acacia Wood with high gloss black finish and premium gold leafing accents',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Acacia-Dining-Room-Furniture-600x420.jpg',
    badge: 'Special Edition',
    description: 'A breathtaking luxury dining set that commands presence. Features eight stunning black lacquered chairs decorated with gold leafing details and upholstered in premium high-density cushioning, centered around a premium solid wood table.',
    dimensions: 'Table: 240cm L x 110cm W x 78cm H / Chairs: 48cm W x 105cm H',
    weight: '150 kg',
    buildTime: '7-9 Weeks',
    joinery: 'Double-pinned mitered framing and heavy underframe bracket supports.'
  },
  {
    id: 'dining-triangular-acacia',
    name: 'Tri-Angular Solid Acacia Wood Table With 6 Carved Chairs',
    category: 'dining',
    price: 165000,
    woodType: 'Oak',
    materialDetails: 'Solid seasoned Acacia Wood, hand-sculpted rustic design',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Triangular-6-Chairs-Dining-Table-Set-600x420.jpg',
    badge: 'SOLD OUT',
    description: 'A gorgeous tri-angular rustic-style solid Acacia wood dining table with six hand-carved, comfortable high-back matching chairs. Crafted with a premium protective lacquer coat.',
    dimensions: 'Table: 150cm Diagonal x 76cm H / Chairs: 46cm W x 102cm H',
    weight: '110 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Traditional mortise-and-tenon interlocking frame with premium wood pegging'
  },
  {
    id: 'dining-shisham-inlay-8',
    name: '8 Chairs Shisham Wood Inlay Top Dining Table Set',
    category: 'dining',
    price: 195000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood, linear ivory-wood inlay work',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Sissoo-Wood-Glass-Top-Fancy-Dining-Table-600x420.jpg',
    badge: 'Inlay Special',
    description: 'A magnificent, grand 8-chair dining table set crafted from premier aged Shisham wood. The tabletop features exquisite, hand-laid linear inlay work depicting traditional floral motifs.',
    dimensions: 'Table: 240cm L x 110cm W x 78cm H / Chairs: 48cm W x 105cm H',
    weight: '145 kg',
    buildTime: '7-9 Weeks',
    joinery: 'Interlocking mitered corner framing with heavy underframe bracket supports'
  },
  {
    id: 'dining-ladder-sticks-glass',
    name: 'Ladder Sticks Acacia Wood Glass Top Dining Table & 6 Chairs Set',
    category: 'dining',
    price: 155000,
    woodType: 'Oak',
    materialDetails: 'Solid Acacia Wood frame, premium thick glass top',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Acacia-Dining-Room-Furniture-600x420.jpg',
    badge: 'Best Seller',
    description: 'Combining mid-century elegance with contemporary design. This set features a high-grade tempered glass top supported by beautiful ladder-stick Acacia wood base framing, paired with six ergonomically curved ladder-back chairs.',
    dimensions: 'Table: 180cm L x 90cm W x 76cm H / Chairs: 45cm W x 98cm H',
    weight: '115 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Mortise-and-tenon vertical stick joints, pegged horizontal support bars'
  },
  {
    id: 'dining-carved-couch-settee',
    name: 'Carved Sheeham Wood Bedroom Couch Settee',
    category: 'dining',
    price: 88000,
    woodType: 'Sheesham',
    materialDetails: 'Premium handcarved solid Sheesham wood framed deewan settee',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Settee-Couch-600x420.jpg',
    badge: 'Masterpiece',
    description: 'An exquisite long bed-end settee or luxury deewan couch, handcrafted from solid Sheesham wood. Adorned with beautiful leaf/grape-motif baroque carvings along the entire wooden base with gold-leaf gilding highlights.',
    dimensions: '155cm L x 55cm W x 52cm H',
    weight: '30 kg',
    buildTime: '4-6 Weeks',
    joinery: 'Traditional joinery with solid round pegging'
  },
  {
    id: 'dining-circle-platted-deewan',
    name: 'Sheeham Wood Circle Platted Self Crafted Deewan',
    category: 'dining',
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
    id: 'dining-gourmet-shisham-6-seater',
    name: 'Gourmet Shisham Wood 6 Seater High Living Sofa Set',
    category: 'dining',
    price: 165000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood frame, high-resiliency foam, and premium gold upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Gourmet-Sofa-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Gourmet-Sofa-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Embroidered-Back-Sofa-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Moustache-Back-Sofa-Set-600x420.jpg'
    ],
    badge: 'High Living',
    description: 'A grand 6-seater sofa set masterfully carved from premium solid Sheesham wood. Highly stylized with gourmet embroidered patterns on the backrests, creating a dramatic, luxurious presentation for your living or dining halls.',
    dimensions: '3-Seater: 220cm L / 2-Seater: 170cm L / 1-Seater: 110cm L (All: 88cm D x 95cm H)',
    weight: '140 kg',
    buildTime: '8-11 Weeks',
    joinery: 'Traditional mortise lock frames with solid wood tension-pegged braces.'
  },
  {
    id: 'dining-golden-deco-crown-7-seater',
    name: 'Golden Deco Crown Shisham Wood 7 Seater Sofa Set',
    category: 'dining',
    price: 195000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood frame with handcarved golden deco paint, premium foam, and luxury upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Jacquard-Velvet-Upholstery-Sofa-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Jacquard-Velvet-Upholstery-Sofa-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Golden-Crown-Shisham-Wood-Sofa-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Deco-Paint-Furniture-IN-Faisalabad-600x420.jpg'
    ],
    badge: 'Royal Crown',
    description: 'Exquisite 7-seater sofa set built on premium solid Shisham wood, featuring a majestic hand-carved crown with premium gold deco paint highlights and royal velvet jacquard upholstery.',
    dimensions: '3-Seater: 218cm L x 88cm D x 105cm H / 2-Seater: 168cm L / Single: 108cm L',
    weight: '160 kg',
    buildTime: '8-12 Weeks',
    joinery: 'Heavy dual-locked Mortise and Tenon frame joinery with reinforced core structural brackets.'
  },
  {
    id: 'dining-smart-living-sofa-bed',
    name: 'Smart Living Solid Acacia Wood Sofa Cum Bed',
    category: 'dining',
    price: 98000,
    woodType: 'Oak',
    materialDetails: 'Pure seasoned Solid Acacia Wood frame with luxury plush suede upholstery and multi-position folding mechanism',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Sofa-Cum-Bed-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Sofa-Cum-Bed-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Smart-Home-Furniture-600x420.jpg'
    ],
    badge: 'Space Saver',
    description: 'Smart and versatile. Crafted from seasoned solid Acacia wood, this dual-purpose sofa easily transforms into a spacious bed. Perfect for contemporary spaces, lounges, and guest rooms.',
    dimensions: 'Sofa: 200cm L x 90cm D x 85cm H / Bed: 200cm L x 150cm W x 45cm H',
    weight: '75 kg',
    buildTime: '4-6 Weeks',
    joinery: 'Hidden high-grade steel hinge mechanisms bolted directly to seasoned solid wood frame.'
  },
  {
    id: 'dining-smart-living-10-seater-corner',
    name: 'Smart Living 10 Seater Solid Acacia Wood Jute U Corner Sofa',
    category: 'dining',
    price: 210000,
    woodType: 'Oak',
    materialDetails: 'Solid Acacia Wood framing with durable premium textured Jute-blend upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/10-Seat-Corner-Sofa-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/10-Seat-Corner-Sofa-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Acacia-Kikar-Wood-Corner-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Bed-Sofa-Set-600x420.jpg'
    ],
    badge: 'Grand Corner',
    description: 'A sprawling 10-seater U-shaped corner sectional built on an indestructible solid seasoned Acacia frame. Hand-upholstered in premium organic jute fabric for a cozy, rustic-modern feel.',
    dimensions: 'Left Side: 240cm L / Center Back: 340cm L / Right Side: 200cm L (All: 85cm D x 78cm H)',
    weight: '155 kg',
    buildTime: '6-9 Weeks',
    joinery: 'Interlocking sectional connectors with heavy corner blocks, glued and screwed.'
  },
  {
    id: 'dining-sea-green-ottoman',
    name: 'Sea Green Round Cube Ottoman Puffy Set',
    category: 'dining',
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
    id: 'dining-velvet-wingback-chairs',
    name: 'Full Velvet Upholstery Wingback Sissoo Wood Bedroom Chairs Set',
    category: 'dining',
    price: 95000,
    woodType: 'Sheesham',
    materialDetails: 'Seasoned Sissoo (Sheesham) wood core with high-grade velvet upholstery and master-carved accents',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Full-Back-Poshish-Sheesham-Crafted-Bedroom-Chair-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Full-Back-Poshish-Sheesham-Crafted-Bedroom-Chair-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Jacquard-Motif-Seating-600x420.jpg'
    ],
    badge: 'Velvet Luxury',
    description: 'A premium bedroom/dining reading corner set with two classic high-back wing chairs upholstered in plush full velvet, paired with a matching hand-turned pedestal coffee table.',
    dimensions: '75cm W x 72cm D x 110cm H (Chairs) / 50cm Diameter x 55cm H (Table)',
    weight: '45 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Double-pinned round mortise frame with high-tension wire-web support.'
  },
  {
    id: 'dining-pizza-shisham-table',
    name: 'Low Rise Round Pizza Solid Shisham Wood Dining Table Set',
    category: 'dining',
    price: 135000,
    woodType: 'Sheesham',
    materialDetails: '100% Solid Seasoned Shisham wood, glass table inlay, hand-lacquered finish (Includes 1 Table + 4 Chairs)',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Dining-Table-With-Four-Chairs-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Dining-Table-With-Four-Chairs-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Solid-Wood-Round-Dining-Table-600x420.jpg'
    ],
    badge: 'Modern Craft',
    description: 'A delightfully unique low-profile dining concept. Crafted from gorgeous seasoned solid Shisham, featuring a pizza-slice split aesthetic on the round table surface paired with 4 beautifully matched low-back chairs.',
    dimensions: 'Table: 110cm Diameter x 65cm H, Chairs: 50cm W x 48cm D x 75cm H',
    weight: '68 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Hidden radial tongue-and-groove top assembly with heavy brace legs.'
  },
  {
    id: 'dining-curved-acacia-6-seater',
    name: 'Curved Acacia Wood 6 Seater Sofa Set',
    category: 'dining',
    price: 145000,
    woodType: 'Oak',
    materialDetails: 'Premium seasoned Acacia (Kikar) wood, high-density comfort foam, luxury neutral upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/6-Seater-Kikar-Wood-Curved-Sofa-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/6-Seater-Kikar-Wood-Curved-Sofa-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/3-Seater-Modern-Sofa-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Solid-Wood-Curved-Sofa-Set-600x420.jpg'
    ],
    badge: 'Curved Modern',
    description: 'A beautiful 6-seater sofa set boasting gorgeous organic curved lines. Constructed using selected heavy-duty Acacia wood, combining mid-century modern flow with raw subcontinental timber strength.',
    dimensions: '3-Seater: 205cm x 88cm x 85cm, 2-Seater: 155cm x 88cm x 85cm, 1-Seater: 100cm x 88cm x 85cm',
    weight: '105 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Double-doweled frame with continuous curved solid-timber rails.'
  },
  {
    id: 'dining-chesterfield-silver-6-seater',
    name: 'Chester Field Hop In Silver 6 Seater Sofa Set',
    category: 'dining',
    price: 185000,
    woodType: 'Sheesham',
    materialDetails: 'Plush silver quilted fabric, solid Sheesham inner frame and custom-turned legs',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/6-Seater-Chester-Sofa-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/6-Seater-Chester-Sofa-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/2-Seat-Sofa-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Quilted-Low-Rise-Back-Sofa-600x420.jpg'
    ],
    badge: 'Elegant Silver',
    description: 'A breathtaking 6-seater silver Chesterfield set. Impeccably finished with premium high-density quilted foam, deep buttoning, and traditional low-rise rolled arms, supported by high-strength Sheesham feet.',
    dimensions: '3-Seater: 215cm x 90cm x 76cm, 2-Seater: 165cm x 90cm x 76cm, 1-Seater: 110cm x 90cm x 76cm',
    weight: '115 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Individually pegged leg anchors with high-tension steel coil spring support.'
  },
  {
    id: 'dining-royal-blue-deco-settee',
    name: 'Royal Blue High Gloss Deco Sissoo Wood Settee',
    category: 'dining',
    price: 78000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Sissoo wood (Sheesham) structure, royal blue velvet, luxury high-gloss deco finish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/High-Deco-Gloss-Setty-for-Bedroom-Launge-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/High-Deco-Gloss-Setty-for-Bedroom-Launge-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Deco-Solid-Shisham-Wood-Deewan-600x420.jpg'
    ],
    badge: 'Deco Glamour',
    description: 'Make a vibrant statement. Handcrafted from fine seasoned Sissoo wood, this settee is finished in ultra high-gloss blue deco lacquer. Ideal for bedrooms, entryways, or formal dining rooms.',
    dimensions: '160cm L x 65cm W x 80cm H',
    weight: '32 kg',
    buildTime: '4-6 Weeks',
    joinery: 'Tightly locked mortise-and-tenon corner blocks.'
  },
  {
    id: 'dining-chesterfield-l-shape-acacia',
    name: 'Chester Fill L Shape 7 Seater Velvet Full Gauge Solid Acacia Wood Sofa Set',
    category: 'dining',
    price: 165000,
    woodType: 'Oak',
    materialDetails: 'Heavy full gauge solid Acacia wood framework, royal blue premium velvet upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Royal-Blue-Velvet-L-SHAPE-Sofa-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Royal-Blue-Velvet-L-SHAPE-Sofa-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Molty-Foam-Sofa-Set-600x420.jpg'
    ],
    badge: 'Royal Velvet',
    description: 'A stunning 7-seater velvet Chesterfield L-shape sectional. Constructed with extra thick, heavy full-gauge seasoned Acacia wood frame and Molty-foam cushioning for maximum seating luxury.',
    dimensions: 'Corner setup: 265cm L x 215cm W x 80cm H',
    weight: '120 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Dual-reinforced corner blocking, heavy lag screws, and dowels.'
  },
  {
    id: 'dining-versace-box-settee',
    name: 'Versace 2 Seater Velvet Luxury Box Settee',
    category: 'dining',
    price: 58000,
    woodType: 'Sheesham',
    materialDetails: 'Solid wood interior structure, luxury gold-patterned velvet, laser-cut metallic gold trim',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Box-2-Seater-Wood-Puffy-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Box-2-Seater-Wood-Puffy-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Laser-Cut-Versace-All-Over-Puffy-600x420.jpg'
    ],
    badge: 'Designer Box',
    description: 'Luxurious two-seater designer box settee. Features bespoke Versace-inspired laser-cut golden borders and plush quilted cream velvet upholstery.',
    dimensions: '125cm L x 55cm W x 50cm H',
    weight: '22 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Internal box-lap corner joints with heavy metal corner plating.'
  },
  {
    id: 'sets-high-living-l-shape-sofa',
    name: 'High Living L Shape 7 Seater Velvet Full Gauge Solid Wood Sofa',
    category: 'living-room',
    price: 195000,
    woodType: 'Oak',
    materialDetails: 'Heavy solid Acacia wood skeleton, premium high-resiliency Molty Foam, velvet upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/7-Seater-Corner-L-Shape-Sofa-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/7-Seater-Corner-L-Shape-Sofa-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Molty-Foam-Sofa-Set-600x420.jpg'
    ],
    badge: 'L-Shape',
    description: 'A robust Chesterfield L-shape 7-seater sectional. Features crimson red tufted velvet wrap over high-density molty foam and a massive solid Acacia framework.',
    dimensions: '265cm x 210cm W x 82cm H',
    weight: '140 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Heavy-gauge corner blocks, glued, screwed, and double-doweled.'
  },
  {
    id: 'sets-chinioti-silver-moora',
    name: 'Chinioti Crafted Silver Deco Moora Chair Set',
    category: 'living-room',
    price: 42000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood, silver-leaf highlight lacquer coating, velvet cushioning',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Chinioti-Crafted-Moora-Set-600x420.jpg',
    badge: 'Craft Classic',
    description: 'An elegant pair of traditionally hand-turned Chinioti moora stool chairs with custom floral carving details and a gorgeous silver deco polish highlighting deep Sheesham grains.',
    dimensions: 'Stools: 48cm Diameter x 50cm H',
    weight: '14 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Interlocking wooden spindles with tight glue-set joints and dowel pegs.'
  },
  {
    id: 'sets-versace-inlay-net-set',
    name: 'Versace Inlay Crafted Sissoo Wood 3 Table Net Set',
    category: 'living-room',
    price: 45000,
    woodType: 'Sheesham',
    materialDetails: 'Handcarved solid heartwood Sheesham wood with brass/ivory-wood inlaid patterns',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Plastic-Wooden-Copper-Inlay-Work-3-Table-Set-600x420.jpg',
    badge: 'Inlay Craft',
    description: 'A luxury set of three nesting tables, featuring traditional Pakistani wood and brass wire inlay designs on each table surface, showcasing high-level artisan craftsmanship.',
    dimensions: 'Large: 56cm x 40cm x 52cm H / Medium: 46cm x 36cm x 47cm H / Small: 36cm x 32cm x 42cm H',
    weight: '24 kg',
    buildTime: '4-5 Weeks',
    joinery: 'Double-pivoted block support frame with flush wood-on-wood sliding.'
  },
  {
    id: 'sets-high-living-sissoo-8-chair-dining',
    name: 'High Living Sissoo Crafted Wood 8 Chair Fancy Dining Table Set',
    category: 'dining',
    price: 195000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood, linear ivory-wood inlay work',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Sissoo-Wood-Glass-Top-Fancy-Dining-Table-600x420.jpg',
    badge: 'Inlay Special',
    description: 'A magnificent, grand 8-chair dining table set crafted from premier aged Shisham wood. The tabletop features exquisite, hand-laid linear inlay work depicting traditional floral motifs.',
    dimensions: 'Table: 240cm L x 110cm W x 78cm H / Chairs: 48cm W x 105cm H',
    weight: '145 kg',
    buildTime: '7-9 Weeks',
    joinery: 'Interlocking mitered corner framing with heavy underframe bracket supports'
  },
  {
    id: 'sets-carving-high-back-set',
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
    id: 'sets-bergere-inlay-set',
    name: 'Bergere Sissoo Wood Inlay Work Bedroom Chair Set',
    category: 'bedroom',
    price: 125000,
    woodType: 'Sheesham',
    materialDetails: 'A-grade Sissoo Wood (Sheesham) with micro ivory-wood floral inlay (Includes 2 Chairs + 1 Table)',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Bergere-Chair-Set-In-Pakistan-600x420.jpg',
    badge: 'Bespoke',
    description: 'Styled with French-classical Bergere influence, this bedroom chair set features detailed brass/ivory-wood linear inlay patterns across the backrests and table-tops. Fitted with luxury brocade upholstery.',
    dimensions: '68cm W x 64cm D x 95cm H (Chairs) / 48cm Diameter x 52cm H (Table)',
    weight: '42 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Sliding blind dowels, curved leg-to-seat continuous mortise.'
  },
  {
    id: 'sets-prince-red-velvet-chair',
    name: 'Sheesham Wood High Back Prince Red Velvet Bedroom Chair',
    category: 'sets',
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
    id: 'sets-fancy-high-gloss-centre-table',
    name: 'Fancy High Gloss Centre Table',
    category: 'sets',
    price: 45000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood, high gloss lacquer finish with premium golden borders',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/High-Gloss-Bed-Side-Table-600x420.jpg',
    badge: 'High Gloss',
    description: 'An elegant and opulent center table crafted from select premium Shisham wood. Features a spectacular high-gloss lacquer coating with hand-applied golden border accents. Perfect centerpiece for luxurious drawing rooms or lounges.',
    dimensions: '120cm L x 65cm W x 48cm H',
    weight: '24 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Traditional mortise-and-tenon frame lock with heavy-duty hidden corner brackets.'
  },
  {
    id: 'sets-pizza-dining-table',
    name: 'Low Rise Round Pizza Solid Shisham Wood Dining Table Set',
    category: 'outdoor',
    price: 135000,
    woodType: 'Sheesham',
    materialDetails: 'Seasoned premium Shisham wood, high-gloss protective lacquer coating',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Dining-Table-With-Four-Chairs-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Dining-Table-With-Four-Chairs-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Solid-Wood-Round-Dining-Table-600x420.jpg'
    ],
    badge: 'Pizza Round',
    description: 'An intimate and cozy low-rise dining experience. Crafted with a beautiful pizza-slice wood-grain top configuration and four perfectly nested low-back chairs.',
    dimensions: 'Table: 110cm Diameter x 65cm H / Chairs: 46cm W x 46cm D x 75cm H',
    weight: '65 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Radial spline top joinery, slotted tongue-and-groove chair seat framing.'
  },
  {
    id: 'sets-trapezium-curved-bed-set',
    name: 'Trapezium Curved Crafted Walnut Wood Bed & Dressing Set',
    category: 'outdoor',
    price: 295000,
    woodType: 'Walnut',
    materialDetails: 'Solid Walnut heartwood structure with premium smooth satin coat finish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Akhroti-Walnut-Bedroom-Furniture-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Akhroti-Walnut-Bedroom-Furniture-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Modern-Bed-Design-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Trapezium-Shape-Furniture-600x420.jpg'
    ],
    badge: 'Masterpiece',
    description: 'Stunning modern curves with organic geometry. Handcrafted from rich Persian Walnut wood, this premium bed and dressing console features custom trapezium curves and detailed wood carvings.',
    dimensions: 'Bed: 220cm L x 205cm W x 140cm H / Dresser: 135cm L x 45cm D x 190cm H',
    weight: '190 kg',
    buildTime: '8-11 Weeks',
    joinery: 'Interlocking double-miter jointing with heavy-duty structural steel fasteners.'
  },
  {
    id: 'sets-ladder-stick-bed-set',
    name: 'Ladder Stick Self Crafted Sissoo Wood High Gloss Bed & Dressing Set',
    category: 'outdoor',
    price: 245000,
    woodType: 'Sheesham',
    materialDetails: 'Premium selected seasoned Sissoo (Sheesham) Wood structure with ultra-clear high-gloss coat',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Stick-Pattern-Furniture-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Stick-Pattern-Furniture-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Make-Up-Console-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Wooden-Crafted-Furniture-600x420.jpg'
    ],
    badge: 'Unique Design',
    description: 'A self-crafted design masterpiece showcasing a beautiful vertical stick-pattern ladder headboard. Expertly polished in super high gloss premium luster, accentuating the golden-brown Sheesham grains.',
    dimensions: 'Bed: 212cm L x 195cm W x 130cm H / Dresser: 120cm L x 42cm D x 185cm H',
    weight: '175 kg',
    buildTime: '7-9 Weeks',
    joinery: 'Hand-grooved tongue-and-groove stick slat panels, heavy double-doweled frame support.'
  },
  {
    id: 'sets-curved-acacia-sofa',
    name: 'Curved Acacia Wood 6 Seater Sofa Set',
    category: 'outdoor',
    price: 145000,
    woodType: 'Oak',
    materialDetails: 'Acacia Wood frame with premium foam and high-grade breathable jacquard upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/6-Seater-Kikar-Wood-Curved-Sofa-Set-600x420.jpg',
    badge: 'Elegant Curves',
    description: 'A majestic 6-seater sofa set built on seasoned Acacia (Kikar) wood. Features elegantly curved backrests, luxury fabric cushioning, and hand-finished solid timber detailing.',
    dimensions: '3-Seater: 210cm L x 88cm D / 2-Seater: 160cm L / Single: 105cm L',
    weight: '125 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Curved laminate timber bands, heavy doweled joints with internal steel plates.'
  },
  {
    id: 'sets-chesterfield-silver-sofa',
    name: 'Chester Field Hop In Silver 6 Seater Sofa Set',
    category: 'outdoor',
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
    id: 'sets-inlay-cobra-sofa',
    name: 'Inlay Cobra Shisham Wood High Gloss 7 Seater Sofa Set',
    category: 'outdoor',
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
    id: 'sets-chinioti-shisham-moora',
    name: 'Chinioti Crafted Shisham Wood Deco Moora Chair Set',
    category: 'outdoor',
    price: 42000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood, silver-leaf highlight lacquer coating, velvet cushioning',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Shisham-Wood-Chinioti-Crafted-Moora-Set-600x420.jpg',
    badge: 'Craft Classic',
    description: 'An elegant pair of traditionally hand-turned Chinioti moora stool chairs with custom floral carving details and a gorgeous silver deco polish highlighting deep Sheesham grains. Perfect addition to your drawing room or luxury lounge.',
    dimensions: 'Stools: 48cm Diameter x 50cm H',
    weight: '14 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Traditional joinery with solid round pegging.'
  },
  {
    id: 'sets-art-of-craftsman-bedroom',
    name: 'The Art of Craftsman Hybrid Fancy Bedroom Set',
    category: 'outdoor',
    price: 285000,
    woodType: 'Oak',
    materialDetails: 'Solid wood frame mixed with ultra-dense MDF panels, masterfully sprayed with high-gloss white and gold deco lacquer',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Hybrid-Wood-Fiber-Lasani-Bedroom-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Hybrid-Wood-Fiber-Lasani-Bedroom-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Deco-Railing-Console-Drawer-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Versace-Wood-Crafted-Bed-Back-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/2-Mirror-Dressing-Console-1-600x420.jpg'
    ],
    badge: 'Ustad Signature',
    description: 'The masterpiece of true Pakistani craftsmanship. Features high-quality hybrid premium wood combined with high-grade density fiberboard, finished in stunning high-gloss deco white with golden trim. Includes king bed, gorgeous railing console dresser, and wardrobe.',
    dimensions: 'Bed: 215cm L x 200cm W x 145cm H / Dresser: 140cm L x 45cm D x 195cm H',
    weight: '210 kg',
    buildTime: '9-12 Weeks',
    joinery: 'Interlocking steel bracket rails with high-tension locking pins, doweled cabinetry.'
  },
  {
    id: 'sets-new-1',
    name: 'Elegant Solid Shisham Wood Coffee Table Set',
    category: 'sets',
    price: 35000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham wood, high-gloss lacquer finish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/High-Gloss-Bed-Side-Table-600x420.jpg',
    badge: 'New Arrival',
    description: 'Beautiful coffee table set crafted from solid Shisham wood. Perfect for modern living spaces.',
    dimensions: '100cm L x 50cm W x 45cm H',
    weight: '20 kg',
    buildTime: '2-3 Weeks',
    joinery: 'Mortise-and-tenon'
  },
  {
    id: 'sets-new-2',
    name: 'Modern Minimalist Dining Table Set',
    category: 'sets',
    price: 95000,
    woodType: 'Sheesham',
    materialDetails: 'Solid Shisham wood, natural polish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Dining-Table-With-Four-Chairs-600x420.jpg',
    badge: 'Popular',
    description: 'Minimalist dining set, perfect for modern dining rooms.',
    dimensions: '120cm L x 80cm W x 75cm H',
    weight: '50 kg',
    buildTime: '4-6 Weeks',
    joinery: 'Doweled and glued'
  },
  {
    id: 'sets-new-3',
    name: 'Luxurious King Bed Set',
    category: 'sets',
    price: 250000,
    woodType: 'Walnut',
    materialDetails: 'Solid Walnut, velvet upholstery',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Modern-Bed-Design-600x420.jpg',
    badge: 'Luxury',
    description: 'A luxurious bed set for a comfortable and stylish bedroom.',
    dimensions: '200cm L x 180cm W x 120cm H',
    weight: '150 kg',
    buildTime: '8-10 Weeks',
    joinery: 'Heavy-duty interlocking'
  },
  {
    id: 'sets-new-4',
    name: 'Classic Sofa Set',
    category: 'sets',
    price: 180000,
    woodType: 'Oak',
    materialDetails: 'Solid Oak, high-density foam',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/6-Seater-Chester-Sofa-Set-600x420.jpg',
    badge: 'Classic',
    description: 'A classic sofa set, perfect for large family gatherings.',
    dimensions: '3-Seater: 200cm L, 2x1-Seater: 90cm L',
    weight: '100 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Doweled and reinforced'
  },
  {
    id: 'sets-new-5',
    name: 'Wooden Dressing Console Set',
    category: 'sets',
    price: 65000,
    woodType: 'Sheesham',
    materialDetails: 'Solid Shisham Wood, high-gloss finish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Make-Up-Console-600x420.jpg',
    badge: 'Elegant',
    description: 'An elegant dressing console with a mirror.',
    dimensions: '120cm L x 40cm D x 180cm H',
    weight: '40 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Mortise-and-tenon'
  },
  {
    id: 'sets-new-6',
    name: 'Traditional Jhula Set',
    category: 'sets',
    price: 75000,
    woodType: 'Sheesham',
    materialDetails: 'Solid Shisham Wood',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Wooden-Crafted-Furniture-600x420.jpg',
    badge: 'Traditional',
    description: 'A traditional hand-carved wooden jhula (swing) set.',
    dimensions: '150cm L x 70cm W',
    weight: '60 kg',
    buildTime: '4-5 Weeks',
    joinery: 'Reinforced heavy-duty chains'
  },
  {
    id: 'sets-new-7',
    name: 'Modern Wardrobe Set',
    category: 'sets',
    price: 120000,
    woodType: 'Oak',
    materialDetails: 'Solid Oak frame, MDF panels',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/2-Mirror-Dressing-Console-1-600x420.jpg',
    badge: 'Functional',
    description: 'A modern, spacious wardrobe set.',
    dimensions: '180cm L x 60cm D x 200cm H',
    weight: '120 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Interlocking panels'
  },
  {
    id: 'sets-new-8',
    name: 'Simple Dining Chair Set',
    category: 'sets',
    price: 25000,
    woodType: 'Sheesham',
    materialDetails: 'Solid Shisham Wood',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Dining-Table-With-Four-Chairs-600x420.jpg',
    badge: 'Simple',
    description: 'A simple set of four dining chairs.',
    dimensions: '45cm W x 45cm D x 90cm H',
    weight: '30 kg',
    buildTime: '2-3 Weeks',
    joinery: 'Doweled'
  },
  {
    id: 'sets-new-9',
    name: 'Royal Bed Set',
    category: 'sets',
    price: 300000,
    woodType: 'Walnut',
    materialDetails: 'Solid Walnut wood, intricate carvings',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Modern-Bed-Design-600x420.jpg',
    badge: 'Royal',
    description: 'A royal bed set with intricate carvings.',
    dimensions: '220cm L x 200cm W x 150cm H',
    weight: '200 kg',
    buildTime: '10-12 Weeks',
    joinery: 'Heavy-duty mortise-and-tenon'
  },
  {
    id: 'sets-new-10',
    name: 'Coffee Table & Side Table Set',
    category: 'sets',
    price: 40000,
    woodType: 'Sheesham',
    materialDetails: 'Solid Shisham wood, natural polish',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/High-Gloss-Bed-Side-Table-600x420.jpg',
    badge: 'Functional',
    description: 'A stylish set of one coffee table and two side tables.',
    dimensions: 'Coffee Table: 100cm L x 60cm W x 45cm H, Side Tables: 40cm L x 40cm W x 50cm H',
    weight: '25 kg',
    buildTime: '3-4 Weeks',
    joinery: 'Doweled'
  },
  {
    id: 'sets-new-11',
    name: 'Compact Sofa Set',
    category: 'sets',
    price: 90000,
    woodType: 'Oak',
    materialDetails: 'Solid Acacia wood, polyester fabric',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/6-Seater-Kikar-Wood-Curved-Sofa-Set-600x420.jpg',
    badge: 'Compact',
    description: 'A compact sofa set suitable for smaller living rooms.',
    dimensions: '2-Seater: 150cm L x 80cm D, 1-Seater: 80cm L x 80cm D',
    weight: '80 kg',
    buildTime: '4-6 Weeks',
    joinery: 'Mortise-and-tenon'
  },
  {
    id: 'sets-new-12',
    name: 'Walnut Wood Glossy Self Polish Round Console Classic Bed Room Set',
    category: 'sets',
    price: 295000,
    woodType: 'Walnut',
    materialDetails: 'Seasoned Persian Walnut wood structure, high-gloss natural polish, elegant curved console vanity',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Walnut-Wood-Classic-Bedroom-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Walnut-Wood-Classic-Bedroom-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Round-Shape-Wooden-Dressing-Console-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Bedside-Table-Designs-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Wooden-Bed-Designs-600x420.jpg'
    ],
    badge: 'Classic',
    description: 'A masterpiece of classic bedroom design, featuring a solid Persian Walnut wood structure with a high-gloss natural polish. Includes a beautifully curved console vanity and bedside tables.',
    dimensions: '220cm L x 200cm W x 150cm H',
    weight: '200 kg',
    buildTime: '10-12 Weeks',
    joinery: 'Heavy-duty mortise-and-tenon'
  },
  {
    id: 'sets-black-golden-8-chair',
    name: 'Black & Golden 8 Chairs Solid Acacia Wood Fancy Dining Table Set',
    category: 'sets',
    price: 195000,
    woodType: 'Oak',
    materialDetails: 'Solid Acacia Wood with high gloss black finish and premium gold leafing accents',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Acacia-Dining-Room-Furniture-600x420.jpg',
    badge: 'Special Edition',
    description: 'A breathtaking luxury dining set that commands presence. Features eight stunning black lacquered chairs decorated with gold leafing details and upholstered in premium high-density cushioning, centered around a premium solid wood table.',
    dimensions: 'Table: 240cm L x 110cm W x 78cm H / Chairs: 48cm W x 105cm H',
    weight: '150 kg',
    buildTime: '7-9 Weeks',
    joinery: 'Double-pinned mitered framing and heavy underframe bracket supports.'
  },
  {
    id: 'sets-triangular-acacia',
    name: 'Tri-Angular Solid Acacia Wood Table With 6 Carved Chairs',
    category: 'sets',
    price: 165000,
    woodType: 'Oak',
    materialDetails: 'Solid seasoned Acacia Wood, hand-sculpted rustic design',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Triangular-6-Chairs-Dining-Table-Set-600x420.jpg',
    badge: 'SOLD OUT',
    description: 'A gorgeous tri-angular rustic-style solid Acacia wood dining table with six hand-carved, comfortable high-back matching chairs. Crafted with a premium protective lacquer coat.',
    dimensions: 'Table: 150cm Diagonal x 76cm H / Chairs: 46cm W x 102cm H',
    weight: '110 kg',
    buildTime: '6-8 Weeks',
    joinery: 'Traditional mortise-and-tenon interlocking frame with premium wood pegging'
  },
  {
    id: 'sets-shisham-inlay-8',
    name: '8 Chairs Shisham Wood Inlay Top Dining Table Set',
    category: 'sets',
    price: 195000,
    woodType: 'Sheesham',
    materialDetails: 'Solid seasoned Shisham Wood, linear ivory-wood inlay work',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Sissoo-Wood-Glass-Top-Fancy-Dining-Table-600x420.jpg',
    badge: 'Inlay Special',
    description: 'A magnificent, grand 8-chair dining table set crafted from premier aged Shisham wood. The tabletop features exquisite, hand-laid linear inlay work depicting traditional floral motifs.',
    dimensions: 'Table: 240cm L x 110cm W x 78cm H / Chairs: 48cm W x 105cm H',
    weight: '145 kg',
    buildTime: '7-9 Weeks',
    joinery: 'Interlocking mitered corner framing with heavy underframe bracket supports'
  },
  {
    id: 'sets-ladder-sticks-glass',
    name: 'Ladder Sticks Acacia Wood Glass Top Dining Table & 6 Chairs Set',
    category: 'sets',
    price: 155000,
    woodType: 'Oak',
    materialDetails: 'Solid Acacia Wood frame, premium thick glass top',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Acacia-Dining-Room-Furniture-600x420.jpg',
    badge: 'Best Seller',
    description: 'Combining mid-century elegance with contemporary design. This set features a high-grade tempered glass top supported by beautiful ladder-stick Acacia wood base framing, paired with six ergonomically curved ladder-back chairs.',
    dimensions: 'Table: 180cm L x 90cm W x 76cm H / Chairs: 45cm W x 98cm H',
    weight: '115 kg',
    buildTime: '5-7 Weeks',
    joinery: 'Mortise-and-tenon vertical stick joints, pegged horizontal support bars'
  },
  {
    id: 'sets-sea-green-ottoman-puffy',
    name: 'Sea Green Round Cube Ottoman Puffy Set',
    category: 'sets',
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
    id: 'sets-circle-platted-deewan',
    name: 'Sheesham Wood Circle Platted Self Crafted Deewan',
    category: 'sets',
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
    id: 'sets-acacia-l-shape-sofa',
    name: 'Elegant Acacia Made 7 Seater L Shape Corner Leather Sofa',
    category: 'sets',
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
    id: 'sets-chesterfield-royal-blue-sofa',
    name: 'Chester Field Royal Blue 6 Seater 3 Piece Sofa Set',
    category: 'sets',
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
    id: 'sets-gourmet-shisham-sofa',
    name: 'Gourmet Shisham Wood 6 Seater High Living Sofa Set',
    category: 'sets',
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
    id: 'sets-golden-deco-sofa-set',
    name: 'Golden Deco Crown Shisham Wood 7 Seater Sofa Set',
    category: 'sets',
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
    id: 'sets-smart-living-sofa-bed',
    name: 'Smart Living Solid Acacia Wood Sofa Cum Bed',
    category: 'sets',
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
    id: 'sets-smart-living-u-sofa',
    name: 'Smart Living 10 Seater Solid Acacia Wood Jute U Corner Sofa',
    category: 'sets',
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
  {
    id: 'sets-velvet-wingback-set',
    name: 'Full Velvet Upholstery Wingback Sissoo Wood Bedroom Chairs Set',
    category: 'sets',
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
    id: 'sets-walnut-akhroti-bedroom-set',
    name: 'Walnut/ Akhroti Mate Polish Bedroom Furniture Set',
    category: 'sets',
    price: 265000,
    woodType: 'Walnut',
    materialDetails: 'Solid seasoned Persian Walnut wood structure with premium matte polyurethane protection',
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Mate-Polish-Bedroom-Set-600x420.jpg',
    images: [
      'https://furnitureholz.com/wp-content/uploads/2021/04/Mate-Polish-Bedroom-Set-600x420.jpg',
      'https://furnitureholz.com/wp-content/uploads/2021/04/Mate-Polish-Dressing-600x420.jpg'
    ],
    badge: 'Popular',
    description: 'An exquisite master bedroom suite set handcrafted from select dark Akhroti (Walnut) wood, featuring a gorgeous matte lacquer finish that accentuates natural wood grains. Includes king size bed, dressing table, and bedside cabinets.',
    dimensions: 'Bed: 215cm L x 195cm W x 135cm H / Dresser: 125cm W x 45cm D x 85cm H',
    weight: '185 kg',
    buildTime: '8-10 Weeks',
    joinery: 'Traditional hand-cut dovetail joints, heavy mortise structural lock systems.'
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

export function getProductAttributes(originalProduct: Product) {
  const attrs = getProductAttributesInternal(originalProduct);
  if (originalProduct.category === 'sets' || originalProduct.id.startsWith('sets-')) {
    const id = originalProduct.id;
    let popularity = 50;
    if (id === 'sets-prince-red-velvet-chair') popularity = 210;
    else if (id === 'sets-black-golden-8-chair') popularity = 209;
    else if (id === 'sets-triangular-acacia') popularity = 208;
    else if (id === 'sets-shisham-inlay-8') popularity = 207;
    else if (id === 'sets-ladder-sticks-glass') popularity = 206;
    else if (id === 'sets-sea-green-ottoman-puffy') popularity = 205;
    else if (id === 'sets-circle-platted-deewan') popularity = 204;
    else if (id === 'sets-acacia-l-shape-sofa') popularity = 203;
    else if (id === 'sets-chesterfield-royal-blue-sofa') popularity = 202;
    else if (id === 'sets-gourmet-shisham-sofa') popularity = 195;
    else if (id === 'sets-golden-deco-sofa-set') popularity = 194;
    else if (id === 'sets-smart-living-sofa-bed') popularity = 193;
    else if (id === 'sets-smart-living-u-sofa') popularity = 192;
    else if (id === 'sets-velvet-wingback-set') popularity = 191;
    else if (id === 'sets-walnut-akhroti-bedroom-set') popularity = 190;
    else if (id === 'kalyar-dining-set') popularity = 150;
    else if (id === 'marwa-bedroom-set') popularity = 149;
    else if (id === 'chinar-lounge-set') popularity = 148;
    else if (id === 'shalimar-patio-set') popularity = 147;
    else if (id === 'sets-high-living-l-shape-sofa') popularity = 146;
    else if (id === 'sets-chinioti-silver-moora') popularity = 145;
    else if (id === 'sets-versace-inlay-net-set') popularity = 144;
    else if (id === 'sets-high-living-sissoo-8-chair-dining') popularity = 143;
    else if (id === 'sets-carving-high-back-set') popularity = 142;
    else if (id === 'sets-bergere-inlay-set') popularity = 141;
    return {
      ...attrs,
      popularity
    };
  }
  return attrs;
}

function getProductAttributesInternal(originalProduct: Product) {
  let id = originalProduct.id;
  if (id.startsWith('sets-')) {
    const suffix = id.replace('sets-', '');
    if (suffix === 'high-living-l-shape-sofa') {
      id = 'lounge-p2-chester-l-shape';
    } else if (suffix === 'chinioti-silver-moora') {
      id = 'dining-moora-set';
    } else if (suffix === 'versace-inlay-net-set') {
      id = 'lounge-inlay-net-set';
    } else if (suffix === 'high-living-sissoo-8-chair-dining') {
      id = 'dining-shisham-inlay-8';
    } else if (suffix === 'carving-high-back-set') {
      id = 'carving-high-back-set';
    } else if (suffix === 'bergere-inlay-set') {
      id = 'bergere-inlay-set';
    } else if (suffix === 'prince-red-velvet-chair') {
      id = 'prince-red-velvet-chair';
    } else if (suffix === 'black-golden-8-chair') {
      id = 'dining-black-golden-8-chair';
    } else if (suffix === 'triangular-acacia') {
      id = 'dining-triangular-acacia';
    } else if (suffix === 'shisham-inlay-8') {
      id = 'dining-shisham-inlay-8';
    } else if (suffix === 'ladder-sticks-glass') {
      id = 'dining-ladder-sticks-glass';
    } else if (suffix === 'sea-green-ottoman-puffy') {
      id = 'sea-green-ottoman-puffy';
    } else if (suffix === 'circle-platted-deewan') {
      id = 'circle-platted-deewan';
    } else if (suffix === 'acacia-l-shape-sofa') {
      id = 'acacia-l-shape-sofa';
    } else if (suffix === 'chesterfield-royal-blue-sofa') {
      id = 'chesterfield-royal-blue-sofa';
    } else if (suffix === 'gourmet-shisham-sofa') {
      id = 'gourmet-shisham-sofa';
    } else if (suffix === 'golden-deco-sofa-set') {
      id = 'golden-deco-sofa-set';
    } else if (suffix === 'smart-living-sofa-bed') {
      id = 'smart-living-sofa-bed';
    } else if (suffix === 'smart-living-u-sofa') {
      id = 'smart-living-u-sofa';
    } else if (suffix === 'velvet-wingback-set') {
      id = 'dining-velvet-wingback-chairs';
    } else if (suffix === 'walnut-akhroti-bedroom-set') {
      id = 'sets-walnut-akhroti-bedroom-set';
    } else if (suffix === 'fancy-high-gloss-centre-table') {
      id = 'sets-fancy-high-gloss-centre-table';
    } else if (suffix === 'pizza-dining-table') {
      id = 'lounge-p2-pizza-dining-set';
    } else if (suffix === 'trapezium-curved-bed-set') {
      id = 'bedroom-p2-4';
    } else if (suffix === 'ladder-stick-bed-set') {
      id = 'bedroom-p2-5';
    } else if (suffix === 'curved-acacia-sofa') {
      id = 'lounge-p2-curved-sofa-set';
    } else if (suffix === 'chesterfield-silver-sofa') {
      id = 'bedroom-p2-7';
    } else if (suffix === 'inlay-cobra-sofa') {
      id = 'bedroom-p2-8';
    } else if (suffix === 'chinioti-shisham-moora') {
      id = 'lounge-moora-set';
    } else if (suffix === 'art-of-craftsman-bedroom') {
      id = 'bedroom-p2-11';
    }
  }
  if (id.startsWith('outdoor-')) {
    const suffix = id.replace('outdoor-', '');
    if (suffix === 'p2-chinioti-swing' || suffix === 'p2-gourmet-sofa' || suffix === 'p2-versace-settee' || suffix === 'p2-velvet-puffy-set' || suffix === 'p2-ladder-sticks' || suffix === 'leather-net-set' || suffix === 'inlay-net-set' || suffix === 'embossed-motif-deewan') {
      id = 'lounge-' + suffix;
    } else if (suffix === 'chase-ship-chair' || suffix === 'carving-high-back-set' || suffix === 'bergere-inlay-set' || suffix === 'prince-red-velvet-chair') {
      id = suffix;
    } else if (suffix === 'heart-back-deewan') {
      id = 'heart-back-shisham-deewan';
    } else if (suffix === 'vintage-rocking-chair') {
      id = 'lounge-vintage-rocking-chair';
    } else if (suffix === 'royal-blue-settee') {
      id = 'lounge-royal-blue-settee';
    } else if (suffix === 'moora-set') {
      id = 'lounge-moora-set';
    } else if (suffix === 'kikar-puffy-settee') {
      id = 'lounge-acacia-2seater-puffy';
    } else if (suffix === 'inlay-top-net-set') {
      id = 'lounge-inlay-net-set';
    } else {
      id = 'lounge-' + suffix;
    }
  }
  const product = {
    ...originalProduct,
    id
  };
  if (product.id.startsWith('lounge-p2-')) {
    const p2Details: Record<string, { color: string; material: string; polish: string; style: string; pieces: string; popularity: number; date: string }> = {
      'lounge-p2-chinioti-swing': {
        color: 'Deep Walnut Shisham / Red Cushion',
        material: 'Solid Seasoned Shisham Wood',
        polish: 'High Gloss Mirror Lacquer',
        style: 'Intricate Chinioti Hand Carved',
        pieces: '1 Complete Jhula Assembly',
        popularity: 106,
        date: '2026-05-16'
      },
      'lounge-p2-gourmet-sofa': {
        color: 'Premium Velvet / Customized Color',
        material: 'Solid Seasoned Shisham Wood',
        polish: 'Natural Shisham Polish',
        style: 'Moustache Back Chesterfield',
        pieces: '6 Pieces (3+2+1 Sofa Set)',
        popularity: 105,
        date: '2026-05-15'
      },
      'lounge-p2-golden-deco-crown': {
        color: 'Jacquard Velvet / Golden Paint',
        material: 'Solid Seasoned Shisham Wood',
        polish: 'Premium Golden Deco Paint',
        style: 'Royal Carved Crown Design',
        pieces: '7 Seater (3+2+2 Sofa Set)',
        popularity: 104,
        date: '2026-05-14'
      },
      'lounge-p2-sofa-cum-bed': {
        color: 'Slate Grey / Custom Choice',
        material: 'Solid Seasoned Acacia Wood',
        polish: 'Waterproof Protective Coat',
        style: 'Modern Smart-Convertible',
        pieces: '1 Piece (Sofa with Slider Bed)',
        popularity: 103,
        date: '2026-05-13'
      },
      'lounge-p2-u-corner-sofa': {
        color: 'Natural Jute / Beige Fabric',
        material: 'Solid Acacia Wood Structure',
        polish: 'Organic Wax Satin Finish',
        style: 'Contemporary Sectional U-Shape',
        pieces: '10 Seater Modular Set',
        popularity: 102,
        date: '2026-05-12'
      },
      'lounge-p2-wingback-chairs-set': {
        color: 'Royal Crimson Velvet / Blue',
        material: 'Solid seasoned Sissoo wood legs',
        polish: 'Classic Dark Walnut lacquer',
        style: 'Classical Tufted Wingback',
        pieces: '3 Pieces (2 Chairs + 1 Table)',
        popularity: 101,
        date: '2026-05-11'
      },
      'lounge-p2-pizza-dining-set': {
        color: 'Amber Gold Shisham / Custom Seat',
        material: 'Premium Shisham Heartwood',
        polish: 'Mirror High-Gloss Lacquer',
        style: 'Pizza Nested Circular Set',
        pieces: '5 Pieces (4 Chairs + 1 Table)',
        popularity: 100,
        date: '2026-05-10'
      },
      'lounge-p2-curved-sofa-set': {
        color: 'Cream Textured / Kikar Frame',
        material: 'Solid Acacia/Kikar wood skeleton',
        polish: 'Natural Matte Wax Finish',
        style: 'Modern Architectural Curved',
        pieces: '6 Seater (3+2+1 Curved Set)',
        popularity: 99,
        date: '2026-05-09'
      },
      'lounge-p2-silver-chesterfield': {
        color: 'Silver Grey Quilted Velvet',
        material: 'Dense Seasoned Wood Core',
        polish: 'Fabric Poshish Wrap',
        style: 'Classic Quilted Chesterfield',
        pieces: '6 Seater (3+2+1 Sofa Set)',
        popularity: 98,
        date: '2026-05-08'
      },
      'lounge-p2-royal-blue-settee': {
        color: 'Royal Navy Blue Velvet',
        material: 'Solid Shisham Wood Legs',
        polish: 'High Gloss Navy Blue Deco Paint',
        style: 'Mughal Deewan Settee',
        pieces: '1 Piece (Lounge Settee)',
        popularity: 97,
        date: '2026-05-07'
      },
      'lounge-p2-chester-l-shape': {
        color: 'Royal Blue Tufted Velvet',
        material: 'Heavy Solid Acacia Wood',
        polish: 'Velvet Upholstery',
        style: 'L-Shape Corner Chesterfield',
        pieces: '7 Seater Corner Set',
        popularity: 96,
        date: '2026-05-06'
      },
      'lounge-p2-versace-settee': {
        color: 'Quilted Cream / Golden Motif',
        material: 'Premium Seasoned Shisham wood',
        polish: 'Gold Leaf Border Lacquer',
        style: 'Versace Inspired Luxury Box',
        pieces: '2 Seater Settee Puffy',
        popularity: 95,
        date: '2026-05-05'
      },
      'lounge-p2-velvet-puffy-set': {
        color: 'Emerald Velvet / Quilted Button',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Velvet button upholstery',
        style: 'Round Chesterfield Puffy Set',
        pieces: '2 Pieces (Pair of Puffies)',
        popularity: 94,
        date: '2026-05-04'
      },
      'lounge-p2-ladder-sticks': {
        color: 'Honey Oak / Custom Seat',
        material: 'Solid Shisham Wood',
        polish: 'High Gloss Mirror Polish',
        style: 'Classic Spindle Ladder-Back',
        pieces: '3 Pieces (2 Chairs + 1 Table)',
        popularity: 93,
        date: '2026-05-03'
      }
    };
    return p2Details[product.id] || {
      color: 'Caramel Brown',
      material: 'Solid Wood',
      polish: 'Classic Polish',
      style: 'Crafted',
      pieces: '1 Piece',
      popularity: 80,
      date: '2026-05-01'
    };
  }
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
      date: `2026-04-${String(30 - num).padStart(2, '0')}`
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
      date: `2026-03-${String(30 - num).padStart(2, '0')}`
    };
  }

  switch (product.id) {
    case 'lounge-vintage-rocking-chair':
    case 'vintage-rocking-chair':
      return {
        color: 'Golden Brown',
        material: 'Shisham/ Sissoo Wood',
        polish: 'High Gloss',
        style: 'Ladder Back Rocking',
        pieces: '1 Rocking Chair Unit',
        popularity: 116,
        date: '2026-05-16'
      };
    case 'lounge-royal-blue-settee':
      return {
        color: 'Royal Navy Blue Velvet',
        material: 'Solid Shisham Wood Legs',
        polish: 'High Gloss Navy Blue Deco Paint',
        style: 'Mughal Deewan Settee',
        pieces: '1 Piece (Lounge Settee)',
        popularity: 115,
        date: '2026-05-15'
      };
    case 'lounge-moora-set':
      return {
        color: 'Silver Deco, Velvet Cushion',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Silver Leaf Highlight Polish',
        style: 'Chinioti Crafted Deco Moora',
        pieces: '2 Pieces (Pair of Moora Chairs)',
        popularity: 114,
        date: '2026-05-14'
      };
    case 'lounge-embossed-motif-deewan':
      return {
        color: 'Premium Velvet / Embossed Motif',
        material: 'Solid Seasoned Sheesham Wood',
        polish: 'High Gloss Classic Polish',
        style: 'Traditional Low-Floor Deewan',
        pieces: '1 Piece (Deewan)',
        popularity: 113,
        date: '2026-05-13'
      };
    case 'lounge-acacia-2seater-puffy':
      return {
        color: 'Beige Textured Velvet',
        material: 'Solid Acacia/Kikar Wood Frame',
        polish: 'Natural Matte Polish',
        style: '2 Seater Puffy Settee',
        pieces: '1 Piece',
        popularity: 112,
        date: '2026-05-12'
      };
    case 'lounge-shisham-motif-deewan':
      return {
        color: 'High-Density Premium Velvet Cushion',
        material: 'Solid Seasoned Shisham Wood',
        polish: 'High Gloss Dark Walnut Polish',
        style: 'Mughal Chip Carved Deewan',
        pieces: '1 Piece',
        popularity: 111,
        date: '2026-05-11'
      };
    case 'lounge-velvet-puffy-set':
      return {
        color: 'Rich Emerald Velvet / Custom',
        material: 'Solid seasoned wood base',
        polish: 'Velvet button upholstery',
        style: 'Round Chesterfield Puffy Set',
        pieces: '2 Pieces (Pair of Puffies)',
        popularity: 110,
        date: '2026-05-10'
      };
    case 'lounge-ladder-sticks':
      return {
        color: 'Classic Amber Shisham Wood',
        material: 'Seasoned Sissoo (Indian Rosewood)',
        polish: 'High Gloss Mirror Polish',
        style: 'Classic Spindle Ladder-Back',
        pieces: '3 Pieces (2 Chairs + 1 Table)',
        popularity: 109,
        date: '2026-05-09'
      };
    case 'lounge-classic-velvet-chairs':
      return {
        color: 'Velvet Pink/Red Cushion, Shisham Frame',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Vintage Shisham Polish',
        style: 'Vintage Classic Bedroom/Lounge Chairs',
        pieces: '3 Pieces (2 Chairs + 1 Table)',
        popularity: 108,
        date: '2026-05-08'
      };
    case 'lounge-crown-jewel-deco-chairs':
      return {
        color: 'Golden Deco, Velvet Cushion',
        material: 'Shisham/ Sissoo Wood',
        polish: 'High Gloss Golden Deco Paint',
        style: 'Royal Crown Deco',
        pieces: '3 Pieces (2 Chairs + 1 Table)',
        popularity: 107,
        date: '2026-05-07'
      };
    case 'lounge-leather-net-set':
      return {
        color: 'Textured Leather & Lacquered Wood',
        material: 'Solid Seasoned Shisham Wood',
        polish: 'Clear Gloss Lacquer Finish',
        style: 'Modern Nest of Tables',
        pieces: '3 Pieces (3 Nested Tables)',
        popularity: 106,
        date: '2026-05-06'
      };
    case 'lounge-inlay-net-set':
      return {
        color: 'Inlaid Brass & Dark Sheesham',
        material: 'Solid Shisham Wood',
        polish: 'Classic Hand-Rubbed Wax Polish',
        style: 'Traditional Nest of Inlay Tables',
        pieces: '3 Pieces (3 Nested Tables)',
        popularity: 105,
        date: '2026-05-05'
      };
    case 'dining-moora-set':
      return {
        color: 'Silver Deco, Velvet Cushion',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Silver Leaf Highlight Polish',
        style: 'Chinioti Crafted',
        pieces: '2 Piece',
        popularity: 105,
        date: '2026-04-20'
      };
    case 'dining-classic-velvet-chairs':
      return {
        color: 'Velvet Pink/Red Cushion, Shisham Frame',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Vintage Shisham Polish',
        style: 'Vintage Classic',
        pieces: '3 Pieces (2 Chairs + 1 Table)',
        popularity: 103,
        date: '2026-04-22'
      };
    case 'dining-crown-jewel-deco-chairs':
      return {
        color: 'Golden Deco, Velvet Cushion',
        material: 'Shisham/ Sissoo Wood',
        polish: 'High Gloss Golden Deco Paint',
        style: 'Royal Crown Deco',
        pieces: '3 Pieces (2 Chairs + 1 Table)',
        popularity: 102,
        date: '2026-04-24'
      };
    case 'dining-black-golden-8-chair':
      return {
        color: 'Jet Black with Gold Leaf',
        material: 'Acacia Wood',
        polish: 'High Gloss Black & Gold',
        style: 'Victorian Luxury',
        pieces: '9 Pieces (8 Chairs + 1 Table)',
        popularity: 100,
        date: '2026-04-28'
      };
    case 'dining-triangular-acacia':
      return {
        color: 'Honey Acacia',
        material: 'Acacia Wood',
        polish: 'Polyurethane Finish',
        style: 'Geometric Rustic',
        pieces: '7 Pieces (6 Chairs + 1 Table)',
        popularity: 97,
        date: '2026-04-29'
      };
    case 'dining-shisham-inlay-8':
      return {
        color: 'Deep Walnut with Brass Inlay',
        material: 'Shisham/ Sissoo Wood',
        polish: 'High Gloss Lacquer',
        style: 'Mughal Inlay',
        pieces: '9 Pieces (8 Chairs + 1 Table)',
        popularity: 98,
        date: '2026-04-30'
      };
    case 'dining-ladder-sticks-glass':
      return {
        color: 'Natural Amber',
        material: 'Acacia Wood',
        polish: 'Classic Satin Polish',
        style: 'Modern Minimal',
        pieces: '7 Pieces (6 Chairs + 1 Table)',
        popularity: 95,
        date: '2026-04-27'
      };
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
    case 'dining-carved-couch-settee':
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
    case 'dining-sea-green-ottoman':
    case 'sea-green-ottoman-puffy':
      return {
        color: 'Sea Green',
        material: 'Solid Wood',
        polish: 'Velvet Upholstery',
        style: 'Circle',
        pieces: '3 Piece',
        popularity: 101,
        date: '2026-04-22'
      };
    case 'dining-circle-platted-deewan':
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
    case 'dining-heart-back-deewan':
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
    case 'dining-acacia-l-shape-sofa':
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
    case 'dining-chesterfield-royal-blue-sofa':
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
    case 'dining-gourmet-shisham-6-seater':
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
    case 'dining-golden-deco-crown-7-seater':
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
    case 'dining-smart-living-sofa-bed':
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
    case 'dining-smart-living-10-seater-corner':
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
    case 'dining-velvet-wingback-chairs':
      return {
        color: 'Deep Velvet',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Velvet Upholstery',
        style: 'Wingback',
        pieces: '3 Piece (2 Chairs + 1 Table)',
        popularity: 99,
        date: '2026-05-09'
      };
    case 'dining-pizza-shisham-table':
      return {
        color: 'Teak Brown',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Classic Polish',
        style: 'Pizza Round Low',
        pieces: '5 Piece (1 Table + 4 Chairs)',
        popularity: 101,
        date: '2026-05-10'
      };
    case 'dining-curved-acacia-6-seater':
      return {
        color: 'Neutral',
        material: 'Acacia/ Kikar Wood',
        polish: 'Classic Polish',
        style: 'Curved Modern',
        pieces: '3 Piece (3+2+1 Sofa Set)',
        popularity: 98,
        date: '2026-05-11'
      };
    case 'dining-chesterfield-silver-6-seater':
      return {
        color: 'Silver Grey',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Quilted Velvet',
        style: 'Chesterfield',
        pieces: '3 Piece (3+2+1 Sofa Set)',
        popularity: 102,
        date: '2026-05-12'
      };
    case 'dining-royal-blue-deco-settee':
      return {
        color: 'Royal Blue',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Blue Deco Paint',
        style: 'Deco Settee',
        pieces: '1 Piece',
        popularity: 96,
        date: '2026-05-13'
      };
    case 'dining-chesterfield-l-shape-acacia':
      return {
        color: 'Royal Blue Velvet',
        material: 'Acacia/ Kikar Wood',
        polish: 'Velvet Upholstery',
        style: 'Chesterfield L-Shape',
        pieces: '2 Piece (L-Shape Sectional)',
        popularity: 104,
        date: '2026-05-14'
      };
    case 'dining-versace-box-settee':
      return {
        color: 'Cream Gold',
        material: 'Shisham/ Sissoo Wood',
        polish: 'Luxury Polish',
        style: 'Versace Box',
        pieces: '1 Piece',
        popularity: 95,
        date: '2026-05-15'
      };
    case 'sets-walnut-akhroti-bedroom-set':
    case 'bedroom-p2-3':
      return {
        color: 'Dark Walnut',
        material: 'Walnut Wood',
        polish: 'Matte Polish',
        style: 'Modern Classic',
        pieces: '4 Piece (Bed + 2 Side Tables + Dresser)',
        popularity: 105,
        date: '2026-05-16'
      };
    case 'sets-fancy-high-gloss-centre-table':
      return {
        color: 'Dark Shisham / Gold',
        material: 'Sheesham Wood',
        polish: 'High Gloss Polish',
        style: 'Modern Luxury',
        pieces: '1 Piece',
        popularity: 110,
        date: '2026-05-18'
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
