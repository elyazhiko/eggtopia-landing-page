
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Egg, ShoppingCart, X, Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10",
        isScrolled 
          ? "neo-glass border-b border-white/30" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Egg 
              className="w-6 h-6 text-indigo-500 transition-transform duration-500 group-hover:rotate-12" 
              strokeWidth={2} 
            />
          </div>
          <span className="text-xl font-display font-semibold tracking-tight">
            <span className="text-gradient">Nex</span>Egg
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#products" className="nav-item">Products</a>
          <a href="#quality" className="nav-item">Our Tech</a>
          <a href="#testimonials" className="nav-item">Testimonials</a>
          <a href="#contact" className="nav-item">Contact</a>
        </nav>

        {/* Action buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <a
            href="#shop"
            className="neo-button shadow-sm"
          >
            Shop Now
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 neo-glass pt-24 px-6 z-40 transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center">
          <a 
            href="#products" 
            className="text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </a>
          <a 
            href="#quality" 
            className="text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Tech
          </a>
          <a 
            href="#testimonials" 
            className="text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <div className="pt-6 w-full">
            <a
              href="#shop"
              className="neo-button block w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop Now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
