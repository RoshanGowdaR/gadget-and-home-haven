
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const DealsSection = () => {
  const dealProducts = products.filter(p => p.isOnSale).slice(0, 6);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Best Deals</h2>
        <Link to="/all-products" className="text-blue-600 hover:underline text-sm">
          View All
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {dealProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group">
            <div className="border rounded-lg p-3 hover:shadow-md transition-shadow">
              <div className="aspect-square bg-gray-100 rounded mb-2 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=200&h=200`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-medium text-sm line-clamp-2 mb-1">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-green-600">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>
              {product.originalPrice && (
                <Badge variant="destructive" className="text-xs mt-1">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                </Badge>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
