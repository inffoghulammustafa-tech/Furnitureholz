/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MapPin, Mail, Phone, MessageCircle, Home } from 'lucide-react';
import { Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';
import { SiTiktok, SiPinterest } from 'react-icons/si';
import Logo from './Logo';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onSetCategory?: (cat: string) => void;
}

const SiTiktokCast = SiTiktok as any;
const SiPinterestCast = SiPinterest as any;

export default function Footer({ onOpenPrivacy }: FooterProps) {
  const [isChatHovered, setIsChatHovered] = useState(false);

  return (
    <footer className="bg-[#100a06] text-ivory-dim pt-16 pb-8 border-t border-oak/20 shadow-2xl relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Logo & Social */}
          <div className="space-y-6">
            <Logo variant="footer" iconSize={64} className="items-start" />
            <div className="flex gap-4">
              <a href="https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2FFurniture-Holz-106374084933636#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-oak/30 flex items-center justify-center hover:border-oak hover:text-oak transition-colors">
                  <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@furnitureholz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-oak/30 flex items-center justify-center hover:border-oak hover:text-oak transition-colors">
                  <SiTiktokCast className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCYlx8Lxicn8wZyBLy8bNKkQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-oak/30 flex items-center justify-center hover:border-oak hover:text-oak transition-colors">
                  <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/furnitureholzofficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-oak/30 flex items-center justify-center hover:border-oak hover:text-oak transition-colors">
                  <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.pinterest.com/furnitureholzpk/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-oak/30 flex items-center justify-center hover:border-oak hover:text-oak transition-colors">
                  <SiPinterestCast className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/furniture-holz/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-oak/30 flex items-center justify-center hover:border-oak hover:text-oak transition-colors">
                  <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Links</h3>
            <ul className="space-y-2">
                <li><a href="#" className="hover:text-oak transition-colors">Contact Us</a></li>
                <li><button onClick={onOpenPrivacy} className="hover:text-oak transition-colors">Privacy Policy</button></li>
            </ul>
          </div>

          {/* Column 3: Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Address</h3>
            <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-oak shrink-0 mt-1" />
                <p>AL-Madina Tower, Sheikhupura Road, Near Misaq-ul-Mall, Faisalabad</p>
            </div>
            <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-oak shrink-0" />
                <a href="mailto:info@furnitureholz.com" className="hover:text-oak transition-colors">info@furnitureholz.com</a>
            </div>
            <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-oak shrink-0" />
                <p>UAN 0304 111185</p>
            </div>
            <div className="flex gap-3 items-center">
                <p>Whatsapp: 0327 6235300</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-oak/20 pt-8 text-center text-xs">
            <p>&copy; furnitureholz.com &mdash; All Rights Reserved. Powered by Infinity Studios</p>
        </div>

        {/* Floating Chat (Left Aligned, Hover/Click Expandable Stack) */}
        <div 
          className="fixed bottom-8 left-8 z-50 flex flex-col items-center gap-3"
          onMouseEnter={() => setIsChatHovered(true)}
          onMouseLeave={() => setIsChatHovered(false)}
        >
          {/* Stack of Sub-options with beautiful slide-up and fade-in effects */}
          <div className={`flex flex-col gap-3 transition-all duration-300 transform origin-bottom ${
            isChatHovered ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-4 pointer-events-none'
          }`}>
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/923276235300" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200"
              title="Chat on WhatsApp"
            >
              <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.864-9.83.002-2.623-1.01-5.09-2.855-6.94C16.639 1.986 14.186 1.015 11.6 1.015 6.166 1.015 1.74 5.428 1.736 10.844c-.001 1.73.454 3.42 1.316 4.922l-.993 3.626 3.72-.976zm11.531-5.115c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
            </a>

            {/* Messenger Button */}
            <a 
              href="https://m.me/106374084933636" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 bg-[#0084FF] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200"
              title="Chat on Facebook Messenger"
            >
              <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.082.3 2.224.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.293 14.192l-3.076-3.275-6.002 3.275 6.6-7.008 3.12 3.275 5.958-3.275-6.6 7.008z"/>
              </svg>
            </a>
          </div>

          {/* Core Trigger Button */}
          <button 
            onClick={() => setIsChatHovered(!isChatHovered)}
            className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 ${
              isChatHovered ? 'bg-[#FF5A5F] rotate-90' : 'bg-brand-gradient text-charcoal'
            }`}
          >
            {isChatHovered ? (
              <svg className="w-6 h-6 stroke-white stroke-[2.5]" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <MessageCircle className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>
    </footer>
  );
}

