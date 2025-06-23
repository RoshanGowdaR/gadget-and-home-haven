
import { useState } from "react";
import { ShoppingCart, Home, Monitor, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import LoginModal from "./LoginModal";
import SearchBar from "./SearchBar";

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

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <SearchBar />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
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
            <LoginModal>
              <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>Login</span>
              </Button>
            </LoginModal>
            
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden py-3 border-t">
          <SearchBar />
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="space-y-2">
              <Link to="/" className="block py-2 text-gray-600 hover:text-blue-600">Home</Link>
              <Link to="/electronics" className="block py-2 text-gray-600 hover:text-blue-600">Electronics</Link>
              <Link to="/home-accessories" className="block py-2 text-gray-600 hover:text-blue-600">Home Accessories</Link>
              <div className="py-2">
                <LoginModal>
                  <Button variant="outline" size="sm" className="w-full">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </LoginModal>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
