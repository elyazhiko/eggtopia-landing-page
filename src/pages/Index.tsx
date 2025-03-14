
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import QualityPromise from '@/components/QualityPromise';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <QualityPromise />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
