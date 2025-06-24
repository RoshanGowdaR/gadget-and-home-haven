
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          India's Biggest Online Store
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Shop for Electronics, Fashion, Home & Kitchen, Beauty & Personal Care and more online at best prices. 
          Cash on Delivery available on eligible purchases.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link to="/electronics">Shop Electronics</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            <Link to="/fashion">Fashion Store</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
