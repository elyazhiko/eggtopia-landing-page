
import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The taste difference is incredible. These eggs have rich, golden yolks and make my breakfast so much more enjoyable!",
    author: "Emma Thompson",
    role: "Home Chef",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
  },
  {
    id: 2,
    quote: "As a professional chef, I'm extremely picky about ingredients. These eggs consistently deliver superior quality and flavor.",
    author: "Michael Carter",
    role: "Restaurant Owner",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 3,
    quote: "I switched to EggVita for ethical reasons, but stayed for the amazing quality. I'll never go back to store-bought eggs!",
    author: "Sarah Johnson",
    role: "Health Coach",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    quote: "The subscription service is so convenient. Fresh eggs delivered weekly with no hassle. Highly recommend!",
    author: "David Wilson",
    role: "Busy Parent",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const startSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    
    if (!isPaused) {
      slideInterval.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }
  };

  useEffect(() => {
    startSlideTimer();
    
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [activeIndex, isPaused]);

  const pauseSlider = () => setIsPaused(true);
  const resumeSlider = () => setIsPaused(false);

  return (
    <section 
      id="testimonials" 
      className="py-24 px-6 md:px-10 bg-yolk-50"
      onMouseEnter={pauseSlider}
      onMouseLeave={resumeSlider}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cream-200 text-yolk-600 font-medium text-sm">
            Customer Stories
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Loved by <span className="text-yolk-500">Thousands</span>
          </h2>
          <p className="text-foreground/70 text-balance">
            Hear what our customers have to say about their experience with our premium egg products.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="premium-card p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yolk-500 fill-yolk-500" />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg md:text-xl font-medium mb-4 text-balance">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <footer>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-foreground/70">{testimonial.role}</p>
                      </footer>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-border hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex ? 'bg-yolk-500 w-8' : 'bg-yolk-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-border hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
