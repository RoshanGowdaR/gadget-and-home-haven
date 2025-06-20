
import { Monitor, Home, Headphones, Mail, MapPin, Phone, Laptop, Camera } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Monitor className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">TechHome</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for premium electronics and home accessories. 
              Quality products, competitive prices, exceptional service.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/electronics" className="hover:text-white transition-colors">Electronics</a></li>
              <li><a href="/home-accessories" className="hover:text-white transition-colors">Home Accessories</a></li>
              <li><a href="/cart" className="hover:text-white transition-colors">Shopping Cart</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Laptop className="h-4 w-4" />
                <span>Laptops & Computers</span>
              </li>
              <li className="flex items-center space-x-2">
                <Headphones className="h-4 w-4" />
                <span>Audio & Headphones</span>
              </li>
              <li className="flex items-center space-x-2">
                <Camera className="h-4 w-4" />
                <span>Cameras & Photo</span>
              </li>
              <li className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Smart Home</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@techhome.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Tech Street, Digital City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TechHome. All rights reserved. Built with quality and care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
