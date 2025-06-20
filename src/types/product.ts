
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isOnSale: boolean;
  rating: number;
  specifications: Record<string, string>;
  features: string[];
}
