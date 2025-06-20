
import { Product } from "@/types/product";

export const products: Product[] = [
  // Electronics
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    price: 299,
    originalPrice: 399,
    image: "photo-1518770660439-4636190af475",
    category: "Electronics",
    isOnSale: true,
    rating: 4.8,
    specifications: {
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.0",
      "Noise Cancellation": "Active",
      "Weight": "250g"
    },
    features: [
      "Active noise cancellation",
      "30-hour battery life",
      "Premium build quality",
      "Voice assistant compatible"
    ]
  },
  {
    id: "2",
    name: "4K Ultra HD Smart TV 55\"",
    description: "Experience stunning 4K resolution with smart TV capabilities and HDR support.",
    price: 699,
    originalPrice: 899,
    image: "photo-1531297484001-80022131f5a1",
    category: "Electronics",
    isOnSale: true,
    rating: 4.6,
    specifications: {
      "Screen Size": "55 inches",
      "Resolution": "4K Ultra HD",
      "Smart Platform": "Android TV",
      "HDR Support": "Yes"
    },
    features: [
      "4K Ultra HD resolution",
      "Smart TV with Android",
      "HDR10 support",
      "Multiple connectivity options"
    ]
  },
  {
    id: "3",
    name: "Professional Gaming Laptop",
    description: "High-performance gaming laptop with dedicated graphics and fast processor.",
    price: 1299,
    image: "photo-1488590528505-98d2b5aba04b",
    category: "Electronics",
    isOnSale: false,
    rating: 4.9,
    specifications: {
      "Processor": "Intel Core i7",
      "Graphics": "NVIDIA RTX 4060",
      "RAM": "16GB DDR4",
      "Storage": "1TB SSD"
    },
    features: [
      "Latest Intel Core i7 processor",
      "NVIDIA RTX graphics",
      "16GB RAM for multitasking",
      "Fast SSD storage"
    ]
  },
  {
    id: "4",
    name: "Wireless Security Camera",
    description: "Smart home security camera with night vision and mobile app control.",
    price: 149,
    image: "photo-1518770660439-4636190af475",
    category: "Electronics",
    isOnSale: false,
    rating: 4.4,
    specifications: {
      "Resolution": "1080p Full HD",
      "Night Vision": "Yes",
      "Storage": "Cloud & Local",
      "Power": "Battery/Wired"
    },
    features: [
      "1080p Full HD recording",
      "Night vision capability",
      "Mobile app control",
      "Motion detection alerts"
    ]
  },
  {
    id: "5",
    name: "Smart Speaker with Voice Assistant",
    description: "Premium smart speaker with high-quality audio and voice control.",
    price: 99,
    originalPrice: 129,
    image: "photo-1531297484001-80022131f5a1",
    category: "Electronics",
    isOnSale: true,
    rating: 4.5,
    specifications: {
      "Voice Assistant": "Built-in",
      "Audio": "360° sound",
      "Connectivity": "Wi-Fi, Bluetooth",
      "Controls": "Touch & Voice"
    },
    features: [
      "360-degree premium audio",
      "Voice assistant integration",
      "Smart home control",
      "Multi-room audio"
    ]
  },
  {
    id: "6",
    name: "Portable Power Bank 20,000mAh",
    description: "High-capacity power bank with fast charging and multiple ports.",
    price: 49,
    image: "photo-1488590528505-98d2b5aba04b",
    category: "Electronics",
    isOnSale: false,
    rating: 4.7,
    specifications: {
      "Capacity": "20,000mAh",
      "Ports": "2x USB-A, 1x USB-C",
      "Fast Charging": "Yes",
      "Weight": "450g"
    },
    features: [
      "20,000mAh capacity",
      "Fast charging support",
      "Multiple device charging",
      "LED power indicator"
    ]
  },
  // Home Accessories
  {
    id: "7",
    name: "Modern LED Floor Lamp",
    description: "Sleek LED floor lamp with adjustable brightness and color temperature.",
    price: 179,
    image: "photo-1721322800607-8c38375eef04",
    category: "Home Accessories",
    isOnSale: false,
    rating: 4.6,
    specifications: {
      "Light Source": "LED",
      "Height": "60 inches",
      "Dimming": "Yes",
      "Color Temperature": "Adjustable"
    },
    features: [
      "Adjustable brightness",
      "Color temperature control",
      "Energy efficient LED",
      "Modern minimalist design"
    ]
  },
  {
    id: "8",
    name: "Smart Air Purifier",
    description: "Advanced air purifier with HEPA filter and smart connectivity.",
    price: 229,
    originalPrice: 299,
    image: "photo-1531297484001-80022131f5a1",
    category: "Home Accessories",
    isOnSale: true,
    rating: 4.8,
    specifications: {
      "Filter Type": "HEPA H13",
      "Coverage": "500 sq ft",
      "Smart Features": "Wi-Fi enabled",
      "Noise Level": "Ultra quiet"
    },
    features: [
      "HEPA H13 filtration",
      "Smart app control",
      "Air quality monitoring",
      "Ultra-quiet operation"
    ]
  },
  {
    id: "9",
    name: "Premium Coffee Maker",
    description: "Programmable coffee maker with thermal carafe and precision brewing.",
    price: 159,
    image: "photo-1721322800607-8c38375eef04",
    category: "Home Accessories",
    isOnSale: false,
    rating: 4.5,
    specifications: {
      "Capacity": "12 cups",
      "Carafe": "Thermal stainless steel",
      "Programming": "24-hour",
      "Brew Strength": "Adjustable"
    },
    features: [
      "Programmable brewing",
      "Thermal carafe",
      "Adjustable brew strength",
      "Auto shut-off"
    ]
  },
  {
    id: "10",
    name: "Robot Vacuum Cleaner",
    description: "Smart robot vacuum with mapping technology and app control.",
    price: 399,
    originalPrice: 499,
    image: "photo-1488590528505-98d2b5aba04b",
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
  }
];
