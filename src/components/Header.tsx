
import { useState } from "react";
import { ShoppingCart, Home, Monitor, User, Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import UserDropdown from "./UserDropdown";
import SearchBar from "./SearchBar";
import MegaMenu from "./MegaMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { user, loading } = useAuth();
  
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded">
                <Monitor className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <span className="text-xl font-bold">Flipkart</span>
                <div className="text-xs italic text-yellow-300">Explore <span className="text-yellow-400">Plus</span></div>
              </div>
            </Link>

            {/* Search Bar - Main feature like Flipkart */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <SearchBar />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              {!loading && (
                user ? (
                  <UserDropdown />
                ) : (
                  <Link to="/auth">
                    <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-1 text-white hover:bg-blue-700">
                      <User className="h-4 w-4" />
                      <span>Login</span>
                    </Button>
                  </Link>
                )
              )}

              <div className="hidden md:block text-sm text-center">
                <div className="text-white">Become a Seller</div>
                <div className="text-xs opacity-80">Start selling</div>
              </div>
              
              <Link to="/cart" className="flex flex-col items-center text-white hover:text-blue-200 transition-colors">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                      {cartItemCount}
                    </span>
                  )}
                </div>
                <span className="text-xs">Cart</span>
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
          <div className="md:hidden py-3 border-t border-blue-500">
            <SearchBar />
          </div>
        </div>
      </header>

      {/* Flipkart-style Navigation Menu */}
      <MegaMenu />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-3">
              <Link to="/" className="block py-2 text-gray-600 hover:text-blue-600 border-b">
                <div className="flex items-center space-x-2">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </div>
              </Link>
              <Link to="/electronics" className="block py-2 text-gray-600 hover:text-blue-600 border-b">
                <div className="flex items-center space-x-2">
                  <Monitor className="h-4 w-4" />
                  <span>Electronics</span>
                </div>
              </Link>
              <Link to="/fashion" className="block py-2 text-gray-600 hover:text-blue-600 border-b">Fashion</Link>
              <Link to="/home-kitchen" className="block py-2 text-gray-600 hover:text-blue-600 border-b">Home & Kitchen</Link>
              <Link to="/beauty-toys-more" className="block py-2 text-gray-600 hover:text-blue-600 border-b">Beauty, Toys & More</Link>
              {!loading && (
                <div className="py-2 border-t">
                  {user ? (
                    <UserDropdown />
                  ) : (
                    <Link to="/auth">
                      <Button variant="outline" size="sm" className="w-full">
                        <User className="h-4 w-4 mr-2" />
                        Sign In
                      </Button>
                    </Link>
                  )}
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
