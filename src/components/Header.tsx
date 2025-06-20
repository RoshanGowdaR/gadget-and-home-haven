
import { useState } from "react";
import { ShoppingCart, Home, Monitor, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Monitor className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">TechHome</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/electronics" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Monitor className="h-4 w-4" />
              <span>Electronics</span>
            </Link>
            <Link to="/home-accessories" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Home className="h-4 w-4" />
              <span>Home Accessories</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="space-y-2">
              <Link to="/" className="block py-2 text-gray-600 hover:text-blue-600">Home</Link>
              <Link to="/electronics" className="block py-2 text-gray-600 hover:text-blue-600">Electronics</Link>
              <Link to="/home-accessories" className="block py-2 text-gray-600 hover:text-blue-600">Home Accessories</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
