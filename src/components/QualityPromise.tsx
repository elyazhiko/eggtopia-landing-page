
import React from 'react';
import { Leaf, Sun, Home, ShieldCheck } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="premium-card p-8 hover-scale">
    <div className="w-12 h-12 rounded-full bg-yolk-50 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
    <p className="text-foreground/70">{description}</p>
  </div>
);

const QualityPromise = () => {
  return (
    <section id="quality" className="py-24 px-6 md:px-10 fancy-blur-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cream-100 text-yolk-600 font-medium text-sm">
              Our Promise
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Quality That You Can <br />
              <span className="text-yolk-500">Taste and Trust</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 text-balance">
              At EggVita, we believe in transparency and quality. Our eggs come from hens that are treated humanely and fed only the best organic feed. The result? Eggs that are not only delicious but nutritious too.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-yolk-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-yolk-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Quality Guaranteed</h4>
                  <p className="text-sm text-foreground/70">Every egg is inspected for quality and freshness</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-yolk-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-yolk-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Farm to Table</h4>
                  <p className="text-sm text-foreground/70">Delivered within 24 hours of collection</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-yolk-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-yolk-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Sustainable Practices</h4>
                  <p className="text-sm text-foreground/70">Eco-friendly packaging and farming methods</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-[500px] relative">
              <div className="absolute inset-4 border-2 border-yolk-100 rounded-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="premium-card w-full h-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507909676389-96763a8272a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Happy hens in open pasture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Leaf className="w-6 h-6 text-yolk-500" />}
            title="100% Organic Feed"
            description="Our hens are fed a nutritious diet of organic grains and plants, free from GMOs and pesticides."
          />
          <FeatureCard 
            icon={<Sun className="w-6 h-6 text-yolk-500" />}
            title="Free-Range Access"
            description="Our hens enjoy daily access to open pastures where they can roam, forage, and express natural behaviors."
          />
          <FeatureCard 
            icon={<Home className="w-6 h-6 text-yolk-500" />}
            title="Family Farms"
            description="We partner with local family farms that share our commitment to sustainable and humane practices."
          />
          <FeatureCard 
            icon={<ShieldCheck className="w-6 h-6 text-yolk-500" />}
            title="Quality Certified"
            description="All our eggs meet or exceed industry standards for safety, freshness, and nutritional value."
          />
        </div>
      </div>
    </section>
  );
};

export default QualityPromise;
