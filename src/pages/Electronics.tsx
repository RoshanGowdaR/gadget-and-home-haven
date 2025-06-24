
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Electronics = () => {
  const electronicsProducts = products.filter(product => 
    product.category === "Mobiles" || 
    product.category === "Laptops" || 
    product.category === "Electronics"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Electronics</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection of cutting-edge electronics, from mobiles and laptops to smart home devices.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Mobiles & Smartphones</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {electronicsProducts.filter(p => p.category === "Mobiles").map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Laptops & Computers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {electronicsProducts.filter(p => p.category === "Laptops").map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Other Electronics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {electronicsProducts.filter(p => p.category === "Electronics").map((product) => (
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

export default Electronics;
