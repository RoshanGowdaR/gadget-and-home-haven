
import { Link } from "react-router-dom";

const CategoryBanner = () => {
  const categories = [
    {
      name: "Grocery",
      image: "photo-1542838132-92c53300491e",
      link: "/grocery"
    },
    {
      name: "Mobiles",
      image: "photo-1511707171634-5f897ff02aa9",
      link: "/electronics"
    },
    {
      name: "Fashion",
      image: "photo-1441986300917-64674bd600d8",
      link: "/fashion"
    },
    {
      name: "Electronics",
      image: "photo-1518717758536-85ae29035b6d",
      link: "/electronics"
    },
    {
      name: "Home & Furniture",
      image: "photo-1555041469-a586c61ea9bc",
      link: "/home-kitchen"
    },
    {
      name: "Appliances",
      image: "photo-1556909114-f6e7ad7d3136",
      link: "/home-kitchen"
    },
    {
      name: "Travel",
      image: "photo-1488646953014-85cb44e25828",
      link: "/travel"
    },
    {
      name: "Beauty, Toys & More",
      image: "photo-1596462502278-27bfdc403348",
      link: "/beauty-toys-more"
    }
  ];

  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center overflow-x-auto">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="flex flex-col items-center min-w-[80px] hover:text-blue-600 transition-colors"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-2 bg-gray-100">
                <img
                  src={`https://images.unsplash.com/${category.image}?auto=format&fit=crop&w=64&h=64`}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-medium text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
