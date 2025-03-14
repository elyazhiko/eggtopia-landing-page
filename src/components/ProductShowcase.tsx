
import React from 'react';
import { ArrowRight } from 'lucide-react';

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
    name: "Premium Free-Range Eggs",
    description: "Farm-fresh eggs from our free-range, organically fed hens.",
    price: "$6.99",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI3fHxlZ2dzfGVufDB8fHx8MTcxMDI1ODU3M3ww&ixlib=rb-4.0.3&q=80&w=2000",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Organic Brown Eggs",
    description: "Rich in flavor, these premium brown eggs come from our heritage hens.",
    price: "$7.49",
    image: "https://images.unsplash.com/photo-1489664237288-b3240e50acad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1934&q=80"
  },
  {
    id: 3,
    name: "Specialty Duck Eggs",
    description: "Larger eggs with rich, creamy yolks perfect for gourmet cooking.",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1569288052389-dac9b01c9c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    badge: "New"
  },
  {
    id: 4,
    name: "Pasture-Raised White Eggs",
    description: "Clean, mild flavor from hens with 24/7 outdoor access.",
    price: "$5.99",
    image: "https://images.unsplash.com/photo-1506976773555-b3da30a63b57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  }
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-24 px-6 md:px-10 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cream-100 text-yolk-600 font-medium text-sm">
            Our Selection
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Premium Egg <span className="text-yolk-500">Varieties</span>
          </h2>
          <p className="text-foreground/70 text-balance">
            Discover our range of high-quality eggs sourced from ethically raised, happy hens. Each variety offers unique flavors and nutritional benefits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="premium-card overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                />
                {product.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-yolk-500 text-white text-xs font-medium rounded-full">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-foreground/70 mb-4 h-12">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display font-semibold text-lg">{product.price}</span>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-secondary/80 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#shop" 
            className="button-hover inline-flex items-center px-6 py-3 rounded-full bg-yolk-500 text-white font-medium shadow-md"
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
