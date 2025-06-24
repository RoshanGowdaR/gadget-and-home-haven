
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FlipkartBanner = () => {
  const banners = [
    {
      id: 1,
      title: "Big Billion Days Sale",
      subtitle: "Unbelievable Deals Await",
      description: "Get up to 80% off on Electronics, Fashion & More",
      image: "photo-1607083206869-4c7672e72a8a",
      cta: "Shop Now",
      link: "/all-products"
    },
    {
      id: 2,
      title: "Smartphone Festival",
      subtitle: "Latest Models at Best Prices",
      description: "iPhone, Samsung, OnePlus & More with Exchange Offers",
      image: "photo-1511707171634-5f897ff02aa9",
      cta: "Explore Mobiles",
      link: "/electronics"
    },
    {
      id: 3,
      title: "Fashion Forward",
      subtitle: "Trending Styles for Everyone",
      description: "Top Brands at Unbeatable Prices - Min 50% Off",
      image: "photo-1441986300917-64674bd600d8",
      cta: "Shop Fashion",
      link: "/fashion"
    }
  ];

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {banners.map((banner) => (
          <CarouselItem key={banner.id}>
            <div className="relative h-80 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-30" />
              <img
                src={`https://images.unsplash.com/${banner.image}?auto=format&fit=crop&w=1200&h=320`}
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              />
              <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="text-white max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">{banner.title}</h1>
                  <h2 className="text-xl md:text-2xl mb-4 text-yellow-300">{banner.subtitle}</h2>
                  <p className="text-lg mb-6 text-gray-200">{banner.description}</p>
                  <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Link to={banner.link}>{banner.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};

export default FlipkartBanner;
