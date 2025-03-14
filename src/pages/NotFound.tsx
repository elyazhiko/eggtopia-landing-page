
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Egg, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50 fancy-blur-bg px-6">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-yolk-100 flex items-center justify-center">
            <Egg className="w-10 h-10 text-yolk-500" />
          </div>
        </div>
        <h1 className="text-5xl font-display font-bold mb-4">404</h1>
        <p className="text-xl font-medium text-foreground/80 mb-8">
          Oops! This page seems to be scrambled.
        </p>
        <a 
          href="/" 
          className="button-hover inline-flex items-center px-6 py-3 rounded-full bg-yolk-500 text-white font-medium shadow-md"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
