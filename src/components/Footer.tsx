/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Mail, Phone, MessageCircle, Home } from 'lucide-react';
import { Facebook, Youtube, Instagram, Linkedin, Music } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onOpenPrivacy?: () => void;
}

export default function Footer({ onOpenPrivacy }: FooterProps) {
  return (
    <footer className="bg-[#060B18] text-ivory-dim pt-16 pb-8 border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Logo & Social */}
          <div className="space-y-6">
            <Logo variant="footer" iconSize={64} className="items-start" />
            <div className="flex gap-4">
              {[ { icon: Facebook, href: '#' }, { icon: Music, href: '#' }, { icon: Youtube, href: '#' }, { icon: Instagram, href: '#' }, { icon: Linkedin, href: '#' } ].map((item, i) => (
                <a key={i} href={item.href} className="w-10 h-10 rounded-full border border-blue-900/50 flex items-center justify-center hover:border-oak hover:text-oak transition-colors">
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
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
        <div className="border-t border-blue-900/30 pt-8 text-center text-xs">
            <p>&copy; furnitureholz.com &mdash; All Rights Reserved. Powered by Infinity Studios</p>
        </div>

        {/* Floating Chat */}
        <div className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-oak rounded-full flex items-center justify-center text-charcoal shadow-xl cursor-pointer hover:scale-105 transition-transform">
            <MessageCircle className="w-7 h-7" />
        </div>
      </div>
    </footer>
  );
}

