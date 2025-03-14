
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Egg, Sun, Cloud, TreeDeciduous, Flower2 } from 'lucide-react';

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
      {/* Farm-themed vector backgrounds */}
      <div className="absolute top-40 left-10 text-orange-100 opacity-10">
        <TreeDeciduous className="w-36 h-36" />
      </div>
      <div className="absolute bottom-40 right-10 text-orange-100 opacity-10">
        <Cloud className="w-40 h-40" />
      </div>
      <div className="absolute top-1/4 right-1/4 text-orange-100 opacity-5">
        <Sun className="w-64 h-64" />
      </div>
      <div className="absolute top-1/3 left-1/3 text-orange-100 opacity-10">
        <Cloud className="w-24 h-24" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 text-orange-100 opacity-10">
        <Flower2 className="w-20 h-20" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div 
          ref={textRef}
          className="z-10 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-orange-100 text-orange-600 font-medium text-sm">
            Est. 1825
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            The Old Farm <br />
            <span className="text-orange-gradient">Happy Valley</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl text-balance">
            Family owned and operated, we've transformed our historic estate into a haven for farm animals. Our free-range eggs come from happy hens roaming the beautiful surrounds of Happy Valley.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a 
              href="#shop"
              className="orange-neo-button flex items-center justify-center glow-effect"
            >
              Shop Our Eggs
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#quality"
              className="button-hover flex items-center justify-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm text-foreground font-medium border border-white/40"
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
          {/* Main image: chicken with egg */}
          <div className="relative z-10 animate-float">
            <div className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden futuristic-card glow-effect">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-110"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1569288052389-dac9b01c9c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')`, 
                  transformOrigin: 'center',
                }}
              />
            </div>
            <div className="absolute -bottom-5 -right-5 text-orange-500">
              <Egg className="w-16 h-16" />
            </div>
          </div>
          
          {/* Background holographic elements */}
          <div className="absolute top-[10%] right-[15%] w-20 h-20 rounded-full bg-orange-200/50 blur-md animate-pulse-subtle" />
          <div className="absolute bottom-[15%] left-[10%] w-24 h-24 rounded-full bg-orange-200/40 blur-md animate-pulse-subtle" style={{animationDelay: '1s'}} />
          <div className="absolute top-[50%] right-[5%] w-16 h-16 rounded-full bg-orange-100/50 blur-md animate-pulse-subtle" style={{animationDelay: '2s'}} />
        </div>
      </div>
      
      {/* Stats Bar with futuristic design */}
      <div className="absolute bottom-0 left-0 right-0 neo-glass border-t border-white/20 py-4 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-6 md:px-10">
          <div className="text-center">
            <p className="font-display text-2xl md:text-3xl font-bold text-orange-gradient">Since</p>
            <p className="text-sm text-foreground/70">1825</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl md:text-3xl font-bold text-orange-gradient">95km</p>
            <p className="text-sm text-foreground/70">North of Melbourne</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl md:text-3xl font-bold text-orange-gradient">100%</p>
            <p className="text-sm text-foreground/70">Organic Feed</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl md:text-3xl font-bold text-orange-gradient">Family</p>
            <p className="text-sm text-foreground/70">Owned & Operated</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
