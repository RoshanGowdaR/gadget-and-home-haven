
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Electronics from "./pages/Electronics";
import HomeAccessories from "./pages/HomeAccessories";
import AllProducts from "./pages/AllProducts";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Fashion from "./pages/Fashion";
import HomeKitchen from "./pages/HomeKitchen";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <CartProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/electronics" element={<Electronics />} />
                <Route path="/fashion" element={<Fashion />} />
                <Route path="/home-kitchen" element={<HomeKitchen />} />
                <Route path="/home-accessories" element={<HomeAccessories />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/beauty-toys-more" element={<AllProducts />} />
                <Route path="/sports-books-more" element={<AllProducts />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
