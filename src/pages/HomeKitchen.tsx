
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const HomeKitchen = () => {
  const homeKitchenProducts = products.filter(product => 
    product.category === "Kitchen Appliances" || 
    product.category === "Home Decor" || 
    product.category === "Furniture"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Home & Kitchen</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your home with our collection of kitchen appliances, furniture, and home decor.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Kitchen Appliances</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {homeKitchenProducts.filter(p => p.category === "Kitchen Appliances").map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Home Decor</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {homeKitchenProducts.filter(p => p.category === "Home Decor").map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Furniture</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {homeKitchenProducts.filter(p => p.category === "Furniture").map((product) => (
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

export default HomeKitchen;
