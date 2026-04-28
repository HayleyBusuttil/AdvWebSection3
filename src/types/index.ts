export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterState {
  category: string[];
  priceRange: [number, number];
  searchQuery: string;
  inStockOnly: boolean;
  sortBy: 'price-asc' | 'price-desc' | 'rating' | 'newest';
}
