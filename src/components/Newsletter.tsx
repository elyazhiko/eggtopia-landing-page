
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-10 fancy-blur-bg">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cream-100 text-yolk-600 font-medium text-sm">
          Stay Connected
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Join Our <span className="text-yolk-500">Egg-thusiasts</span> Community
        </h2>
        <p className="text-foreground/70 mb-8 text-balance">
          Subscribe to receive updates on new products, special offers, and seasonal recipes that showcase our premium eggs.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-grow relative">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-yolk-500/50 transition-shadow"
                required
              />
              
              {isSubmitted && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                </div>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isLoading || isSubmitted}
              className={cn(
                "button-hover whitespace-nowrap px-6 py-3 rounded-full font-medium shadow-md flex items-center justify-center transition-all",
                (isLoading || isSubmitted) 
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed" 
                  : "bg-yolk-500 text-white hover:bg-yolk-600"
              )}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing
                </span>
              ) : isSubmitted ? (
                <span className="flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                  Subscribed
                </span>
              ) : (
                <span className="flex items-center">
                  Subscribe
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              )}
            </button>
          </div>
          
          {isSubmitted && (
            <div className="mt-4 text-sm text-green-600 animate-fade-in">
              Thank you for subscribing! Check your inbox for a welcome email.
            </div>
          )}
          
          <p className="text-xs text-foreground/60 mt-4">
            By subscribing, you agree to receive marketing emails from us. 
            You can unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
