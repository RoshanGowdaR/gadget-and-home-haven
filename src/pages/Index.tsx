
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  const featuredProducts = products.slice(0, 8);
  const mobileProducts = products.filter(p => p.category === "Mobiles").slice(0, 4);
  const fashionProducts = products.filter(p => p.category === "Men's Fashion" || p.category === "Women's Fashion").slice(0, 4);
  const electronicsProducts = products.filter(p => p.category === "Laptops").slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-8">
        {/* Featured Products */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
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

        {/* Mobile Phones Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Top Mobile Phones</h2>
            <Link to="/electronics">
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                View All Mobiles
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
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Fashion Trends</h2>
            <Link to="/fashion">
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                View All Fashion
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
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Top Electronics</h2>
            <Link to="/electronics">
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                View All Electronics
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {electronicsProducts.map((product) => (
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
