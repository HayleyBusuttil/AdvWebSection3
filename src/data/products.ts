import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 349,
    category: 'Electronics',
    image: '🎧',
    description: 'High-quality sound with noise cancellation',
    rating: 4.8,
    inStock: true,
  },
  {
    id: '2',
    name: 'Minimalist Watch',
    price: 189,
    category: 'Accessories',
    image: '⌚',
    description: 'Elegant timepiece with leather strap',
    rating: 4.6,
    inStock: true,
  },
  {
    id: '3',
    name: 'Leather Messenger Bag',
    price: 299,
    category: 'Accessories',
    image: '👜',
    description: 'Handcrafted Italian leather bag',
    rating: 4.9,
    inStock: true,
  },
  {
    id: '4',
    name: 'Smart Home Hub',
    price: 129,
    category: 'Electronics',
    image: '🏠',
    description: 'Control your entire home ecosystem',
    rating: 4.5,
    inStock: true,
  },
  {
    id: '5',
    name: 'Designer Sunglasses',
    price: 249,
    category: 'Accessories',
    image: '😎',
    description: 'UV protection with premium frames',
    rating: 4.7,
    inStock: false,
  },
  {
    id: '6',
    name: 'Portable SSD',
    price: 159,
    category: 'Electronics',
    image: '💾',
    description: '1TB ultra-fast storage solution',
    rating: 4.8,
    inStock: true,
  },
  {
    id: '7',
    name: 'Silk Scarf Collection',
    price: 79,
    category: 'Accessories',
    image: '🎀',
    description: 'Premium Italian silk scarves',
    rating: 4.4,
    inStock: true,
  },
  {
    id: '8',
    name: 'Wireless Charging Dock',
    price: 89,
    category: 'Electronics',
    image: '🔋',
    description: 'Fast charging for multiple devices',
    rating: 4.6,
    inStock: true,
  },
];

export const CATEGORIES = Array.from(
  new Set(PRODUCTS.map((p) => p.category))
);

export const MAX_PRICE = Math.max(...PRODUCTS.map((p) => p.price));
export const MIN_PRICE = Math.min(...PRODUCTS.map((p) => p.price));
