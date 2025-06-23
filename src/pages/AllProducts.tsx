
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

const AllProducts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">All Products</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our complete collection of products across all categories.
          </p>
        </div>

        <ProductGrid showFilters={true} />
      </main>

      <Footer />
    </div>
  );
};

export default AllProducts;
