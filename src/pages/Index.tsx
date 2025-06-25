
import React from "react";
import Header from "@/components/Header";
import FlipkartBanner from "@/components/FlipkartBanner";
import CategoryBanner from "@/components/CategoryBanner";
import DealsSection from "@/components/DealsSection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  // Safely get products with fallback
  const allProducts = products || [];
  const featuredProducts = allProducts.slice(0, 8);
  const mobileProducts = allProducts.filter(p => p.category === "Mobiles").slice(0, 4);
  const fashionProducts = allProducts.filter(p => 
    p.category === "Men's Fashion" || p.category === "Women's Fashion"
  ).slice(0, 4);
  const electronicsProducts = allProducts.filter(p => p.category === "Laptops").slice(0, 4);
  const homeProducts = allProducts.filter(p => 
    p.category === "Kitchen Appliances" || p.category === "Home Decor"
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <FlipkartBanner />
      <CategoryBanner />
      
      <main className="container mx-auto px-4 py-8">
        <DealsSection />

        {/* Mobile Phones Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm border mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Top Mobiles</h2>
            <Link to="/electronics">
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                View All
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mobileProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Fashion Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm border mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Fashion Trends</h2>
            <Link to="/fashion">
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                View All
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {fashionProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Electronics Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm border mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Top Electronics</h2>
            <Link to="/electronics">
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                View All
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {electronicsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Home & Kitchen Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm border mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Home & Kitchen</h2>
            <Link to="/home-kitchen">
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                View All
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {homeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Recommended for You</h2>
            <Link to="/all-products">
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                View All Products
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
