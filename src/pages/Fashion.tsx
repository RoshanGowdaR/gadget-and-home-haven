
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Fashion = () => {
  const fashionProducts = products.filter(product => 
    product.category === "Men's Fashion" || 
    product.category === "Women's Fashion" || 
    product.category === "Footwear"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Fashion</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest trends in men's and women's fashion, footwear, and accessories.
          </p>
        </div>

        {/* Category Sections */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Men's Fashion</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {fashionProducts.filter(p => p.category === "Men's Fashion").map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Women's Fashion</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {fashionProducts.filter(p => p.category === "Women's Fashion").map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Footwear</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {fashionProducts.filter(p => p.category === "Footwear").map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Fashion;
