
import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products.slice(0, 5));

  useEffect(() => {
    if (query.length > 0) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8);
      setFilteredProducts(filtered);
      setIsOpen(true);
    } else {
      setFilteredProducts(products.slice(0, 5));
      setIsOpen(false);
    }
  }, [query]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setIsOpen(false);
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-50 max-h-96 overflow-hidden">
          <Command>
            <CommandList>
              {filteredProducts.length === 0 ? (
                <CommandEmpty>No products found.</CommandEmpty>
              ) : (
                <CommandGroup heading="Products">
                  {filteredProducts.map((product) => (
                    <CommandItem key={product.id} asChild>
                      <Link
                        to={`/product/${product.id}`}
                        className="flex items-center space-x-3 p-2 hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                      >
                        <img
                          src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=50&h=50`}
                          alt={product.name}
                          className="w-10 h-10 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {product.category} • ${product.price}
                          </p>
                        </div>
                      </Link>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
