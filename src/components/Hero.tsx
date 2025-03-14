
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !imageRef.current || !textRef.current) return;
      
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const parallaxRate = scrollY * 0.2;
      
      // Parallax effect
      imageRef.current.style.transform = `translateY(${parallaxRate}px)`;
      textRef.current.style.transform = `translateY(${parallaxRate * 0.5}px)`;
      
      // Opacity effect based on scroll
      const opacity = 1 - Math.min(1, scrollY / (heroHeight * 0.8));
      heroRef.current.style.opacity = opacity.toString();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden fancy-blur-bg pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div 
          ref={textRef}
          className="z-10 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-cream-100 text-yolk-600 font-medium text-sm">
            Premium Farm-Fresh Eggs
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            Nature's Perfect <br />
            <span className="text-yolk-500">Nutrition</span> for You
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl text-balance">
            Discover eggs sourced from happy, free-range hens. Taste the difference in every bite with our nutritious, farm-fresh eggs delivered to your doorstep.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a 
              href="#shop"
              className="button-hover flex items-center justify-center px-6 py-3 rounded-full bg-yolk-500 text-white font-medium shadow-md"
            >
              Shop Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#quality"
              className="button-hover flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-foreground font-medium"
            >
              Our Quality Promise
            </a>
          </div>
        </div>
        
        <div 
          ref={imageRef}
          className="relative lg:h-[600px] w-full flex items-center justify-center animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          {/* Main egg image */}
          <div className="relative z-10 animate-float">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden premium-card">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-110"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI3fHxlZ2dzfGVufDB8fHx8MTcxMDI1ODU3M3ww&ixlib=rb-4.0.3&q=80&w=2000')`, 
                  transformOrigin: 'center',
                }}
              />
            </div>
          </div>
          
          {/* Background decoration elements */}
          <div className="absolute top-[15%] right-[15%] w-16 h-16 bg-cream-200 rounded-full opacity-70 animate-pulse-subtle" />
          <div className="absolute bottom-[20%] left-[5%] w-20 h-20 bg-shell-100 rounded-full opacity-50 animate-pulse-subtle" style={{animationDelay: '1s'}} />
          <div className="absolute top-[60%] right-[10%] w-12 h-12 bg-yolk-100 rounded-full opacity-60 animate-pulse-subtle" style={{animationDelay: '2s'}} />
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 glass border-t border-white/20 py-4 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-6 md:px-10">
          <div className="text-center">
            <p className="font-display text-2xl md:text-3xl font-bold text-yolk-500">100%</p>
            <p className="text-sm text-foreground/70">Organic Feed</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl md:text-3xl font-bold text-yolk-500">10K+</p>
            <p className="text-sm text-foreground/70">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl md:text-3xl font-bold text-yolk-500">24h</p>
            <p className="text-sm text-foreground/70">Fresh Delivery</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl md:text-3xl font-bold text-yolk-500">5★</p>
            <p className="text-sm text-foreground/70">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
