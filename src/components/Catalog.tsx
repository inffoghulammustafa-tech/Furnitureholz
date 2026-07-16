/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Heart, Info, SlidersHorizontal, Eye, ShoppingBag, X, Calendar, Hammer, Scale, Move, Play, Newspaper, MessageSquare, Clock, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product, QuoteItem } from '../types';
import { INITIAL_PRODUCTS, WOOD_PROPERTIES, getProductAttributes } from '../data';



const getOptionHoverClass = (opt: string) => {
  const norm = opt.trim().toLowerCase();
  if (norm === 'all') return 'hover:bg-oak hover:text-white';
  if (norm === 'caramel brown') return 'hover:bg-blue-600 hover:text-white';
  const colors = [
    'hover:bg-emerald-600 hover:text-white',
    'hover:bg-purple-600 hover:text-white',
    'hover:bg-rose-600 hover:text-white',
    'hover:bg-indigo-600 hover:text-white',
    'hover:bg-teal-600 hover:text-white',
    'hover:bg-oak hover:text-black',
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

export const LATEST_NEWS_ITEMS = [
  {
    id: 'ceo-message-ramadan-2021',
    title: 'CEO Furniture Holz Rana Tanvir’s Message on Ramadan – Daily Report Newspaper',
    date: 'April 22, 2021',
    category: 'NEWS',
    commentsCount: 0,
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Furniture-Holz-Faisalabad-News-18.jpeg',
    youtubeQuery: 'CEO+Furniture+Holz+Rana+Tanvir+Message+on+Ramadan',
    details: 'Furniture Holz CEO Rana Tanvir shared his message regarding the holy month of Ramadan in the Daily Report Newspaper, emphasizing service to humanity and community support.',
    highlights: [
        'Ramadan message from CEO Rana Tanvir',
        'Emphasis on community service',
        'Featured in Daily Report Newspaper'
    ],
    gallery: [
        'https://furnitureholz.com/wp-content/uploads/2021/04/Furniture-Holz-Faisalabad-News-18.jpeg',
        'https://furnitureholz.com/wp-content/uploads/2021/04/Furniture-Holz-Faisalabad-News-18.jpeg'
    ]
  },
  {
    id: 'faisalabad-chamber-visit-2021',
    title: 'Persident Chamber Of Commerce Faisalabad Paid Visit to Furniture Holz Faisalabad Showroom',
    date: 'April 22, 2021',
    category: 'NEWS',
    commentsCount: 0,
    image: 'https://furnitureholz.com/wp-content/uploads/2021/04/Furniture-Holz-Faisalabad-News-16.jpeg',
    youtubeQuery: 'President+Chamber+Of+Commerce+Faisalabad+Visit+Furniture+Holz',
    details: 'The President of the Chamber of Commerce Faisalabad visited the Furniture Holz showroom in Faisalabad, appreciating the premium craftsmanship and quality of our products.',
    highlights: [
        'Visit from the Chamber of Commerce President',
        'Appreciation for local craftsmanship',
        'Showcasing premium furniture quality'
    ],
    gallery: [
        'https://furnitureholz.com/wp-content/uploads/2021/04/Furniture-Holz-Faisalabad-News-15.jpeg',
        'https://furnitureholz.com/wp-content/uploads/2021/04/Furniture-Holz-Faisalabad-News-14.jpeg',
        'https://furnitureholz.com/wp-content/uploads/2021/04/Furniture-Holz-Faisalabad-News-13.jpeg',
        'https://furnitureholz.com/wp-content/uploads/2021/04/Furniture-Holz-Faisalabad-News-8-1024x684.jpeg',
        'https://furnitureholz.com/wp-content/uploads/2021/04/Furniture-Holz-Faisalabad-News-7-1024x684.jpeg',
        'https://furnitureholz.com/wp-content/uploads/2021/04/Furniture-Holz-Faisalabad-News-9-1024x684.jpeg',
        'https://furnitureholz.com/wp-content/uploads/2021/04/Furniture-Holz-Faisalabad-News-11-1024x684.jpeg',
        'https://furnitureholz.com/wp-content/uploads/2021/04/Furniture-Holz-Faisalabad-News-10-1024x684.jpeg',
        'https://furnitureholz.com/wp-content/uploads/2021/04/Furniture-Holz-Faisalabad-News-4-1024x684.jpeg',
        'https://furnitureholz.com/wp-content/uploads/2021/04/Furniture-Holz-Faisalabad-News-6-1024x684.jpeg',
        'https://furnitureholz.com/wp-content/uploads/2021/04/Furniture-Holz-Faisalabad-News-3-1024x684.jpeg',
        'https://furnitureholz.com/wp-content/uploads/2021/04/Furniture-Holz-Faisalabad-News-2-1024x684.jpeg'
    ]
  },
  {
    id: 'bbq-mango-party-2026',
    title: 'Annual BBQ+Pool+Mango Party – A Night of Fun, Music, and Social Responsibility at ZBT Farmhouse',
    date: 'July 1, 2025',
    category: 'NEWS',
    commentsCount: 0,
    image: 'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-10-708x940.jpg',
    youtubeQuery: 'Annual+BBQ+Pool+Mango+Party+at+ZBT+Farmhouse+Furniture+Holz',
    details: 'Furniture Holz once again demonstrated its commitment to employee well-being and social responsibility by hosting its much-anticipated annual **BBQ+Pool+Mango Party** at the scenic **ZBT Farmhouse, Jhumra, Canal Road Faisalabad**. The event brought together staff, their families, and friends for an unforgettable evening filled with delicious food, refreshing pool dips, and juicy mangoes—a true celebration of teamwork and gratitude. Beyond the fun, the gathering highlighted Holz’s dedication to fostering a positive work culture and giving back to its community. The night came alive with **live music**, as employees danced their hearts out, strengthening bonds and creating cherished memories. By blending corporate responsibility with joyful engagement, Holz Furniture proves that a happy team is the foundation of success! 🎉🔥 #HolzCares #TeamSpirit #CorporateResponsibility',
    highlights: [
      'Delectable mango feast featuring premium Chausa and Anwar Ratol varieties',
      'Live poolside BBQ station with traditional spices and ambient music',
      'Team building games and recreational poolside relaxation',
      'Special session discussing our ongoing social responsibility initiatives'
    ],
    gallery: [
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-1.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-2.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-3.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-4.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-5.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-7.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-8.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-9.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-11.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-12.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-13.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-14.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-15.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-16.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-17.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-18.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-5.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-7.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-8.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-9.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-11.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-12.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-13.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-14.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/07/2025-BBQ-Party-Pool-Party-Staff-Fun-Activity-Furniture-Holz-CSR-15.jpg'
    ]
  },
  {
    id: 'hafizabad-2025',
    title: '3rd Furniture Expo in Hafizabad by Furniture Holz – May 2025',
    date: 'May 15, 2025',
    category: 'EXPOS & EVENTS',
    commentsCount: 0,
    image: 'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-2-768x960.jpg',
    youtubeQuery: '3rd+Furniture+Expo+in+Hafizabad+by+Furniture+Holz',
    details: 'Furniture Holz brought its legendary craftsmanship to the heart of **Hafizabad**. The **3rd Annual Furniture Expo** was a monumental success, showcasing our signature solid-timber bedroom sets, hand-carved dining tables, and bespoke bridal furniture. Hundreds of families visited to experience the premium wood quality and after-sale support that defines our brand. Our skilled craftsmen were present to guide customers about wood seasoning and structure. We are deeply grateful to the citizens of Hafizabad for their incredible trust and patronage! 🪵✨ #HafizabadExpo #FurnitureHolz #SolidTimber #LuxuryLiving',
    highlights: [
      'Showcased solid Shisham and Oak wood collections',
      'Exclusive on-spot bridal package bookings',
      'Visited by prominent local personalities and interior experts',
      'Over 15 years of solid woodwork heritage on display'
    ],
    gallery: [
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-2-768x960.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-1.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-3.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-4.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-10.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-19.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-14.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-15.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-16.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-17.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-5.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-3.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-18.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-6.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-8.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-9.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-Bella-Decors.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-4.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Hafizabad-Expo-May-2025-by-Furniture-Holz-1.jpg'
    ]
  },
  {
    id: 'shahkot-2025',
    title: 'First Ever Furniture Expo in Shahkot- Nankana – April 2025',
    date: 'April 10, 2025',
    category: 'EXPOS & EVENTS',
    commentsCount: 0,
    image: 'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-15.jpg',
    youtubeQuery: 'First+Ever+Furniture+Expo+in+Shahkot-Nankana+Furniture+Holz',
    details: 'We made history by hosting the **first-ever high-end furniture expo** in the **Shahkot, Nankana Sahib** region. The event marked a new chapter for timber artistry in the area, providing locals direct access to premium, factory-priced furniture without having to travel to major hubs. The overwhelming support from the community has inspired us to make this an annual tradition. Every piece sold carries our lifetime termite-free warranty, handcrafted with premium seasoned Shisham and Oak wood. Thank you Shahkot! 🛏️👑 #ShahkotExpo #NankanaSahib #PremiumFurniture #HeritageCraft',
    highlights: [
      'Inaugural grand ribbon-cutting ceremony',
      'Direct factory rates offered to the Nankana Sahib community',
      'Featured highly customized space-saving luxury furniture',
      'Highly praised for seamless delivery and assembly services'
    ],
    gallery: [
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-15.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-14.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-12.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-10.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-10.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-6.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-7.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-14.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-13.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-15.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-12.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-11.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-21.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-20.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-26.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-22.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-23.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-17.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-19.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-1.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Shahkot-Furniture-Expo-Nankana-Sale-Event-24.jpg'
    ]
  },
  {
    id: 'faisalabad-2025',
    title: 'Highlights of First Ever Expo at Narwala Road Faisalabad – February 2025',
    date: 'February 20, 2025',
    category: 'EXPOS & EVENTS',
    commentsCount: 0,
    image: 'https://furnitureholz.com/wp-content/uploads/2025/05/Furniture-Holz-Style-Craft-Furniture-Expo-Narwala-Road-Ghulam-Abad-12.jpg',
    youtubeQuery: 'Highlights+of+First+Ever+Expo+at+Narwala+Road+Faisalabad+Furniture+Holz',
    details: 'Our Narwala Road showroom hosted its highly anticipated **First Ever Furniture Expo in Faisalabad**. This mega-event showcased spectacular luxury furniture designs, from royal-carved Chinioti heritage classics to sleek, contemporary minimalist designs. Faisalabad’s design-savvy crowd turned out in massive numbers, confirming Furniture Holz as the top destination for premium home decor. Visitors were treated to direct interactions with our design consultants and exclusive event-only discounts. 🛋️🎨 #FaisalabadExpo #NarwalaRoad #ChiniotiHeritage #ModernMinimalism',
    highlights: [
      'Launch of our 2025 Imperial Carved Bedding collection',
      'Live wood carving demonstrations by master artisans',
      'Special discounts for local Faisalabad residents',
      'Stunning interactive showroom displays'
    ],
    gallery: [
      'https://furnitureholz.com/wp-content/uploads/2025/05/Furniture-Holz-Style-Craft-Furniture-Expo-Narwala-Road-Ghulam-Abad-12.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Furniture-Holz-Style-Craft-Furniture-Expo-Narwala-Road-Ghulam-Abad-11.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Furniture-Holz-Style-Craft-Furniture-Expo-Narwala-Road-Ghulam-Abad-10.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Furniture-Holz-Style-Craft-Furniture-Expo-Narwala-Road-Ghulam-Abad-14.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Furniture-Holz-Style-Craft-Furniture-Expo-Narwala-Road-Ghulam-Abad-5.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Furniture-Holz-Style-Craft-Furniture-Expo-Narwala-Road-Ghulam-Abad-11.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Furniture-Holz-Style-Craft-Furniture-Expo-Narwala-Road-Ghulam-Abad-12.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Furniture-Holz-Style-Craft-Furniture-Expo-Narwala-Road-Ghulam-Abad-7.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Furniture-Holz-Style-Craft-Furniture-Expo-Narwala-Road-Ghulam-Abad-8.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Furniture-Holz-Style-Craft-Furniture-Expo-Narwala-Road-Ghulam-Abad-9.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Furniture-Holz-Style-Craft-Furniture-Expo-Narwala-Road-Ghulam-Abad-13.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Furniture-Holz-Style-Craft-Furniture-Expo-Narwala-Road-Ghulam-Abad-14.jpg',
      'https://furnitureholz.com/wp-content/uploads/2025/05/Furniture-Holz-Style-Craft-Furniture-Expo-Narwala-Road-Ghulam-Abad-10.jpg'
    ]
  }
];

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

export const renderFormattedText = (text: string) => {
  const parts = text.split('**');
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index} className="font-extrabold text-gray-950">{part}</strong>;
    }
    return part;
  });
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

  const [selectedTeamMember, setSelectedTeamMember] = useState<{
    name: string;
    role: string;
    image: string;
    bio: string;
  } | null>(null);

  const [selectedNewsCard, setSelectedNewsCard] = useState<{
    id: string;
    title: string;
    date: string;
    category: string;
    commentsCount: number;
    image: string;
    youtubeQuery: string;
    details: string;
    highlights: string[];
    gallery: string[];
  } | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);

  // Customer Reviews Video states & config
  const [activeVideo, setActiveVideo] = useState<{ id: string; start: number } | null>(null);

  const customerVideos = useMemo(() => [
    {
      id: 'j_wZZluG-Qw',
      start: 0,
      title: 'Complete Home Furniture Setup',
      sub: 'Furniture Holz',
      thumbnail: 'https://img.youtube.com/vi/j_wZZluG-Qw/hqdefault.jpg'
    },
    {
      id: 'C3uqpZfY5kU',
      start: 0,
      title: 'LIVE TOUR: FULL HOUSE',
      sub: 'Furniture Holz',
      thumbnail: 'https://img.youtube.com/vi/C3uqpZfY5kU/hqdefault.jpg'
    },
    {
      id: 'ryVB8IzX1YU',
      start: 0,
      title: 'Modern Office Interior',
      sub: 'Furniture Holz',
      thumbnail: 'https://img.youtube.com/vi/ryVB8IzX1YU/hqdefault.jpg'
    },
    {
      id: '9axJSfxzxPY',
      start: 0,
      title: 'Satisfied Customer Feedback',
      sub: 'Furniture Holz · Gojra Expo · Jan 2025',
      thumbnail: 'https://img.youtube.com/vi/9axJSfxzxPY/hqdefault.jpg'
    }
  ], []);

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
        {/* ================= CUSTOMER VIDEO REVIEWS ================= */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sage block mb-2">Real Client Walkthroughs</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory">
              Customer Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerVideos.map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                onClick={() => setActiveVideo({ id: video.id, start: video.start })}
                className="group relative aspect-[9/16] bg-[#0c1424] rounded-2xl overflow-hidden border border-line/50 hover:border-oak/60 transition-all duration-300 shadow-xl cursor-pointer select-none"
              >
                {/* Cover Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/70 z-10" />
                </div>

                {/* Top Overlay: Channel Header info */}
                <div className="absolute top-4 left-4 right-4 z-20 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-oak flex items-center justify-center text-white font-display font-bold shadow-md border border-white/10 shrink-0">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-xs font-bold text-white tracking-wide truncate group-hover:text-oak transition-colors drop-shadow-sm">
                      {video.title}
                    </h4>
                    <span className="text-[10px] text-ivory-dim/75 block truncate drop-shadow-sm">
                      {video.sub}
                    </span>
                  </div>
                </div>

                {/* Center Overlay: Play Button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 group-hover:bg-red-500 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover:scale-110">
                    <svg className="w-6 h-6 fill-current text-white translate-x-[2px]" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Overlay: Shorts bar indicator */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                  <span className="text-[10px] text-white/50 font-mono tracking-wider">
                    {idx === 3 ? 'Hajra Palace' : 'Furniture Holz'}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                    <span className="text-[9px] uppercase tracking-wider text-red-500 font-bold font-mono">Shorts</span>
                  </div>
                </div>

                {/* Red bottom timeline effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= OUR GREAT TEAM ================= */}
        <div className="mb-24 border-t border-line/30 pt-24 text-center">
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sage block mb-2">The Minds Behind Holzcraft</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory">
              Our Great Team
            </h2>
            <p className="text-ivory-dim/60 text-xs sm:text-sm mt-3 font-mono tracking-wider">
              Click on any member to view their executive profile & biography
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 max-w-5xl mx-auto justify-center">
            {/* Muhammad Shahid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="group flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedTeamMember({
                name: "Muhammad Shahid",
                role: "CEO Lahore",
                image: "https://furnitureholz.com/wp-content/uploads/2020/01/Muhammad-Shahid.jpg",
                bio: "The Chief Executive Officer of Lahore Showroom with extensive experience of more than fifteen year in home interiors and furnishings. He value his offerings with core believe on after sale support led quality."
              })}
            >
              <div className="relative aspect-square w-full max-w-[280px] md:max-w-full bg-[#161a23] rounded-3xl overflow-hidden border border-line/50 hover:border-oak/60 transition-all duration-500 shadow-xl">
                <img
                  src="https://furnitureholz.com/wp-content/uploads/2020/01/Muhammad-Shahid.jpg"
                  alt="Muhammad Shahid"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-display text-xl font-medium text-ivory mt-6 group-hover:text-oak transition-colors duration-300">
                Muhammad Shahid
              </h3>
              <span className="text-xs text-sage font-mono tracking-widest mt-1.5 uppercase">
                CEO Lahore
              </span>
              
              {/* Social Icons matching first image */}
              <div className="flex items-center gap-5 mt-4 text-ivory-dim/60">
                <a
                  href="https://facebook.com/furnitureholz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-oak hover:scale-120 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@furnitureholz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-oak hover:scale-120 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                  title="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31 0 2.583.397 3.655 1.13-.564.602-1.024 1.336-1.373 2.141-.75-.688-1.428-1.365-2.282-1.552-.459-.42-.713-.984-.713-1.603 0-.038.006-.076.013-.116zM18.68 5.88c-1.29.02-2.52-.45-3.48-1.31.07.7.07 1.41-.01 2.11.7.59 1.58.94 2.5.96V5.88zm-7.18 8.12V0H8.24c0 .85-.35 1.66-.96 2.27-.61.61-1.42.98-2.27 1.01v3.26c1.24-.03 2.4-.62 3.24-1.61v9.07c0 1.52-1.23 2.75-2.75 2.75S3 15.52 3 14s1.23-2.75 2.75-2.75c.32 0 .63.06.92.17V8.12A7.52 7.52 0 0 0 5.75 8C2.57 8 .1 10.47.1 13.65s2.47 5.65 5.65 5.65 5.65-2.47 5.65-5.65c0-.02 0-.04-.01-.06z" />
                  </svg>
                </a>
                <a
                  href="https://pinterest.com/furnitureholz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-oak hover:scale-120 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                  title="Pinterest"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.715-.359-1.777c0-1.663.967-2.905 2.167-2.905 1.024 0 1.517.769 1.517 1.689 0 1.029-.654 2.57-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.76-2.245 3.76-5.487 0-2.869-2.062-4.878-5.008-4.878-3.411 0-5.413 2.561-5.413 5.2 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.62 0 11.983-5.367 11.983-11.987C24 5.367 18.637 0 12.017 0z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Tanveer Ahmad */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="group flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedTeamMember({
                name: "Tanveer Ahmad",
                role: "CEO Faisalabad",
                image: "https://furnitureholz.com/wp-content/uploads/2020/01/Rana-Tanveer-Ahmad-Afaq.jpg",
                bio: "Chief Executive Officer of Faisalabad Showroom with extensive experience in traditional wooden crafting and seasoned timber curation. He oversees core furniture manufacturing standards and premium quality control."
              })}
            >
              <div className="relative aspect-square w-full max-w-[280px] md:max-w-full bg-[#161a23] rounded-3xl overflow-hidden border border-line/50 hover:border-oak/60 transition-all duration-500 shadow-xl">
                <img
                  src="https://furnitureholz.com/wp-content/uploads/2020/01/Rana-Tanveer-Ahmad-Afaq.jpg"
                  alt="Tanveer Ahmad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-display text-xl font-medium text-ivory mt-6 group-hover:text-oak transition-colors duration-300">
                Tanveer Ahmad
              </h3>
              <span className="text-xs text-sage font-mono tracking-widest mt-1.5 uppercase">
                CEO Faisalabad
              </span>
              
              {/* Social Icons matching first image */}
              <div className="flex items-center gap-5 mt-4 text-ivory-dim/60">
                <a
                  href="https://facebook.com/furnitureholz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-oak hover:scale-120 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@furnitureholz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-oak hover:scale-120 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                  title="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31 0 2.583.397 3.655 1.13-.564.602-1.024 1.336-1.373 2.141-.75-.688-1.428-1.365-2.282-1.552-.459-.42-.713-.984-.713-1.603 0-.038.006-.076.013-.116zM18.68 5.88c-1.29.02-2.52-.45-3.48-1.31.07.7.07 1.41-.01 2.11.7.59 1.58.94 2.5.96V5.88zm-7.18 8.12V0H8.24c0 .85-.35 1.66-.96 2.27-.61.61-1.42.98-2.27 1.01v3.26c1.24-.03 2.4-.62 3.24-1.61v9.07c0 1.52-1.23 2.75-2.75 2.75S3 15.52 3 14s1.23-2.75 2.75-2.75c.32 0 .63.06.92.17V8.12A7.52 7.52 0 0 0 5.75 8C2.57 8 .1 10.47.1 13.65s2.47 5.65 5.65 5.65 5.65-2.47 5.65-5.65c0-.02 0-.04-.01-.06z" />
                  </svg>
                </a>
                <a
                  href="https://pinterest.com/furnitureholz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-oak hover:scale-120 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                  title="Pinterest"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.715-.359-1.777c0-1.663.967-2.905 2.167-2.905 1.024 0 1.517.769 1.517 1.689 0 1.029-.654 2.57-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.76-2.245 3.76-5.487 0-2.869-2.062-4.878-5.008-4.878-3.411 0-5.413 2.561-5.413 5.2 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.62 0 11.983-5.367 11.983-11.987C24 5.367 18.637 0 12.017 0z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Nadeem Ahmad */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="group flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedTeamMember({
                name: "Nadeem Ahmad",
                role: "Managing Director",
                image: "https://furnitureholz.com/wp-content/uploads/2020/01/Nadeem-Ahmad-Afaq.jpg",
                bio: "Managing Director driving the strategic expansion, custom production logistics, and modern interior integration services at Furniture Holz. Committed to delivering hand-carved heritage designs to modern spaces."
              })}
            >
              <div className="relative aspect-square w-full max-w-[280px] md:max-w-full bg-[#161a23] rounded-3xl overflow-hidden border border-line/50 hover:border-oak/60 transition-all duration-500 shadow-xl">
                <img
                  src="https://furnitureholz.com/wp-content/uploads/2020/01/Nadeem-Ahmad-Afaq.jpg"
                  alt="Nadeem Ahmad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-display text-xl font-medium text-ivory mt-6 group-hover:text-oak transition-colors duration-300">
                Nadeem Ahmad
              </h3>
              <span className="text-xs text-sage font-mono tracking-widest mt-1.5 uppercase">
                Managing Director
              </span>
              
              {/* Social Icons matching first image */}
              <div className="flex items-center gap-5 mt-4 text-ivory-dim/60">
                <a
                  href="https://facebook.com/furnitureholz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-oak hover:scale-120 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@furnitureholz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-oak hover:scale-120 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                  title="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31 0 2.583.397 3.655 1.13-.564.602-1.024 1.336-1.373 2.141-.75-.688-1.428-1.365-2.282-1.552-.459-.42-.713-.984-.713-1.603 0-.038.006-.076.013-.116zM18.68 5.88c-1.29.02-2.52-.45-3.48-1.31.07.7.07 1.41-.01 2.11.7.59 1.58.94 2.5.96V5.88zm-7.18 8.12V0H8.24c0 .85-.35 1.66-.96 2.27-.61.61-1.42.98-2.27 1.01v3.26c1.24-.03 2.4-.62 3.24-1.61v9.07c0 1.52-1.23 2.75-2.75 2.75S3 15.52 3 14s1.23-2.75 2.75-2.75c.32 0 .63.06.92.17V8.12A7.52 7.52 0 0 0 5.75 8C2.57 8 .1 10.47.1 13.65s2.47 5.65 5.65 5.65 5.65-2.47 5.65-5.65c0-.02 0-.04-.01-.06z" />
                  </svg>
                </a>
                <a
                  href="https://pinterest.com/furnitureholz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-oak hover:scale-120 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                  title="Pinterest"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.715-.359-1.777c0-1.663.967-2.905 2.167-2.905 1.024 0 1.517.769 1.517 1.689 0 1.029-.654 2.57-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.76-2.245 3.76-5.487 0-2.869-2.062-4.878-5.008-4.878-3.411 0-5.413 2.561-5.413 5.2 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.62 0 11.983-5.367 11.983-11.987C24 5.367 18.637 0 12.017 0z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Executive Team Details Modal */}
        <AnimatePresence>
          {selectedTeamMember && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[150] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-4xl bg-[#11141c] border border-line/40 rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl p-6 sm:p-8 md:p-12 text-left"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedTeamMember(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-ivory/80 hover:text-white transition-all z-10"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                  {/* Left Column: Text & Info */}
                  <div className="md:col-span-7 flex flex-col justify-center">
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory tracking-tight leading-tight mb-2">
                      {selectedTeamMember.name}
                    </h2>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-sage block mb-6 sm:mb-8">
                      {selectedTeamMember.role}
                    </span>
                    
                    <p className="text-ivory-dim/80 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-sans">
                      {selectedTeamMember.bio}
                    </p>

                    <div className="border-t border-line/30 pt-6 mb-4" />

                    {/* Social links row from screenshot */}
                    <div className="flex items-center gap-6 text-ivory-dim/60">
                      <a
                        href="https://facebook.com/furnitureholz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-oak hover:scale-110 transition-all duration-300"
                        title="Facebook"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                        </svg>
                      </a>
                      <a
                        href="https://tiktok.com/@furnitureholz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-oak hover:scale-110 transition-all duration-300"
                        title="TikTok"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12.525.02c1.31 0 2.583.397 3.655 1.13-.564.602-1.024 1.336-1.373 2.141-.75-.688-1.428-1.365-2.282-1.552-.459-.42-.713-.984-.713-1.603 0-.038.006-.076.013-.116zM18.68 5.88c-1.29.02-2.52-.45-3.48-1.31.07.7.07 1.41-.01 2.11.7.59 1.58.94 2.5.96V5.88zm-7.18 8.12V0H8.24c0 .85-.35 1.66-.96 2.27-.61.61-1.42.98-2.27 1.01v3.26c1.24-.03 2.4-.62 3.24-1.61v9.07c0 1.52-1.23 2.75-2.75 2.75S3 15.52 3 14s1.23-2.75 2.75-2.75c.32 0 .63.06.92.17V8.12A7.52 7.52 0 0 0 5.75 8C2.57 8 .1 10.47.1 13.65s2.47 5.65 5.65 5.65 5.65-2.47 5.65-5.65c0-.02 0-.04-.01-.06z" />
                        </svg>
                      </a>
                      <a
                        href="https://pinterest.com/furnitureholz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-oak hover:scale-110 transition-all duration-300"
                        title="Pinterest"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.715-.359-1.777c0-1.663.967-2.905 2.167-2.905 1.024 0 1.517.769 1.517 1.689 0 1.029-.654 2.57-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.76-2.245 3.76-5.487 0-2.869-2.062-4.878-5.008-4.878-3.411 0-5.413 2.561-5.413 5.2 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.62 0 11.983-5.367 11.983-11.987C24 5.367 18.637 0 12.017 0z" />
                        </svg>
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm font-semibold hover:text-oak hover:scale-110 transition-all duration-300"
                        title="LinkedIn"
                      >
                        in
                      </a>
                      <a
                        href="https://reddit.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-oak hover:scale-110 transition-all duration-300"
                        title="Reddit"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.23-1.72l1.36-4.32 4.41.93c.04.88.76 1.58 1.65 1.58 1.1 0 2-1.1 2-2s-.9-2-2-2c-.88 0-1.61.58-1.84 1.39l-4.81-1.01c-.19-.04-.38.07-.44.26l-1.57 4.97c-2.47.05-4.75.7-6.42 1.72-.56-.76-1.46-1.24-2.42-1.24-1.65 0-3 1.35-3 3 0 1.22.73 2.27 1.78 2.72-.05.26-.08.52-.08.78 0 3.86 4.49 7 10 7s10-3.14 10-7c0-.26-.03-.52-.08-.78 1.05-.45 1.78-1.5 1.78-2.72zm-17 1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm11.5 4.5c-1.75 1.75-5.12 1.75-6.88 0-.15-.15-.15-.39 0-.54.15-.15.39-.15.54 0 1.45 1.45 4.35 1.45 5.8 0 .15-.15.39-.15.54 0 .15.15.39 0 .54zm-.5-3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Image */}
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-line/30 shadow-2xl bg-line/10">
                      <img
                        src={selectedTeamMember.image}
                        alt={selectedTeamMember.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ================= LATEST NEWS ================= */}
        <div className="mb-24 border-t border-line/30 pt-24 relative">
          <div className="mb-16 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sage block mb-3">Stay Updated</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory">
              Latest News
            </h2>
            <div className="w-16 h-[1px] bg-oak mx-auto mt-4" />
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {LATEST_NEWS_ITEMS.map((news) => (
                <div
                  key={news.id}
                  className="bg-[#11141c] border border-line/30 rounded-[2rem] overflow-hidden shadow-2xl hover:border-oak/50 hover:shadow-3xl hover:shadow-oak/5 transition-all duration-300 flex flex-col group cursor-pointer"
                  onClick={() => setSelectedNewsCard(news)}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-line/10">
                    <img
                      src={news.image}
                      alt={news.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-6 left-6 bg-charcoal/80 backdrop-blur-sm px-4 py-2 rounded-full border border-line/30">
                      <span className="font-mono text-xs text-sage tracking-wider font-medium">{news.date}</span>
                    </div>
                  </div>

                  <div className="p-8 sm:p-10 flex flex-col flex-grow justify-between">
                    <h3 className="font-display text-xl sm:text-2xl font-medium text-ivory leading-snug group-hover:text-oak transition-colors duration-300 mb-8 line-clamp-3">
                      {news.title}
                    </h3>

                    <div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedNewsCard(news);
                        }}
                        className="inline-block py-3.5 px-8 text-xs font-mono uppercase tracking-widest text-center border border-line/60 text-ivory-dim/80 hover:border-oak hover:text-oak hover:bg-oak/5 transition-all duration-300 cursor-pointer rounded-xl bg-transparent"
                      >
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= LATEST NEWS DETAIL MODAL ================= */}
        <AnimatePresence>
          {selectedNewsCard && (
            <div className="fixed inset-0 bg-slate-50/95 backdrop-blur-md z-[150] overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                className="min-h-screen w-full flex flex-col items-center py-4 px-2 sm:px-4 md:py-8"
              >
                <div className="relative w-full max-w-7xl bg-white border border-gray-100 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-12 text-left">
                  {/* Header: Back & Close Buttons */}
                  <div className="flex items-center justify-between mb-8 sm:mb-10">
                    <button
                      onClick={() => setSelectedNewsCard(null)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-all cursor-pointer group"
                    >
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-gray-400 group-hover:text-gray-900" />
                      Back to Catalog
                    </button>
                    <button
                      onClick={() => setSelectedNewsCard(null)}
                      className="p-2.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-900 transition-all cursor-pointer border border-gray-100 bg-white"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Metadata line: Date & Comments */}
                  <div className="flex items-center justify-between text-gray-400 font-sans text-xs sm:text-sm border-b border-gray-100 pb-4 mb-6">
                    <span className="flex items-center gap-2 font-medium">
                      <Clock className="w-4 h-4 text-gray-300" />
                      {selectedNewsCard.date}
                    </span>
                    <span className="flex items-center gap-2 font-medium">
                      <MessageSquare className="w-4 h-4 text-gray-300" />
                      {selectedNewsCard.commentsCount} comments
                    </span>
                  </div>

                  {/* Blog Title */}
                  <h1 className="font-sans font-extrabold text-2xl sm:text-4xl md:text-5xl text-gray-900 leading-tight tracking-tight mb-4">
                    {selectedNewsCard.title}
                  </h1>

                  {/* Category Link */}
                  <div className="text-xs sm:text-sm text-gray-400 font-sans mb-8">
                    in <span className="font-bold text-gray-900 hover:underline cursor-pointer uppercase tracking-wider">{selectedNewsCard.category}</span>
                  </div>

                  {/* Blog Featured Image */}
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg mb-10 border border-gray-100 bg-gray-50">
                    <img
                      src={selectedNewsCard.image}
                      alt={selectedNewsCard.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Blog Body Text */}
                  <div className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal font-sans whitespace-pre-line mb-10">
                    {renderFormattedText(selectedNewsCard.details)}
                  </div>

                  {/* Image Gallery */}
                  {selectedNewsCard.gallery && selectedNewsCard.gallery.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-gray-100 relative">
                      <h3 className="font-sans font-bold text-sm text-gray-900 uppercase tracking-widest mb-6">Event Photo Gallery</h3>
                      
                      {/* Lightbox */}
                      {lightboxImageIndex !== null && (
                        <div 
                          className="absolute inset-0 z-20 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
                          onClick={() => setLightboxImageIndex(null)}
                        >
                          {/* Big Card Container */}
                          <div 
                            className="relative max-w-2xl w-full bg-neutral-900 border border-neutral-800/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {/* Header/Title and Counter */}
                            <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/80 to-transparent p-4 flex justify-between items-center z-20">
                              <span className="text-xs font-mono bg-white/15 backdrop-blur-md px-2 py-0.5 rounded text-white/95 border border-white/5">
                                {lightboxImageIndex + 1} / {selectedNewsCard.gallery.length}
                              </span>
                            </div>

                            {/* Image Canvas with Arrows */}
                            <div className="relative aspect-[4/3] w-full bg-black flex items-center justify-center overflow-hidden">
                              <img
                                src={selectedNewsCard.gallery[lightboxImageIndex]}
                                alt="Expanded view"
                                referrerPolicy="no-referrer"
                                className="max-h-full max-w-full object-contain select-none"
                              />

                              {/* Left Arrow Button */}
                              <button
                                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all border border-white/10 shadow-lg cursor-pointer backdrop-blur-sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLightboxImageIndex(prev => (prev === 0 ? selectedNewsCard.gallery.length - 1 : prev! - 1));
                                }}
                                title="Previous Image"
                              >
                                <ChevronLeft className="w-5 h-5" />
                              </button>

                              {/* Right Arrow Button */}
                              <button
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all border border-white/10 shadow-lg cursor-pointer backdrop-blur-sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLightboxImageIndex(prev => (prev === selectedNewsCard.gallery.length - 1 ? 0 : prev! + 1));
                                }}
                                title="Next Image"
                              >
                                <ChevronRight className="w-5 h-5" />
                              </button>
                            </div>
                            
                            {/* Close Button top-right */}
                            <button
                              className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all border border-white/10 shadow-lg cursor-pointer backdrop-blur-sm"
                              onClick={() => setLightboxImageIndex(null)}
                              title="Close"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {selectedNewsCard.gallery.map((imgUrl, i) => (
                          <div 
                            key={i} 
                            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group cursor-zoom-in bg-gray-50 border border-gray-100"
                            onClick={() => setLightboxImageIndex(i)}
                          >
                            <img
                              src={imgUrl}
                              alt={`${selectedNewsCard.title} gallery frame ${i + 1}`}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-white text-xs font-mono bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">View Frame</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}


                  {/* Related Posts */}
                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <h3 className="font-sans font-bold text-sm text-gray-900 uppercase tracking-widest mb-6">Related Posts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {LATEST_NEWS_ITEMS.filter(news => news.id === 'faisalabad-chamber-visit-2021').map((news) => (
                        <div
                          key={news.id}
                          className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer"
                          onClick={() => setSelectedNewsCard(news)}
                        >
                          <div className="relative aspect-[16/9] overflow-hidden bg-gray-50">
                            <img
                              src={news.image}
                              alt={news.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-5 flex flex-col flex-grow justify-between">
                            <h4 className="font-sans text-sm font-semibold text-gray-900 leading-snug group-hover:text-oak transition-colors duration-300 mb-4 line-clamp-2">
                              {news.title}
                            </h4>
                            <span className="text-xs text-gray-400 font-sans">{news.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Block: Event Highlights & CTA Buttons */}
                  <div className="mt-12 p-6 sm:p-8 bg-gray-50 rounded-3xl border border-gray-100/80">
                    <h3 className="font-sans font-bold text-xs text-gray-400 uppercase tracking-widest mb-4">Event Highlights</h3>
                    <ul className="space-y-3 mb-8">
                      {selectedNewsCard.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                          <span className="text-[#D4A860] mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-oak" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200/50">
                      <a
                        href={`https://www.youtube.com/results?search_query=${selectedNewsCard.youtubeQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF0000] hover:bg-[#CC0000] text-white text-xs sm:text-sm uppercase tracking-widest font-mono rounded-xl transition-all font-semibold shadow-md active:scale-95 cursor-pointer"
                      >
                        <Play className="w-4 h-4 fill-current text-white" />
                        Watch Highlights on YouTube
                      </a>
                      <a
                        href="https://facebook.com/furnitureholz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 text-xs sm:text-sm uppercase tracking-widest font-mono rounded-xl transition-all font-semibold shadow-sm active:scale-95 cursor-pointer"
                      >
                        Follow Facebook Page
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>



        {/* Customer Reviews Video Player Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative max-w-sm w-full aspect-[9/16] h-[85vh] max-h-[800px] bg-black rounded-3xl overflow-hidden border border-oak/30 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/60 text-white hover:text-oak hover:bg-black/80 transition-all cursor-pointer border border-white/10"
                  aria-label="Close Video"
                >
                  <X className="w-5 h-5" />
                </button>

                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&mute=0&rel=0&modestbranding=1&start=${activeVideo.start}`}
                  title="Customer Review Video Walkthrough"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Customer Reviews Video Player Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative max-w-sm w-full aspect-[9/16] h-[85vh] max-h-[800px] bg-black rounded-3xl overflow-hidden border border-oak/30 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/60 text-white hover:text-oak hover:bg-black/80 transition-all cursor-pointer border border-white/10"
                  aria-label="Close Video"
                >
                  <X className="w-5 h-5" />
                </button>

                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&mute=0&rel=0&modestbranding=1&start=${activeVideo.start}`}
                  title="Customer Review Video Walkthrough"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
