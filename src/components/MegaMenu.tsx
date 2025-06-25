
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface Category {
  name: string;
  path: string;
  subcategories?: {
    name: string;
    path: string;
    items?: string[];
  }[];
}

const categories: Category[] = [
  {
    name: "Electronics",
    path: "/electronics",
    subcategories: [
      {
        name: "Mobiles",
        path: "/electronics",
        items: ["iPhone", "Samsung", "OnePlus", "Xiaomi", "Realme", "Oppo", "Vivo"]
      },
      {
        name: "Laptops",
        path: "/electronics",
        items: ["HP", "Dell", "Lenovo", "Asus", "Acer", "Apple MacBook"]
      },
      {
        name: "Tablets",
        path: "/electronics",
        items: ["iPad", "Samsung Tab", "Lenovo Tab"]
      },
      {
        name: "Audio",
        path: "/electronics",
        items: ["Headphones", "Speakers", "Earbuds", "Soundbars"]
      },
      {
        name: "Cameras",
        path: "/electronics",
        items: ["DSLR", "Mirrorless", "Action Cameras", "Instant Cameras"]
      }
    ]
  },
  {
    name: "Fashion",
    path: "/fashion",
    subcategories: [
      {
        name: "Men's Fashion",
        path: "/fashion",
        items: ["Shirts", "T-Shirts", "Jeans", "Formal Wear", "Ethnic Wear"]
      },
      {
        name: "Women's Fashion",
        path: "/fashion",
        items: ["Sarees", "Kurtas", "Dresses", "Tops", "Jeans", "Ethnic Wear"]
      },
      {
        name: "Kids Fashion",
        path: "/fashion",
        items: ["Boys Clothing", "Girls Clothing", "Baby Clothing"]
      },
      {
        name: "Footwear",
        path: "/fashion",
        items: ["Sports Shoes", "Casual Shoes", "Formal Shoes", "Sandals"]
      }
    ]
  },
  {
    name: "Home & Kitchen",
    path: "/home-kitchen",
    subcategories: [
      {
        name: "Kitchen Appliances",
        path: "/home-kitchen",
        items: ["Refrigerators", "Washing Machines", "Microwaves", "Air Conditioners"]
      },
      {
        name: "Home Decor",
        path: "/home-kitchen",
        items: ["Lighting", "Furnishing", "Home Improvement"]
      },
      {
        name: "Furniture",
        path: "/home-kitchen",
        items: ["Sofas", "Beds", "Dining Tables", "Wardrobes"]
      }
    ]
  },
  {
    name: "Beauty, Toys & More",
    path: "/beauty-toys-more",
    subcategories: [
      {
        name: "Beauty & Personal Care",
        path: "/all-products",
        items: ["Makeup", "Skincare", "Haircare", "Fragrances"]
      },
      {
        name: "Toys & Games",
        path: "/all-products",
        items: ["Action Figures", "Board Games", "Educational Toys"]
      },
      {
        name: "Books",
        path: "/all-products",
        items: ["Fiction", "Non-Fiction", "Academic", "Children's Books"]
      }
    ]
  },
  {
    name: "Sports, Books & More",
    path: "/sports-books-more",
    subcategories: [
      {
        name: "Sports & Fitness",
        path: "/all-products",
        items: ["Exercise Equipment", "Sports Accessories", "Outdoor Games"]
      },
      {
        name: "Automotive",
        path: "/all-products",
        items: ["Car Accessories", "Bike Accessories", "Car Care"]
      }
    ]
  }
];

const MegaMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleCategoryEnter = (categoryName: string) => {
    setHoveredCategory(categoryName);
  };

  const handleCategoryLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative group"
              onMouseEnter={() => handleCategoryEnter(category.name)}
              onMouseLeave={handleCategoryLeave}
            >
              <Link
                to={category.path}
                className="flex items-center space-x-1 px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>{category.name}</span>
                {category.subcategories && <ChevronDown className="h-3 w-3" />}
              </Link>

              {hoveredCategory === category.name && category.subcategories && (
                <div className="absolute top-full left-0 w-screen max-w-4xl bg-white border shadow-lg z-50 p-6">
                  <div className="grid grid-cols-4 gap-6">
                    {category.subcategories.map((subcategory) => (
                      <div key={subcategory.name} className="space-y-2">
                        <Link
                          to={subcategory.path}
                          className="font-semibold text-gray-800 hover:text-blue-600 block"
                        >
                          {subcategory.name}
                        </Link>
                        {subcategory.items && (
                          <ul className="space-y-1">
                            {subcategory.items.map((item) => (
                              <li key={item}>
                                <Link
                                  to={subcategory.path}
                                  className="text-sm text-gray-600 hover:text-blue-600"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
