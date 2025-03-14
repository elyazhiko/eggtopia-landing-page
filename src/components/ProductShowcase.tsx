
import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "BioTech Free-Range Eggs",
    description: "Eggs from our AI-monitored hens with optimal nutrition profiles.",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI3fHxlZ2dzfGVufDB8fHx8MTcxMDI1ODU3M3ww&ixlib=rb-4.0.3&q=80&w=2000",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Heritage Chicken Eggs",
    description: "Laid by our specially-bred heritage hens for superior taste.",
    price: "$9.49",
    image: "https://images.unsplash.com/photo-1489664237288-b3240e50acad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1934&q=80"
  },
  {
    id: 3,
    name: "Origin Duck Eggs",
    description: "Premium duck eggs with enhanced nutritional content.",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1569288052389-dac9b01c9c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    badge: "New"
  },
  {
    id: 4,
    name: "Omega-3 Enhanced Eggs",
    description: "Specially formulated feed for highest omega-3 content.",
    price: "$10.99",
    image: "https://images.unsplash.com/photo-1507909676389-96763a8272a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  }
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-24 px-6 md:px-10 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 text-indigo-600 font-medium text-sm">
            Premium Selection
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Next-Gen <span className="text-gradient">Egg Varieties</span>
          </h2>
          <p className="text-foreground/70 text-balance">
            Discover our range of technologically-enhanced eggs. Each product is monitored from farm to table for perfect quality and nutritional content.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="futuristic-card overflow-hidden group hover:glow-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                {product.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-medium rounded-full flex items-center">
                    <Zap className="w-3 h-3 mr-1" />
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-foreground/70 mb-4 h-12">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display font-semibold text-lg">{product.price}</span>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center bg-indigo-100 hover:bg-indigo-200 transition-colors">
                    <ArrowRight className="w-5 h-5 text-indigo-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#shop" 
            className="neo-button inline-flex items-center glow-effect"
          >
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
