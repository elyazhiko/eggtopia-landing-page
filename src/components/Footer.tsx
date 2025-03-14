
import React from 'react';
import { Egg, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-shell-50">
      <div className="max-w-7xl mx-auto pt-16 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Egg className="w-6 h-6 text-yolk-500" strokeWidth={2} />
              </div>
              <span className="text-xl font-display font-semibold tracking-tight">
                The Old Farm Happy Valley
              </span>
            </div>
            <p className="text-foreground/70 mb-6 text-balance">
              Established in 1825, we've transformed our historic estate into a haven for farm animals, offering premium free-range eggs from our happy hens.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center transition-colors hover:bg-secondary">
                <Instagram className="w-5 h-5 text-foreground/80" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center transition-colors hover:bg-secondary">
                <Facebook className="w-5 h-5 text-foreground/80" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center transition-colors hover:bg-secondary">
                <Twitter className="w-5 h-5 text-foreground/80" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#products" className="text-foreground/70 hover:text-foreground transition-colors">Our Products</a></li>
              <li><a href="#quality" className="text-foreground/70 hover:text-foreground transition-colors">Our Promise</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Wholesale</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Retail Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">6-Pack Eggs</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">12-Pack Eggs</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">30-Egg Tray</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Wholesale Box (180)</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Find a Retail Partner</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-yolk-500 flex-shrink-0" />
                <span className="text-foreground/70">Happy Valley, 95km North of Melbourne</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-yolk-500 flex-shrink-0" />
                <span className="text-foreground/70">(03) 1234 5678</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-yolk-500 flex-shrink-0" />
                <span className="text-foreground/70">hello@theoldfarm.com.au</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-16 py-8 text-center text-sm text-foreground/60">
          <p>© {currentYear} The Old Farm Happy Valley. Est. 1825. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
