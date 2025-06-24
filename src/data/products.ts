
import { Product } from "@/types/product";

export const products: Product[] = [
  // Mobiles & Smartphones
  {
    id: "1",
    name: "iPhone 15 Pro Max 256GB",
    description: "Latest iPhone with titanium design, A17 Pro chip, and advanced camera system.",
    price: 1199,
    originalPrice: 1299,
    image: "photo-1511707171634-5f897ff02aa9",
    category: "Mobiles",
    isOnSale: true,
    rating: 4.8,
    specifications: {
      "Storage": "256GB",
      "RAM": "8GB",
      "Display": "6.7-inch Super Retina XDR",
      "Camera": "48MP main, 12MP ultra-wide"
    },
    features: ["A17 Pro chip", "Titanium design", "Advanced camera system", "iOS 17"]
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra 5G",
    description: "Premium Android smartphone with S Pen, 200MP camera, and AI features.",
    price: 1099,
    image: "photo-1511707171634-5f897ff02aa9",
    category: "Mobiles",
    isOnSale: false,
    rating: 4.7,
    specifications: {
      "Storage": "256GB",
      "RAM": "12GB",
      "Display": "6.8-inch Dynamic AMOLED 2X",
      "Camera": "200MP main quad camera"
    },
    features: ["S Pen included", "AI-powered features", "200MP camera", "Android 14"]
  },
  {
    id: "3",
    name: "OnePlus 12 5G",
    description: "Flagship killer with Snapdragon 8 Gen 3, 120Hz display, and fast charging.",
    price: 699,
    originalPrice: 799,
    image: "photo-1511707171634-5f897ff02aa9",
    category: "Mobiles",
    isOnSale: true,
    rating: 4.6,
    specifications: {
      "Storage": "128GB",
      "RAM": "8GB",
      "Display": "6.82-inch LTPO AMOLED",
      "Camera": "50MP triple camera"
    },
    features: ["Snapdragon 8 Gen 3", "120Hz display", "100W fast charging", "OxygenOS"]
  },

  // Laptops
  {
    id: "4",
    name: "MacBook Pro 16-inch M3 Pro",
    description: "Professional laptop with M3 Pro chip, stunning Liquid Retina XDR display.",
    price: 2499,
    originalPrice: 2699,
    image: "photo-1496181133206-80ce9b88a853",
    category: "Laptops",
    isOnSale: true,
    rating: 4.9,
    specifications: {
      "Processor": "Apple M3 Pro",
      "RAM": "18GB",
      "Storage": "512GB SSD",
      "Display": "16-inch Liquid Retina XDR"
    },
    features: ["M3 Pro chip", "18-hour battery life", "Studio-quality mics", "macOS Sonoma"]
  },
  {
    id: "5",
    name: "Dell XPS 13 Plus Intel i7",
    description: "Ultra-thin laptop with 12th Gen Intel processors and premium design.",
    price: 1299,
    image: "photo-1496181133206-80ce9b88a853",
    category: "Laptops",
    isOnSale: false,
    rating: 4.6,
    specifications: {
      "Processor": "Intel Core i7-12700H",
      "RAM": "16GB LPDDR5",
      "Storage": "512GB SSD",
      "Display": "13.4-inch InfinityEdge"
    },
    features: ["12th Gen Intel Core", "Premium carbon fiber", "4K+ display option", "Windows 11"]
  },
  {
    id: "6",
    name: "HP Pavilion Gaming 15",
    description: "Gaming laptop with RTX 4060, AMD Ryzen 7, and 144Hz display.",
    price: 899,
    originalPrice: 1099,
    image: "photo-1496181133206-80ce9b88a853",
    category: "Laptops",
    isOnSale: true,
    rating: 4.4,
    specifications: {
      "Processor": "AMD Ryzen 7 5800H",
      "RAM": "16GB DDR4",
      "Storage": "512GB SSD",
      "Graphics": "NVIDIA RTX 4060"
    },
    features: ["144Hz display", "RGB backlit keyboard", "Advanced cooling", "Windows 11"]
  },

  // Fashion - Men's Clothing
  {
    id: "7",
    name: "Levi's Men's 511 Slim Jeans",
    description: "Classic slim-fit jeans with stretch comfort and timeless style.",
    price: 69,
    originalPrice: 89,
    image: "photo-1541099649105-f69ad21f3246",
    category: "Men's Fashion",
    isOnSale: true,
    rating: 4.4,
    specifications: {
      "Fit": "Slim fit",
      "Material": "98% Cotton, 2% Elastane",
      "Rise": "Mid-rise",
      "Closure": "Zip fly with button"
    },
    features: ["Stretch comfort", "Classic 5-pocket styling", "Machine washable", "Timeless design"]
  },
  {
    id: "8",
    name: "Nike Men's Dri-FIT T-Shirt",
    description: "Performance t-shirt with moisture-wicking technology for active lifestyle.",
    price: 29,
    image: "photo-1521572163474-6864f9cf17ab",
    category: "Men's Fashion",
    isOnSale: false,
    rating: 4.5,
    specifications: {
      "Material": "100% Polyester",
      "Fit": "Standard fit",
      "Technology": "Dri-FIT",
      "Care": "Machine wash"
    },
    features: ["Dri-FIT technology", "Lightweight fabric", "Comfortable fit", "Nike swoosh logo"]
  },

  // Fashion - Women's Clothing
  {
    id: "9",
    name: "Zara Women's Floral Dress",
    description: "Elegant floral dress perfect for casual and semi-formal occasions.",
    price: 79,
    originalPrice: 99,
    image: "photo-1515372039744-b8f02a3ae446",
    category: "Women's Fashion",
    isOnSale: true,
    rating: 4.3,
    specifications: {
      "Material": "Viscose blend",
      "Length": "Midi length",
      "Sleeve": "Short sleeve",
      "Pattern": "Floral print"
    },
    features: ["Floral print", "Comfortable fit", "Versatile styling", "Easy care"]
  },
  {
    id: "10",
    name: "H&M Women's Skinny Jeans",
    description: "High-waisted skinny jeans with stretch for comfort and style.",
    price: 39,
    image: "photo-1541099649105-f69ad21f3246",
    category: "Women's Fashion",
    isOnSale: false,
    rating: 4.2,
    specifications: {
      "Fit": "Skinny fit",
      "Material": "Cotton blend with stretch",
      "Rise": "High-waisted",
      "Length": "Full length"
    },
    features: ["High-waisted design", "Stretch comfort", "Classic styling", "Multiple washes available"]
  },

  // Footwear
  {
    id: "11",
    name: "Nike Air Max 270 React",
    description: "Lifestyle sneakers with Max Air cushioning and React foam technology.",
    price: 150,
    image: "photo-1549298916-b41d501d3772",
    category: "Footwear",
    isOnSale: false,
    rating: 4.6,
    specifications: {
      "Type": "Lifestyle sneakers",
      "Material": "Mesh and synthetic",
      "Sole": "Air Max + React cushioning",
      "Closure": "Lace-up"
    },
    features: ["Max Air cushioning", "React foam", "Breathable mesh upper", "Iconic design"]
  },
  {
    id: "12",
    name: "Adidas Ultraboost 22",
    description: "Premium running shoes with Boost midsole and Primeknit upper.",
    price: 180,
    originalPrice: 220,
    image: "photo-1549298916-b41d501d3772",
    category: "Footwear",
    isOnSale: true,
    rating: 4.7,
    specifications: {
      "Type": "Running shoes",
      "Material": "Primeknit upper",
      "Sole": "Boost midsole",
      "Support": "Torsion System"
    },
    features: ["Boost energy return", "Primeknit upper", "Continental rubber outsole", "Comfort collar"]
  },

  // Kitchen Appliances
  {
    id: "13",
    name: "Samsung 253L Frost Free Refrigerator",
    description: "Energy efficient refrigerator with digital inverter technology.",
    price: 299,
    originalPrice: 349,
    image: "photo-1556909114-f6e7ad7d3136",
    category: "Kitchen Appliances",
    isOnSale: true,
    rating: 4.3,
    specifications: {
      "Capacity": "253 Litres",
      "Type": "Frost Free",
      "Energy Rating": "3 Star",
      "Warranty": "1 Year + 9 Years on Compressor"
    },
    features: ["Digital Inverter Technology", "Base Stand Drawer", "Toughened Glass Shelves", "Energy Efficient"]
  },
  {
    id: "14",
    name: "LG 6.5 kg Washing Machine",
    description: "Fully automatic washing machine with Smart Inverter technology.",
    price: 219,
    image: "photo-1556909114-f6e7ad7d3136",
    category: "Kitchen Appliances",
    isOnSale: false,
    rating: 4.4,
    specifications: {
      "Capacity": "6.5 kg",
      "Type": "Fully Automatic Front Loading",
      "Energy Rating": "5 Star",
      "Warranty": "2 Years"
    },
    features: ["Smart Inverter Technology", "6 Motion DD", "Steam Wash", "Smart Diagnosis"]
  },

  // Home Decor
  {
    id: "15",
    name: "Philips Hue Smart LED Bulbs (4-Pack)",
    description: "Smart LED bulbs with millions of colors and voice control compatibility.",
    price: 129,
    originalPrice: 159,
    image: "photo-1507003211169-0a1dd7228f2d",
    category: "Home Decor",
    isOnSale: true,
    rating: 4.6,
    specifications: {
      "Type": "Smart LED",
      "Colors": "16 million colors",
      "Connectivity": "Wi-Fi, Bluetooth",
      "Compatibility": "Alexa, Google, Apple HomeKit"
    },
    features: ["Voice control", "16 million colors", "Energy efficient", "Smart scheduling"]
  },
  {
    id: "16",
    name: "IKEA Friheten Corner Sofa",
    description: "Corner sofa-bed with storage, perfect for small spaces.",
    price: 449,
    image: "photo-1555041469-a586c61ea9bc",
    category: "Furniture",
    isOnSale: false,
    rating: 4.2,
    specifications: {
      "Type": "Corner sofa-bed",
      "Material": "Polyester fabric",
      "Storage": "Under seat storage",
      "Dimensions": "230x151 cm"
    },
    features: ["Converts to bed", "Storage compartment", "Reversible chaise", "Easy assembly"]
  },

  // Beauty & Personal Care
  {
    id: "17",
    name: "Dyson Supersonic Hair Dryer",
    description: "Professional hair dryer with intelligent heat control and multiple attachments.",
    price: 399,
    image: "photo-1556228578-dd8a33dcbbda",
    category: "Beauty",
    isOnSale: false,
    rating: 4.7,
    specifications: {
      "Motor": "Digital motor V9",
      "Heat Settings": "4 heat settings + cold shot",
      "Speed": "3 speed settings",
      "Attachments": "5 styling attachments included"
    },
    features: ["Intelligent heat control", "Fast drying", "Multiple attachments", "Professional quality"]
  },
  {
    id: "18",
    name: "Lakme Absolute Makeup Kit",
    description: "Complete makeup kit with foundation, lipstick, and eye makeup essentials.",
    price: 79,
    originalPrice: 99,
    image: "photo-1596462502278-27bfdc403348",
    category: "Beauty",
    isOnSale: true,
    rating: 4.1,
    specifications: {
      "Includes": "Foundation, Lipstick, Mascara, Kajal",
      "Skin Type": "All skin types",
      "Finish": "Matte",
      "Coverage": "Medium to full"
    },
    features: ["Long-lasting formula", "All-in-one kit", "Travel friendly", "Professional finish"]
  },

  // Toys & Games
  {
    id: "19",
    name: "LEGO Creator Expert Taj Mahal",
    description: "Advanced building set with detailed architecture of the Taj Mahal.",
    price: 369,
    originalPrice: 449,
    image: "photo-1558618666-fcd25c85cd64",
    category: "Toys",
    isOnSale: true,
    rating: 4.8,
    specifications: {
      "Pieces": "5923 pieces",
      "Age": "16+",
      "Theme": "Creator Expert Architecture",
      "Dimensions": "20\" x 20\" x 8\""
    },
    features: ["Expert level build", "Detailed architecture", "Display worthy", "Collector's item"]
  },
  {
    id: "20",
    name: "Hot Wheels Track Set",
    description: "Ultimate racing track set with loops, curves, and multiple cars.",
    price: 49,
    image: "photo-1558618666-fcd25c85cd64",
    category: "Toys",
    isOnSale: false,
    rating: 4.4,
    specifications: {
      "Includes": "Track pieces, 3 cars, launcher",
      "Age": "4+",
      "Track Length": "6 feet",
      "Material": "Plastic"
    },
    features: ["Easy assembly", "High-speed racing", "Multiple configurations", "Durable construction"]
  },

  // Sports & Fitness
  {
    id: "21",
    name: "Fitbit Charge 5 Fitness Tracker",
    description: "Advanced fitness tracker with built-in GPS and health monitoring.",
    price: 149,
    originalPrice: 199,
    image: "photo-1551698618-1dfe5d97d256",
    category: "Sports & Fitness",
    isOnSale: true,
    rating: 4.5,
    specifications: {
      "Battery": "Up to 7 days",
      "GPS": "Built-in GPS",
      "Water Resistance": "50M",
      "Display": "Color AMOLED"
    },
    features: ["Built-in GPS", "Health monitoring", "Sleep tracking", "Stress management"]
  },
  {
    id: "22",
    name: "Domyos Weight Training Bench",
    description: "Adjustable weight training bench for home workouts.",
    price: 199,
    image: "photo-1571019613454-1cb2f99b2d8b",
    category: "Sports & Fitness",
    isOnSale: false,
    rating: 4.3,
    specifications: {
      "Type": "Adjustable bench",
      "Weight Capacity": "120 kg",
      "Positions": "7 backrest positions",
      "Material": "Steel frame"
    },
    features: ["Multiple positions", "Sturdy construction", "Compact design", "Easy assembly"]
  },

  // Books
  {
    id: "23",
    name: "The Psychology of Money",
    description: "Timeless lessons on wealth, greed, and happiness by Morgan Housel.",
    price: 14,
    originalPrice: 18,
    image: "photo-1481627834876-b7833e8f5570",
    category: "Books",
    isOnSale: true,
    rating: 4.8,
    specifications: {
      "Author": "Morgan Housel",
      "Pages": "256 pages",
      "Publisher": "Harriman House",
      "Language": "English"
    },
    features: ["Financial wisdom", "Easy to understand", "Real-world examples", "Bestseller"]
  },
  {
    id: "24",
    name: "Rich Dad Poor Dad",
    description: "Personal finance classic by Robert Kiyosaki about financial literacy.",
    price: 12,
    image: "photo-1481627834876-b7833e8f5570",
    category: "Books",
    isOnSale: false,
    rating: 4.6,
    specifications: {
      "Author": "Robert T. Kiyosaki",
      "Pages": "336 pages",
      "Publisher": "Plata Publishing",
      "Language": "English"
    },
    features: ["Financial education", "Investment mindset", "Wealth building", "Life-changing"]
  },

  // Automotive
  {
    id: "25",
    name: "Garmin DriveSmart 65 GPS",
    description: "GPS navigator with 6.95-inch display and voice-activated navigation.",
    price: 199,
    originalPrice: 249,
    image: "photo-1449824913935-59a10b8d2000",
    category: "Automotive",
    isOnSale: true,
    rating: 4.4,
    specifications: {
      "Screen Size": "6.95 inches",
      "Maps": "Preloaded maps",
      "Voice Control": "Voice-activated",
      "Updates": "Free lifetime map updates"
    },
    features: ["Large display", "Voice commands", "Traffic updates", "Easy installation"]
  }
];

export const categories = [
  "All",
  "Mobiles",
  "Laptops", 
  "Men's Fashion",
  "Women's Fashion",
  "Footwear",
  "Kitchen Appliances",
  "Home Decor",
  "Furniture",
  "Beauty",
  "Toys",
  "Sports & Fitness",
  "Books",
  "Automotive"
];
