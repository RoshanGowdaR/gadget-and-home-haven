
import { Product } from "@/types/product";

export const products: Product[] = [
  // Electronics - Smartphones
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    description: "Latest iPhone with titanium design, A17 Pro chip, and advanced camera system.",
    price: 1199,
    originalPrice: 1299,
    image: "photo-1511707171634-5f897ff02aa9",
    category: "Smartphones",
    isOnSale: true,
    rating: 4.8,
    specifications: {
      "Storage": "256GB",
      "RAM": "8GB",
      "Display": "6.7-inch Super Retina XDR",
      "Camera": "48MP main, 12MP ultra-wide"
    },
    features: [
      "A17 Pro chip",
      "Titanium design",
      "Advanced camera system",
      "iOS 17"
    ]
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra",
    description: "Premium Android smartphone with S Pen, powerful cameras, and AI features.",
    price: 1099,
    image: "photo-1511707171634-5f897ff02aa9",
    category: "Smartphones",
    isOnSale: false,
    rating: 4.7,
    specifications: {
      "Storage": "256GB",
      "RAM": "12GB",
      "Display": "6.8-inch Dynamic AMOLED",
      "Camera": "200MP main quad camera"
    },
    features: [
      "S Pen included",
      "AI-powered features",
      "200MP camera",
      "Android 14"
    ]
  },
  // Electronics - Laptops
  {
    id: "3",
    name: "MacBook Pro 16-inch M3",
    description: "Professional laptop with M3 chip, stunning Liquid Retina XDR display.",
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
    features: [
      "M3 Pro chip",
      "18-hour battery life",
      "Studio-quality mics",
      "macOS Sonoma"
    ]
  },
  {
    id: "4",
    name: "Dell XPS 13 Plus",
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
    features: [
      "12th Gen Intel Core",
      "Premium carbon fiber",
      "4K+ display option",
      "Windows 11"
    ]
  },
  // Electronics - Headphones
  {
    id: "5",
    name: "Sony WH-1000XM5",
    description: "Industry-leading noise canceling headphones with exceptional sound quality.",
    price: 349,
    originalPrice: 399,
    image: "photo-1518770660439-4636190af475",
    category: "Headphones",
    isOnSale: true,
    rating: 4.8,
    specifications: {
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.2",
      "Noise Cancellation": "Industry-leading",
      "Weight": "250g"
    },
    features: [
      "30-hour battery life",
      "Quick charge (3 min = 3 hours)",
      "Speak-to-chat technology",
      "Multipoint connection"
    ]
  },
  {
    id: "6",
    name: "AirPods Pro (3rd Gen)",
    description: "Apple's premium wireless earbuds with adaptive transparency and spatial audio.",
    price: 249,
    image: "photo-1518770660439-4636190af475",
    category: "Headphones",
    isOnSale: false,
    rating: 4.7,
    specifications: {
      "Battery Life": "6 hours + 24 with case",
      "Connectivity": "Bluetooth 5.3",
      "Noise Cancellation": "Active",
      "Water Resistance": "IPX4"
    },
    features: [
      "Adaptive transparency",
      "Spatial audio",
      "Touch control",
      "Find My support"
    ]
  },
  // Home & Kitchen - Appliances
  {
    id: "7",
    name: "Instant Pot Duo 7-in-1",
    description: "Multi-functional electric pressure cooker, slow cooker, rice cooker, and more.",
    price: 89,
    originalPrice: 119,
    image: "photo-1556909114-f6e7ad7d3136",
    category: "Kitchen Appliances",
    isOnSale: true,
    rating: 4.6,
    specifications: {
      "Capacity": "6 quarts",
      "Functions": "7-in-1",
      "Material": "Stainless steel",
      "Power": "1000W"
    },
    features: [
      "7 appliances in 1",
      "Smart program settings",
      "Safety features",
      "Easy to clean"
    ]
  },
  {
    id: "8",
    name: "Ninja Foodi Air Fryer Oven",
    description: "Large capacity air fryer oven with multiple cooking functions.",
    price: 179,
    image: "photo-1556909114-f6e7ad7d3136",
    category: "Kitchen Appliances",
    isOnSale: false,
    rating: 4.5,
    specifications: {
      "Capacity": "10-in-1 functionality",
      "Size": "Large family size",
      "Temperature": "Up to 450°F",
      "Timer": "60-minute timer"
    },
    features: [
      "10-in-1 functionality",
      "XL family size",
      "Even cooking",
      "Easy cleanup"
    ]
  },
  // Fashion - Clothing
  {
    id: "9",
    name: "Levi's 501 Original Jeans",
    description: "Classic straight-leg jeans, the original and the best since 1873.",
    price: 69,
    originalPrice: 89,
    image: "photo-1541099649105-f69ad21f3246",
    category: "Clothing",
    isOnSale: true,
    rating: 4.4,
    specifications: {
      "Fit": "Straight leg",
      "Material": "100% Cotton",
      "Rise": "Mid-rise",
      "Closure": "Button fly"
    },
    features: [
      "Classic straight fit",
      "Durable cotton denim",
      "Iconic button fly",
      "Timeless style"
    ]
  },
  {
    id: "10",
    name: "Nike Air Max 270",
    description: "Lifestyle shoe inspired by two icons of big Air: the Air Max 180 and Air Max 93.",
    price: 150,
    image: "photo-1549298916-b41d501d3772",
    category: "Footwear",
    isOnSale: false,
    rating: 4.6,
    specifications: {
      "Type": "Lifestyle sneakers",
      "Material": "Mesh and synthetic",
      "Sole": "Air Max cushioning",
      "Closure": "Lace-up"
    },
    features: [
      "Max Air cushioning",
      "Breathable mesh upper",
      "Durable rubber outsole",
      "Iconic design"
    ]
  },
  // Books
  {
    id: "11",
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
    features: [
      "Financial wisdom",
      "Easy to understand",
      "Real-world examples",
      "Bestseller"
    ]
  },
  {
    id: "12",
    name: "Atomic Habits",
    description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones by James Clear.",
    price: 13,
    image: "photo-1481627834876-b7833e8f5570",
    category: "Books",
    isOnSale: false,
    rating: 4.9,
    specifications: {
      "Author": "James Clear",
      "Pages": "320 pages",
      "Publisher": "Avery",
      "Language": "English"
    },
    features: [
      "Habit formation guide",
      "Practical strategies",
      "Scientific approach",
      "Life-changing"
    ]
  },
  // Sports & Fitness
  {
    id: "13",
    name: "Fitbit Charge 5",
    description: "Advanced fitness tracker with built-in GPS and health monitoring.",
    price: 149,
    originalPrice: 199,
    image: "photo-1551698618-1dfe5d97d256",
    category: "Fitness",
    isOnSale: true,
    rating: 4.5,
    specifications: {
      "Battery": "Up to 7 days",
      "GPS": "Built-in GPS",
      "Water Resistance": "50M",
      "Display": "Color AMOLED"
    },
    features: [
      "Built-in GPS",
      "Health monitoring",
      "Sleep tracking",
      "Stress management"
    ]
  },
  // Beauty & Personal Care
  {
    id: "14",
    name: "Dyson Hair Dryer",
    description: "Professional hair dryer with intelligent heat control and multiple attachments.",
    price: 399,
    image: "photo-1556228578-dd8a33dcbbda",
    category: "Beauty",
    isOnSale: false,
    rating: 4.7,
    specifications: {
      "Motor": "Digital motor V9",
      "Heat Settings": "4 heat settings",
      "Speed": "3 speed settings",
      "Attachments": "5 styling attachments"
    },
    features: [
      "Intelligent heat control",
      "Fast drying",
      "Multiple attachments",
      "Professional quality"
    ]
  },
  // Toys & Games
  {
    id: "15",
    name: "LEGO Creator Expert Set",
    description: "Advanced building set for adult LEGO enthusiasts with detailed architecture.",
    price: 199,
    originalPrice: 249,
    image: "photo-1558618666-fcd25c85cd64",
    category: "Toys",
    isOnSale: true,
    rating: 4.8,
    specifications: {
      "Pieces": "2000+ pieces",
      "Age": "16+",
      "Theme": "Creator Expert",
      "Size": "Large display model"
    },
    features: [
      "Expert level build",
      "Detailed architecture",
      "Display worthy",
      "Premium quality"
    ]
  },
  // Home Accessories
  {
    id: "16",
    name: "Philips Hue Smart Bulbs",
    description: "Smart LED bulbs with millions of colors and voice control compatibility.",
    price: 49,
    image: "photo-1507003211169-0a1dd7228f2d",
    category: "Home Accessories",
    isOnSale: false,
    rating: 4.6,
    specifications: {
      "Type": "Smart LED",
      "Colors": "16 million colors",
      "Connectivity": "Wi-Fi, Bluetooth",
      "Compatibility": "Alexa, Google, Apple"
    },
    features: [
      "Voice control",
      "16 million colors",
      "Energy efficient",
      "Smart scheduling"
    ]
  },
  {
    id: "17",
    name: "Robot Vacuum Cleaner",
    description: "Smart robot vacuum with mapping technology and app control.",
    price: 399,
    originalPrice: 499,
    image: "photo-1558618047-3c8c76ca7d13",
    category: "Home Accessories",
    isOnSale: true,
    rating: 4.7,
    specifications: {
      "Navigation": "Smart mapping",
      "Battery": "3 hours",
      "Suction": "2000Pa",
      "Control": "App & Voice"
    },
    features: [
      "Smart mapping navigation",
      "App and voice control",
      "Powerful 2000Pa suction",
      "Auto-charging dock"
    ]
  },
  // Automotive
  {
    id: "18",
    name: "Car Dash Camera",
    description: "4K dash cam with night vision and GPS tracking for vehicle security.",
    price: 129,
    image: "photo-1449824913935-59a10b8d2000",
    category: "Automotive",
    isOnSale: false,
    rating: 4.4,
    specifications: {
      "Resolution": "4K Ultra HD",
      "Storage": "128GB max",
      "GPS": "Built-in GPS",
      "Night Vision": "Enhanced night mode"
    },
    features: [
      "4K recording",
      "GPS tracking",
      "Night vision",
      "Loop recording"
    ]
  },
  // Garden & Outdoor
  {
    id: "19",
    name: "Smart Garden Irrigation System",
    description: "Automated watering system with weather monitoring and smartphone control.",
    price: 149,
    originalPrice: 199,
    image: "photo-1416879595882-3373a0480b5b",
    category: "Garden",
    isOnSale: true,
    rating: 4.5,
    specifications: {
      "Zones": "8-zone control",
      "Connectivity": "Wi-Fi enabled",
      "Weather": "Weather monitoring",
      "Control": "Smartphone app"
    },
    features: [
      "Smart scheduling",
      "Weather integration",
      "Water conservation",
      "Remote control"
    ]
  },
  // Pet Supplies
  {
    id: "20",
    name: "Automatic Pet Feeder",
    description: "Smart pet feeder with portion control and feeding schedule programming.",
    price: 89,
    image: "photo-1601758228041-f3b2795255f1",
    category: "Pet Supplies",
    isOnSale: false,
    rating: 4.3,
    specifications: {
      "Capacity": "6L food storage",
      "Portions": "1-10 portions",
      "Power": "Battery + AC adapter",
      "Recording": "Voice message"
    },
    features: [
      "Scheduled feeding",
      "Portion control",
      "Voice recording",
      "Easy cleaning"
    ]
  }
];

export const categories = [
  "All",
  "Smartphones",
  "Laptops", 
  "Headphones",
  "Kitchen Appliances",
  "Clothing",
  "Footwear",
  "Books",
  "Fitness",
  "Beauty",
  "Toys",
  "Home Accessories",
  "Automotive",
  "Garden",
  "Pet Supplies"
];
