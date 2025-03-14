
import React from 'react';
import { Leaf, Cpu, BarChart, ShieldCheck, Wheat, Tractor, Sun, Trees } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="futuristic-card p-8 hover-scale">
    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
    <p className="text-foreground/70">{description}</p>
  </div>
);

const QualityPromise = () => {
  return (
    <section id="quality" className="py-24 px-6 md:px-10 fancy-blur-bg relative overflow-hidden">
      {/* Farm-themed vector backgrounds */}
      <div className="absolute top-20 left-10 text-orange-100 opacity-10">
        <Tractor className="w-32 h-32" />
      </div>
      <div className="absolute bottom-20 right-10 text-orange-100 opacity-10">
        <Trees className="w-40 h-40" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-100 opacity-5">
        <Sun className="w-80 h-80" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-orange-100 text-orange-600 font-medium text-sm">
              Family Tradition
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Blending History <br />
              <span className="text-orange-gradient">With Modern Farming</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 text-balance">
              At The Old Farm Happy Valley, Diego and Georgia have intertwined traditional farming practices with modern techniques to ensure the highest quality free-range eggs, delivered fresh to your door.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">100% Free Range</h4>
                  <p className="text-sm text-foreground/70">Our chickens roam freely across the beautiful surrounds of Happy Valley</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Organic Feed</h4>
                  <p className="text-sm text-foreground/70">Premium organic feed free from soy, GMOs, pesticides, and antibiotics</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Various Size Options</h4>
                  <p className="text-sm text-foreground/70">Eggs in sizes from 500g to Jumbo, with mixed trays available</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-[500px] relative">
              <div className="absolute inset-4 border-2 border-orange-100 rounded-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="futuristic-card w-full h-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1598965898166-9c9b7adae72c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80" 
                  alt="Free range chickens at Happy Valley" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Digital overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Leaf className="w-6 h-6 text-orange-600" />}
            title="Premium Organic Feed"
            description="Our chickens enjoy organic barley, sorghum, wheat, chickpeas, and more from Country Heritage Foods."
          />
          <FeatureCard 
            icon={<Wheat className="w-6 h-6 text-orange-600" />}
            title="Natural Environment"
            description="Five different types of grass planted to ensure our chickens live in a natural environment."
          />
          <FeatureCard 
            icon={<BarChart className="w-6 h-6 text-orange-600" />}
            title="Wholesale Options"
            description="Special wholesale boxes of 180 eggs perfect for restaurants, cafes and other businesses."
          />
          <FeatureCard 
            icon={<ShieldCheck className="w-6 h-6 text-orange-600" />}
            title="Melbourne Delivery"
            description="Fresh eggs delivered straight to your door across Melbourne, or available at our retail partners."
          />
        </div>
      </div>
    </section>
  );
};

export default QualityPromise;
